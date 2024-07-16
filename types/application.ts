export type Application = {
  title: string
}

export type OpenApplication = Application & {
  position: {
    top: number
    left: number
  }
  zIndex: number
}
