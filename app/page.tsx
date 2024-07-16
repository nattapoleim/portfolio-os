'use client'

import App from '@/components/application/App'
import Taskbar from '@/components/taskbar/Taskbar'
import { motion } from 'framer-motion'
import { useState } from 'react'

const appVariants = {
  open: { width: 700, height: 500, opacity: 1, bottom: '30%', left: '25%', display: 'block' },
  closed: { width: 0, height: 0, opacity: 0, bottom: '10%', left: '25%', display: 'none' },
}

export default function Home() {
  const [select, setSelect] = useState('')
  const [appOpen, setAppOpen] = useState(false)

  return (
    <main className="bg-red-50 w-full h-full p-4 flex relative">
      <div onClick={() => setSelect('')} className="absolute inset-0" />
      <div className="flex flex-col items-start gap-10">
        {Array.from({ length: 5 }).map((_, index) => (
          <App
            key={index}
            title={`App ${index + 1}`}
            select={select}
            onClick={() => setSelect(`App ${index + 1}`)}
            onDoubleClick={() => setAppOpen(true)}
          />
        ))}
      </div>
      <motion.div
        variants={appVariants}
        animate={appOpen ? 'open' : 'closed'}
        transition={{ duration: 0.4 }}
        className="absolute w-[700px] bottom-0 hidden h-[500px] bg-blue-600 z-20"
      >
        <nav className="bg-slate-400 w-full flex h-8 text-sm px-2  items-center justify-between">
          <span>Application</span>
          <div className="flex items-center gap-2">
            <div className="w-5 h-5 border flex items-center justify-center cursor-pointer">_</div>
            <div
              onClick={() => setAppOpen(false)}
              className="w-5 h-5 border flex items-center justify-center cursor-pointer"
            >
              X
            </div>
          </div>
        </nav>
        <div className="text-white">App Content</div>
      </motion.div>
    </main>
  )
}
