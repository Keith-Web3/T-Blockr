import { Plus, SlidersHorizontalIcon } from 'lucide-react'
import DatePickerWithPresets from './DatePicker'
import { Button } from '../ui/button'

interface HeaderProps {}

const Header = function ({}: HeaderProps) {
  return (
    <div className="flex items-center gap-x-4">
      <DatePickerWithPresets />
      <div className="rounded-md border border-input flex items-center space-x-2 cursor-pointer px-3 py-2">
        <SlidersHorizontalIcon className="h-5 w-5" />
        <p className="capitalize text-base font-medium">filter</p>
      </div>
      <Button className="capitalize flex items-center gap-2 font-medium text-white bg-indigo-600 ml-auto">
        create event
        <Plus />
      </Button>
    </div>
  )
}

export default Header
