'use client'

import React, { useEffect, useState } from 'react'

const Clock = () => {
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
  return <article className="text-lg font-medium">{time}</article>
}

export default Clock
