import mitt from "mitt"

type Events = {
  [key: string]: any
}

export const event = mitt<Events>()
