'use client'

import { motion } from 'framer-motion'
import React from 'react'

interface TMenu {
  taskOpen: boolean
  setTaskOpen: (open: boolean) => void
}

const taskVariants = {
  open: { width: '20rem', height: '24rem', display: 'flex', opacity: 1 },
  closed: { width: 0, height: 0, display: 'none', opacity: 0 },
}

const Menu = ({ taskOpen, setTaskOpen }: TMenu) => {
  return (
    <motion.div
      variants={taskVariants}
      animate={taskOpen ? 'open' : 'closed'}
      transition={{ duration: 0.5, type: 'spring' }}
      className="absolute bg-primary-lightnavy rounded-tr-md border-t-2 border-r-2 z-50 left-0 bottom-14 hidden p-2 flex-col items-start gap-2"
    >
      {Array.from({ length: 3 }).map((_, index) => (
        <motion.div
          key={index}
          onClick={() => setTaskOpen(false)}
          className="cursor-pointer bg-inherit border w-full h-10 content-center rounded-sm hover:bg-primary-lightestnavy duration-300 px-4"
        >{`List ${index + 1}`}</motion.div>
      ))}
    </motion.div>
  )
}

export default Menu
