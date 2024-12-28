import { produce } from "immer"
import { LuaFactory } from "wasmoon"
import React, { useEffect, useRef, useState } from "react"

import "./styles/plane.css"
import { Mod as ModAPI } from "../../api"
import { LoadIcon } from "../../common/svg"
import { HoverTip } from "../../components/tips"
import { Deploy as DeploySchema, PublishedFileDetail, ConfigurationOption } from "../../common/interface"

const factory = new LuaFactory("/assets/wasm/glue.wasm")

interface ModBoxContent {
  pick: PublishedFileDetail[]
  search: PublishedFileDetail[]
  state?: "searching" | "parsing" | undefined
}

function rewriteModoverrides(
  pick: PublishedFileDetail[],
  setDeploy: React.Dispatch<React.SetStateAction<DeploySchema>>
) {
  const pick_configuration = []
  for (const mod of pick) {
    if (mod.configuration !== undefined) {
      pick_configuration.push({
        id: mod.publishedfileid,
        configuration: mod.configuration
      })
    }
  }
  let modoverrides = "return {"
  for (const modconfig of pick_configuration) {
    modoverrides += `["workshop-${modconfig.id}"]={\n`
    modoverrides += "configuration_options={\n"
    const config = modconfig.configuration.configuration_options
    for (const key in config) {
      const value = config[key]
      let luaValue: any = null
      if (typeof value === "string") {
        luaValue = `"${value}"`
      } else if (typeof value === "boolean") {
        luaValue = value ? "true" : "false"
      } else if (typeof value === "number") {
        luaValue = value
      } else if (Array.isArray(value)) {
        luaValue = `{${value.join(", ")}}`
      } else {
        luaValue = "nil"
      }
      modoverrides += `  ${key} = ${luaValue},\n`
    }
    modoverrides += "},\n"
    modoverrides += "enabled=true"
    modoverrides += "},\n"
  }
  modoverrides += "}"
  setDeploy(
    produce((draft) => {
      for (const world of draft.cluster.world) {
        world.modoverrides = modoverrides
      }
    })
  )
}

interface ModConfigEditProps {
  content: ModBoxContent
  mod: PublishedFileDetail
  setEdit: React.Dispatch<React.SetStateAction<boolean>>
  setContent: React.Dispatch<React.SetStateAction<ModBoxContent>>
}
function ModConfigEdit(props: ModConfigEditProps) {
  const boxRef = useRef<HTMLDivElement>(null)
  const [options, setOptions] = useState<ConfigurationOption[]>([])
  const { content, mod, setEdit, setContent } = props
  const onUpdate = async (option: ConfigurationOption, offset: number) => {
    const _options = []
    for (const item of options) {
      let selected = item.selected === undefined ? 0 : item.selected
      if (item.name == option.name) {
        selected += offset
        if (selected < 0) {
          selected = option.options.length - 1
        } else if (selected >= option.options.length) {
          selected = 0
        }
        const pick: PublishedFileDetail[] = []
        for (const pick_mod of content.pick) {
          if (pick_mod.publishedfileid === mod.publishedfileid) {
            const configuration = pick_mod.configuration?.configuration_options || {}
            pick.push({
              ...pick_mod,
              configuration: {
                enabled: true,
                configuration_options: {
                  ...configuration,
                  [item.name]: option.options[selected].data
                }
              }
            })
          } else {
            pick.push(pick_mod)
          }
        }
        setContent(
          produce((draft) => {
            draft.pick = pick
          })
        )
      }
      _options.push({ ...item, selected: selected })
      setOptions(_options)
    }
  }
  const handleClickOutside = (event: any) => {
    if (boxRef.current && !boxRef.current.contains(event.target)) {
      setEdit(false)
    }
  }
  const configuration = mod.configuration === undefined ? {} : mod.configuration.configuration_options
  useEffect(() => {
    const configuration_options = []
    for (const item of mod.configuration_options || []) {
      if (!("default" in item)) {
        continue
      }
      let selected = 0
      if (item.name in configuration) {
        let index = -1
        for (const option of item.options) {
          index += 1
          if (option.data === configuration[item.name]) {
            selected = index
            break
          }
        }
      }
      const e = configuration_options.find((t) => t.name == item.name)
      if (item.label && e === undefined && item.options.length > 0) {
        configuration_options.push({ ...item, selected: selected })
      }
    }
    setOptions(configuration_options)
    document.addEventListener("mousedown", handleClickOutside)
    return () => {
      document.removeEventListener("mousedown", handleClickOutside)
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])
  return (
    <div className="mod-config-box" ref={boxRef}>
      <div className="mod-config-title">{mod.title}</div>
      <div className="mod-config-edit">
        {options.map((item, index) => {
          return (
            <div key={index} className="mod-config-edit-item">
              <div className="mod-config-label">{item.label}</div>
              <div className="mod-config-button" onClick={() => onUpdate(item, -1)}>
                <svg viewBox="0 0 1024 1024" width="20" height="20" fill="#3498db">
                  <path d="M734.165333 97.834667a42.666667 42.666667 0 0 1 3.541334 56.32l-3.541334 4.010666L380.416 512l353.749333 353.749333a42.666667 42.666667 0 0 1 3.541334 56.32l-3.541334 4.010667a42.666667 42.666667 0 0 1-56.32 3.584l-4.010666-3.541333-384-384a42.666667 42.666667 0 0 1-3.541334-56.32l3.541334-3.968 384-384a42.666667 42.666667 0 0 1 60.330666 0z"></path>
                </svg>
              </div>
              <div className="mod-config-value">
                {item.selected === undefined ? "" : String(item.options[item.selected].description)}
              </div>
              <div className="mod-config-button" onClick={() => onUpdate(item, 1)}>
                <svg viewBox="0 0 1024 1024" width="20" height="20" fill="#3498db">
                  <path d="M311.168 97.834667a42.666667 42.666667 0 0 0-3.541333 56.32l3.541333 4.010666L664.917333 512 311.168 865.706667a42.666667 42.666667 0 0 0-3.541333 56.32l3.541333 4.010666a42.666667 42.666667 0 0 0 56.32 3.584l4.010667-3.541333 384-384a42.666667 42.666667 0 0 0 3.541333-56.32l-3.541333-3.968-384-384a42.666667 42.666667 0 0 0-60.330667 0z"></path>
                </svg>
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}

interface ModProps {
  mode?: "add"
  content: ModBoxContent
  mod: PublishedFileDetail
  setContent: React.Dispatch<React.SetStateAction<ModBoxContent>>
}
function Mod(props: ModProps) {
  const { mode, content, mod, setContent } = props
  const [adding, setAdding] = useState<boolean>(false)
  const [edit, setEdit] = useState<boolean>(false)
  const onDelete = async () => {
    const pick = content.pick.filter((e) => e.publishedfileid !== mod.publishedfileid)
    setContent(
      produce((draft) => {
        draft.pick = pick
      })
    )
  }
  const onAdd = async () => {
    const search = content.search.filter((e) => e.publishedfileid !== mod.publishedfileid)
    const pick = content.pick.filter((e) => e.publishedfileid !== mod.publishedfileid)
    setAdding(true)
    const config = await ModAPI.readConfig([mod.publishedfileid])
    if (config.length > 0) {
      const mod_config = config[0]
      const lua = await factory.createEngine()
      await lua.doString(mod_config.code)
      pick.push({
        ...mod,
        code: mod.code,
        configuration_options: lua.global.get("configuration_options")
      })
      setContent(
        produce((draft) => {
          draft.pick = pick
          draft.search = search
        })
      )
    }
    setAdding(false)
  }
  return (
    <div className="mod-item">
      <img src={mod.preview_url} width="2.8rem" height="2.8rem" />
      <div className="mod-item-left">
        <div className="mod-item-title">{mod.title}</div>
        {mode === "add" ? (
          <div className="mod-item-button">
            <div onClick={onAdd}>
              {!adding ? (
                <HoverTip tip="点击添加">
                  <svg viewBox="0 0 1024 1024" width="18" height="18" fill="#3498db" transform="scale(1.2)">
                    <path d="M521.813333 85.333333c-235.52 0-426.666667 191.146667-426.666666 426.666667s191.146667 426.666667 426.666666 426.666667 426.666667-191.146667 426.666667-426.666667-190.72-426.666667-426.666667-426.666667z m0 785.066667c-197.546667 0-358.4-160.853333-358.4-358.4s160.853333-358.4 358.4-358.4 358.4 160.853333 358.4 358.4-160.426667 358.4-358.4 358.4z"></path>
                    <path
                      d="M675.413333 546.133333h-307.2c-18.773333 0-34.133333-15.36-34.133333-34.133333s15.36-34.133333 34.133333-34.133333h307.2c18.773333 0 34.133333 15.36 34.133334 34.133333s-14.933333 34.133333-34.133334 34.133333z"
                      fill="#4C4C4C"
                      p-id="13993"
                    ></path>
                    <path d="M487.68 665.6V358.4c0-18.773333 15.36-34.133333 34.133333-34.133333s34.133333 15.36 34.133334 34.133333v307.2c0 18.773333-15.36 34.133333-34.133334 34.133333s-34.133333-15.36-34.133333-34.133333z"></path>
                  </svg>{" "}
                </HoverTip>
              ) : (
                <HoverTip tip="正在添加模组">
                  <svg fill="#3498db" viewBox="0 0 1024 1024" width="18" height="18">
                    <path d={LoadIcon}>
                      <animateTransform
                        attributeType="xml"
                        attributeName="transform"
                        type="rotate"
                        from="0 512 512"
                        to="360 512 512"
                        dur="2s"
                        repeatCount="indefinite"
                      />
                    </path>
                  </svg>
                </HoverTip>
              )}
            </div>
          </div>
        ) : (
          <div className="mod-item-button">
            <div onClick={() => setEdit(true)}>
              <HoverTip tip="配置模组">
                <svg viewBox="0 0 1024 1024" width="18" height="18" fill="#3498db">
                  <path d="M872.554667 306.304c-22.613333 8.128-45.696 9.941333-69.162667 4.373333a119.722667 119.722667 0 0 1-85.504-158.144c1.749333-4.842667 0.853333-6.954667-3.605333-8.96-17.92-8.106667-35.541333-16.917333-53.674667-24.533333-11.925333-4.992-24.533333-8.384-36.501333-12.373333-23.146667 47.658667-59.456 74.88-112.064 74.88-52.821333 0-89.258667-27.306667-111.978667-74.538667a411.733333 411.733333 0 0 0-95.530667 39.573333c17.216 49.493333 10.922667 94.634667-26.538666 131.925334-37.376 37.205333-82.496 43.712-131.776 26.282666A413.290667 413.290667 0 0 0 106.666667 400.298667c46.933333 22.656 74.197333 58.666667 74.517333 110.997333 0.32 53.162667-26.986667 89.770667-74.538667 112.768a410.154667 410.154667 0 0 0 39.637334 95.530667c47.808-16.789333 91.669333-11.370667 128.64 23.253333 39.957333 37.44 47.274667 83.626667 29.653333 134.933333a404.949333 404.949333 0 0 0 95.530667 39.466667c23.04-47.36 59.349333-74.474667 111.978666-74.453333 52.885333 0.064 89.216 27.541333 111.893334 74.538666a411.584 411.584 0 0 0 95.488-39.616c-17.386667-49.493333-10.816-94.4 26.24-131.626666 37.290667-37.418667 82.432-43.776 132.053333-26.538667a407.637333 407.637333 0 0 0 39.509333-95.509333c-47.786667-23.210667-74.986667-59.946667-74.517333-113.066667 0.448-52.053333 27.562667-87.957333 74.56-110.656a420.394667 420.394667 0 0 0-38.016-92.970667c-2.048-3.712-4.309333-1.92-6.762667-1.066666z m85.952 82.794667a42.666667 42.666667 0 0 1-22.613334 49.642666c-34.602667 16.725333-50.176 39.146667-50.453333 72.618667-0.298667 34.282667 15.253333 57.194667 50.496 74.304a42.666667 42.666667 0 0 1 22.549333 49.536 450.304 450.304 0 0 1-43.669333 105.472 42.666667 42.666667 0 0 1-51.050667 19.178667c-36.650667-12.736-63.850667-7.68-87.808 16.362666-23.914667 24.021333-28.949333 51.093333-16.213333 87.381334a42.666667 42.666667 0 0 1-19.072 51.178666 454.229333 454.229333 0 0 1-105.344 43.690667 42.666667 42.666667 0 0 1-49.770667-22.592c-16.725333-34.688-39.509333-50.368-73.493333-50.389333-33.92-0.021333-56.597333 15.509333-73.578667 50.432a42.666667 42.666667 0 0 1-49.322666 22.570666 447.338667 447.338667 0 0 1-105.6-43.562666 42.666667 42.666667 0 0 1-19.328-50.986667c13.034667-37.973333 7.381333-65.728-18.474667-89.941333-23.594667-22.101333-50.090667-26.517333-85.333333-14.144a42.666667 42.666667 0 0 1-51.157334-19.050667 452.821333 452.821333 0 0 1-43.733333-105.450667 42.666667 42.666667 0 0 1 22.549333-49.706666c35.072-16.938667 50.666667-39.808 50.453334-74.069334-0.213333-33.642667-15.786667-56.149333-50.389334-72.853333A42.666667 42.666667 0 0 1 65.493333 389.12a455.808 455.808 0 0 1 43.541334-105.344 42.666667 42.666667 0 0 1 51.392-19.242667c36.096 12.778667 63.317333 7.722667 87.466666-16.298666 24-23.893333 29.034667-51.072 16.32-87.68a42.666667 42.666667 0 0 1 19.178667-51.050667 454.4 454.4 0 0 1 105.386667-43.669333 42.666667 42.666667 0 0 1 49.706666 22.656c16.725333 34.730667 39.509333 50.389333 73.536 50.368 33.898667 0 56.576-15.616 73.664-50.837334a42.666667 42.666667 0 0 1 51.882667-21.845333c2.517333 0.832 4.992 1.621333 9.28 2.965333l7.530667 2.346667c8.96 2.88 15.786667 5.290667 22.698666 8.192 10.154667 4.245333 18.090667 7.872 35.029334 15.829333 10.069333 4.736 14.4 6.741333 19.733333 9.152 25.024 11.306667 35.349333 36.821333 26.154667 62.336-16 44.352 9.344 91.221333 55.253333 102.144 14.805333 3.52 29.418667 2.538667 44.864-3.029333a33.28 33.28 0 0 1 4.48-1.621333c5.269333-1.621333 10.88-2.453333 17.322667-1.941334 16.853333 1.344 29.525333 11.093333 36.736 24.170667a462.890667 462.890667 0 0 1 41.813333 102.357333zM522.666667 320a202.666667 202.666667 0 1 0 166.4 86.954667 21.333333 21.333333 0 0 0-35.008 24.384 160 160 0 1 1-69.184-56.128 21.333333 21.333333 0 0 0 16.597333-39.317334A202.090667 202.090667 0 0 0 522.666667 320z"></path>
                </svg>
              </HoverTip>
            </div>
            <div onClick={onDelete}>
              <HoverTip tip="删除">
                <svg viewBox="0 0 1024 1024" width="18" height="18" fill="#3498db" transform="scale(1.35)">
                  <path d="M512 146.286a365.714 365.714 0 1 1 0 731.428 365.714 365.714 0 0 1 0-731.428z m0 62.025a303.69 303.69 0 1 0 0.073 607.451A303.69 303.69 0 0 0 512 208.311zM647.022 376.32a6.555 6.555 0 0 1 6.583 6.583 6.583 6.583 0 0 1-1.463 4.169L545.865 513.609l106.057 126.537a6.802 6.802 0 0 1 1.536 4.17 6.555 6.555 0 0 1-6.583 6.582l-53.833-0.292L512 553.984l-81.042 96.695-53.98 0.292a6.583 6.583 0 0 1-4.973-10.825l106.203-126.464-106.203-126.537a6.802 6.802 0 0 1-1.536-4.242 6.477 6.477 0 0 1 6.51-6.51l53.979 0.293L512 473.234l81.189-96.768z"></path>
                </svg>
              </HoverTip>
            </div>
          </div>
        )}
      </div>
      {edit && (
        <ModConfigEdit
          key={mod.publishedfileid}
          content={content}
          mod={mod}
          setContent={setContent}
          setEdit={setEdit}
        />
      )}
    </div>
  )
}

interface SearchModProps {
  content: ModBoxContent
  setContent: React.Dispatch<React.SetStateAction<ModBoxContent>>
}
function SearchMod(props: SearchModProps) {
  const { content, setContent } = props
  const [key, setKey] = useState<string>("")
  const mods: string[] = []
  content.pick.forEach((e) => mods.push(e.publishedfileid))
  async function handleSearch() {
    if (key === "") {
      setContent(
        produce((draft) => {
          draft.search = []
        })
      )
    } else {
      setContent(
        produce((draft) => {
          draft.state = "searching"
        })
      )
      const search = await ModAPI.search(key)
      setContent(
        produce((draft) => {
          draft.state = undefined
          draft.search = search.filter((item) => {
            return !mods.includes(item.publishedfileid) && JSON.stringify(item.tags).indexOf("client_only_mod") == -1
          })
        })
      )
    }
  }
  return (
    <>
      <div className="search-mod">
        <input
          placeholder="搜索模组"
          value={key}
          onChange={(e) => setKey(e.target.value)}
          onKeyDown={(e) => e.key === "Enter" && handleSearch()}
        ></input>
        <div onClick={handleSearch} style={{ marginRight: "0.5rem", display: "flex", alignItems: "center" }}>
          <svg viewBox="0 0 1024 1024" width="24" height="24" fill="#3498db">
            <path d="M480 128a352 352 0 0 1 270.528 577.28l138.24 138.24c10.752 10.496 9.28 29.312-3.2 42.112-12.8 12.48-31.616 13.888-42.048 3.136l-138.24-138.24A352 352 0 1 1 480 128z m0 63.36c-182.72 0-288.128 147.2-288.128 288.64s105.088 289.28 288 289.28c182.848 0 288-147.84 288-289.28 0-141.44-105.152-288.64-287.872-288.64z"></path>
          </svg>
        </div>
      </div>
      {content.state === "searching" && (
        <div className="mod-box-loading">
          <HoverTip tip="搜索中">
            <svg fill="#3498db" viewBox="0 0 1024 1024" width="32" height="32">
              <path d={LoadIcon}>
                <animateTransform
                  attributeType="xml"
                  attributeName="transform"
                  type="rotate"
                  from="0 512 512"
                  to="360 512 512"
                  dur="2s"
                  repeatCount="indefinite"
                />
              </path>
            </svg>
          </HoverTip>
        </div>
      )}
      {content.search.length > 0 && content.state !== "searching" && (
        <div className="mod-box-search">
          {content.search?.map(function (item, index) {
            return <Mod key={index} mode="add" mod={item} content={content} setContent={setContent}></Mod>
          })}
        </div>
      )}
    </>
  )
}

interface ModBoxProps {
  deploy: DeploySchema
  setDeploy: React.Dispatch<React.SetStateAction<DeploySchema>>
}
export function ModBox(props: ModBoxProps) {
  const { deploy, setDeploy } = props
  const [content, setContent] = useState<ModBoxContent>({
    pick: [],
    search: []
  })
  async function loadData() {
    const mods: string[] = []
    if (deploy.cluster.world) {
      const regex = /workshop-([0-9]+)/g
      let match
      while ((match = regex.exec(deploy.cluster.world[0].modoverrides)) !== null) {
        mods.push(match[1])
      }
    }
    if (mods.length > 0) {
      setContent(
        produce((draft) => {
          draft.state = "parsing"
        })
      )
      const lua = await factory.createEngine()
      const modoverrides = deploy.cluster.world[0].modoverrides
      const modconfig = await lua.doString(modoverrides)
      const pick = await ModAPI.read(mods)
      const pick_config = await ModAPI.readConfig(mods)
      try {
        for (const item of pick) {
          const config = pick_config.find((e) => e.id == item.publishedfileid)
          if (config) {
            item.code = config.code
            await lua.doString(config.code)
            item.configuration_options = lua.global.get("configuration_options") || []
            item.configuration = modconfig[`workshop-${item.publishedfileid}`]
          }
        }
      } finally {
        lua.global.close()
      }
      setContent(
        produce((draft) => {
          draft.state = undefined
          draft.pick = pick
        })
      )
    }
  }
  useEffect(() => {
    loadData()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])
  useEffect(() => {
    rewriteModoverrides(content.pick, setDeploy)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [content.pick])
  return (
    <div className="mod-box">
      <SearchMod content={content} setContent={setContent}></SearchMod>
      <div className="mod-box-separation-line"></div>
      <div
        className="mod-box-added"
        style={{
          height: content.search.length <= 0 && content.state !== "searching" ? "78%" : "45%"
        }}
      >
        {content.state === "parsing" ? (
          <div className="mod-box-loading">
            <HoverTip tip="正在解析模组列表">
              <svg fill="#3498db" viewBox="0 0 1024 1024" width="32" height="32">
                <path d={LoadIcon}>
                  <animateTransform
                    attributeType="xml"
                    attributeName="transform"
                    type="rotate"
                    from="0 512 512"
                    to="360 512 512"
                    dur="2s"
                    repeatCount="indefinite"
                  />
                </path>
              </svg>
            </HoverTip>
          </div>
        ) : (
          content.pick?.map(function (item, index) {
            return <Mod key={index} mod={item} content={content} setContent={setContent}></Mod>
          })
        )}
      </div>
    </div>
  )
}
