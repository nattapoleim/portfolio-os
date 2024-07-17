'use client'

import InitLoading from '@/components/initLoading/InitLoading'

import Taskbar from '@/components/taskbar/Taskbar'
import { motion } from 'framer-motion'
import { usePathname } from 'next/navigation'
import React, { FC, ReactNode, useEffect, useState } from 'react'

const ClientComponent: FC<{ children: ReactNode }> = ({ children }) => {
  const pathname = usePathname()
  const isHome = pathname === '/'
  const [isLoading, setIsLoading] = useState(isHome)
  const [isMobile, setIsMobile] = useState(false)

  const checkScreenSize = () => {
    setIsMobile(window.innerWidth <= 1024)
    console.log('check')
  }

  useEffect(() => {
    checkScreenSize()
  }, [])

  const finishLoading = () => {
    setIsLoading(false)
  }

  return (
    <div
      style={{
        height: `calc(window.innerHeight - 2.5rem)`,
        maxHeight: `calc(window.innerHeight - 2.5rem)`,
      }}
      className="w-screen"
    >
      {isLoading && isHome ? (
        <InitLoading finishLoading={finishLoading} isMobile={isMobile} />
      ) : (
        <motion.div
          className="h-full"
          initial={{ opacity: 0 }}
          animate={isLoading === false && { opacity: 1 }}
        >
          {children}
          {isMobile && <Taskbar />}
        </motion.div>
      )}
    </div>
  )
}

export default ClientComponent
