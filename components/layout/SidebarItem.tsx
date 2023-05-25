import { useCallback } from "react"
import { useRouter } from "next/router"
import { IconType } from "react-icons"
import useCurrentUser from "@/hooks/useCurrentUser"
import useLoginModal from "@/hooks/useLoginModal"

type SidebarItemProps = {
    label: string
    href?: string
    icon: IconType
    onclick?: () => void
    auth?: boolean
}

const SidebarItem = ({label, href, icon: Icon, onclick, auth}: SidebarItemProps) => {
  const loginModal = useLoginModal()
  const {data: currentUser} = useCurrentUser()

  const router = useRouter()

  const handleClick = useCallback(() => {
    if (onclick) onclick()
    
    if (auth && !currentUser) {
      loginModal.onOpen()
    } else if (href) router.push(href)

  }, [onclick, href, router, auth, currentUser, loginModal])

  return (
    <div onClick={handleClick} className="flex flex-row items-center">
      <div className="
        flex 
        p-4 
        h-14
        w-14 
        relative 
        lg:hidden
        rounded-full 
        items-center 
        justify-center 
        cursor-pointer 
        hover:bg-slate-300 
        hover:bg-opacity-10 
        ">
        <Icon size={28} color="white"/>
      </div>
      <div className="
        p-4 
        gap-4
        relative 
        hidden
        lg:flex
        items-center
        rounded-full 
        cursor-pointer 
        hover:bg-slate-300
        hover:bg-opacity-10  
      ">
      <Icon size={24} color="white"/>
      <p className="hidden lg:block text-white text-xl">{label}</p>
      </div>
    </div>
  )
}

export default SidebarItem