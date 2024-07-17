'use client'

import { Application, OpenApplication } from '@/types/application'
import { AnimatePresence } from 'framer-motion'
import { useEffect, useRef, useState } from 'react'

// components
import About from '@/components/about/About'
import App from '@/components/application/App'
import MobileApp from '@/components/application/MobileApp'
import AppWindow from '@/components/appWindow/AppWindow'
import MobileAppWindow from '@/components/appWindow/MobileAppWindow'
import Clock from '@/components/clock/Clock'
import Contact from '@/components/contact/Contact'
import Projects from '@/components/projects/Projects'
import { BookUser, FolderOpenDot, User } from 'lucide-react'

const applications: Application[] = [
  { title: 'About', component: <About />, icon: <User /> },
  { title: 'Projects', component: <Projects />, icon: <FolderOpenDot /> },
  { title: `Contact`, component: <Contact />, icon: <BookUser /> },
]

const BASE_POSITION = { top: 50, left: 150 }
const OFFSET = 30

export default function Home() {
  const [selectedApp, setSelectedApp] = useState('')
  const [openApps, setOpenApps] = useState<OpenApplication[]>([])
  const [maxZIndex, setMaxZIndex] = useState(100)
  const [isMobile, setIsMobile] = useState(false)
  const [mobileAppOpen, setMobileAppOpen] = useState(false)
  const prevWidthRef = useRef(typeof window !== 'undefined' ? window.innerWidth : 0)

  useEffect(() => {
    const checkisMobile = () => {
      const currentWidth = window.innerWidth
      const prevWidth = prevWidthRef.current
      const newIsMobile = currentWidth <= 1024
      setIsMobile(newIsMobile)

      if (
        (prevWidth <= 1024 && currentWidth > 1024) ||
        (prevWidth > 1024 && currentWidth <= 1024)
      ) {
        setIsMobile(newIsMobile)
        refreshPage()
      }
    }

    checkisMobile()
    console.log(isMobile)

    window.addEventListener('resize', checkisMobile)

    return () => {
      window.removeEventListener('resize', checkisMobile)
    }
  }, [])

  const refreshPage = () => {
    window.location.reload()
  }

  const handlerOpenMobileApp = (app: Application) => {
    setOpenApps([])

    setOpenApps([{ ...app, position: { top: 0, left: 0 }, zIndex: 200 }])

    setMobileAppOpen(true)
  }

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

  const handleCloseMobileApp = () => {
    setOpenApps([])
    setMobileAppOpen(false)
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
    <main className="bg-primary-navy w-full h-full p-4 flex flex-col lg:flex-row relative">
      <div className="lg:absolute lg:right-10 flex flex-col items-center lg:items-end gap-2 font-semibold">
        <Clock className="text-8xl lg:text-5xl animate-pulse font-bold" />
        <p>Nattapol Eiamsa-ard</p>
        <p>{'<Vaan/>'}</p>
      </div>

      {!isMobile && <div onClick={() => setSelectedApp('')} className="absolute inset-0" />}

      <div className="flex flex-col lg:mt-0 lg:mb-0 mt-auto mb-14 items-center gap-10">
        {isMobile ? (
          <>
            {applications.map((app, index) => (
              <MobileApp
                key={app.title}
                title={app.title}
                icon={app.icon}
                onClick={() => handlerOpenMobileApp(app)}
                index={index}
              />
            ))}
          </>
        ) : (
          <>
            {applications.map(app => (
              <App
                key={app.title}
                title={app.title}
                select={selectedApp}
                onClick={() => setSelectedApp(app.title)}
                onDoubleClick={() => handlerOpenApp(app)}
              />
            ))}
          </>
        )}
      </div>
      {isMobile && mobileAppOpen && openApps.length > 0 ? (
        <AnimatePresence>
          <MobileAppWindow app={openApps[0]} onClose={handleCloseMobileApp}>
            {openApps[0].component}
          </MobileAppWindow>
        </AnimatePresence>
      ) : (
        <AnimatePresence>
          {openApps.map(app => (
            <AppWindow
              key={app.title}
              app={app}
              onClose={() => handleCloseApp(app)}
              onFocus={() => handleFocus(app)}
            >
              {app.component ? app.component : 'Content'}
            </AppWindow>
          ))}
        </AnimatePresence>
      )}

      <div className="text-6xl max-h-full opacity-30 font-extrabold absolute z-0 top-0 bottom-0 right-0 left-0 flex items-center mb-36 lg:mb-0 justify-center">
        <span>Hello .</span>
      </div>
    </main>
  )
}
