export type Application = {
  title: string
  component?: any
}

export type OpenApplication = Application & {
  position: {
    top: number
    left: number
  }
  zIndex: number
}
