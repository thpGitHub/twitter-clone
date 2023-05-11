import {BsHouseFill, BsBellFill} from 'react-icons/bs'
import {FaUser} from 'react-icons/fa'
import SidebarLogo from './SidebarLogo'
import SidebarItem from './SideBarItem'

const Sidebar = () => {
  const items = [
    {
      label: 'home',
      href: '/',
      icon: BsHouseFill
    },
    {
      label: 'Notification',
      href: '/Notification',
      icon: BsBellFill
    },
    {
      label: 'Profile',
      href: '/users/123',
      icon: FaUser
    }
  ]

  return (
    <div className='col-span-1 h-full pr-4 md:pr-6'>
      <div className=' flex flex-col items-end'>
        <div className='space-y-2 lg:w-[230px]'>
          <SidebarLogo />
          {items.map((item) => (
            <SidebarItem 
              key={item.href}
              label={item.label}
              href={item.href}
              icon={item.icon}
            />
          ) )}
        </div>
      </div>
    </div>
  )
}

export default Sidebar