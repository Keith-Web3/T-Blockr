'use client'
import { cn } from '@/lib/utils'
import {
  BookOpenTextIcon,
  Calendar,
  CalendarCheck2,
  Inbox,
  LucideIcon,
  Settings,
} from 'lucide-react'
import { usePathname } from 'next/navigation'
import Link from 'next/link'

const MenuItems = [
  {
    label: 'calendar',
    Icon: Calendar,
  },
  {
    label: 'inbox',
    Icon: Inbox,
  },
  {
    label: 'notes',
    Icon: BookOpenTextIcon,
  },
  {
    label: 'to do list',
    Icon: CalendarCheck2,
  },
  {
    label: 'setting',
    Icon: Settings,
  },
]

const Menu = function () {
  const pathname = usePathname()
  return (
    <div className="mt-8 flex flex-col space-y-4">
      {MenuItems.map(item => (
        <MenuItem
          key={item.label}
          {...item}
          isActive={`/${item.label}` === pathname}
        />
      ))}
    </div>
  )
}

const MenuItem = function ({
  label,
  Icon,
  isActive,
}: {
  label: string
  Icon: LucideIcon
  isActive: boolean
}) {
  return (
    <Link
      href={`/${label}`}
      className={cn(
        'flex items-center space-x-6 p-3 cursor-pointer rounded-md font-medium no-underline',
        isActive ? 'bg-gray-200' : ''
      )}
    >
      <Icon
        className={cn('stroke-[#7c7d7c]', isActive ? 'stroke-neutral-900' : '')}
      />
      <p
        className={cn(
          'text-[#525353] capitalize font-medium',
          isActive ? 'text-neutral-900' : ''
        )}
      >
        {label}
      </p>
    </Link>
  )
}

export default Menu
