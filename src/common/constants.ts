import { DeployCreate } from "./interface"

export const HOST = import.meta.env.VITE_API_HOST || './api'

export const WorldOverrides = {
  forest: [
    {
      name: "beefalo",
      text: "皮弗娄牛",
      group: "生物以及刷新点",
      options: [
        {
          name: "never",
          description: "无"
        },
        {
          name: "rare",
          description: "很少"
        },
        {
          name: "uncommon",
          description: "较少"
        },
        {
          name: "default",
          description: "默认"
        },
        {
          name: "often",
          description: "较多"
        },
        {
          name: "mostly",
          description: "很多"
        },
        {
          name: "always",
          description: "大量"
        },
        {
          name: "insane",
          description: "疯狂"
        }
      ],
      selected: 3,
      order: 4,
      image: "beefalo.png"
    },
    {
      name: "moon_fruitdragon",
      text: "沙拉蝾螈",
      group: "生物以及刷新点",
      options: [
        {
          name: "never",
          description: "无"
        },
        {
          name: "rare",
          description: "很少"
        },
        {
          name: "uncommon",
          description: "较少"
        },
        {
          name: "default",
          description: "默认"
        },
        {
          name: "often",
          description: "较多"
        },
        {
          name: "mostly",
          description: "很多"
        },
        {
          name: "always",
          description: "大量"
        },
        {
          name: "insane",
          description: "疯狂"
        }
      ],
      selected: 3,
      order: 4,
      image: "moon_fruitdragon.png"
    },
    {
      name: "rabbits",
      text: "兔洞",
      group: "生物以及刷新点",
      options: [
        {
          name: "never",
          description: "无"
        },
        {
          name: "rare",
          description: "很少"
        },
        {
          name: "uncommon",
          description: "较少"
        },
        {
          name: "default",
          description: "默认"
        },
        {
          name: "often",
          description: "较多"
        },
        {
          name: "mostly",
          description: "很多"
        },
        {
          name: "always",
          description: "大量"
        },
        {
          name: "insane",
          description: "疯狂"
        }
      ],
      selected: 3,
      order: 4,
      image: "rabbits.png"
    },
    {
      name: "buzzard",
      text: "秃鹫",
      group: "生物以及刷新点",
      options: [
        {
          name: "never",
          description: "无"
        },
        {
          name: "rare",
          description: "很少"
        },
        {
          name: "uncommon",
          description: "较少"
        },
        {
          name: "default",
          description: "默认"
        },
        {
          name: "often",
          description: "较多"
        },
        {
          name: "mostly",
          description: "很多"
        },
        {
          name: "always",
          description: "大量"
        },
        {
          name: "insane",
          description: "疯狂"
        }
      ],
      selected: 3,
      order: 4,
      image: "buzzard.png"
    },
    {
      name: "ocean_shoal",
      text: "鱼群",
      group: "生物以及刷新点",
      options: [
        {
          name: "never",
          description: "无"
        },
        {
          name: "rare",
          description: "很少"
        },
        {
          name: "uncommon",
          description: "较少"
        },
        {
          name: "default",
          description: "默认"
        },
        {
          name: "often",
          description: "较多"
        },
        {
          name: "mostly",
          description: "很多"
        },
        {
          name: "always",
          description: "大量"
        },
        {
          name: "insane",
          description: "疯狂"
        }
      ],
      selected: 3,
      order: 4,
      image: "ocean_shoal.png"
    },
    {
      name: "ocean_wobsterden",
      text: "龙虾窝",
      group: "生物以及刷新点",
      options: [
        {
          name: "never",
          description: "无"
        },
        {
          name: "rare",
          description: "很少"
        },
        {
          name: "uncommon",
          description: "较少"
        },
        {
          name: "default",
          description: "默认"
        },
        {
          name: "often",
          description: "较多"
        },
        {
          name: "mostly",
          description: "很多"
        },
        {
          name: "always",
          description: "大量"
        },
        {
          name: "insane",
          description: "疯狂"
        }
      ],
      selected: 3,
      order: 4,
      image: "ocean_wobsterden.png"
    },
    {
      name: "moon_carrot",
      text: "胡萝卜鼠",
      group: "生物以及刷新点",
      options: [
        {
          name: "never",
          description: "无"
        },
        {
          name: "rare",
          description: "很少"
        },
        {
          name: "uncommon",
          description: "较少"
        },
        {
          name: "default",
          description: "默认"
        },
        {
          name: "often",
          description: "较多"
        },
        {
          name: "mostly",
          description: "很多"
        },
        {
          name: "always",
          description: "大量"
        },
        {
          name: "insane",
          description: "疯狂"
        }
      ],
      selected: 3,
      order: 4,
      image: "moon_carrot.png"
    },
    {
      name: "moles",
      text: "鼹鼠丘",
      group: "生物以及刷新点",
      options: [
        {
          name: "never",
          description: "无"
        },
        {
          name: "rare",
          description: "很少"
        },
        {
          name: "uncommon",
          description: "较少"
        },
        {
          name: "default",
          description: "默认"
        },
        {
          name: "often",
          description: "较多"
        },
        {
          name: "mostly",
          description: "很多"
        },
        {
          name: "always",
          description: "大量"
        },
        {
          name: "insane",
          description: "疯狂"
        }
      ],
      selected: 3,
      order: 4,
      image: "moles.png"
    },
    {
      name: "bees",
      text: "蜜蜂蜂窝",
      group: "生物以及刷新点",
      options: [
        {
          name: "never",
          description: "无"
        },
        {
          name: "rare",
          description: "很少"
        },
        {
          name: "uncommon",
          description: "较少"
        },
        {
          name: "default",
          description: "默认"
        },
        {
          name: "often",
          description: "较多"
        },
        {
          name: "mostly",
          description: "很多"
        },
        {
          name: "always",
          description: "大量"
        },
        {
          name: "insane",
          description: "疯狂"
        }
      ],
      selected: 3,
      order: 4,
      image: "bees.png"
    },
    {
      name: "pigs",
      text: "猪屋",
      group: "生物以及刷新点",
      options: [
        {
          name: "never",
          description: "无"
        },
        {
          name: "rare",
          description: "很少"
        },
        {
          name: "uncommon",
          description: "较少"
        },
        {
          name: "default",
          description: "默认"
        },
        {
          name: "often",
          description: "较多"
        },
        {
          name: "mostly",
          description: "很多"
        },
        {
          name: "always",
          description: "大量"
        },
        {
          name: "insane",
          description: "疯狂"
        }
      ],
      selected: 3,
      order: 4,
      image: "pigs.png"
    },
    {
      name: "lightninggoat",
      text: "伏特羊",
      group: "生物以及刷新点",
      options: [
        {
          name: "never",
          description: "无"
        },
        {
          name: "rare",
          description: "很少"
        },
        {
          name: "uncommon",
          description: "较少"
        },
        {
          name: "default",
          description: "默认"
        },
        {
          name: "often",
          description: "较多"
        },
        {
          name: "mostly",
          description: "很多"
        },
        {
          name: "always",
          description: "大量"
        },
        {
          name: "insane",
          description: "疯狂"
        }
      ],
      selected: 3,
      order: 4,
      image: "lightninggoat.png"
    },
    {
      name: "catcoon",
      text: "空心树桩",
      group: "生物以及刷新点",
      options: [
        {
          name: "never",
          description: "无"
        },
        {
          name: "rare",
          description: "很少"
        },
        {
          name: "uncommon",
          description: "较少"
        },
        {
          name: "default",
          description: "默认"
        },
        {
          name: "often",
          description: "较多"
        },
        {
          name: "mostly",
          description: "很多"
        },
        {
          name: "always",
          description: "大量"
        },
        {
          name: "insane",
          description: "疯狂"
        }
      ],
      selected: 3,
      order: 4,
      image: "catcoon.png"
    },
    {
      name: "ocean_waterplant",
      text: "海草",
      group: "敌对生物以及刷新点",
      options: [
        {
          name: "ocean_never",
          description: "无"
        },
        {
          name: "ocean_rare",
          description: "很少"
        },
        {
          name: "ocean_uncommon",
          description: "较少"
        },
        {
          name: "ocean_default",
          description: "默认"
        },
        {
          name: "ocean_often",
          description: "较多"
        },
        {
          name: "ocean_mostly",
          description: "很多"
        },
        {
          name: "ocean_always",
          description: "大量"
        },
        {
          name: "ocean_insane",
          description: "疯狂"
        }
      ],
      selected: 3,
      order: 5,
      image: "ocean_waterplant.png"
    },
    {
      name: "moon_spiders",
      text: "破碎蜘蛛洞",
      group: "敌对生物以及刷新点",
      options: [
        {
          name: "never",
          description: "无"
        },
        {
          name: "rare",
          description: "很少"
        },
        {
          name: "uncommon",
          description: "较少"
        },
        {
          name: "default",
          description: "默认"
        },
        {
          name: "often",
          description: "较多"
        },
        {
          name: "mostly",
          description: "很多"
        },
        {
          name: "always",
          description: "大量"
        },
        {
          name: "insane",
          description: "疯狂"
        }
      ],
      selected: 3,
      order: 5,
      image: "moon_spiders.png"
    },
    {
      name: "houndmound",
      text: "猎犬丘",
      group: "敌对生物以及刷新点",
      options: [
        {
          name: "never",
          description: "无"
        },
        {
          name: "rare",
          description: "很少"
        },
        {
          name: "uncommon",
          description: "较少"
        },
        {
          name: "default",
          description: "默认"
        },
        {
          name: "often",
          description: "较多"
        },
        {
          name: "mostly",
          description: "很多"
        },
        {
          name: "always",
          description: "大量"
        },
        {
          name: "insane",
          description: "疯狂"
        }
      ],
      selected: 3,
      order: 5,
      image: "houndmound.png"
    },
    {
      name: "tentacles",
      text: "触手",
      group: "敌对生物以及刷新点",
      options: [
        {
          name: "never",
          description: "无"
        },
        {
          name: "rare",
          description: "很少"
        },
        {
          name: "uncommon",
          description: "较少"
        },
        {
          name: "default",
          description: "默认"
        },
        {
          name: "often",
          description: "较多"
        },
        {
          name: "mostly",
          description: "很多"
        },
        {
          name: "always",
          description: "大量"
        },
        {
          name: "insane",
          description: "疯狂"
        }
      ],
      selected: 3,
      order: 5,
      image: "tentacles.png"
    },
    {
      name: "spiders",
      text: "蜘蛛巢",
      group: "敌对生物以及刷新点",
      options: [
        {
          name: "never",
          description: "无"
        },
        {
          name: "rare",
          description: "很少"
        },
        {
          name: "uncommon",
          description: "较少"
        },
        {
          name: "default",
          description: "默认"
        },
        {
          name: "often",
          description: "较多"
        },
        {
          name: "mostly",
          description: "很多"
        },
        {
          name: "always",
          description: "大量"
        },
        {
          name: "insane",
          description: "疯狂"
        }
      ],
      selected: 3,
      order: 5,
      image: "spiders.png"
    },
    {
      name: "merm",
      text: "漏雨的小屋",
      group: "敌对生物以及刷新点",
      options: [
        {
          name: "never",
          description: "无"
        },
        {
          name: "rare",
          description: "很少"
        },
        {
          name: "uncommon",
          description: "较少"
        },
        {
          name: "default",
          description: "默认"
        },
        {
          name: "often",
          description: "较多"
        },
        {
          name: "mostly",
          description: "很多"
        },
        {
          name: "always",
          description: "大量"
        },
        {
          name: "insane",
          description: "疯狂"
        }
      ],
      selected: 3,
      order: 5,
      image: "merm.png"
    },
    {
      name: "tallbirds",
      text: "高脚鸟",
      group: "敌对生物以及刷新点",
      options: [
        {
          name: "never",
          description: "无"
        },
        {
          name: "rare",
          description: "很少"
        },
        {
          name: "uncommon",
          description: "较少"
        },
        {
          name: "default",
          description: "默认"
        },
        {
          name: "often",
          description: "较多"
        },
        {
          name: "mostly",
          description: "很多"
        },
        {
          name: "always",
          description: "大量"
        },
        {
          name: "insane",
          description: "疯狂"
        }
      ],
      selected: 3,
      order: 5,
      image: "tallbirds.png"
    },
    {
      name: "angrybees",
      text: "杀人蜂蜂窝",
      group: "敌对生物以及刷新点",
      options: [
        {
          name: "never",
          description: "无"
        },
        {
          name: "rare",
          description: "很少"
        },
        {
          name: "uncommon",
          description: "较少"
        },
        {
          name: "default",
          description: "默认"
        },
        {
          name: "often",
          description: "较多"
        },
        {
          name: "mostly",
          description: "很多"
        },
        {
          name: "always",
          description: "大量"
        },
        {
          name: "insane",
          description: "疯狂"
        }
      ],
      selected: 3,
      order: 5,
      image: "angrybees.png"
    },
    {
      name: "walrus",
      text: "海象营地",
      group: "敌对生物以及刷新点",
      options: [
        {
          name: "never",
          description: "无"
        },
        {
          name: "rare",
          description: "很少"
        },
        {
          name: "uncommon",
          description: "较少"
        },
        {
          name: "default",
          description: "默认"
        },
        {
          name: "often",
          description: "较多"
        },
        {
          name: "mostly",
          description: "很多"
        },
        {
          name: "always",
          description: "大量"
        },
        {
          name: "insane",
          description: "疯狂"
        }
      ],
      selected: 3,
      order: 5,
      image: "walrus.png"
    },
    {
      name: "chess",
      text: "发条装置",
      group: "敌对生物以及刷新点",
      options: [
        {
          name: "never",
          description: "无"
        },
        {
          name: "rare",
          description: "很少"
        },
        {
          name: "uncommon",
          description: "较少"
        },
        {
          name: "default",
          description: "默认"
        },
        {
          name: "often",
          description: "较多"
        },
        {
          name: "mostly",
          description: "很多"
        },
        {
          name: "always",
          description: "大量"
        },
        {
          name: "insane",
          description: "疯狂"
        }
      ],
      selected: 3,
      order: 5,
      image: "chess.png"
    },
    {
      name: "season_start",
      text: "起始季节",
      group: "全局",
      options: [
        {
          name: "default",
          description: "秋"
        },
        {
          name: "winter",
          description: "冬"
        },
        {
          name: "spring",
          description: "春"
        },
        {
          name: "summer",
          description: "夏"
        },
        {
          name: "autumn|spring",
          description: "春或秋"
        },
        {
          name: "winter|summer",
          description: "冬季或夏季"
        },
        {
          name: "autumn|winter|spring|summer",
          description: "随机"
        }
      ],
      selected: 0,
      order: 1,
      image: "season_start.png"
    },
    {
      name: "branching",
      text: "分支",
      group: "世界",
      options: [
        {
          name: "never",
          description: "从不"
        },
        {
          name: "least",
          description: "最少"
        },
        {
          name: "default",
          description: "默认"
        },
        {
          name: "most",
          description: "最多"
        },
        {
          name: "random",
          description: "随机"
        }
      ],
      selected: 2,
      order: 2,
      image: "branching.png"
    },
    {
      name: "world_size",
      text: "世界大小",
      group: "世界",
      options: [
        {
          name: "small",
          description: "小"
        },
        {
          name: "medium",
          description: "中"
        },
        {
          name: "default",
          description: "大"
        },
        {
          name: "huge",
          description: "巨大"
        }
      ],
      selected: 2,
      order: 2,
      image: "world_size.png"
    },
    {
      name: "loop",
      text: "环形",
      group: "世界",
      options: [
        {
          name: "never",
          description: "从不"
        },
        {
          name: "default",
          description: "默认"
        },
        {
          name: "always",
          description: "总是"
        }
      ],
      selected: 1,
      order: 2,
      image: "loop.png"
    },
    {
      name: "task_set",
      text: "生物群落",
      group: "世界",
      options: [
        {
          name: "classic",
          description: "经典"
        },
        {
          name: "default",
          description: "联机版"
        }
      ],
      selected: 1,
      order: 2,
      image: "task_set.png"
    },
    {
      name: "touchstone",
      text: "试金石",
      group: "世界",
      options: [
        {
          name: "never",
          description: "无"
        },
        {
          name: "rare",
          description: "很少"
        },
        {
          name: "uncommon",
          description: "较少"
        },
        {
          name: "default",
          description: "默认"
        },
        {
          name: "often",
          description: "较多"
        },
        {
          name: "mostly",
          description: "很多"
        },
        {
          name: "always",
          description: "大量"
        },
        {
          name: "insane",
          description: "疯狂"
        }
      ],
      selected: 3,
      order: 2,
      image: "touchstone.png"
    },
    {
      name: "roads",
      text: "道路",
      group: "世界",
      options: [
        {
          name: "never",
          description: "无"
        },
        {
          name: "default",
          description: "默认"
        }
      ],
      selected: 1,
      order: 2,
      image: "roads.png"
    },
    {
      name: "start_location",
      text: "出生点",
      group: "世界",
      options: [
        {
          name: "plus",
          description: "额外资源"
        },
        {
          name: "darkness",
          description: "黑暗"
        },
        {
          name: "default",
          description: "默认"
        }
      ],
      selected: 2,
      order: 2,
      image: "start_location.png"
    },
    {
      name: "stageplays",
      text: "舞台剧",
      group: "世界",
      options: [
        {
          name: "never",
          description: "无"
        },
        {
          name: "default",
          description: "默认"
        }
      ],
      selected: 1,
      order: 2,
      image: "stageplays.png"
    },
    {
      name: "terrariumchest",
      text: "盒中泰拉",
      group: "世界",
      options: [
        {
          name: "never",
          description: "无"
        },
        {
          name: "default",
          description: "默认"
        }
      ],
      selected: 1,
      order: 2,
      image: "terrariumchest.png"
    },
    {
      name: "moon_fissure",
      text: "天体裂隙",
      group: "世界",
      options: [
        {
          name: "never",
          description: "无"
        },
        {
          name: "rare",
          description: "很少"
        },
        {
          name: "uncommon",
          description: "较少"
        },
        {
          name: "default",
          description: "默认"
        },
        {
          name: "often",
          description: "较多"
        },
        {
          name: "mostly",
          description: "很多"
        },
        {
          name: "always",
          description: "大量"
        },
        {
          name: "insane",
          description: "疯狂"
        }
      ],
      selected: 3,
      order: 2,
      image: "moon_fissure.png"
    },
    {
      name: "prefabswaps_start",
      text: "开始资源多样化",
      group: "世界",
      options: [
        {
          name: "classic",
          description: "经典"
        },
        {
          name: "default",
          description: "默认"
        },
        {
          name: "highly random",
          description: "非常随机"
        }
      ],
      selected: 1,
      order: 2,
      image: "prefabswaps_start.png"
    },
    {
      name: "boons",
      text: "失败的冒险家",
      group: "世界",
      options: [
        {
          name: "never",
          description: "无"
        },
        {
          name: "rare",
          description: "很少"
        },
        {
          name: "uncommon",
          description: "较少"
        },
        {
          name: "default",
          description: "默认"
        },
        {
          name: "often",
          description: "较多"
        },
        {
          name: "mostly",
          description: "很多"
        },
        {
          name: "always",
          description: "大量"
        },
        {
          name: "insane",
          description: "疯狂"
        }
      ],
      selected: 3,
      order: 2,
      image: "boons.png"
    },
    {
      name: "moon_hotspring",
      text: "温泉",
      group: "资源",
      options: [
        {
          name: "never",
          description: "无"
        },
        {
          name: "rare",
          description: "很少"
        },
        {
          name: "uncommon",
          description: "较少"
        },
        {
          name: "default",
          description: "默认"
        },
        {
          name: "often",
          description: "较多"
        },
        {
          name: "mostly",
          description: "很多"
        },
        {
          name: "always",
          description: "大量"
        },
        {
          name: "insane",
          description: "疯狂"
        }
      ],
      selected: 3,
      order: 3,
      image: "moon_hotspring.png"
    },
    {
      name: "palmconetree",
      text: "棕榈松果树",
      group: "资源",
      options: [
        {
          name: "never",
          description: "无"
        },
        {
          name: "rare",
          description: "很少"
        },
        {
          name: "uncommon",
          description: "较少"
        },
        {
          name: "default",
          description: "默认"
        },
        {
          name: "often",
          description: "较多"
        },
        {
          name: "mostly",
          description: "很多"
        },
        {
          name: "always",
          description: "大量"
        },
        {
          name: "insane",
          description: "疯狂"
        }
      ],
      selected: 3,
      order: 3,
      image: "palmconetree.png"
    },
    {
      name: "tumbleweed",
      text: "风滚草",
      group: "资源",
      options: [
        {
          name: "never",
          description: "无"
        },
        {
          name: "rare",
          description: "很少"
        },
        {
          name: "uncommon",
          description: "较少"
        },
        {
          name: "default",
          description: "默认"
        },
        {
          name: "often",
          description: "较多"
        },
        {
          name: "mostly",
          description: "很多"
        },
        {
          name: "always",
          description: "大量"
        },
        {
          name: "insane",
          description: "疯狂"
        }
      ],
      selected: 3,
      order: 3,
      image: "tumbleweed.png"
    },
    {
      name: "moon_berrybush",
      text: "石果灌木丛",
      group: "资源",
      options: [
        {
          name: "never",
          description: "无"
        },
        {
          name: "rare",
          description: "很少"
        },
        {
          name: "uncommon",
          description: "较少"
        },
        {
          name: "default",
          description: "默认"
        },
        {
          name: "often",
          description: "较多"
        },
        {
          name: "mostly",
          description: "很多"
        },
        {
          name: "always",
          description: "大量"
        },
        {
          name: "insane",
          description: "疯狂"
        }
      ],
      selected: 3,
      order: 3,
      image: "moon_berrybush.png"
    },
    {
      name: "ponds",
      text: "池塘",
      group: "资源",
      options: [
        {
          name: "never",
          description: "无"
        },
        {
          name: "rare",
          description: "很少"
        },
        {
          name: "uncommon",
          description: "较少"
        },
        {
          name: "default",
          description: "默认"
        },
        {
          name: "often",
          description: "较多"
        },
        {
          name: "mostly",
          description: "很多"
        },
        {
          name: "always",
          description: "大量"
        },
        {
          name: "insane",
          description: "疯狂"
        }
      ],
      selected: 3,
      order: 3,
      image: "ponds.png"
    },
    {
      name: "carrot",
      text: "胡萝卜",
      group: "资源",
      options: [
        {
          name: "never",
          description: "无"
        },
        {
          name: "rare",
          description: "很少"
        },
        {
          name: "uncommon",
          description: "较少"
        },
        {
          name: "default",
          description: "默认"
        },
        {
          name: "often",
          description: "较多"
        },
        {
          name: "mostly",
          description: "很多"
        },
        {
          name: "always",
          description: "大量"
        },
        {
          name: "insane",
          description: "疯狂"
        }
      ],
      selected: 3,
      order: 3,
      image: "carrot.png"
    },
    {
      name: "ocean_bullkelp",
      text: "公牛海带",
      group: "资源",
      options: [
        {
          name: "never",
          description: "无"
        },
        {
          name: "rare",
          description: "很少"
        },
        {
          name: "uncommon",
          description: "较少"
        },
        {
          name: "default",
          description: "默认"
        },
        {
          name: "often",
          description: "较多"
        },
        {
          name: "mostly",
          description: "很多"
        },
        {
          name: "always",
          description: "大量"
        },
        {
          name: "insane",
          description: "疯狂"
        }
      ],
      selected: 3,
      order: 3,
      image: "ocean_bullkelp.png"
    },
    {
      name: "meteorspawner",
      text: "流星区域",
      group: "资源",
      options: [
        {
          name: "never",
          description: "无"
        },
        {
          name: "rare",
          description: "很少"
        },
        {
          name: "uncommon",
          description: "较少"
        },
        {
          name: "default",
          description: "默认"
        },
        {
          name: "often",
          description: "较多"
        },
        {
          name: "mostly",
          description: "很多"
        },
        {
          name: "always",
          description: "大量"
        },
        {
          name: "insane",
          description: "疯狂"
        }
      ],
      selected: 3,
      order: 3,
      image: "meteorspawner.png"
    },
    {
      name: "flint",
      text: "燧石",
      group: "资源",
      options: [
        {
          name: "never",
          description: "无"
        },
        {
          name: "rare",
          description: "很少"
        },
        {
          name: "uncommon",
          description: "较少"
        },
        {
          name: "default",
          description: "默认"
        },
        {
          name: "often",
          description: "较多"
        },
        {
          name: "mostly",
          description: "很多"
        },
        {
          name: "always",
          description: "大量"
        },
        {
          name: "insane",
          description: "疯狂"
        }
      ],
      selected: 3,
      order: 3,
      image: "flint.png"
    },
    {
      name: "flowers",
      text: "花，邪恶花",
      group: "资源",
      options: [
        {
          name: "never",
          description: "无"
        },
        {
          name: "rare",
          description: "很少"
        },
        {
          name: "uncommon",
          description: "较少"
        },
        {
          name: "default",
          description: "默认"
        },
        {
          name: "often",
          description: "较多"
        },
        {
          name: "mostly",
          description: "很多"
        },
        {
          name: "always",
          description: "大量"
        },
        {
          name: "insane",
          description: "疯狂"
        }
      ],
      selected: 3,
      order: 3,
      image: "flowers.png"
    },
    {
      name: "cactus",
      text: "仙人掌",
      group: "资源",
      options: [
        {
          name: "never",
          description: "无"
        },
        {
          name: "rare",
          description: "很少"
        },
        {
          name: "uncommon",
          description: "较少"
        },
        {
          name: "default",
          description: "默认"
        },
        {
          name: "often",
          description: "较多"
        },
        {
          name: "mostly",
          description: "很多"
        },
        {
          name: "always",
          description: "大量"
        },
        {
          name: "insane",
          description: "疯狂"
        }
      ],
      selected: 3,
      order: 3,
      image: "cactus.png"
    },
    {
      name: "moon_bullkelp",
      text: "海岸公牛海带",
      group: "资源",
      options: [
        {
          name: "never",
          description: "无"
        },
        {
          name: "rare",
          description: "很少"
        },
        {
          name: "uncommon",
          description: "较少"
        },
        {
          name: "default",
          description: "默认"
        },
        {
          name: "often",
          description: "较多"
        },
        {
          name: "mostly",
          description: "很多"
        },
        {
          name: "always",
          description: "大量"
        },
        {
          name: "insane",
          description: "疯狂"
        }
      ],
      selected: 3,
      order: 3,
      image: "moon_bullkelp.png"
    },
    {
      name: "marshbush",
      text: "尖刺灌木",
      group: "资源",
      options: [
        {
          name: "never",
          description: "无"
        },
        {
          name: "rare",
          description: "很少"
        },
        {
          name: "uncommon",
          description: "较少"
        },
        {
          name: "default",
          description: "默认"
        },
        {
          name: "often",
          description: "较多"
        },
        {
          name: "mostly",
          description: "很多"
        },
        {
          name: "always",
          description: "大量"
        },
        {
          name: "insane",
          description: "疯狂"
        }
      ],
      selected: 3,
      order: 3,
      image: "marshbush.png"
    },
    {
      name: "trees",
      text: "树（所有）",
      group: "资源",
      options: [
        {
          name: "never",
          description: "无"
        },
        {
          name: "rare",
          description: "很少"
        },
        {
          name: "uncommon",
          description: "较少"
        },
        {
          name: "default",
          description: "默认"
        },
        {
          name: "often",
          description: "较多"
        },
        {
          name: "mostly",
          description: "很多"
        },
        {
          name: "always",
          description: "大量"
        },
        {
          name: "insane",
          description: "疯狂"
        }
      ],
      selected: 3,
      order: 3,
      image: "trees.png"
    },
    {
      name: "ocean_seastack",
      text: "海蚀柱",
      group: "资源",
      options: [
        {
          name: "ocean_never",
          description: "无"
        },
        {
          name: "ocean_rare",
          description: "很少"
        },
        {
          name: "ocean_uncommon",
          description: "较少"
        },
        {
          name: "ocean_default",
          description: "默认"
        },
        {
          name: "ocean_often",
          description: "较多"
        },
        {
          name: "ocean_mostly",
          description: "很多"
        },
        {
          name: "ocean_always",
          description: "大量"
        },
        {
          name: "ocean_insane",
          description: "疯狂"
        }
      ],
      selected: 3,
      order: 3,
      image: "ocean_seastack.png"
    },
    {
      name: "moon_starfish",
      text: "海星",
      group: "资源",
      options: [
        {
          name: "never",
          description: "无"
        },
        {
          name: "rare",
          description: "很少"
        },
        {
          name: "uncommon",
          description: "较少"
        },
        {
          name: "default",
          description: "默认"
        },
        {
          name: "often",
          description: "较多"
        },
        {
          name: "mostly",
          description: "很多"
        },
        {
          name: "always",
          description: "大量"
        },
        {
          name: "insane",
          description: "疯狂"
        }
      ],
      selected: 3,
      order: 3,
      image: "moon_starfish.png"
    },
    {
      name: "moon_rock",
      text: "月亮石",
      group: "资源",
      options: [
        {
          name: "never",
          description: "无"
        },
        {
          name: "rare",
          description: "很少"
        },
        {
          name: "uncommon",
          description: "较少"
        },
        {
          name: "default",
          description: "默认"
        },
        {
          name: "often",
          description: "较多"
        },
        {
          name: "mostly",
          description: "很多"
        },
        {
          name: "always",
          description: "大量"
        },
        {
          name: "insane",
          description: "疯狂"
        }
      ],
      selected: 3,
      order: 3,
      image: "moon_rock.png"
    },
    {
      name: "rock",
      text: "巨石",
      group: "资源",
      options: [
        {
          name: "never",
          description: "无"
        },
        {
          name: "rare",
          description: "很少"
        },
        {
          name: "uncommon",
          description: "较少"
        },
        {
          name: "default",
          description: "默认"
        },
        {
          name: "often",
          description: "较多"
        },
        {
          name: "mostly",
          description: "很多"
        },
        {
          name: "always",
          description: "大量"
        },
        {
          name: "insane",
          description: "疯狂"
        }
      ],
      selected: 3,
      order: 3,
      image: "rock.png"
    },
    {
      name: "reeds",
      text: "芦苇",
      group: "资源",
      options: [
        {
          name: "never",
          description: "无"
        },
        {
          name: "rare",
          description: "很少"
        },
        {
          name: "uncommon",
          description: "较少"
        },
        {
          name: "default",
          description: "默认"
        },
        {
          name: "often",
          description: "较多"
        },
        {
          name: "mostly",
          description: "很多"
        },
        {
          name: "always",
          description: "大量"
        },
        {
          name: "insane",
          description: "疯狂"
        }
      ],
      selected: 3,
      order: 3,
      image: "reeds.png"
    },
    {
      name: "sapling",
      text: "树苗",
      group: "资源",
      options: [
        {
          name: "never",
          description: "无"
        },
        {
          name: "rare",
          description: "很少"
        },
        {
          name: "uncommon",
          description: "较少"
        },
        {
          name: "default",
          description: "默认"
        },
        {
          name: "often",
          description: "较多"
        },
        {
          name: "mostly",
          description: "很多"
        },
        {
          name: "always",
          description: "大量"
        },
        {
          name: "insane",
          description: "疯狂"
        }
      ],
      selected: 3,
      order: 3,
      image: "sapling.png"
    },
    {
      name: "moon_sapling",
      text: "月亮树苗",
      group: "资源",
      options: [
        {
          name: "never",
          description: "无"
        },
        {
          name: "rare",
          description: "很少"
        },
        {
          name: "uncommon",
          description: "较少"
        },
        {
          name: "default",
          description: "默认"
        },
        {
          name: "often",
          description: "较多"
        },
        {
          name: "mostly",
          description: "很多"
        },
        {
          name: "always",
          description: "大量"
        },
        {
          name: "insane",
          description: "疯狂"
        }
      ],
      selected: 3,
      order: 3,
      image: "moon_sapling.png"
    },
    {
      name: "moon_tree",
      text: "月树",
      group: "资源",
      options: [
        {
          name: "never",
          description: "无"
        },
        {
          name: "rare",
          description: "很少"
        },
        {
          name: "uncommon",
          description: "较少"
        },
        {
          name: "default",
          description: "默认"
        },
        {
          name: "often",
          description: "较多"
        },
        {
          name: "mostly",
          description: "很多"
        },
        {
          name: "always",
          description: "大量"
        },
        {
          name: "insane",
          description: "疯狂"
        }
      ],
      selected: 3,
      order: 3,
      image: "moon_tree.png"
    },
    {
      name: "grass",
      text: "草",
      group: "资源",
      options: [
        {
          name: "never",
          description: "无"
        },
        {
          name: "rare",
          description: "很少"
        },
        {
          name: "uncommon",
          description: "较少"
        },
        {
          name: "default",
          description: "默认"
        },
        {
          name: "often",
          description: "较多"
        },
        {
          name: "mostly",
          description: "很多"
        },
        {
          name: "always",
          description: "大量"
        },
        {
          name: "insane",
          description: "疯狂"
        }
      ],
      selected: 3,
      order: 3,
      image: "grass.png"
    },
    {
      name: "mushroom",
      text: "蘑菇",
      group: "资源",
      options: [
        {
          name: "never",
          description: "无"
        },
        {
          name: "rare",
          description: "很少"
        },
        {
          name: "uncommon",
          description: "较少"
        },
        {
          name: "default",
          description: "默认"
        },
        {
          name: "often",
          description: "较多"
        },
        {
          name: "mostly",
          description: "很多"
        },
        {
          name: "always",
          description: "大量"
        },
        {
          name: "insane",
          description: "疯狂"
        }
      ],
      selected: 3,
      order: 3,
      image: "mushroom.png"
    },
    {
      name: "rock_ice",
      text: "迷你冰川",
      group: "资源",
      options: [
        {
          name: "never",
          description: "无"
        },
        {
          name: "rare",
          description: "很少"
        },
        {
          name: "uncommon",
          description: "较少"
        },
        {
          name: "default",
          description: "默认"
        },
        {
          name: "often",
          description: "较多"
        },
        {
          name: "mostly",
          description: "很多"
        },
        {
          name: "always",
          description: "大量"
        },
        {
          name: "insane",
          description: "疯狂"
        }
      ],
      selected: 3,
      order: 3,
      image: "rock_ice.png"
    },
    {
      name: "berrybush",
      text: "浆果丛",
      group: "资源",
      options: [
        {
          name: "never",
          description: "无"
        },
        {
          name: "rare",
          description: "很少"
        },
        {
          name: "uncommon",
          description: "较少"
        },
        {
          name: "default",
          description: "默认"
        },
        {
          name: "often",
          description: "较多"
        },
        {
          name: "mostly",
          description: "很多"
        },
        {
          name: "always",
          description: "大量"
        },
        {
          name: "insane",
          description: "疯狂"
        }
      ],
      selected: 3,
      order: 3,
      image: "berrybush.png"
    },
    {
      name: "bunnymen_setting",
      text: "兔人",
      group: "生物",
      options: [
        {
          name: "never",
          description: "无"
        },
        {
          name: "rare",
          description: "很少"
        },
        {
          name: "default",
          description: "默认"
        },
        {
          name: "often",
          description: "较多"
        },
        {
          name: "always",
          description: "大量"
        }
      ],
      selected: 2,
      order: 6,
      image: "bunnymen_setting.png"
    },
    {
      name: "pigs_setting",
      text: "猪",
      group: "生物",
      options: [
        {
          name: "never",
          description: "无"
        },
        {
          name: "rare",
          description: "很少"
        },
        {
          name: "default",
          description: "默认"
        },
        {
          name: "often",
          description: "较多"
        },
        {
          name: "always",
          description: "大量"
        }
      ],
      selected: 2,
      order: 6,
      image: "pigs_setting.png"
    },
    {
      name: "birds",
      text: "鸟",
      group: "生物",
      options: [
        {
          name: "never",
          description: "无"
        },
        {
          name: "rare",
          description: "很少"
        },
        {
          name: "default",
          description: "默认"
        },
        {
          name: "often",
          description: "较多"
        },
        {
          name: "always",
          description: "大量"
        }
      ],
      selected: 2,
      order: 6,
      image: "birds.png"
    },
    {
      name: "bees_setting",
      text: "蜜蜂",
      group: "生物",
      options: [
        {
          name: "never",
          description: "无"
        },
        {
          name: "rare",
          description: "很少"
        },
        {
          name: "default",
          description: "默认"
        },
        {
          name: "often",
          description: "较多"
        },
        {
          name: "always",
          description: "大量"
        }
      ],
      selected: 2,
      order: 6,
      image: "bees_setting.png"
    },
    {
      name: "rabbits_setting",
      text: "兔子",
      group: "生物",
      options: [
        {
          name: "never",
          description: "无"
        },
        {
          name: "rare",
          description: "很少"
        },
        {
          name: "default",
          description: "默认"
        },
        {
          name: "often",
          description: "较多"
        },
        {
          name: "always",
          description: "大量"
        }
      ],
      selected: 2,
      order: 6,
      image: "rabbits_setting.png"
    },
    {
      name: "moles_setting",
      text: "鼹鼠",
      group: "生物",
      options: [
        {
          name: "never",
          description: "无"
        },
        {
          name: "rare",
          description: "很少"
        },
        {
          name: "default",
          description: "默认"
        },
        {
          name: "often",
          description: "较多"
        },
        {
          name: "always",
          description: "大量"
        }
      ],
      selected: 2,
      order: 6,
      image: "moles_setting.png"
    },
    {
      name: "butterfly",
      text: "蝴蝶",
      group: "生物",
      options: [
        {
          name: "never",
          description: "无"
        },
        {
          name: "rare",
          description: "很少"
        },
        {
          name: "default",
          description: "默认"
        },
        {
          name: "often",
          description: "较多"
        },
        {
          name: "always",
          description: "大量"
        }
      ],
      selected: 2,
      order: 6,
      image: "butterfly.png"
    },
    {
      name: "fishschools",
      text: "鱼群",
      group: "生物",
      options: [
        {
          name: "never",
          description: "无"
        },
        {
          name: "rare",
          description: "很少"
        },
        {
          name: "default",
          description: "默认"
        },
        {
          name: "often",
          description: "较多"
        },
        {
          name: "always",
          description: "大量"
        }
      ],
      selected: 2,
      order: 6,
      image: "fishschools.png"
    },
    {
      name: "perd",
      text: "火鸡",
      group: "生物",
      options: [
        {
          name: "never",
          description: "无"
        },
        {
          name: "rare",
          description: "很少"
        },
        {
          name: "default",
          description: "默认"
        },
        {
          name: "often",
          description: "较多"
        },
        {
          name: "always",
          description: "大量"
        }
      ],
      selected: 2,
      order: 6,
      image: "perd.png"
    },
    {
      name: "grassgekkos",
      text: "草壁虎转化",
      group: "生物",
      options: [
        {
          name: "never",
          description: "无"
        },
        {
          name: "rare",
          description: "很少"
        },
        {
          name: "default",
          description: "默认"
        },
        {
          name: "often",
          description: "较多"
        },
        {
          name: "always",
          description: "大量"
        }
      ],
      selected: 2,
      order: 6,
      image: "grassgekkos.png"
    },
    {
      name: "catcoons",
      text: "浣猫",
      group: "生物",
      options: [
        {
          name: "never",
          description: "无"
        },
        {
          name: "rare",
          description: "很少"
        },
        {
          name: "default",
          description: "默认"
        },
        {
          name: "often",
          description: "较多"
        },
        {
          name: "always",
          description: "大量"
        }
      ],
      selected: 2,
      order: 6,
      image: "catcoons.png"
    },
    {
      name: "penguins",
      text: "企鸥",
      group: "生物",
      options: [
        {
          name: "never",
          description: "无"
        },
        {
          name: "rare",
          description: "很少"
        },
        {
          name: "default",
          description: "默认"
        },
        {
          name: "often",
          description: "较多"
        },
        {
          name: "always",
          description: "大量"
        }
      ],
      selected: 2,
      order: 6,
      image: "penguins.png"
    },
    {
      name: "gnarwail",
      text: "一角鲸",
      group: "生物",
      options: [
        {
          name: "never",
          description: "无"
        },
        {
          name: "rare",
          description: "很少"
        },
        {
          name: "default",
          description: "默认"
        },
        {
          name: "often",
          description: "较多"
        },
        {
          name: "always",
          description: "大量"
        }
      ],
      selected: 2,
      order: 6,
      image: "gnarwail.png"
    },
    {
      name: "wobsters",
      text: "龙虾",
      group: "生物",
      options: [
        {
          name: "never",
          description: "无"
        },
        {
          name: "rare",
          description: "很少"
        },
        {
          name: "default",
          description: "默认"
        },
        {
          name: "often",
          description: "较多"
        },
        {
          name: "always",
          description: "大量"
        }
      ],
      selected: 2,
      order: 6,
      image: "wobsters.png"
    },
    {
      name: "bats_setting",
      text: "蝙蝠",
      group: "敌对生物",
      options: [
        {
          name: "never",
          description: "无"
        },
        {
          name: "rare",
          description: "很少"
        },
        {
          name: "default",
          description: "默认"
        },
        {
          name: "often",
          description: "较多"
        },
        {
          name: "always",
          description: "大量"
        }
      ],
      selected: 2,
      order: 7,
      image: "bats_setting.png"
    },
    {
      name: "penguins_moon",
      text: "月石企鸥",
      group: "敌对生物",
      options: [
        {
          name: "never",
          description: "无"
        },
        {
          name: "default",
          description: "默认"
        }
      ],
      selected: 1,
      order: 7,
      image: "penguins_moon.png"
    },
    {
      name: "pirateraids",
      text: "月亮码头海盗",
      group: "敌对生物",
      options: [
        {
          name: "never",
          description: "无"
        },
        {
          name: "rare",
          description: "很少"
        },
        {
          name: "default",
          description: "默认"
        },
        {
          name: "often",
          description: "较多"
        },
        {
          name: "always",
          description: "大量"
        }
      ],
      selected: 2,
      order: 7,
      image: "pirateraids.png"
    },
    {
      name: "mosquitos",
      text: "蚊子",
      group: "敌对生物",
      options: [
        {
          name: "never",
          description: "无"
        },
        {
          name: "rare",
          description: "很少"
        },
        {
          name: "default",
          description: "默认"
        },
        {
          name: "often",
          description: "较多"
        },
        {
          name: "always",
          description: "大量"
        }
      ],
      selected: 2,
      order: 7,
      image: "mosquitos.png"
    },
    {
      name: "frogs",
      text: "青蛙",
      group: "敌对生物",
      options: [
        {
          name: "never",
          description: "无"
        },
        {
          name: "rare",
          description: "很少"
        },
        {
          name: "default",
          description: "默认"
        },
        {
          name: "often",
          description: "较多"
        },
        {
          name: "always",
          description: "大量"
        }
      ],
      selected: 2,
      order: 7,
      image: "frogs.png"
    },
    {
      name: "moon_spider",
      text: "破碎蜘蛛",
      group: "敌对生物",
      options: [
        {
          name: "never",
          description: "无"
        },
        {
          name: "rare",
          description: "很少"
        },
        {
          name: "default",
          description: "默认"
        },
        {
          name: "often",
          description: "较多"
        },
        {
          name: "always",
          description: "大量"
        }
      ],
      selected: 2,
      order: 7,
      image: "moon_spider.png"
    },
    {
      name: "hound_mounds",
      text: "猎犬",
      group: "敌对生物",
      options: [
        {
          name: "never",
          description: "无"
        },
        {
          name: "rare",
          description: "很少"
        },
        {
          name: "default",
          description: "默认"
        },
        {
          name: "often",
          description: "较多"
        },
        {
          name: "always",
          description: "大量"
        }
      ],
      selected: 2,
      order: 7,
      image: "hound_mounds.png"
    },
    {
      name: "mutated_hounds",
      text: "恐怖猎犬",
      group: "敌对生物",
      options: [
        {
          name: "never",
          description: "无"
        },
        {
          name: "default",
          description: "默认"
        }
      ],
      selected: 1,
      order: 7,
      image: "mutated_hounds.png"
    },
    {
      name: "cookiecutters",
      text: "饼干切割机",
      group: "敌对生物",
      options: [
        {
          name: "never",
          description: "无"
        },
        {
          name: "rare",
          description: "很少"
        },
        {
          name: "default",
          description: "默认"
        },
        {
          name: "often",
          description: "较多"
        },
        {
          name: "always",
          description: "大量"
        }
      ],
      selected: 2,
      order: 7,
      image: "cookiecutters.png"
    },
    {
      name: "spiders_setting",
      text: "蜘蛛",
      group: "敌对生物",
      options: [
        {
          name: "never",
          description: "无"
        },
        {
          name: "rare",
          description: "很少"
        },
        {
          name: "default",
          description: "默认"
        },
        {
          name: "often",
          description: "较多"
        },
        {
          name: "always",
          description: "大量"
        }
      ],
      selected: 2,
      order: 7,
      image: "spiders_setting.png"
    },
    {
      name: "sharks",
      text: "鲨鱼",
      group: "敌对生物",
      options: [
        {
          name: "never",
          description: "无"
        },
        {
          name: "rare",
          description: "很少"
        },
        {
          name: "default",
          description: "默认"
        },
        {
          name: "often",
          description: "较多"
        },
        {
          name: "always",
          description: "大量"
        }
      ],
      selected: 2,
      order: 7,
      image: "sharks.png"
    },
    {
      name: "lureplants",
      text: "食人花",
      group: "敌对生物",
      options: [
        {
          name: "never",
          description: "无"
        },
        {
          name: "rare",
          description: "很少"
        },
        {
          name: "default",
          description: "默认"
        },
        {
          name: "often",
          description: "较多"
        },
        {
          name: "always",
          description: "大量"
        }
      ],
      selected: 2,
      order: 7,
      image: "lureplants.png"
    },
    {
      name: "spider_warriors",
      text: "蜘蛛战士",
      group: "敌对生物",
      options: [
        {
          name: "never",
          description: "无"
        },
        {
          name: "default",
          description: "默认"
        }
      ],
      selected: 1,
      order: 7,
      image: "spider_warriors.png"
    },
    {
      name: "wasps",
      text: "杀人蜂",
      group: "敌对生物",
      options: [
        {
          name: "never",
          description: "无"
        },
        {
          name: "rare",
          description: "很少"
        },
        {
          name: "default",
          description: "默认"
        },
        {
          name: "often",
          description: "较多"
        },
        {
          name: "always",
          description: "大量"
        }
      ],
      selected: 2,
      order: 7,
      image: "wasps.png"
    },
    {
      name: "merms",
      text: "鱼人",
      group: "敌对生物",
      options: [
        {
          name: "never",
          description: "无"
        },
        {
          name: "rare",
          description: "很少"
        },
        {
          name: "default",
          description: "默认"
        },
        {
          name: "often",
          description: "较多"
        },
        {
          name: "always",
          description: "大量"
        }
      ],
      selected: 2,
      order: 7,
      image: "merms.png"
    },
    {
      name: "walrus_setting",
      text: "海象",
      group: "敌对生物",
      options: [
        {
          name: "never",
          description: "无"
        },
        {
          name: "rare",
          description: "很少"
        },
        {
          name: "default",
          description: "默认"
        },
        {
          name: "often",
          description: "较多"
        },
        {
          name: "always",
          description: "大量"
        }
      ],
      selected: 2,
      order: 7,
      image: "walrus_setting.png"
    },
    {
      name: "squid",
      text: "鱿鱼",
      group: "敌对生物",
      options: [
        {
          name: "never",
          description: "无"
        },
        {
          name: "rare",
          description: "很少"
        },
        {
          name: "default",
          description: "默认"
        },
        {
          name: "often",
          description: "较多"
        },
        {
          name: "always",
          description: "大量"
        }
      ],
      selected: 2,
      order: 7,
      image: "squid.png"
    },
    {
      name: "day",
      text: "昼夜选项",
      group: "全局",
      options: [
        {
          name: "default",
          description: "默认"
        },
        {
          name: "longday",
          description: "长 白天"
        },
        {
          name: "longdusk",
          description: "长 黄昏"
        },
        {
          name: "longnight",
          description: "长 夜晚"
        },
        {
          name: "noday",
          description: "无 白天"
        },
        {
          name: "nodusk",
          description: "无 黄昏"
        },
        {
          name: "nonight",
          description: "无 夜晚"
        },
        {
          name: "onlyday",
          description: "仅 白天"
        },
        {
          name: "onlydusk",
          description: "仅 黄昏"
        },
        {
          name: "onlynight",
          description: "仅 夜晚"
        }
      ],
      selected: 0,
      order: 0,
      image: "day.png"
    },
    {
      name: "ghostsanitydrain",
      text: "鬼魂理智值惩罚",
      group: "全局",
      options: [
        {
          name: "none",
          description: "禁用"
        },
        {
          name: "always",
          description: "启用"
        }
      ],
      selected: 1,
      order: 0,
      image: "ghostsanitydrain.png"
    },
    {
      name: "spawnmode",
      text: "出生模式",
      group: "全局",
      options: [
        {
          name: "fixed",
          description: "绚丽之门"
        },
        {
          name: "scatter",
          description: "随机"
        }
      ],
      selected: 0,
      order: 0,
      image: "spawnmode.png"
    },
    {
      name: "summer",
      text: "夏",
      group: "全局",
      options: [
        {
          name: "noseason",
          description: "无"
        },
        {
          name: "veryshortseason",
          description: "极短"
        },
        {
          name: "shortseason",
          description: "短"
        },
        {
          name: "default",
          description: "默认"
        },
        {
          name: "longseason",
          description: "长"
        },
        {
          name: "verylongseason",
          description: "极长"
        },
        {
          name: "random",
          description: "随机"
        }
      ],
      selected: 3,
      order: 0,
      image: "summer.png"
    },
    {
      name: "spring",
      text: "春",
      group: "全局",
      options: [
        {
          name: "noseason",
          description: "无"
        },
        {
          name: "veryshortseason",
          description: "极短"
        },
        {
          name: "shortseason",
          description: "短"
        },
        {
          name: "default",
          description: "默认"
        },
        {
          name: "longseason",
          description: "长"
        },
        {
          name: "verylongseason",
          description: "极长"
        },
        {
          name: "random",
          description: "随机"
        }
      ],
      selected: 3,
      order: 0,
      image: "spring.png"
    },
    {
      name: "krampus",
      text: "坎普斯",
      group: "全局",
      options: [
        {
          name: "never",
          description: "无"
        },
        {
          name: "rare",
          description: "很少"
        },
        {
          name: "default",
          description: "默认"
        },
        {
          name: "often",
          description: "较多"
        },
        {
          name: "always",
          description: "大量"
        }
      ],
      selected: 2,
      order: 0,
      image: "krampus.png"
    },
    {
      name: "beefaloheat",
      text: "皮弗娄牛交配频率",
      group: "全局",
      options: [
        {
          name: "never",
          description: "无"
        },
        {
          name: "rare",
          description: "很少"
        },
        {
          name: "default",
          description: "默认"
        },
        {
          name: "often",
          description: "较多"
        },
        {
          name: "always",
          description: "大量"
        }
      ],
      selected: 2,
      order: 0,
      image: "beefaloheat.png"
    },
    {
      name: "resettime",
      text: "死亡重置倒计时",
      group: "全局",
      options: [
        {
          name: "none",
          description: "禁用"
        },
        {
          name: "slow",
          description: "慢"
        },
        {
          name: "default",
          description: "默认"
        },
        {
          name: "fast",
          description: "快"
        },
        {
          name: "always",
          description: "立刻"
        }
      ],
      selected: 2,
      order: 0,
      image: "resettime.png"
    },
    {
      name: "portalresurection",
      text: "在绚丽之门复活",
      group: "全局",
      options: [
        {
          name: "none",
          description: "禁用"
        },
        {
          name: "always",
          description: "启用"
        }
      ],
      selected: 0,
      order: 0,
      image: "portalresurection.png"
    },
    {
      name: "ghostenabled",
      text: "冒险家死亡",
      group: "全局",
      options: [
        {
          name: "none",
          description: "更改冒险家"
        },
        {
          name: "always",
          description: "变鬼魂"
        }
      ],
      selected: 1,
      order: 0,
      image: "ghostenabled.png"
    },
    {
      name: "winter",
      text: "冬",
      group: "全局",
      options: [
        {
          name: "noseason",
          description: "无"
        },
        {
          name: "veryshortseason",
          description: "极短"
        },
        {
          name: "shortseason",
          description: "短"
        },
        {
          name: "default",
          description: "默认"
        },
        {
          name: "longseason",
          description: "长"
        },
        {
          name: "verylongseason",
          description: "极长"
        },
        {
          name: "random",
          description: "随机"
        }
      ],
      selected: 3,
      order: 0,
      image: "winter.png"
    },
    {
      name: "autumn",
      text: "秋",
      group: "全局",
      options: [
        {
          name: "noseason",
          description: "无"
        },
        {
          name: "veryshortseason",
          description: "极短"
        },
        {
          name: "shortseason",
          description: "短"
        },
        {
          name: "default",
          description: "默认"
        },
        {
          name: "longseason",
          description: "长"
        },
        {
          name: "verylongseason",
          description: "极长"
        },
        {
          name: "random",
          description: "随机"
        }
      ],
      selected: 3,
      order: 0,
      image: "autumn.png"
    },
    {
      name: "specialevent",
      text: "活动",
      group: "全局",
      options: [
        {
          name: "none",
          description: "无"
        },
        {
          name: "default",
          description: "自动"
        }
      ],
      selected: 1,
      order: 0,
      image: "specialevent.png"
    },
    {
      name: "palmcone_seed_portalrate",
      text: "棕榈松果树芽",
      group: "非自然传送门资源",
      options: [
        {
          name: "never",
          description: "无"
        },
        {
          name: "rare",
          description: "很少"
        },
        {
          name: "default",
          description: "默认"
        },
        {
          name: "often",
          description: "较多"
        },
        {
          name: "always",
          description: "大量"
        }
      ],
      selected: 2,
      order: 5,
      image: "palmcone_seed_portalrate.png"
    },
    {
      name: "monkeytail_portalrate",
      text: "猴尾草",
      group: "非自然传送门资源",
      options: [
        {
          name: "never",
          description: "无"
        },
        {
          name: "rare",
          description: "很少"
        },
        {
          name: "default",
          description: "默认"
        },
        {
          name: "often",
          description: "较多"
        },
        {
          name: "always",
          description: "大量"
        }
      ],
      selected: 2,
      order: 5,
      image: "monkeytail_portalrate.png"
    },
    {
      name: "powder_monkey_portalrate",
      text: "火药猴",
      group: "非自然传送门资源",
      options: [
        {
          name: "never",
          description: "无"
        },
        {
          name: "rare",
          description: "很少"
        },
        {
          name: "default",
          description: "默认"
        },
        {
          name: "often",
          description: "较多"
        },
        {
          name: "always",
          description: "大量"
        }
      ],
      selected: 2,
      order: 5,
      image: "powder_monkey_portalrate.png"
    },
    {
      name: "bananabush_portalrate",
      text: "香蕉丛",
      group: "非自然传送门资源",
      options: [
        {
          name: "never",
          description: "无"
        },
        {
          name: "rare",
          description: "很少"
        },
        {
          name: "default",
          description: "默认"
        },
        {
          name: "often",
          description: "较多"
        },
        {
          name: "always",
          description: "大量"
        }
      ],
      selected: 2,
      order: 5,
      image: "bananabush_portalrate.png"
    },
    {
      name: "portal_spawnrate",
      text: "传送频率",
      group: "非自然传送门资源",
      options: [
        {
          name: "never",
          description: "无"
        },
        {
          name: "rare",
          description: "很少"
        },
        {
          name: "default",
          description: "默认"
        },
        {
          name: "often",
          description: "较多"
        },
        {
          name: "always",
          description: "大量"
        }
      ],
      selected: 2,
      order: 5,
      image: "portal_spawnrate.png"
    },
    {
      name: "lightcrab_portalrate",
      text: "发光蟹",
      group: "非自然传送门资源",
      options: [
        {
          name: "never",
          description: "无"
        },
        {
          name: "rare",
          description: "很少"
        },
        {
          name: "default",
          description: "默认"
        },
        {
          name: "often",
          description: "较多"
        },
        {
          name: "always",
          description: "大量"
        }
      ],
      selected: 2,
      order: 5,
      image: "lightcrab_portalrate.png"
    },
    {
      name: "year_of_the_gobbler",
      text: "火鸡之年",
      group: "活动",
      options: [
        {
          name: "default",
          description: "默认"
        },
        {
          name: "enabled",
          description: "总是"
        }
      ],
      selected: 0,
      order: 1,
      image: "year_of_the_gobbler.png"
    },
    {
      name: "year_of_the_varg",
      text: "座狼之年",
      group: "活动",
      options: [
        {
          name: "default",
          description: "默认"
        },
        {
          name: "enabled",
          description: "总是"
        }
      ],
      selected: 0,
      order: 1,
      image: "year_of_the_varg.png"
    },
    {
      name: "year_of_the_beefalo",
      text: "皮弗娄牛之年",
      group: "活动",
      options: [
        {
          name: "default",
          description: "默认"
        },
        {
          name: "enabled",
          description: "总是"
        }
      ],
      selected: 0,
      order: 1,
      image: "year_of_the_beefalo.png"
    },
    {
      name: "year_of_the_bunnyman",
      text: "兔人之年",
      group: "活动",
      options: [
        {
          name: "default",
          description: "默认"
        },
        {
          name: "enabled",
          description: "总是"
        }
      ],
      selected: 0,
      order: 1,
      image: "year_of_the_bunnyman.png"
    },
    {
      name: "crow_carnival",
      text: "盛夏鸦年华",
      group: "活动",
      options: [
        {
          name: "default",
          description: "默认"
        },
        {
          name: "enabled",
          description: "总是"
        }
      ],
      selected: 0,
      order: 1,
      image: "crow_carnival.png"
    },
    {
      name: "winters_feast",
      text: "冬季盛宴",
      group: "活动",
      options: [
        {
          name: "default",
          description: "默认"
        },
        {
          name: "enabled",
          description: "总是"
        }
      ],
      selected: 0,
      order: 1,
      image: "winters_feast.png"
    },
    {
      name: "hallowed_nights",
      text: "万圣夜",
      group: "活动",
      options: [
        {
          name: "default",
          description: "默认"
        },
        {
          name: "enabled",
          description: "总是"
        }
      ],
      selected: 0,
      order: 1,
      image: "hallowed_nights.png"
    },
    {
      name: "year_of_the_catcoon",
      text: "浣猫之年",
      group: "活动",
      options: [
        {
          name: "default",
          description: "默认"
        },
        {
          name: "enabled",
          description: "总是"
        }
      ],
      selected: 0,
      order: 1,
      image: "year_of_the_catcoon.png"
    },
    {
      name: "year_of_the_carrat",
      text: "胡萝卜鼠之年",
      group: "活动",
      options: [
        {
          name: "default",
          description: "默认"
        },
        {
          name: "enabled",
          description: "总是"
        }
      ],
      selected: 0,
      order: 1,
      image: "year_of_the_carrat.png"
    },
    {
      name: "year_of_the_pig",
      text: "猪王之年",
      group: "活动",
      options: [
        {
          name: "default",
          description: "默认"
        },
        {
          name: "enabled",
          description: "总是"
        }
      ],
      selected: 0,
      order: 1,
      image: "year_of_the_pig.png"
    },
    {
      name: "basicresource_regrowth",
      text: "基础资源",
      group: "资源再生",
      options: [
        {
          name: "none",
          description: "禁用"
        },
        {
          name: "always",
          description: "启用"
        }
      ],
      selected: 0,
      order: 4,
      image: "basicresource_regrowth.png"
    },
    {
      name: "evergreen_regrowth",
      text: "常青树",
      group: "资源再生",
      options: [
        {
          name: "never",
          description: "无"
        },
        {
          name: "veryslow",
          description: "极慢"
        },
        {
          name: "slow",
          description: "慢"
        },
        {
          name: "default",
          description: "默认"
        },
        {
          name: "fast",
          description: "快"
        },
        {
          name: "veryfast",
          description: "极快"
        }
      ],
      selected: 3,
      order: 4,
      image: "evergreen_regrowth.png"
    },
    {
      name: "palmconetree_regrowth",
      text: "棕榈松果树",
      group: "资源再生",
      options: [
        {
          name: "never",
          description: "无"
        },
        {
          name: "veryslow",
          description: "极慢"
        },
        {
          name: "slow",
          description: "慢"
        },
        {
          name: "default",
          description: "默认"
        },
        {
          name: "fast",
          description: "快"
        },
        {
          name: "veryfast",
          description: "极快"
        }
      ],
      selected: 3,
      order: 4,
      image: "palmconetree_regrowth.png"
    },
    {
      name: "flowers_regrowth",
      text: "花",
      group: "资源再生",
      options: [
        {
          name: "never",
          description: "无"
        },
        {
          name: "veryslow",
          description: "极慢"
        },
        {
          name: "slow",
          description: "慢"
        },
        {
          name: "default",
          description: "默认"
        },
        {
          name: "fast",
          description: "快"
        },
        {
          name: "veryfast",
          description: "极快"
        }
      ],
      selected: 3,
      order: 4,
      image: "flowers_regrowth.png"
    },
    {
      name: "cactus_regrowth",
      text: "仙人掌",
      group: "资源再生",
      options: [
        {
          name: "never",
          description: "无"
        },
        {
          name: "veryslow",
          description: "极慢"
        },
        {
          name: "slow",
          description: "慢"
        },
        {
          name: "default",
          description: "默认"
        },
        {
          name: "fast",
          description: "快"
        },
        {
          name: "veryfast",
          description: "极快"
        }
      ],
      selected: 3,
      order: 4,
      image: "cactus_regrowth.png"
    },
    {
      name: "saltstack_regrowth",
      text: "盐堆",
      group: "资源再生",
      options: [
        {
          name: "never",
          description: "无"
        },
        {
          name: "veryslow",
          description: "极慢"
        },
        {
          name: "slow",
          description: "慢"
        },
        {
          name: "default",
          description: "默认"
        },
        {
          name: "fast",
          description: "快"
        },
        {
          name: "veryfast",
          description: "极快"
        }
      ],
      selected: 3,
      order: 4,
      image: "saltstack_regrowth.png"
    },
    {
      name: "reeds_regrowth",
      text: "芦苇",
      group: "资源再生",
      options: [
        {
          name: "never",
          description: "无"
        },
        {
          name: "veryslow",
          description: "极慢"
        },
        {
          name: "slow",
          description: "慢"
        },
        {
          name: "default",
          description: "默认"
        },
        {
          name: "fast",
          description: "快"
        },
        {
          name: "veryfast",
          description: "极快"
        }
      ],
      selected: 3,
      order: 4,
      image: "reeds_regrowth.png"
    },
    {
      name: "regrowth",
      text: "重生速度",
      group: "资源再生",
      options: [
        {
          name: "never",
          description: "无"
        },
        {
          name: "veryslow",
          description: "极慢"
        },
        {
          name: "slow",
          description: "慢"
        },
        {
          name: "default",
          description: "默认"
        },
        {
          name: "fast",
          description: "快"
        },
        {
          name: "veryfast",
          description: "极快"
        }
      ],
      selected: 3,
      order: 4,
      image: "regrowth.png"
    },
    {
      name: "moon_tree_regrowth",
      text: "月树",
      group: "资源再生",
      options: [
        {
          name: "never",
          description: "无"
        },
        {
          name: "veryslow",
          description: "极慢"
        },
        {
          name: "slow",
          description: "慢"
        },
        {
          name: "default",
          description: "默认"
        },
        {
          name: "fast",
          description: "快"
        },
        {
          name: "veryfast",
          description: "极快"
        }
      ],
      selected: 3,
      order: 4,
      image: "moon_tree_regrowth.png"
    },
    {
      name: "twiggytrees_regrowth",
      text: "多枝树",
      group: "资源再生",
      options: [
        {
          name: "never",
          description: "无"
        },
        {
          name: "veryslow",
          description: "极慢"
        },
        {
          name: "slow",
          description: "慢"
        },
        {
          name: "default",
          description: "默认"
        },
        {
          name: "fast",
          description: "快"
        },
        {
          name: "veryfast",
          description: "极快"
        }
      ],
      selected: 3,
      order: 4,
      image: "twiggytrees_regrowth.png"
    },
    {
      name: "deciduoustree_regrowth",
      text: "桦栗树",
      group: "资源再生",
      options: [
        {
          name: "never",
          description: "无"
        },
        {
          name: "veryslow",
          description: "极慢"
        },
        {
          name: "slow",
          description: "慢"
        },
        {
          name: "default",
          description: "默认"
        },
        {
          name: "fast",
          description: "快"
        },
        {
          name: "veryfast",
          description: "极快"
        }
      ],
      selected: 3,
      order: 4,
      image: "deciduoustree_regrowth.png"
    },
    {
      name: "carrots_regrowth",
      text: "胡萝卜",
      group: "资源再生",
      options: [
        {
          name: "never",
          description: "无"
        },
        {
          name: "veryslow",
          description: "极慢"
        },
        {
          name: "slow",
          description: "慢"
        },
        {
          name: "default",
          description: "默认"
        },
        {
          name: "fast",
          description: "快"
        },
        {
          name: "veryfast",
          description: "极快"
        }
      ],
      selected: 3,
      order: 4,
      image: "carrots_regrowth.png"
    },
    {
      name: "malbatross",
      text: "邪天翁",
      group: "巨兽",
      options: [
        {
          name: "never",
          description: "无"
        },
        {
          name: "rare",
          description: "很少"
        },
        {
          name: "default",
          description: "默认"
        },
        {
          name: "often",
          description: "较多"
        },
        {
          name: "always",
          description: "大量"
        }
      ],
      selected: 2,
      order: 8,
      image: "malbatross.png"
    },
    {
      name: "klaus",
      text: "克劳斯",
      group: "巨兽",
      options: [
        {
          name: "never",
          description: "无"
        },
        {
          name: "rare",
          description: "很少"
        },
        {
          name: "default",
          description: "默认"
        },
        {
          name: "often",
          description: "较多"
        },
        {
          name: "always",
          description: "大量"
        }
      ],
      selected: 2,
      order: 8,
      image: "klaus.png"
    },
    {
      name: "dragonfly",
      text: "龙蝇",
      group: "巨兽",
      options: [
        {
          name: "never",
          description: "无"
        },
        {
          name: "rare",
          description: "很少"
        },
        {
          name: "default",
          description: "默认"
        },
        {
          name: "often",
          description: "较多"
        },
        {
          name: "always",
          description: "大量"
        }
      ],
      selected: 2,
      order: 8,
      image: "dragonfly.png"
    },
    {
      name: "deerclops",
      text: "独眼巨鹿",
      group: "巨兽",
      options: [
        {
          name: "never",
          description: "无"
        },
        {
          name: "rare",
          description: "很少"
        },
        {
          name: "default",
          description: "默认"
        },
        {
          name: "often",
          description: "较多"
        },
        {
          name: "always",
          description: "大量"
        }
      ],
      selected: 2,
      order: 8,
      image: "deerclops.png"
    },
    {
      name: "fruitfly",
      text: "果蝇王",
      group: "巨兽",
      options: [
        {
          name: "never",
          description: "无"
        },
        {
          name: "rare",
          description: "很少"
        },
        {
          name: "default",
          description: "默认"
        },
        {
          name: "often",
          description: "较多"
        },
        {
          name: "always",
          description: "大量"
        }
      ],
      selected: 2,
      order: 8,
      image: "fruitfly.png"
    },
    {
      name: "spiderqueen",
      text: "蜘蛛女王",
      group: "巨兽",
      options: [
        {
          name: "never",
          description: "无"
        },
        {
          name: "rare",
          description: "很少"
        },
        {
          name: "default",
          description: "默认"
        },
        {
          name: "often",
          description: "较多"
        },
        {
          name: "always",
          description: "大量"
        }
      ],
      selected: 2,
      order: 8,
      image: "spiderqueen.png"
    },
    {
      name: "goosemoose",
      text: "麋鹿鹅",
      group: "巨兽",
      options: [
        {
          name: "never",
          description: "无"
        },
        {
          name: "rare",
          description: "很少"
        },
        {
          name: "default",
          description: "默认"
        },
        {
          name: "often",
          description: "较多"
        },
        {
          name: "always",
          description: "大量"
        }
      ],
      selected: 2,
      order: 8,
      image: "goosemoose.png"
    },
    {
      name: "bearger",
      text: "熊獾",
      group: "巨兽",
      options: [
        {
          name: "never",
          description: "无"
        },
        {
          name: "rare",
          description: "很少"
        },
        {
          name: "default",
          description: "默认"
        },
        {
          name: "often",
          description: "较多"
        },
        {
          name: "always",
          description: "大量"
        }
      ],
      selected: 2,
      order: 8,
      image: "bearger.png"
    },
    {
      name: "eyeofterror",
      text: "恐怖之眼",
      group: "巨兽",
      options: [
        {
          name: "never",
          description: "无"
        },
        {
          name: "rare",
          description: "很少"
        },
        {
          name: "default",
          description: "默认"
        },
        {
          name: "often",
          description: "较多"
        },
        {
          name: "always",
          description: "大量"
        }
      ],
      selected: 2,
      order: 8,
      image: "eyeofterror.png"
    },
    {
      name: "liefs",
      text: "树精守卫",
      group: "巨兽",
      options: [
        {
          name: "never",
          description: "无"
        },
        {
          name: "rare",
          description: "很少"
        },
        {
          name: "default",
          description: "默认"
        },
        {
          name: "often",
          description: "较多"
        },
        {
          name: "always",
          description: "大量"
        }
      ],
      selected: 2,
      order: 8,
      image: "liefs.png"
    },
    {
      name: "antliontribute",
      text: "蚁狮贡品",
      group: "巨兽",
      options: [
        {
          name: "never",
          description: "无"
        },
        {
          name: "rare",
          description: "很少"
        },
        {
          name: "default",
          description: "默认"
        },
        {
          name: "often",
          description: "较多"
        },
        {
          name: "always",
          description: "大量"
        }
      ],
      selected: 2,
      order: 8,
      image: "antliontribute.png"
    },
    {
      name: "beequeen",
      text: "蜂王",
      group: "巨兽",
      options: [
        {
          name: "never",
          description: "无"
        },
        {
          name: "rare",
          description: "很少"
        },
        {
          name: "default",
          description: "默认"
        },
        {
          name: "often",
          description: "较多"
        },
        {
          name: "always",
          description: "大量"
        }
      ],
      selected: 2,
      order: 8,
      image: "beequeen.png"
    },
    {
      name: "crabking",
      text: "帝王蟹",
      group: "巨兽",
      options: [
        {
          name: "never",
          description: "无"
        },
        {
          name: "rare",
          description: "很少"
        },
        {
          name: "default",
          description: "默认"
        },
        {
          name: "often",
          description: "较多"
        },
        {
          name: "always",
          description: "大量"
        }
      ],
      selected: 2,
      order: 8,
      image: "crabking.png"
    },
    {
      name: "deciduousmonster",
      text: "毒桦栗树",
      group: "巨兽",
      options: [
        {
          name: "never",
          description: "无"
        },
        {
          name: "rare",
          description: "很少"
        },
        {
          name: "default",
          description: "默认"
        },
        {
          name: "often",
          description: "较多"
        },
        {
          name: "always",
          description: "大量"
        }
      ],
      selected: 2,
      order: 8,
      image: "deciduousmonster.png"
    },
    {
      name: "hunger",
      text: "饥饿伤害",
      group: "冒险家",
      options: [
        {
          name: "nonlethal",
          description: "非致命"
        },
        {
          name: "default",
          description: "默认"
        }
      ],
      selected: 1,
      order: 2,
      image: "hunger.png"
    },
    {
      name: "extrastartingitems",
      text: "额外起始资源",
      group: "冒险家",
      options: [
        {
          name: "0",
          description: "总是"
        },
        {
          name: "5",
          description: "第5天后"
        },
        {
          name: "default",
          description: "第10天后"
        },
        {
          name: "15",
          description: "第15天后"
        },
        {
          name: "20",
          description: "第20天后"
        },
        {
          name: "none",
          description: "从不"
        }
      ],
      selected: 2,
      order: 2,
      image: "extrastartingitems.png"
    },
    {
      name: "dropeverythingondespawn",
      text: "离开游戏后物品掉落",
      group: "冒险家",
      options: [
        {
          name: "default",
          description: "默认"
        },
        {
          name: "always",
          description: "所有"
        }
      ],
      selected: 0,
      order: 2,
      image: "dropeverythingondespawn.png"
    },
    {
      name: "spawnprotection",
      text: "防骚扰出生保护",
      group: "冒险家",
      options: [
        {
          name: "never",
          description: "无"
        },
        {
          name: "default",
          description: "自动检测"
        },
        {
          name: "always",
          description: "总是"
        }
      ],
      selected: 1,
      order: 2,
      image: "spawnprotection.png"
    },
    {
      name: "lessdamagetaken",
      text: "受到的伤害",
      group: "冒险家",
      options: [
        {
          name: "always",
          description: "较少"
        },
        {
          name: "none",
          description: "默认"
        },
        {
          name: "more",
          description: "较多"
        }
      ],
      selected: 1,
      order: 2,
      image: "lessdamagetaken.png"
    },
    {
      name: "temperaturedamage",
      text: "温度伤害",
      group: "冒险家",
      options: [
        {
          name: "nonlethal",
          description: "非致命"
        },
        {
          name: "default",
          description: "默认"
        }
      ],
      selected: 1,
      order: 2,
      image: "temperaturedamage.png"
    },
    {
      name: "shadowcreatures",
      text: "理智怪兽",
      group: "冒险家",
      options: [
        {
          name: "never",
          description: "无"
        },
        {
          name: "rare",
          description: "很少"
        },
        {
          name: "default",
          description: "默认"
        },
        {
          name: "often",
          description: "较多"
        },
        {
          name: "always",
          description: "大量"
        }
      ],
      selected: 2,
      order: 2,
      image: "shadowcreatures.png"
    },
    {
      name: "brightmarecreatures",
      text: "启蒙怪兽",
      group: "冒险家",
      options: [
        {
          name: "never",
          description: "无"
        },
        {
          name: "rare",
          description: "很少"
        },
        {
          name: "default",
          description: "默认"
        },
        {
          name: "often",
          description: "较多"
        },
        {
          name: "always",
          description: "大量"
        }
      ],
      selected: 2,
      order: 2,
      image: "brightmarecreatures.png"
    },
    {
      name: "darkness",
      text: "黑暗伤害",
      group: "冒险家",
      options: [
        {
          name: "nonlethal",
          description: "非致命"
        },
        {
          name: "default",
          description: "默认"
        }
      ],
      selected: 1,
      order: 2,
      image: "darkness.png"
    },
    {
      name: "healthpenalty",
      text: "血量上限惩罚",
      group: "冒险家",
      options: [
        {
          name: "none",
          description: "禁用"
        },
        {
          name: "always",
          description: "启用"
        }
      ],
      selected: 1,
      order: 2,
      image: "healthpenalty.png"
    },
    {
      name: "seasonalstartingitems",
      text: "季节起始物品",
      group: "冒险家",
      options: [
        {
          name: "never",
          description: "无"
        },
        {
          name: "default",
          description: "默认"
        }
      ],
      selected: 1,
      order: 2,
      image: "seasonalstartingitems.png"
    },
    {
      name: "meteorshowers",
      text: "流星频率",
      group: "世界",
      options: [
        {
          name: "never",
          description: "无"
        },
        {
          name: "rare",
          description: "很少"
        },
        {
          name: "default",
          description: "默认"
        },
        {
          name: "often",
          description: "较多"
        },
        {
          name: "always",
          description: "大量"
        }
      ],
      selected: 2,
      order: 3,
      image: "meteorshowers.png"
    },
    {
      name: "petrification",
      text: "森林石化",
      group: "世界",
      options: [
        {
          name: "none",
          description: "无"
        },
        {
          name: "few",
          description: "慢"
        },
        {
          name: "default",
          description: "默认"
        },
        {
          name: "many",
          description: "快"
        },
        {
          name: "max",
          description: "极快"
        }
      ],
      selected: 2,
      order: 3,
      image: "petrification.png"
    },
    {
      name: "winterhounds",
      text: "冰猎犬群",
      group: "世界",
      options: [
        {
          name: "never",
          description: "无"
        },
        {
          name: "default",
          description: "默认"
        }
      ],
      selected: 1,
      order: 3,
      image: "winterhounds.png"
    },
    {
      name: "summerhounds",
      text: "火猎犬群",
      group: "世界",
      options: [
        {
          name: "never",
          description: "无"
        },
        {
          name: "default",
          description: "默认"
        }
      ],
      selected: 1,
      order: 3,
      image: "summerhounds.png"
    },
    {
      name: "hounds",
      text: "猎犬袭击",
      group: "世界",
      options: [
        {
          name: "never",
          description: "无"
        },
        {
          name: "rare",
          description: "很少"
        },
        {
          name: "default",
          description: "默认"
        },
        {
          name: "often",
          description: "较多"
        },
        {
          name: "always",
          description: "大量"
        }
      ],
      selected: 2,
      order: 3,
      image: "hounds.png"
    },
    {
      name: "lightning",
      text: "闪电",
      group: "世界",
      options: [
        {
          name: "never",
          description: "无"
        },
        {
          name: "rare",
          description: "很少"
        },
        {
          name: "default",
          description: "默认"
        },
        {
          name: "often",
          description: "较多"
        },
        {
          name: "always",
          description: "大量"
        }
      ],
      selected: 2,
      order: 3,
      image: "lightning.png"
    },
    {
      name: "alternatehunt",
      text: "追猎惊喜",
      group: "世界",
      options: [
        {
          name: "never",
          description: "无"
        },
        {
          name: "rare",
          description: "很少"
        },
        {
          name: "default",
          description: "默认"
        },
        {
          name: "often",
          description: "较多"
        },
        {
          name: "always",
          description: "大量"
        }
      ],
      selected: 2,
      order: 3,
      image: "alternatehunt.png"
    },
    {
      name: "weather",
      text: "雨",
      group: "世界",
      options: [
        {
          name: "never",
          description: "无"
        },
        {
          name: "rare",
          description: "很少"
        },
        {
          name: "default",
          description: "默认"
        },
        {
          name: "often",
          description: "较多"
        },
        {
          name: "always",
          description: "大量"
        }
      ],
      selected: 2,
      order: 3,
      image: "weather.png"
    },
    {
      name: "frograin",
      text: "青蛙雨",
      group: "世界",
      options: [
        {
          name: "never",
          description: "无"
        },
        {
          name: "rare",
          description: "很少"
        },
        {
          name: "default",
          description: "默认"
        },
        {
          name: "often",
          description: "较多"
        },
        {
          name: "always",
          description: "大量"
        }
      ],
      selected: 2,
      order: 3,
      image: "frograin.png"
    },
    {
      name: "wildfires",
      text: "野火",
      group: "世界",
      options: [
        {
          name: "never",
          description: "无"
        },
        {
          name: "rare",
          description: "很少"
        },
        {
          name: "default",
          description: "默认"
        },
        {
          name: "often",
          description: "较多"
        },
        {
          name: "always",
          description: "大量"
        }
      ],
      selected: 2,
      order: 3,
      image: "wildfires.png"
    },
    {
      name: "hunt",
      text: "狩猎",
      group: "世界",
      options: [
        {
          name: "never",
          description: "无"
        },
        {
          name: "rare",
          description: "很少"
        },
        {
          name: "default",
          description: "默认"
        },
        {
          name: "often",
          description: "较多"
        },
        {
          name: "always",
          description: "大量"
        }
      ],
      selected: 2,
      order: 3,
      image: "hunt.png"
    }
  ],
  cave: [
    {
      name: "monkey",
      text: "穴居猴桶",
      group: "生物以及刷新点",
      options: [
        {
          name: "never",
          description: "无"
        },
        {
          name: "rare",
          description: "很少"
        },
        {
          name: "uncommon",
          description: "较少"
        },
        {
          name: "default",
          description: "默认"
        },
        {
          name: "often",
          description: "较多"
        },
        {
          name: "mostly",
          description: "很多"
        },
        {
          name: "always",
          description: "大量"
        },
        {
          name: "insane",
          description: "疯狂"
        }
      ],
      selected: 3,
      order: 4,
      image: "monkey.png"
    },
    {
      name: "bunnymen",
      text: "兔屋",
      group: "生物以及刷新点",
      options: [
        {
          name: "never",
          description: "无"
        },
        {
          name: "rare",
          description: "很少"
        },
        {
          name: "uncommon",
          description: "较少"
        },
        {
          name: "default",
          description: "默认"
        },
        {
          name: "often",
          description: "较多"
        },
        {
          name: "mostly",
          description: "很多"
        },
        {
          name: "always",
          description: "大量"
        },
        {
          name: "insane",
          description: "疯狂"
        }
      ],
      selected: 3,
      order: 4,
      image: "bunnymen.png"
    },
    {
      name: "rocky",
      text: "石虾",
      group: "生物以及刷新点",
      options: [
        {
          name: "never",
          description: "无"
        },
        {
          name: "rare",
          description: "很少"
        },
        {
          name: "uncommon",
          description: "较少"
        },
        {
          name: "default",
          description: "默认"
        },
        {
          name: "often",
          description: "较多"
        },
        {
          name: "mostly",
          description: "很多"
        },
        {
          name: "always",
          description: "大量"
        },
        {
          name: "insane",
          description: "疯狂"
        }
      ],
      selected: 3,
      order: 4,
      image: "rocky.png"
    },
    {
      name: "slurtles",
      text: "蛞蝓龟窝",
      group: "生物以及刷新点",
      options: [
        {
          name: "never",
          description: "无"
        },
        {
          name: "rare",
          description: "很少"
        },
        {
          name: "uncommon",
          description: "较少"
        },
        {
          name: "default",
          description: "默认"
        },
        {
          name: "often",
          description: "较多"
        },
        {
          name: "mostly",
          description: "很多"
        },
        {
          name: "always",
          description: "大量"
        },
        {
          name: "insane",
          description: "疯狂"
        }
      ],
      selected: 3,
      order: 4,
      image: "slurtles.png"
    },
    {
      name: "slurper",
      text: "啜食者",
      group: "生物以及刷新点",
      options: [
        {
          name: "never",
          description: "无"
        },
        {
          name: "rare",
          description: "很少"
        },
        {
          name: "uncommon",
          description: "较少"
        },
        {
          name: "default",
          description: "默认"
        },
        {
          name: "often",
          description: "较多"
        },
        {
          name: "mostly",
          description: "很多"
        },
        {
          name: "always",
          description: "大量"
        },
        {
          name: "insane",
          description: "疯狂"
        }
      ],
      selected: 3,
      order: 4,
      image: "slurper.png"
    },
    {
      name: "cave_spiders",
      text: "蛛网岩",
      group: "敌对生物以及刷新点",
      options: [
        {
          name: "never",
          description: "无"
        },
        {
          name: "rare",
          description: "很少"
        },
        {
          name: "uncommon",
          description: "较少"
        },
        {
          name: "default",
          description: "默认"
        },
        {
          name: "often",
          description: "较多"
        },
        {
          name: "mostly",
          description: "很多"
        },
        {
          name: "always",
          description: "大量"
        },
        {
          name: "insane",
          description: "疯狂"
        }
      ],
      selected: 3,
      order: 5,
      image: "cave_spiders.png"
    },
    {
      name: "fissure",
      text: "梦魇裂隙",
      group: "敌对生物以及刷新点",
      options: [
        {
          name: "never",
          description: "无"
        },
        {
          name: "rare",
          description: "很少"
        },
        {
          name: "uncommon",
          description: "较少"
        },
        {
          name: "default",
          description: "默认"
        },
        {
          name: "often",
          description: "较多"
        },
        {
          name: "mostly",
          description: "很多"
        },
        {
          name: "always",
          description: "大量"
        },
        {
          name: "insane",
          description: "疯狂"
        }
      ],
      selected: 3,
      order: 5,
      image: "fissure.png"
    },
    {
      name: "tentacles",
      text: "触手",
      group: "敌对生物以及刷新点",
      options: [
        {
          name: "never",
          description: "无"
        },
        {
          name: "rare",
          description: "很少"
        },
        {
          name: "uncommon",
          description: "较少"
        },
        {
          name: "default",
          description: "默认"
        },
        {
          name: "often",
          description: "较多"
        },
        {
          name: "mostly",
          description: "很多"
        },
        {
          name: "always",
          description: "大量"
        },
        {
          name: "insane",
          description: "疯狂"
        }
      ],
      selected: 3,
      order: 5,
      image: "tentacles.png"
    },
    {
      name: "spiders",
      text: "蜘蛛巢",
      group: "敌对生物以及刷新点",
      options: [
        {
          name: "never",
          description: "无"
        },
        {
          name: "rare",
          description: "很少"
        },
        {
          name: "uncommon",
          description: "较少"
        },
        {
          name: "default",
          description: "默认"
        },
        {
          name: "often",
          description: "较多"
        },
        {
          name: "mostly",
          description: "很多"
        },
        {
          name: "always",
          description: "大量"
        },
        {
          name: "insane",
          description: "疯狂"
        }
      ],
      selected: 3,
      order: 5,
      image: "spiders.png"
    },
    {
      name: "worms",
      text: "洞穴蠕虫",
      group: "敌对生物以及刷新点",
      options: [
        {
          name: "never",
          description: "无"
        },
        {
          name: "rare",
          description: "很少"
        },
        {
          name: "uncommon",
          description: "较少"
        },
        {
          name: "default",
          description: "默认"
        },
        {
          name: "often",
          description: "较多"
        },
        {
          name: "mostly",
          description: "很多"
        },
        {
          name: "always",
          description: "大量"
        },
        {
          name: "insane",
          description: "疯狂"
        }
      ],
      selected: 3,
      order: 5,
      image: "worms.png"
    },
    {
      name: "bats",
      text: "蝙蝠",
      group: "敌对生物以及刷新点",
      options: [
        {
          name: "never",
          description: "无"
        },
        {
          name: "rare",
          description: "很少"
        },
        {
          name: "uncommon",
          description: "较少"
        },
        {
          name: "default",
          description: "默认"
        },
        {
          name: "often",
          description: "较多"
        },
        {
          name: "mostly",
          description: "很多"
        },
        {
          name: "always",
          description: "大量"
        },
        {
          name: "insane",
          description: "疯狂"
        }
      ],
      selected: 3,
      order: 5,
      image: "bats.png"
    },
    {
      name: "chess",
      text: "发条装置",
      group: "敌对生物以及刷新点",
      options: [
        {
          name: "never",
          description: "无"
        },
        {
          name: "rare",
          description: "很少"
        },
        {
          name: "uncommon",
          description: "较少"
        },
        {
          name: "default",
          description: "默认"
        },
        {
          name: "often",
          description: "较多"
        },
        {
          name: "mostly",
          description: "很多"
        },
        {
          name: "always",
          description: "大量"
        },
        {
          name: "insane",
          description: "疯狂"
        }
      ],
      selected: 3,
      order: 5,
      image: "chess.png"
    },
    {
      name: "branching",
      text: "分支",
      group: "世界",
      options: [
        {
          name: "never",
          description: "从不"
        },
        {
          name: "least",
          description: "最少"
        },
        {
          name: "default",
          description: "默认"
        },
        {
          name: "most",
          description: "最多"
        },
        {
          name: "random",
          description: "随机"
        }
      ],
      selected: 2,
      order: 2,
      image: "branching.png"
    },
    {
      name: "world_size",
      text: "世界大小",
      group: "世界",
      options: [
        {
          name: "small",
          description: "小"
        },
        {
          name: "medium",
          description: "中"
        },
        {
          name: "default",
          description: "大"
        },
        {
          name: "huge",
          description: "巨大"
        }
      ],
      selected: 2,
      order: 2,
      image: "world_size.png"
    },
    {
      name: "loop",
      text: "环形",
      group: "世界",
      options: [
        {
          name: "never",
          description: "从不"
        },
        {
          name: "default",
          description: "默认"
        },
        {
          name: "always",
          description: "总是"
        }
      ],
      selected: 1,
      order: 2,
      image: "loop.png"
    },
    {
      name: "task_set",
      text: "生物群落",
      group: "世界",
      options: [
        {
          name: "cave_default",
          description: "地下"
        }
      ],
      selected: 0,
      order: 2,
      image: "task_set.png"
    },
    {
      name: "touchstone",
      text: "试金石",
      group: "世界",
      options: [
        {
          name: "never",
          description: "无"
        },
        {
          name: "rare",
          description: "很少"
        },
        {
          name: "uncommon",
          description: "较少"
        },
        {
          name: "default",
          description: "默认"
        },
        {
          name: "often",
          description: "较多"
        },
        {
          name: "mostly",
          description: "很多"
        },
        {
          name: "always",
          description: "大量"
        },
        {
          name: "insane",
          description: "疯狂"
        }
      ],
      selected: 3,
      order: 2,
      image: "touchstone.png"
    },
    {
      name: "start_location",
      text: "出生点",
      group: "世界",
      options: [
        {
          name: "caves",
          description: "洞穴"
        }
      ],
      selected: 0,
      order: 2,
      image: "start_location.png"
    },
    {
      name: "cavelight",
      text: "洞穴光照",
      group: "世界",
      options: [
        {
          name: "never",
          description: "无"
        },
        {
          name: "veryslow",
          description: "极慢"
        },
        {
          name: "slow",
          description: "慢"
        },
        {
          name: "default",
          description: "默认"
        },
        {
          name: "fast",
          description: "快"
        },
        {
          name: "veryfast",
          description: "极快"
        }
      ],
      selected: 3,
      order: 2,
      image: "cavelight.png"
    },
    {
      name: "prefabswaps_start",
      text: "开始资源多样化",
      group: "世界",
      options: [
        {
          name: "classic",
          description: "经典"
        },
        {
          name: "default",
          description: "默认"
        },
        {
          name: "highly random",
          description: "非常随机"
        }
      ],
      selected: 1,
      order: 2,
      image: "prefabswaps_start.png"
    },
    {
      name: "boons",
      text: "失败的冒险家",
      group: "世界",
      options: [
        {
          name: "never",
          description: "无"
        },
        {
          name: "rare",
          description: "很少"
        },
        {
          name: "uncommon",
          description: "较少"
        },
        {
          name: "default",
          description: "默认"
        },
        {
          name: "often",
          description: "较多"
        },
        {
          name: "mostly",
          description: "很多"
        },
        {
          name: "always",
          description: "大量"
        },
        {
          name: "insane",
          description: "疯狂"
        }
      ],
      selected: 3,
      order: 2,
      image: "boons.png"
    },
    {
      name: "banana",
      text: "香蕉",
      group: "资源",
      options: [
        {
          name: "never",
          description: "无"
        },
        {
          name: "rare",
          description: "很少"
        },
        {
          name: "uncommon",
          description: "较少"
        },
        {
          name: "default",
          description: "默认"
        },
        {
          name: "often",
          description: "较多"
        },
        {
          name: "mostly",
          description: "很多"
        },
        {
          name: "always",
          description: "大量"
        },
        {
          name: "insane",
          description: "疯狂"
        }
      ],
      selected: 3,
      order: 3,
      image: "banana.png"
    },
    {
      name: "fern",
      text: "洞穴蕨类",
      group: "资源",
      options: [
        {
          name: "never",
          description: "无"
        },
        {
          name: "rare",
          description: "很少"
        },
        {
          name: "uncommon",
          description: "较少"
        },
        {
          name: "default",
          description: "默认"
        },
        {
          name: "often",
          description: "较多"
        },
        {
          name: "mostly",
          description: "很多"
        },
        {
          name: "always",
          description: "大量"
        },
        {
          name: "insane",
          description: "疯狂"
        }
      ],
      selected: 3,
      order: 3,
      image: "fern.png"
    },
    {
      name: "cave_ponds",
      text: "池塘",
      group: "资源",
      options: [
        {
          name: "never",
          description: "无"
        },
        {
          name: "rare",
          description: "很少"
        },
        {
          name: "uncommon",
          description: "较少"
        },
        {
          name: "default",
          description: "默认"
        },
        {
          name: "often",
          description: "较多"
        },
        {
          name: "mostly",
          description: "很多"
        },
        {
          name: "always",
          description: "大量"
        },
        {
          name: "insane",
          description: "疯狂"
        }
      ],
      selected: 3,
      order: 3,
      image: "cave_ponds.png"
    },
    {
      name: "flint",
      text: "燧石",
      group: "资源",
      options: [
        {
          name: "never",
          description: "无"
        },
        {
          name: "rare",
          description: "很少"
        },
        {
          name: "uncommon",
          description: "较少"
        },
        {
          name: "default",
          description: "默认"
        },
        {
          name: "often",
          description: "较多"
        },
        {
          name: "mostly",
          description: "很多"
        },
        {
          name: "always",
          description: "大量"
        },
        {
          name: "insane",
          description: "疯狂"
        }
      ],
      selected: 3,
      order: 3,
      image: "flint.png"
    },
    {
      name: "lichen",
      text: "苔藓",
      group: "资源",
      options: [
        {
          name: "never",
          description: "无"
        },
        {
          name: "rare",
          description: "很少"
        },
        {
          name: "uncommon",
          description: "较少"
        },
        {
          name: "default",
          description: "默认"
        },
        {
          name: "often",
          description: "较多"
        },
        {
          name: "mostly",
          description: "很多"
        },
        {
          name: "always",
          description: "大量"
        },
        {
          name: "insane",
          description: "疯狂"
        }
      ],
      selected: 3,
      order: 3,
      image: "lichen.png"
    },
    {
      name: "marshbush",
      text: "尖刺灌木",
      group: "资源",
      options: [
        {
          name: "never",
          description: "无"
        },
        {
          name: "rare",
          description: "很少"
        },
        {
          name: "uncommon",
          description: "较少"
        },
        {
          name: "default",
          description: "默认"
        },
        {
          name: "often",
          description: "较多"
        },
        {
          name: "mostly",
          description: "很多"
        },
        {
          name: "always",
          description: "大量"
        },
        {
          name: "insane",
          description: "疯狂"
        }
      ],
      selected: 3,
      order: 3,
      image: "marshbush.png"
    },
    {
      name: "mushtree",
      text: "蘑菇树",
      group: "资源",
      options: [
        {
          name: "never",
          description: "无"
        },
        {
          name: "rare",
          description: "很少"
        },
        {
          name: "uncommon",
          description: "较少"
        },
        {
          name: "default",
          description: "默认"
        },
        {
          name: "often",
          description: "较多"
        },
        {
          name: "mostly",
          description: "很多"
        },
        {
          name: "always",
          description: "大量"
        },
        {
          name: "insane",
          description: "疯狂"
        }
      ],
      selected: 3,
      order: 3,
      image: "mushtree.png"
    },
    {
      name: "trees",
      text: "树（所有）",
      group: "资源",
      options: [
        {
          name: "never",
          description: "无"
        },
        {
          name: "rare",
          description: "很少"
        },
        {
          name: "uncommon",
          description: "较少"
        },
        {
          name: "default",
          description: "默认"
        },
        {
          name: "often",
          description: "较多"
        },
        {
          name: "mostly",
          description: "很多"
        },
        {
          name: "always",
          description: "大量"
        },
        {
          name: "insane",
          description: "疯狂"
        }
      ],
      selected: 3,
      order: 3,
      image: "trees.png"
    },
    {
      name: "flower_cave",
      text: "荧光花",
      group: "资源",
      options: [
        {
          name: "never",
          description: "无"
        },
        {
          name: "rare",
          description: "很少"
        },
        {
          name: "uncommon",
          description: "较少"
        },
        {
          name: "default",
          description: "默认"
        },
        {
          name: "often",
          description: "较多"
        },
        {
          name: "mostly",
          description: "很多"
        },
        {
          name: "always",
          description: "大量"
        },
        {
          name: "insane",
          description: "疯狂"
        }
      ],
      selected: 3,
      order: 3,
      image: "flower_cave.png"
    },
    {
      name: "rock",
      text: "巨石",
      group: "资源",
      options: [
        {
          name: "never",
          description: "无"
        },
        {
          name: "rare",
          description: "很少"
        },
        {
          name: "uncommon",
          description: "较少"
        },
        {
          name: "default",
          description: "默认"
        },
        {
          name: "often",
          description: "较多"
        },
        {
          name: "mostly",
          description: "很多"
        },
        {
          name: "always",
          description: "大量"
        },
        {
          name: "insane",
          description: "疯狂"
        }
      ],
      selected: 3,
      order: 3,
      image: "rock.png"
    },
    {
      name: "reeds",
      text: "芦苇",
      group: "资源",
      options: [
        {
          name: "never",
          description: "无"
        },
        {
          name: "rare",
          description: "很少"
        },
        {
          name: "uncommon",
          description: "较少"
        },
        {
          name: "default",
          description: "默认"
        },
        {
          name: "often",
          description: "较多"
        },
        {
          name: "mostly",
          description: "很多"
        },
        {
          name: "always",
          description: "大量"
        },
        {
          name: "insane",
          description: "疯狂"
        }
      ],
      selected: 3,
      order: 3,
      image: "reeds.png"
    },
    {
      name: "sapling",
      text: "树苗",
      group: "资源",
      options: [
        {
          name: "never",
          description: "无"
        },
        {
          name: "rare",
          description: "很少"
        },
        {
          name: "uncommon",
          description: "较少"
        },
        {
          name: "default",
          description: "默认"
        },
        {
          name: "often",
          description: "较多"
        },
        {
          name: "mostly",
          description: "很多"
        },
        {
          name: "always",
          description: "大量"
        },
        {
          name: "insane",
          description: "疯狂"
        }
      ],
      selected: 3,
      order: 3,
      image: "sapling.png"
    },
    {
      name: "grass",
      text: "草",
      group: "资源",
      options: [
        {
          name: "never",
          description: "无"
        },
        {
          name: "rare",
          description: "很少"
        },
        {
          name: "uncommon",
          description: "较少"
        },
        {
          name: "default",
          description: "默认"
        },
        {
          name: "often",
          description: "较多"
        },
        {
          name: "mostly",
          description: "很多"
        },
        {
          name: "always",
          description: "大量"
        },
        {
          name: "insane",
          description: "疯狂"
        }
      ],
      selected: 3,
      order: 3,
      image: "grass.png"
    },
    {
      name: "mushroom",
      text: "蘑菇",
      group: "资源",
      options: [
        {
          name: "never",
          description: "无"
        },
        {
          name: "rare",
          description: "很少"
        },
        {
          name: "uncommon",
          description: "较少"
        },
        {
          name: "default",
          description: "默认"
        },
        {
          name: "often",
          description: "较多"
        },
        {
          name: "mostly",
          description: "很多"
        },
        {
          name: "always",
          description: "大量"
        },
        {
          name: "insane",
          description: "疯狂"
        }
      ],
      selected: 3,
      order: 3,
      image: "mushroom.png"
    },
    {
      name: "berrybush",
      text: "浆果丛",
      group: "资源",
      options: [
        {
          name: "never",
          description: "无"
        },
        {
          name: "rare",
          description: "很少"
        },
        {
          name: "uncommon",
          description: "较少"
        },
        {
          name: "default",
          description: "默认"
        },
        {
          name: "often",
          description: "较多"
        },
        {
          name: "mostly",
          description: "很多"
        },
        {
          name: "always",
          description: "大量"
        },
        {
          name: "insane",
          description: "疯狂"
        }
      ],
      selected: 3,
      order: 3,
      image: "berrybush.png"
    },
    {
      name: "wormlights",
      text: "发光浆果",
      group: "资源",
      options: [
        {
          name: "never",
          description: "无"
        },
        {
          name: "rare",
          description: "很少"
        },
        {
          name: "uncommon",
          description: "较少"
        },
        {
          name: "default",
          description: "默认"
        },
        {
          name: "often",
          description: "较多"
        },
        {
          name: "mostly",
          description: "很多"
        },
        {
          name: "always",
          description: "大量"
        },
        {
          name: "insane",
          description: "疯狂"
        }
      ],
      selected: 3,
      order: 3,
      image: "wormlights.png"
    },
    {
      name: "bunnymen_setting",
      text: "兔人",
      group: "生物",
      options: [
        {
          name: "never",
          description: "无"
        },
        {
          name: "rare",
          description: "很少"
        },
        {
          name: "default",
          description: "默认"
        },
        {
          name: "often",
          description: "较多"
        },
        {
          name: "always",
          description: "大量"
        }
      ],
      selected: 2,
      order: 6,
      image: "bunnymen_setting.png"
    },
    {
      name: "slurtles_setting",
      text: "蛞蝓龟",
      group: "生物",
      options: [
        {
          name: "never",
          description: "无"
        },
        {
          name: "rare",
          description: "很少"
        },
        {
          name: "default",
          description: "默认"
        },
        {
          name: "often",
          description: "较多"
        },
        {
          name: "always",
          description: "大量"
        }
      ],
      selected: 2,
      order: 6,
      image: "slurtles_setting.png"
    },
    {
      name: "pigs_setting",
      text: "猪",
      group: "生物",
      options: [
        {
          name: "never",
          description: "无"
        },
        {
          name: "rare",
          description: "很少"
        },
        {
          name: "default",
          description: "默认"
        },
        {
          name: "often",
          description: "较多"
        },
        {
          name: "always",
          description: "大量"
        }
      ],
      selected: 2,
      order: 6,
      image: "pigs_setting.png"
    },
    {
      name: "monkey_setting",
      text: "穴居猴",
      group: "生物",
      options: [
        {
          name: "never",
          description: "无"
        },
        {
          name: "rare",
          description: "很少"
        },
        {
          name: "default",
          description: "默认"
        },
        {
          name: "often",
          description: "较多"
        },
        {
          name: "always",
          description: "大量"
        }
      ],
      selected: 2,
      order: 6,
      image: "monkey_setting.png"
    },
    {
      name: "moles_setting",
      text: "鼹鼠",
      group: "生物",
      options: [
        {
          name: "never",
          description: "无"
        },
        {
          name: "rare",
          description: "很少"
        },
        {
          name: "default",
          description: "默认"
        },
        {
          name: "often",
          description: "较多"
        },
        {
          name: "always",
          description: "大量"
        }
      ],
      selected: 2,
      order: 6,
      image: "moles_setting.png"
    },
    {
      name: "rocky_setting",
      text: "石虾",
      group: "生物",
      options: [
        {
          name: "never",
          description: "无"
        },
        {
          name: "rare",
          description: "很少"
        },
        {
          name: "default",
          description: "默认"
        },
        {
          name: "often",
          description: "较多"
        },
        {
          name: "always",
          description: "大量"
        }
      ],
      selected: 2,
      order: 6,
      image: "rocky_setting.png"
    },
    {
      name: "grassgekkos",
      text: "草壁虎转化",
      group: "生物",
      options: [
        {
          name: "never",
          description: "无"
        },
        {
          name: "rare",
          description: "很少"
        },
        {
          name: "default",
          description: "默认"
        },
        {
          name: "often",
          description: "较多"
        },
        {
          name: "always",
          description: "大量"
        }
      ],
      selected: 2,
      order: 6,
      image: "grassgekkos.png"
    },
    {
      name: "snurtles",
      text: "蜗牛龟",
      group: "生物",
      options: [
        {
          name: "never",
          description: "无"
        },
        {
          name: "rare",
          description: "很少"
        },
        {
          name: "default",
          description: "默认"
        },
        {
          name: "often",
          description: "较多"
        },
        {
          name: "always",
          description: "大量"
        }
      ],
      selected: 2,
      order: 6,
      image: "snurtles.png"
    },
    {
      name: "mushgnome",
      text: "蘑菇地精",
      group: "生物",
      options: [
        {
          name: "never",
          description: "无"
        },
        {
          name: "rare",
          description: "很少"
        },
        {
          name: "default",
          description: "默认"
        },
        {
          name: "often",
          description: "较多"
        },
        {
          name: "always",
          description: "大量"
        }
      ],
      selected: 2,
      order: 6,
      image: "mushgnome.png"
    },
    {
      name: "lightfliers",
      text: "球状光虫",
      group: "生物",
      options: [
        {
          name: "never",
          description: "无"
        },
        {
          name: "rare",
          description: "很少"
        },
        {
          name: "default",
          description: "默认"
        },
        {
          name: "often",
          description: "较多"
        },
        {
          name: "always",
          description: "大量"
        }
      ],
      selected: 2,
      order: 6,
      image: "lightfliers.png"
    },
    {
      name: "dustmoths",
      text: "尘蛾",
      group: "生物",
      options: [
        {
          name: "never",
          description: "无"
        },
        {
          name: "rare",
          description: "很少"
        },
        {
          name: "default",
          description: "默认"
        },
        {
          name: "often",
          description: "较多"
        },
        {
          name: "always",
          description: "大量"
        }
      ],
      selected: 2,
      order: 6,
      image: "dustmoths.png"
    },
    {
      name: "bats_setting",
      text: "蝙蝠",
      group: "敌对生物",
      options: [
        {
          name: "never",
          description: "无"
        },
        {
          name: "rare",
          description: "很少"
        },
        {
          name: "default",
          description: "默认"
        },
        {
          name: "often",
          description: "较多"
        },
        {
          name: "always",
          description: "大量"
        }
      ],
      selected: 2,
      order: 7,
      image: "bats_setting.png"
    },
    {
      name: "spider_dropper",
      text: "穴居悬蛛",
      group: "敌对生物",
      options: [
        {
          name: "never",
          description: "无"
        },
        {
          name: "rare",
          description: "很少"
        },
        {
          name: "default",
          description: "默认"
        },
        {
          name: "often",
          description: "较多"
        },
        {
          name: "always",
          description: "大量"
        }
      ],
      selected: 2,
      order: 7,
      image: "spider_dropper.png"
    },
    {
      name: "spider_hider",
      text: "洞穴蜘蛛",
      group: "敌对生物",
      options: [
        {
          name: "never",
          description: "无"
        },
        {
          name: "rare",
          description: "很少"
        },
        {
          name: "default",
          description: "默认"
        },
        {
          name: "often",
          description: "较多"
        },
        {
          name: "always",
          description: "大量"
        }
      ],
      selected: 2,
      order: 7,
      image: "spider_hider.png"
    },
    {
      name: "spider_spitter",
      text: "喷射蜘蛛",
      group: "敌对生物",
      options: [
        {
          name: "never",
          description: "无"
        },
        {
          name: "rare",
          description: "很少"
        },
        {
          name: "default",
          description: "默认"
        },
        {
          name: "often",
          description: "较多"
        },
        {
          name: "always",
          description: "大量"
        }
      ],
      selected: 2,
      order: 7,
      image: "spider_spitter.png"
    },
    {
      name: "molebats",
      text: "裸鼹蝠",
      group: "敌对生物",
      options: [
        {
          name: "never",
          description: "无"
        },
        {
          name: "rare",
          description: "很少"
        },
        {
          name: "default",
          description: "默认"
        },
        {
          name: "often",
          description: "较多"
        },
        {
          name: "always",
          description: "大量"
        }
      ],
      selected: 2,
      order: 7,
      image: "molebats.png"
    },
    {
      name: "spiders_setting",
      text: "蜘蛛",
      group: "敌对生物",
      options: [
        {
          name: "never",
          description: "无"
        },
        {
          name: "rare",
          description: "很少"
        },
        {
          name: "default",
          description: "默认"
        },
        {
          name: "often",
          description: "较多"
        },
        {
          name: "always",
          description: "大量"
        }
      ],
      selected: 2,
      order: 7,
      image: "spiders_setting.png"
    },
    {
      name: "nightmarecreatures",
      text: "遗迹梦魇",
      group: "敌对生物",
      options: [
        {
          name: "never",
          description: "无"
        },
        {
          name: "rare",
          description: "很少"
        },
        {
          name: "default",
          description: "默认"
        },
        {
          name: "often",
          description: "较多"
        },
        {
          name: "always",
          description: "大量"
        }
      ],
      selected: 2,
      order: 7,
      image: "nightmarecreatures.png"
    },
    {
      name: "spider_warriors",
      text: "蜘蛛战士",
      group: "敌对生物",
      options: [
        {
          name: "never",
          description: "无"
        },
        {
          name: "default",
          description: "默认"
        }
      ],
      selected: 1,
      order: 7,
      image: "spider_warriors.png"
    },
    {
      name: "merms",
      text: "鱼人",
      group: "敌对生物",
      options: [
        {
          name: "never",
          description: "无"
        },
        {
          name: "rare",
          description: "很少"
        },
        {
          name: "default",
          description: "默认"
        },
        {
          name: "often",
          description: "较多"
        },
        {
          name: "always",
          description: "大量"
        }
      ],
      selected: 2,
      order: 7,
      image: "merms.png"
    },
    {
      name: "mushtree_moon_regrowth",
      text: "月亮蘑菇树",
      group: "资源再生",
      options: [
        {
          name: "never",
          description: "无"
        },
        {
          name: "veryslow",
          description: "极慢"
        },
        {
          name: "slow",
          description: "慢"
        },
        {
          name: "default",
          description: "默认"
        },
        {
          name: "fast",
          description: "快"
        },
        {
          name: "veryfast",
          description: "极快"
        }
      ],
      selected: 3,
      order: 4,
      image: "mushtree_moon_regrowth.png"
    },
    {
      name: "mushtree_regrowth",
      text: "蘑菇树",
      group: "资源再生",
      options: [
        {
          name: "never",
          description: "无"
        },
        {
          name: "veryslow",
          description: "极慢"
        },
        {
          name: "slow",
          description: "慢"
        },
        {
          name: "default",
          description: "默认"
        },
        {
          name: "fast",
          description: "快"
        },
        {
          name: "veryfast",
          description: "极快"
        }
      ],
      selected: 3,
      order: 4,
      image: "mushtree_regrowth.png"
    },
    {
      name: "flower_cave_regrowth",
      text: "荧光花",
      group: "资源再生",
      options: [
        {
          name: "never",
          description: "无"
        },
        {
          name: "veryslow",
          description: "极慢"
        },
        {
          name: "slow",
          description: "慢"
        },
        {
          name: "default",
          description: "默认"
        },
        {
          name: "fast",
          description: "快"
        },
        {
          name: "veryfast",
          description: "极快"
        }
      ],
      selected: 3,
      order: 4,
      image: "flower_cave_regrowth.png"
    },
    {
      name: "regrowth",
      text: "重生速度",
      group: "资源再生",
      options: [
        {
          name: "never",
          description: "无"
        },
        {
          name: "veryslow",
          description: "极慢"
        },
        {
          name: "slow",
          description: "慢"
        },
        {
          name: "default",
          description: "默认"
        },
        {
          name: "fast",
          description: "快"
        },
        {
          name: "veryfast",
          description: "极快"
        }
      ],
      selected: 3,
      order: 4,
      image: "regrowth.png"
    },
    {
      name: "lightflier_flower_regrowth",
      text: "光虫花",
      group: "资源再生",
      options: [
        {
          name: "never",
          description: "无"
        },
        {
          name: "veryslow",
          description: "极慢"
        },
        {
          name: "slow",
          description: "慢"
        },
        {
          name: "default",
          description: "默认"
        },
        {
          name: "fast",
          description: "快"
        },
        {
          name: "veryfast",
          description: "极快"
        }
      ],
      selected: 3,
      order: 4,
      image: "lightflier_flower_regrowth.png"
    },
    {
      name: "toadstool",
      text: "毒菌蟾蜍",
      group: "巨兽",
      options: [
        {
          name: "never",
          description: "无"
        },
        {
          name: "rare",
          description: "很少"
        },
        {
          name: "default",
          description: "默认"
        },
        {
          name: "often",
          description: "较多"
        },
        {
          name: "always",
          description: "大量"
        }
      ],
      selected: 2,
      order: 8,
      image: "toadstool.png"
    },
    {
      name: "fruitfly",
      text: "果蝇王",
      group: "巨兽",
      options: [
        {
          name: "never",
          description: "无"
        },
        {
          name: "rare",
          description: "很少"
        },
        {
          name: "default",
          description: "默认"
        },
        {
          name: "often",
          description: "较多"
        },
        {
          name: "always",
          description: "大量"
        }
      ],
      selected: 2,
      order: 8,
      image: "fruitfly.png"
    },
    {
      name: "spiderqueen",
      text: "蜘蛛女王",
      group: "巨兽",
      options: [
        {
          name: "never",
          description: "无"
        },
        {
          name: "rare",
          description: "很少"
        },
        {
          name: "default",
          description: "默认"
        },
        {
          name: "often",
          description: "较多"
        },
        {
          name: "always",
          description: "大量"
        }
      ],
      selected: 2,
      order: 8,
      image: "spiderqueen.png"
    },
    {
      name: "liefs",
      text: "树精守卫",
      group: "巨兽",
      options: [
        {
          name: "never",
          description: "无"
        },
        {
          name: "rare",
          description: "很少"
        },
        {
          name: "default",
          description: "默认"
        },
        {
          name: "often",
          description: "较多"
        },
        {
          name: "always",
          description: "大量"
        }
      ],
      selected: 2,
      order: 8,
      image: "liefs.png"
    },
    {
      name: "atriumgate",
      text: "远古大门",
      group: "世界",
      options: [
        {
          name: "veryslow",
          description: "极慢"
        },
        {
          name: "slow",
          description: "慢"
        },
        {
          name: "default",
          description: "默认"
        },
        {
          name: "fast",
          description: "快"
        },
        {
          name: "veryfast",
          description: "极快"
        }
      ],
      selected: 2,
      order: 3,
      image: "atriumgate.png"
    },
    {
      name: "wormattacks",
      text: "洞穴蠕虫攻击",
      group: "世界",
      options: [
        {
          name: "never",
          description: "无"
        },
        {
          name: "rare",
          description: "很少"
        },
        {
          name: "default",
          description: "默认"
        },
        {
          name: "often",
          description: "较多"
        },
        {
          name: "always",
          description: "大量"
        }
      ],
      selected: 2,
      order: 3,
      image: "wormattacks.png"
    },
    {
      name: "weather",
      text: "雨",
      group: "世界",
      options: [
        {
          name: "never",
          description: "无"
        },
        {
          name: "rare",
          description: "很少"
        },
        {
          name: "default",
          description: "默认"
        },
        {
          name: "often",
          description: "较多"
        },
        {
          name: "always",
          description: "大量"
        }
      ],
      selected: 2,
      order: 3,
      image: "weather.png"
    },
    {
      name: "earthquakes",
      text: "地震",
      group: "世界",
      options: [
        {
          name: "never",
          description: "无"
        },
        {
          name: "rare",
          description: "很少"
        },
        {
          name: "default",
          description: "默认"
        },
        {
          name: "often",
          description: "较多"
        },
        {
          name: "always",
          description: "大量"
        }
      ],
      selected: 2,
      order: 3,
      image: "earthquakes.png"
    }
  ]
}

export const CavesDefault = `return {
  background_node_range={ 0, 1 },
  desc="探查洞穴…… 一起！",
  hideminimap=false,
  id="DST_CAVE",
  location="cave",
  max_playlist_position=999,
  min_playlist_position=0,
  name="洞穴",
  numrandom_set_pieces=0,
  override_level_string=false,
  overrides={
    atriumgate="default",
    banana="default",
    basicresource_regrowth="always",
    bats="default",
    bats_setting="default",
    beefaloheat="default",
    berrybush="default",
    boons="default",
    branching="default",
    brightmarecreatures="default",
    bunnymen="default",
    bunnymen_setting="default",
    cave_ponds="default",
    cave_spiders="default",
    cavelight="default",
    chess="default",
    crow_carnival="default",
    darkness="default",
    day="default",
    daywalker="default",
    dropeverythingondespawn="default",
    dustmoths="default",
    earthquakes="default",
    extrastartingitems="default",
    fern="default",
    fissure="default",
    flint="default",
    flower_cave="default",
    flower_cave_regrowth="default",
    fruitfly="default",
    ghostenabled="always",
    ghostsanitydrain="none",
    grass="default",
    grassgekkos="default",
    hallowed_nights="default",
    healthpenalty="always",
    hunger="default",
    krampus="default",
    layout_mode="RestrictNodesByKey",
    lessdamagetaken="none",
    lichen="default",
    liefs="default",
    lightflier_flower_regrowth="default",
    lightfliers="default",
    loop="default",
    marshbush="default",
    merms="default",
    molebats="default",
    moles_setting="default",
    monkey="default",
    monkey_setting="default",
    mushgnome="default",
    mushroom="default",
    mushtree="default",
    mushtree_moon_regrowth="default",
    mushtree_regrowth="default",
    nightmarecreatures="default",
    pigs_setting="default",
    portalresurection="always",
    prefabswaps_start="default",
    reeds="default",
    regrowth="default",
    resettime="none",
    rifts_enabled_cave="default",
    rifts_frequency_cave="default",
    roads="never",
    rock="default",
    rocky="default",
    rocky_setting="default",
    sapling="default",
    season_start="default",
    seasonalstartingitems="default",
    shadowcreatures="default",
    slurper="default",
    slurtles="default",
    slurtles_setting="default",
    snurtles="default",
    spawnmode="fixed",
    spawnprotection="default",
    specialevent="default",
    spider_dropper="default",
    spider_hider="default",
    spider_spitter="default",
    spider_warriors="default",
    spiderqueen="default",
    spiders="default",
    spiders_setting="default",
    start_location="caves",
    task_set="cave_default",
    temperaturedamage="default",
    tentacles="default",
    toadstool="default",
    touchstone="default",
    trees="default",
    weather="default",
    winters_feast="default",
    world_size="default",
    wormattacks="default",
    wormhole_prefab="tentacle_pillar",
    wormlights="default",
    worms="default",
    year_of_the_beefalo="default",
    year_of_the_bunnyman="default",
    year_of_the_carrat="default",
    year_of_the_catcoon="default",
    year_of_the_gobbler="default",
    year_of_the_pig="default",
    year_of_the_varg="default" 
  },
  required_prefabs={ "multiplayer_portal" },
  settings_desc="探查洞穴…… 一起！",
  settings_id="DST_CAVE",
  settings_name="洞穴",
  substitutes={  },
  version=4,
  worldgen_desc="探查洞穴…… 一起！",
  worldgen_id="DST_CAVE",
  worldgen_name="洞穴" 
}
`

export const MasterDefault = `return {
  desc="永不结束的饥荒沙盒模式。\
永远可以在绚丽之门复活。",
  hideminimap=false,
  id="ENDLESS",
  location="forest",
  max_playlist_position=999,
  min_playlist_position=0,
  name="无尽",
  numrandom_set_pieces=4,
  override_level_string=false,
  overrides={
    alternatehunt="default",
    angrybees="default",
    antliontribute="default",
    autumn="default",
    bananabush_portalrate="default",
    basicresource_regrowth="always",
    bats_setting="default",
    bearger="default",
    beefalo="default",
    beefaloheat="default",
    beequeen="default",
    bees="default",
    bees_setting="default",
    berrybush="default",
    birds="default",
    boons="default",
    branching="default",
    brightmarecreatures="default",
    bunnymen_setting="default",
    butterfly="default",
    buzzard="default",
    cactus="default",
    cactus_regrowth="default",
    carrot="default",
    carrots_regrowth="default",
    catcoon="default",
    catcoons="default",
    chess="default",
    cookiecutters="default",
    crabking="default",
    crow_carnival="default",
    darkness="default",
    day="default",
    deciduousmonster="default",
    deciduoustree_regrowth="default",
    deerclops="default",
    dragonfly="default",
    dropeverythingondespawn="default",
    evergreen_regrowth="default",
    extrastartingitems="default",
    eyeofterror="default",
    fishschools="default",
    flint="default",
    flowers="default",
    flowers_regrowth="default",
    frograin="never",
    frogs="default",
    fruitfly="default",
    ghostenabled="always",
    ghostsanitydrain="none",
    gnarwail="default",
    goosemoose="default",
    grass="default",
    grassgekkos="default",
    hallowed_nights="default",
    has_ocean=true,
    healthpenalty="always",
    hound_mounds="default",
    houndmound="default",
    hounds="default",
    hunger="default",
    hunt="default",
    keep_disconnected_tiles=true,
    klaus="default",
    krampus="default",
    layout_mode="LinkNodesByKeys",
    lessdamagetaken="none",
    liefs="default",
    lightcrab_portalrate="default",
    lightning="default",
    lightninggoat="default",
    loop="default",
    lureplants="default",
    malbatross="default",
    marshbush="default",
    merm="default",
    merms="default",
    meteorshowers="default",
    meteorspawner="default",
    moles="default",
    moles_setting="default",
    monkeytail_portalrate="default",
    moon_berrybush="default",
    moon_bullkelp="default",
    moon_carrot="default",
    moon_fissure="default",
    moon_fruitdragon="default",
    moon_hotspring="default",
    moon_rock="default",
    moon_sapling="default",
    moon_spider="default",
    moon_spiders="default",
    moon_starfish="default",
    moon_tree="default",
    moon_tree_regrowth="default",
    mosquitos="default",
    mushroom="default",
    mutated_hounds="default",
    no_joining_islands=true,
    no_wormholes_to_disconnected_tiles=true,
    ocean_bullkelp="default",
    ocean_seastack="ocean_default",
    ocean_shoal="default",
    ocean_waterplant="ocean_default",
    ocean_wobsterden="default",
    palmcone_seed_portalrate="default",
    palmconetree="default",
    palmconetree_regrowth="default",
    penguins="default",
    penguins_moon="default",
    perd="default",
    petrification="default",
    pigs="default",
    pigs_setting="default",
    pirateraids="default",
    ponds="default",
    portal_spawnrate="default",
    portalresurection="always",
    powder_monkey_portalrate="default",
    prefabswaps_start="default",
    rabbits="default",
    rabbits_setting="default",
    reeds="default",
    reeds_regrowth="default",
    regrowth="default",
    resettime="none",
    rifts_enabled="default",
    rifts_frequency="default",
    roads="default",
    rock="default",
    rock_ice="default",
    saltstack_regrowth="default",
    sapling="default",
    season_start="default",
    seasonalstartingitems="default",
    shadowcreatures="default",
    sharks="default",
    spawnmode="fixed",
    spawnprotection="default",
    specialevent="default",
    spider_warriors="default",
    spiderqueen="default",
    spiders="default",
    spiders_setting="default",
    spring="default",
    squid="default",
    stageplays="default",
    start_location="default",
    summer="default",
    summerhounds="default",
    tallbirds="default",
    task_set="default",
    temperaturedamage="default",
    tentacles="default",
    terrariumchest="default",
    touchstone="default",
    trees="default",
    tumbleweed="default",
    twiggytrees_regrowth="default",
    walrus="default",
    walrus_setting="default",
    wasps="default",
    weather="default",
    wildfires="never",
    winter="default",
    winterhounds="default",
    winters_feast="default",
    wobsters="default",
    world_size="default",
    wormhole_prefab="wormhole",
    year_of_the_beefalo="default",
    year_of_the_bunnyman="default",
    year_of_the_carrat="default",
    year_of_the_catcoon="default",
    year_of_the_gobbler="default",
    year_of_the_pig="default",
    year_of_the_varg="default" 
  },
  playstyle="endless",
  random_set_pieces={
    "Sculptures_2",
    "Sculptures_3",
    "Sculptures_4",
    "Sculptures_5",
    "Chessy_1",
    "Chessy_2",
    "Chessy_3",
    "Chessy_4",
    "Chessy_5",
    "Chessy_6",
    "Maxwell1",
    "Maxwell2",
    "Maxwell3",
    "Maxwell4",
    "Maxwell6",
    "Maxwell7",
    "Warzone_1",
    "Warzone_2",
    "Warzone_3" 
  },
  required_prefabs={ "multiplayer_portal" },
  required_setpieces={ "Sculptures_1", "Maxwell5" },
  settings_desc="永不结束的饥荒沙盒模式。\
永远可以在绚丽之门复活。",
  settings_id="ENDLESS",
  settings_name="无尽",
  substitutes={  },
  version=4,
  worldgen_desc="永不结束的饥荒沙盒模式。\
永远可以在绚丽之门复活。",
  worldgen_id="ENDLESS",
  worldgen_name="无尽" 
}`

export const DeployCreateDefault: DeployCreate = {
  "cluster": {
    "cluster_token": "",
    "ini": {
      "game_mode": "endless",
      "max_players": 6,
      "pvp": false,
      "pause_when_empty": true,
      "vote_enabled": false,
      "lan_only_cluster": false,
      "cluster_password": "",
      "cluster_description": "",
      "cluster_name": "",
      "offline_cluster": false,
      "cluster_language": "zh",
      "console_enabled": true,
      "shard_enabled": true,
      "bind_ip": "127.0.0.1",
      "master_ip": "127.0.0.1",
      "master_port": -1,
      "cluster_key": "defaultPass"
    },
    "world": [
      {
        "leveldataoverride": "return {\n  desc=\"永不结束的饥荒沙盒模式。永远可以在绚丽之门复活。\",\n  hideminimap=false,\n  id=\"ENDLESS\",\n  location=\"forest\",\n  max_playlist_position=999,\n  min_playlist_position=0,\n  name=\"无尽\",\n  numrandom_set_pieces=4,\n  override_level_string=false,\n  overrides={\n    alternatehunt=\"default\",\n    angrybees=\"default\",\n    antliontribute=\"default\",\n    autumn=\"default\",\n    bananabush_portalrate=\"default\",\n    basicresource_regrowth=\"always\",\n    bats_setting=\"default\",\n    bearger=\"default\",\n    beefalo=\"default\",\n    beefaloheat=\"default\",\n    beequeen=\"default\",\n    bees=\"default\",\n    bees_setting=\"default\",\n    berrybush=\"default\",\n    birds=\"default\",\n    boons=\"default\",\n    branching=\"default\",\n    brightmarecreatures=\"default\",\n    bunnymen_setting=\"default\",\n    butterfly=\"default\",\n    buzzard=\"default\",\n    cactus=\"default\",\n    cactus_regrowth=\"default\",\n    carrot=\"default\",\n    carrots_regrowth=\"default\",\n    catcoon=\"default\",\n    catcoons=\"default\",\n    chess=\"default\",\n    cookiecutters=\"default\",\n    crabking=\"default\",\n    crow_carnival=\"default\",\n    darkness=\"default\",\n    day=\"default\",\n    deciduousmonster=\"default\",\n    deciduoustree_regrowth=\"default\",\n    deerclops=\"default\",\n    dragonfly=\"default\",\n    dropeverythingondespawn=\"default\",\n    evergreen_regrowth=\"default\",\n    extrastartingitems=\"default\",\n    eyeofterror=\"default\",\n    fishschools=\"default\",\n    flint=\"default\",\n    flowers=\"default\",\n    flowers_regrowth=\"default\",\n    frograin=\"never\",\n    frogs=\"default\",\n    fruitfly=\"default\",\n    ghostenabled=\"always\",\n    ghostsanitydrain=\"none\",\n    gnarwail=\"default\",\n    goosemoose=\"default\",\n    grass=\"default\",\n    grassgekkos=\"default\",\n    hallowed_nights=\"default\",\n    has_ocean=true,\n    healthpenalty=\"always\",\n    hound_mounds=\"default\",\n    houndmound=\"default\",\n    hounds=\"default\",\n    hunger=\"default\",\n    hunt=\"default\",\n    keep_disconnected_tiles=true,\n    klaus=\"default\",\n    krampus=\"default\",\n    layout_mode=\"LinkNodesByKeys\",\n    lessdamagetaken=\"none\",\n    liefs=\"default\",\n    lightcrab_portalrate=\"default\",\n    lightning=\"default\",\n    lightninggoat=\"default\",\n    loop=\"default\",\n    lureplants=\"default\",\n    malbatross=\"default\",\n    marshbush=\"default\",\n    merm=\"default\",\n    merms=\"default\",\n    meteorshowers=\"default\",\n    meteorspawner=\"default\",\n    moles=\"default\",\n    moles_setting=\"default\",\n    monkeytail_portalrate=\"default\",\n    moon_berrybush=\"default\",\n    moon_bullkelp=\"default\",\n    moon_carrot=\"default\",\n    moon_fissure=\"default\",\n    moon_fruitdragon=\"default\",\n    moon_hotspring=\"default\",\n    moon_rock=\"default\",\n    moon_sapling=\"default\",\n    moon_spider=\"default\",\n    moon_spiders=\"default\",\n    moon_starfish=\"default\",\n    moon_tree=\"default\",\n    moon_tree_regrowth=\"default\",\n    mosquitos=\"default\",\n    mushroom=\"default\",\n    mutated_hounds=\"default\",\n    no_joining_islands=true,\n    no_wormholes_to_disconnected_tiles=true,\n    ocean_bullkelp=\"default\",\n    ocean_seastack=\"ocean_default\",\n    ocean_shoal=\"default\",\n    ocean_waterplant=\"ocean_default\",\n    ocean_wobsterden=\"default\",\n    palmcone_seed_portalrate=\"default\",\n    palmconetree=\"default\",\n    palmconetree_regrowth=\"default\",\n    penguins=\"default\",\n    penguins_moon=\"default\",\n    perd=\"default\",\n    petrification=\"default\",\n    pigs=\"default\",\n    pigs_setting=\"default\",\n    pirateraids=\"default\",\n    ponds=\"default\",\n    portal_spawnrate=\"default\",\n    portalresurection=\"always\",\n    powder_monkey_portalrate=\"default\",\n    prefabswaps_start=\"default\",\n    rabbits=\"default\",\n    rabbits_setting=\"default\",\n    reeds=\"default\",\n    reeds_regrowth=\"default\",\n    regrowth=\"default\",\n    resettime=\"none\",\n    rifts_enabled=\"default\",\n    rifts_frequency=\"default\",\n    roads=\"default\",\n    rock=\"default\",\n    rock_ice=\"default\",\n    saltstack_regrowth=\"default\",\n    sapling=\"default\",\n    season_start=\"default\",\n    seasonalstartingitems=\"default\",\n    shadowcreatures=\"default\",\n    sharks=\"default\",\n    spawnmode=\"fixed\",\n    spawnprotection=\"default\",\n    specialevent=\"default\",\n    spider_warriors=\"default\",\n    spiderqueen=\"default\",\n    spiders=\"default\",\n    spiders_setting=\"default\",\n    spring=\"default\",\n    squid=\"default\",\n    stageplays=\"default\",\n    start_location=\"default\",\n    summer=\"default\",\n    summerhounds=\"default\",\n    tallbirds=\"default\",\n    task_set=\"default\",\n    temperaturedamage=\"default\",\n    tentacles=\"default\",\n    terrariumchest=\"default\",\n    touchstone=\"default\",\n    trees=\"default\",\n    tumbleweed=\"default\",\n    twiggytrees_regrowth=\"default\",\n    walrus=\"default\",\n    walrus_setting=\"default\",\n    wasps=\"default\",\n    weather=\"default\",\n    wildfires=\"never\",\n    winter=\"default\",\n    winterhounds=\"default\",\n    winters_feast=\"default\",\n    wobsters=\"default\",\n    world_size=\"default\",\n    wormhole_prefab=\"wormhole\",\n    year_of_the_beefalo=\"default\",\n    year_of_the_bunnyman=\"default\",\n    year_of_the_carrat=\"default\",\n    year_of_the_catcoon=\"default\",\n    year_of_the_gobbler=\"default\",\n    year_of_the_pig=\"default\",\n    year_of_the_varg=\"default\" \n  },\n  playstyle=\"endless\",\n  random_set_pieces={\n    \"Sculptures_2\",\n    \"Sculptures_3\",\n    \"Sculptures_4\",\n    \"Sculptures_5\",\n    \"Chessy_1\",\n    \"Chessy_2\",\n    \"Chessy_3\",\n    \"Chessy_4\",\n    \"Chessy_5\",\n    \"Chessy_6\",\n    \"Maxwell1\",\n    \"Maxwell2\",\n    \"Maxwell3\",\n    \"Maxwell4\",\n    \"Maxwell6\",\n    \"Maxwell7\",\n    \"Warzone_1\",\n    \"Warzone_2\",\n    \"Warzone_3\" \n  },\n  required_prefabs={ \"multiplayer_portal\" },\n  required_setpieces={ \"Sculptures_1\", \"Maxwell5\" },\n  settings_desc=\"永不结束的饥荒沙盒模式。永远可以在绚丽之门复活。\",\n  settings_id=\"ENDLESS\",\n  settings_name=\"无尽\",\n  substitutes={  },\n  version=4,\n  worldgen_desc=\"永不结束的饥荒沙盒模式。永远可以在绚丽之门复活。\",\n  worldgen_id=\"ENDLESS\",\n  worldgen_name=\"无尽\" \n}",
        "modoverrides": "return {  }",
        "id": "1",
        "name": "Master",
        "is_master": true,
        "server_port": 10999,
        "master_server_port": 27016,
        "authentication_port": 8766,
        "encode_user_path": true,
        "type": "Master",
        "version": "",
        "docker_api": "unix:///var/run/docker.sock",
        "container": ""
      },
      {
        "leveldataoverride": "return {\n  background_node_range={ 0, 1 },\n  desc=\"探查洞穴…… 一起！\",\n  hideminimap=false,\n  id=\"DST_CAVE\",\n  location=\"cave\",\n  max_playlist_position=999,\n  min_playlist_position=0,\n  name=\"洞穴\",\n  numrandom_set_pieces=0,\n  override_level_string=false,\n  overrides={\n    atriumgate=\"default\",\n    banana=\"default\",\n    basicresource_regrowth=\"always\",\n    bats=\"default\",\n    bats_setting=\"default\",\n    beefaloheat=\"default\",\n    berrybush=\"default\",\n    boons=\"default\",\n    branching=\"default\",\n    brightmarecreatures=\"default\",\n    bunnymen=\"default\",\n    bunnymen_setting=\"default\",\n    cave_ponds=\"default\",\n    cave_spiders=\"default\",\n    cavelight=\"default\",\n    chess=\"default\",\n    crow_carnival=\"default\",\n    darkness=\"default\",\n    day=\"default\",\n    daywalker=\"default\",\n    dropeverythingondespawn=\"default\",\n    dustmoths=\"default\",\n    earthquakes=\"default\",\n    extrastartingitems=\"default\",\n    fern=\"default\",\n    fissure=\"default\",\n    flint=\"default\",\n    flower_cave=\"default\",\n    flower_cave_regrowth=\"default\",\n    fruitfly=\"default\",\n    ghostenabled=\"always\",\n    ghostsanitydrain=\"none\",\n    grass=\"default\",\n    grassgekkos=\"default\",\n    hallowed_nights=\"default\",\n    healthpenalty=\"always\",\n    hunger=\"default\",\n    krampus=\"default\",\n    layout_mode=\"RestrictNodesByKey\",\n    lessdamagetaken=\"none\",\n    lichen=\"default\",\n    liefs=\"default\",\n    lightflier_flower_regrowth=\"default\",\n    lightfliers=\"default\",\n    loop=\"default\",\n    marshbush=\"default\",\n    merms=\"default\",\n    molebats=\"default\",\n    moles_setting=\"default\",\n    monkey=\"default\",\n    monkey_setting=\"default\",\n    mushgnome=\"default\",\n    mushroom=\"default\",\n    mushtree=\"default\",\n    mushtree_moon_regrowth=\"default\",\n    mushtree_regrowth=\"default\",\n    nightmarecreatures=\"default\",\n    pigs_setting=\"default\",\n    portalresurection=\"always\",\n    prefabswaps_start=\"default\",\n    reeds=\"default\",\n    regrowth=\"default\",\n    resettime=\"none\",\n    rifts_enabled_cave=\"default\",\n    rifts_frequency_cave=\"default\",\n    roads=\"never\",\n    rock=\"default\",\n    rocky=\"default\",\n    rocky_setting=\"default\",\n    sapling=\"default\",\n    season_start=\"default\",\n    seasonalstartingitems=\"default\",\n    shadowcreatures=\"default\",\n    slurper=\"default\",\n    slurtles=\"default\",\n    slurtles_setting=\"default\",\n    snurtles=\"default\",\n    spawnmode=\"fixed\",\n    spawnprotection=\"default\",\n    specialevent=\"default\",\n    spider_dropper=\"default\",\n    spider_hider=\"default\",\n    spider_spitter=\"default\",\n    spider_warriors=\"default\",\n    spiderqueen=\"default\",\n    spiders=\"default\",\n    spiders_setting=\"default\",\n    start_location=\"caves\",\n    task_set=\"cave_default\",\n    temperaturedamage=\"default\",\n    tentacles=\"default\",\n    toadstool=\"default\",\n    touchstone=\"default\",\n    trees=\"default\",\n    weather=\"default\",\n    winters_feast=\"default\",\n    world_size=\"default\",\n    wormattacks=\"default\",\n    wormhole_prefab=\"tentacle_pillar\",\n    wormlights=\"default\",\n    worms=\"default\",\n    year_of_the_beefalo=\"default\",\n    year_of_the_bunnyman=\"default\",\n    year_of_the_carrat=\"default\",\n    year_of_the_catcoon=\"default\",\n    year_of_the_gobbler=\"default\",\n    year_of_the_pig=\"default\",\n    year_of_the_varg=\"default\" \n  },\n  required_prefabs={ \"multiplayer_portal\" },\n  settings_desc=\"探查洞穴…… 一起！\",\n  settings_id=\"DST_CAVE\",\n  settings_name=\"洞穴\",\n  substitutes={  },\n  version=4,\n  worldgen_desc=\"探查洞穴…… 一起！\",\n  worldgen_id=\"DST_CAVE\",\n  worldgen_name=\"洞穴\" \n}\n",
        "modoverrides": "return {  }",
        "id": "2",
        "name": "Caves",
        "is_master": false,
        "server_port": 10999,
        "master_server_port": 27017,
        "authentication_port": 8767,
        "encode_user_path": true,
        "type": "Caves",
        "version": "",
        "docker_api": "unix:///var/run/docker.sock",
        "container": ""
      }
    ]
  },
  "status": "pending"
}
