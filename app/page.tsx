'use client'

import App from '@/components/application/App'
import AppWindow from '@/components/appWindow/AppWindow'
import Clock from '@/components/clock/Clock'
import { Application, OpenApplication } from '@/types/application'
import { AnimatePresence } from 'framer-motion'
import { useState } from 'react'

const applications: Application[] = [
  { title: 'About' },
  { title: 'Resume' },
  { title: 'Projects' },
  { title: 'Contact' },
]

const BASE_POSITION = { top: 50, left: 150 }
const OFFSET = 30

export default function Home() {
  const [selectedApp, setSelectedApp] = useState('')
  const [openApps, setOpenApps] = useState<OpenApplication[]>([])
  const [maxZIndex, setMaxZIndex] = useState(100)

  const handlerOpenApp = (app: Application) => {
    if (!openApps.some(openApp => openApp.title === app.title)) {
      const offset = OFFSET * openApps.length
      const newPosition = {
        top: BASE_POSITION.top + offset,
        left: BASE_POSITION.left + offset,
      }
      setMaxZIndex(prev => prev + 1)
      setOpenApps(prev => [...prev, { ...app, position: newPosition, zIndex: maxZIndex + 1 }])
    }
  }

  const handleCloseApp = (app: OpenApplication) => {
    setOpenApps(prevApp => prevApp.filter(openApp => openApp.title !== app.title))
  }

  const handleFocus = (focusedApp: OpenApplication) => {
    setMaxZIndex(prev => prev + 1)
    setOpenApps(prevApps =>
      prevApps.map(app =>
        app.title === focusedApp.title ? { ...app, zIndex: maxZIndex + 1 } : app
      )
    )
  }

  return (
    <main className="bg-primary-navy w-full h-full p-4 flex relative">
      <div onClick={() => setSelectedApp('')} className="absolute inset-0" />
      <div className="flex flex-col items-center gap-10">
        {applications.map(app => (
          <App
            key={app.title}
            title={app.title}
            select={selectedApp}
            onClick={() => setSelectedApp(app.title)}
            onDoubleClick={() => handlerOpenApp(app)}
          />
        ))}
      </div>
      <AnimatePresence>
        {openApps.map(app => (
          <AppWindow
            key={app.title}
            app={app}
            onClose={() => handleCloseApp(app)}
            onFocus={() => handleFocus(app)}
          />
        ))}
      </AnimatePresence>

      <div className="text-[15rem] opacity-30 font-extrabold absolute z-0 top-0 bottom-0 right-0 left-0 flex items-center justify-center">
        ^^a
      </div>

      {/* CLOCK */}
      <div className="absolute right-10 flex flex-col items-end gap-2 font-semibold">
        <Clock className="text-5xl animate-pulse font-bold" />
        <p>Nattapol Eiamsa-ard</p>
        <p>{'<Vaan/>'}</p>
      </div>
    </main>
  )
}
