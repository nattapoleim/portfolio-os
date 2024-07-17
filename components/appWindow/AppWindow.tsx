'use client'

import WindowNav from '@/components/appWindow/WindowNav'
import { cn } from '@/lib/utils'
import { OpenApplication } from '@/types/application'
import { motion, useDragControls } from 'framer-motion'
import { FC, MouseEvent, useRef, useState } from 'react'

interface AppWindowProps {
  app: OpenApplication
  onClose: () => void
  onFocus: () => void
  children: React.ReactNode
}

const MIN_WINDOW_SIZE = { width: 300, height: 200 }

const AppWindow: FC<AppWindowProps> = ({ app, onClose, onFocus, children }) => {
  const dragControls = useDragControls()
  const [windowSize, setWindowSize] = useState({ width: 700, height: 650 })
  const [isResizing, setIsResizing] = useState(false)
  const windowRef = useRef<HTMLDivElement>(null)
  const resizeRef = useRef({ width: 700, height: 500 })

  const handleResize = (mouseDownEvent: MouseEvent) => {
    setIsResizing(true)
    const startSize = { ...windowSize }
    const startPosition = { x: mouseDownEvent.clientX, y: mouseDownEvent.clientY }

    let rafId: number | null = null

    const onMouseMove = (mouseMoveEvent: globalThis.MouseEvent) => {
      if (rafId !== null) {
        cancelAnimationFrame(rafId)
      }

      rafId = requestAnimationFrame(() => {
        const newWidth = Math.max(
          startSize.width + mouseMoveEvent.clientX - startPosition.x,
          MIN_WINDOW_SIZE.width
        )
        const newHeight = Math.max(
          startSize.height + mouseMoveEvent.clientY - startPosition.y,
          MIN_WINDOW_SIZE.height
        )

        resizeRef.current = { width: newWidth, height: newHeight }

        if (windowRef.current) {
          windowRef.current.style.width = `${newWidth}px`
          windowRef.current.style.height = `${newHeight}px`
        }
      })
    }

    const onMouseUp = () => {
      document.removeEventListener('mousemove', onMouseMove)
      document.removeEventListener('mouseup', onMouseUp)
      setIsResizing(false)
      setWindowSize(resizeRef.current)
    }

    document.addEventListener('mousemove', onMouseMove)
    document.addEventListener('mouseup', onMouseUp)
  }

  return (
    <motion.div
      ref={windowRef}
      initial={{ opacity: 0, display: 'none', y: 500 }}
      animate={{
        opacity: 1,
        display: 'block',
        top: app.position.top,
        left: app.position.left,
        zIndex: app.zIndex,
        y: 0,
      }}
      exit={{ opacity: 0, display: 'none', y: 500 }}
      transition={{ duration: 0.5, type: 'spring' }}
      dragMomentum={false}
      drag
      dragControls={dragControls}
      dragListener={false}
      style={{
        width: `${windowSize.width}px`,
        height: `${windowSize.height}px`,
      }}
      className={cn(
        'absolute border hidden overflow-hidden rounded-md z-20',
        isResizing && 'select-none'
      )}
      onMouseDown={onFocus}
    >
      {/* WINDOW BAR */}
      <WindowNav title={app.title} dragControls={dragControls} onClose={onClose} />
      {/* CONTENT */}
      <motion.div
        drag={false}
        className="text-white p-2 bg-primary-lightnavy h-full overflow-scroll z-20"
      >
        {children}
      </motion.div>
      <div
        className="absolute bottom-0 right-0 w-4 h-4 cursor-se-resize"
        onMouseDown={handleResize}
      />
    </motion.div>
  )
}

export default AppWindow
