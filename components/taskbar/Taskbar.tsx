import Clock from '@/components/clock/Clock'
import { Mail } from 'lucide-react'
import Link from 'next/link'
import { useState } from 'react'

const Taskbar = () => {
  const [taskOpen, setTaskOpen] = useState(false)

  return (
    <div className="h-10 lg:h-14 absolute text-primary-green bottom-0 right-0 left-0 flex items-center justify-between bg-primary-lightestnavy px-4 py-2 lg:py-3 gap-2 z-[9999]">
      <div className="h-full content-center">
        <Link className="text-sm flex items-center gap-4" href="mailto:nattapol.eim@gmail.com">
          <Mail size={18} /> nattapol.eim@gmail.com
        </Link>
        {/* MENU Button */}
        {/* <div className="h-full flex items-center">
          <button
            onClick={() => setTaskOpen(!taskOpen)}
            className="bg-primary-lightnavy w-fit h-full flex items-center justify-center px-3 border rounded-sm hover:bg-primary-lightestnavy cursor-pointer"
          >
            MENU
          </button>
        </div> */}

        {/* MENU */}
        {/* <Menu taskOpen={taskOpen} setTaskOpen={setTaskOpen} /> */}
      </div>

      <span className="h-full lg:border-l-2 border-r-2 flex-1"></span>

      {/* CLOCK */}
      <div className="space-x-4 flex">
        <Clock className="font-semibold lg:text-xl" />
      </div>
    </div>
  )
}

export default Taskbar
