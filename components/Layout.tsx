import FollowBar from "./layout/FollowBar"
import Sidebar from "./layout/Sidebar"

type LayoutProps = {
    children: React.ReactNode
}

const Layout = ({children}: LayoutProps) => {
  return (
    <div className="h-screen bg-black">
        <div className="container h-full mx-auto xl:px-28 max-w-6xl" >
            <div className="grid grid-cols-4 h-full">
                <Sidebar />
                <div className="col-span-3 lg:col-span-2 border-x-[1px] border-neutral-800">
                    <div>{children}</div>  
                </div>
                <FollowBar />
            </div>
        </div>
    </div>
  )
}

export default Layout