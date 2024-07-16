'use client'

import Clock from '@/components/clock/Clock'
import { motion } from 'framer-motion'
import { useState } from 'react'

const taskVariants = {
  open: { width: '20rem', height: '24rem', display: 'flex', opacity: 1 },
  closed: { width: 0, height: 0, display: 'none', opacity: 0 },
}

const Taskbar = () => {
  const [taskOpen, setTaskOpen] = useState(false)

  return (
    <div className="h-14 absolute rounded-t-md bottom-0 right-0 left-0 flex items-center justify-between bg-blue-400 p-2">
      <div className="h-full">
        <div
          onClick={() => setTaskOpen(!taskOpen)}
          className="bg-blue-500 w-fit h-full flex items-center justify-center px-3 border hover:bg-blue-400/80 cursor-pointer"
        >
          START
        </div>
        <motion.div
          variants={taskVariants}
          animate={taskOpen ? 'open' : 'closed'}
          transition={{ duration: 0.5 }}
          className="absolute bg-red-500 z-50 left-0 bottom-14 hidden p-4 flex-col items-start gap-6"
        >
          {Array.from({ length: 3 }).map((_, index) => (
            <motion.div
              key={index}
              onClick={() => setTaskOpen(false)}
              className="cursor-pointer"
            >{`'list' ${index + 1}`}</motion.div>
          ))}
        </motion.div>
      </div>
      <div>
        <Clock />
      </div>
    </div>
  )
}

export default Taskbar
