import { motion } from 'framer-motion'
import { FC } from 'react'

interface MobileAppProps {
  title: string
  icon: React.ReactNode
  onClick: () => void
  index: number
}

const MobileApp: FC<MobileAppProps> = ({ title, onClick, icon, index }) => {
  return (
    <motion.div
      initial={{ y: 200, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, delay: 0.1 * index }}
      className="border w-full py-4 rounded-sm flex items-center justify-center text-xl font-medium tracking-widest gap-4 z-10 cursor-pointer hover:bg-primary-lightestnavy duration-300"
      onClick={onClick}
    >
      {icon}
      {title}
    </motion.div>
  )
}

export default MobileApp
