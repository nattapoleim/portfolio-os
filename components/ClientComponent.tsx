'use client'

import InitLoading from '@/components/initLoading/InitLoading'
import Taskbar from '@/components/taskbar/Taskbar'
import { motion } from 'framer-motion'
import { usePathname } from 'next/navigation'
import React, { FC, ReactNode, useState } from 'react'

const ClientComponent: FC<{ children: ReactNode }> = ({ children }) => {
  const pathname = usePathname()
  const isHome = pathname === '/'
  const [isLoading, setIsLoading] = useState(isHome)
  // const [isLoading, setIsLoading] = useState(false)

  const finishLoading = () => {
    setIsLoading(false)
  }

  return (
    <div className={`h-screen max-h-screen w-screen`}>
      {isLoading && isHome ? (
        <InitLoading finishLoading={finishLoading} />
      ) : (
        <motion.div
          className="h-screen"
          initial={{ opacity: 0 }}
          animate={isLoading === false && { opacity: 1 }}
        >
          {children}
          <Taskbar />
        </motion.div>
      )}
    </div>
  )
}

export default ClientComponent
