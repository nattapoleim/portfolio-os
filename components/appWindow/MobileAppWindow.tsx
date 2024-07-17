import { OpenApplication } from '@/types/application'
import { motion, PanInfo } from 'framer-motion'
import { MoveRight } from 'lucide-react'
import React, { FC } from 'react'

interface MobileAppWindowProps {
  app: OpenApplication
  onClose: () => void
  children: React.ReactNode
}

const MobileAppWindow: FC<MobileAppWindowProps> = ({ app, onClose, children }) => {
  const handleDragEnd = (event: any, info: PanInfo) => {
    if (info.offset.y > 200) {
      onClose()
    }
  }

  return (
    <>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="absolute inset-0 bg-black/70 z-20"
        onClick={() => onClose()}
      />
      <motion.section
        initial={{ y: '100%' }}
        animate={{ y: 0 }}
        exit={{ y: '100%' }}
        transition={{ duration: 0.3 }}
        drag="y"
        dragConstraints={{
          top: 0,
          bottom: 0,
        }}
        dragElastic={0.8}
        onDragEnd={handleDragEnd}
        className="absolute bg-primary-navy inset-x-0 bottom-0 top-28 z-[1000] rounded-t-3xl overflow-hidden"
      >
        <div className="flex cursor-pointer p-3 items-center justify-center bg-primary-slate/20">
          <span className="bg-primary-lightestslate rounded-full w-20 h-2"></span>
        </div>
        <motion.div className="h-full overflow-scroll">{children}</motion.div>
      </motion.section>
    </>
  )
}

export default MobileAppWindow
