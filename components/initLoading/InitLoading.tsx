'use client'

import { motion } from 'framer-motion'
import { FC } from 'react'

interface TInitLoading {
  finishLoading: () => void
}

const InitLoading: FC<TInitLoading> = ({ finishLoading }) => {
  setTimeout(() => {
    finishLoading()
  }, 5500)

  return (
    <motion.div
      animate={{ opacity: [1, 0], display: ['flex', 'none'] }}
      transition={{ delay: 5.4, duration: 0.5 }}
      className="h-screen w-screen bg-black flex-col flex text-white items-center justify-center"
    >
      <motion.div
        initial={{ opacity: 1 }}
        animate={{ opacity: 0, display: 'none' }}
        transition={{ delay: 2.05, duration: 0.5 }}
        className="w-full flex items-center justify-center flex-col"
      >
        <div className="mb-2 animate-pulse">Loading...</div>
        <div className="w-3/5 md:w-2/5 bg-slate-500 h-10">
          <motion.div
            initial={{ width: 0 }}
            animate={{
              width: '100%',
            }}
            transition={{ duration: 2, ease: 'easeInOut' }}
            className="w-10 h-full bg-green-400"
          />
        </div>
      </motion.div>
      <div className="text-9xl flex gap-2">
        {Array.from('WELCOME').map((letter, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0 }}
            animate={{ opacity: [0, 1, 1, 0] }}
            transition={{ delay: 2.6 + 0.1 * (index + 1), duration: 2 }}
          >
            {letter}
          </motion.div>
        ))}
      </div>
    </motion.div>
  )
}

export default InitLoading
