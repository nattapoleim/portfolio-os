import { motion } from 'framer-motion'
import React from 'react'

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 20, 23, 30, 46, 65, 80, 100]

const NewLoading = () => {
  const maxNumber = Math.max(...numbers)
  return (
    <div className="w-full h-full flex items-center justify-center">
      {numbers.map((num, index) => (
        <motion.div
          initial={{ display: 'none' }}
          animate={{ display: ['none', 'block', 'none'] }}
          transition={{ delay: 0.3 + index * 0.2, duration: 0.2 }}
          key={index}
          className="absolute font-medium text-xl"
          style={{
            left: `${(num / maxNumber) * 93}%`,
          }}
        >
          {num}
        </motion.div>
      ))}
    </div>
  )
}

export default NewLoading
