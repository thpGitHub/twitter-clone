import { useRouter } from "next/router"
import {FaFeather} from 'react-icons/fa'

const SidebarTweetButton = () => {
    const router = useRouter()

    function generateRandomNumber(min: number, max: number) {
        return Math.floor(Math.random() * (max - min) + min);
    }

  return (
    <div onClick={() => router.push('/')}>
        <div className="
            p-4 
            flex
            h-14
            mt-6
            w-14
            lg:hidden
            bg-sky-500
            transition
            items-center
            rounded-full
            cursor-pointer    
            justify-center
            hover:bg-opacity-80
        ">
            <FaFeather size={24} color="white"/>
        </div>
        <div className="
            mt-6       
            hidden
            lg:block
            px-4
            py-2
            rounded-full
            bg-sky-500
            cursor-pointer
            transition  
            hover:bg-opacity-80
        ">
          <p className="
            hidden
            lg:block
            text-white
            text-[20px]   
            text-center
            font-semibold
        ">Tweet</p>
        </div>

    </div>
  )
}

export default SidebarTweetButton