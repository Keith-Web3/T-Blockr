import { UserButton } from '@clerk/nextjs'
import { AppWindowIcon, CalendarRange, SearchIcon } from 'lucide-react'
import { Input } from '../ui/input'
import Menu from './Menu'

interface SideBarProps {}

const SideBar = function ({}: SideBarProps) {
  return (
    <div className="bg-slate-50 w-[300px] h-full p-4 flex flex-col">
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-4">
          <div className="bg-rose-600 w-max rounded-sm p-[6px] grid place-content-center">
            <CalendarRange className="w-5 h-5" color="white" strokeWidth={2} />
          </div>
          <p className="font-semibold text-lg">Calencein</p>
        </div>
        <AppWindowIcon className="w-6" color="#a2a3a3" strokeWidth={2} />
      </div>
      <div className="mt-8 flex items-center relative">
        <SearchIcon
          className="absolute inset-[auto_auto_50%_1em] translate-y-1/2"
          color="#525353"
        />
        <Input
          className="rounded-lg pl-12 outline-none text-[#525353]"
          placeholder="Search"
        />
      </div>
      <Menu />
      <div className="mt-auto">
        <UserButton showName />
      </div>
    </div>
  )
}

export default SideBar
