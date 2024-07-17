import Clock from '@/components/clock/Clock'
import Link from 'next/link'
import { useState } from 'react'

const Taskbar = () => {
  const [taskOpen, setTaskOpen] = useState(false)

  return (
    <div className="h-14 absolute text-primary-green bottom-0 right-0 left-0 flex items-center justify-between bg-primary-lightestnavy px-4 py-3 gap-2 z-[999]">
      <div className="h-full content-center">
        <Link href="mailto:nattapol.eim@gmail.com">nattapol.eim@gmail.com</Link>
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

      <span className="h-full border-l-2 border-r-2 flex-1"></span>

      {/* CLOCK */}
      <div className="space-x-4 flex">
        <Clock className="font-semibold text-xl" />
      </div>
    </div>
  )
}

export default Taskbar
