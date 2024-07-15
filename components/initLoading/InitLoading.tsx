'use client'

import { motion } from 'framer-motion'
import { FC } from 'react'

interface TInitLoading {
  finishLoading: () => void
}

const InitLoading: FC<TInitLoading> = ({ finishLoading }) => {
  setTimeout(() => {
    finishLoading()
  }, 5000)

  return (
    <motion.div
      animate={{ opacity: [1, 0], display: ['flex', 'none'] }}
      transition={{ delay: 4.5, duration: 0.5 }}
      className="h-screen w-screen bg-black flex-col flex text-white items-center justify-center"
    >
      <motion.div
        initial={{ opacity: 1 }}
        animate={{ opacity: 0, display: 'none' }}
        transition={{ delay: 3.05, duration: 0.5 }}
        className="w-full flex items-center justify-center flex-col"
      >
        <div className="mb-2 animate-pulse">Loading...</div>
        <div className="w-3/5 bg-slate-500 h-10">
          <motion.div
            initial={{ width: 0 }}
            animate={{
              width: '100%',
            }}
            transition={{ duration: 3, ease: 'easeInOut' }}
            className="w-10 h-full bg-green-400"
          />
        </div>
      </motion.div>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 3.6, duration: 0.5 }}
        className="text-2xl"
      >
        Welcome 👋🏻
      </motion.div>
    </motion.div>
  )
}

export default InitLoading
