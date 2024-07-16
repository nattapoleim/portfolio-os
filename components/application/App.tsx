import { cn } from '@/lib/utils'
import React, { FC } from 'react'

interface AppProps {
  title: string
  select: string
  onClick: () => void
  onDoubleClick: () => void
}

const App: FC<AppProps> = ({ title, select, onClick, onDoubleClick }) => {
  return (
    <section
      onClick={onClick}
      onDoubleClick={onDoubleClick}
      className={cn(
        'flex flex-col items-center cursor-pointer px-2 py-1 z-10',
        title === select && 'bg-primary-slate/30'
      )}
    >
      <div className="w-10 h-10 bg-primary-green rounded-sm"></div>
      <div className="text-sm mt-2 bg-transparent">{title}</div>
    </section>
  )
}

export default App
