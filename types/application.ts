export type Application = {
  title: string
  component?: any
  icon: React.ReactNode
}

export type OpenApplication = Application & {
  position: {
    top: number
    left: number
  }
  zIndex: number
}
