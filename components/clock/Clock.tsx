'use client'

import React, { FC, useEffect, useState } from 'react'

const Clock: FC<{ className?: string }> = ({ className }) => {
  const [time, setTime] = useState<string>('')

  useEffect(() => {
    const updateClock = () => {
      const now = new Date()
      setTime(now.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }))
    }

    updateClock()
    const timerId = setInterval(updateClock, 1000)

    return () => clearInterval(timerId)
  }, [])
  return <article className={className}>{time}</article>
}

export default Clock
