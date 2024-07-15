'use client'

import InitLoading from '@/components/initLoading/InitLoading'
import Taskbar from '@/components/taskbar/Taskbar'
import { usePathname } from 'next/navigation'
import React, { FC, ReactNode, useState } from 'react'

const ClientComponent: FC<{ children: ReactNode }> = ({ children }) => {
  const pathname = usePathname()
  const isHome = pathname === '/'
  // const [isLoading, setIsLoading] = useState(isHome)
  const [isLoading, setIsLoading] = useState(false)

  const finishLoading = () => {
    setIsLoading(false)
  }

  return (
    <div className={`h-screen max-h-screen w-screen bg-green-200`}>
      {isLoading && isHome ? (
        <InitLoading finishLoading={finishLoading} />
      ) : (
        <>
          {children}
          <Taskbar />
        </>
      )}
    </div>
  )
}

export default ClientComponent
