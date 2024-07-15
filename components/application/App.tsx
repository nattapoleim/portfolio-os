import { cn } from '@/lib/utils'
import React from 'react'

interface TApp {
  title: string
  select: string
  onClick: () => void
  onDoubleClick: () => void
}

const App = ({ title, select, onClick, onDoubleClick }: TApp) => {
  return (
    <section
      onClick={onClick}
      onDoubleClick={onDoubleClick}
      className={cn(
        'flex flex-col items-center cursor-pointer px-2 py-1 z-10',
        title === select && 'bg-neutral-500/30'
      )}
    >
      <div className="w-10 h-10 bg-slate-700"></div>
      <div className="text-sm">{title}</div>
    </section>
  )
}

export default App
