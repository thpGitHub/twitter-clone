import { IconType } from "react-icons"

type SidebarItemProps = {
    label: string
    href: string
    icon: IconType
}

const SidebarItem = ({label, href, icon}: SidebarItemProps) => {
  return (
    <div>SideBarItem</div>
  )
}

export default SidebarItem