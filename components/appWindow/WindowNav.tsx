import { DragControls } from 'framer-motion'
import React, { FC } from 'react'

interface WindowNavProps {
  title: string
  dragControls: DragControls
  onClose: () => void
}

const WindowNav: FC<WindowNavProps> = ({ title, dragControls, onClose }) => {
  return (
    <nav
      onPointerDown={e => {
        dragControls.start(e)
      }}
      className="bg-primary-lightestnavy w-full flex h-8 text-sm px-2 border-b items-center justify-between cursor-grab"
    >
      <span className="bg-inherit font-bold">{title}</span>
      <div className="flex items-center gap-2">
        <div
          onClick={onClose}
          className="w-5 h-5 border flex hover:bg-primary-green hover:text-primary-navy duration-300 items-center justify-center rounded-sm cursor-pointer"
        >
          X
        </div>
      </div>
    </nav>
  )
}

export default WindowNav
