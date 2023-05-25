import { useCallback, useState } from "react"
import { signIn } from "next-auth/react"

import useLoginModal from "@/hooks/useLoginModal"
import useRegisterModal from "@/hooks/useRegisterModal"

import Input from "../Input"
import Modal from "../Modal"

const LoginModal = () => {
  const loginModal = useLoginModal()
  const registerModal = useRegisterModal()
  
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [isLoading, setIsLoading] = useState(false)

  const onToggle = useCallback(() => {
    if (isLoading) return
    loginModal.onClose()
    registerModal.onOpen()
  }, [isLoading, loginModal, registerModal])


  const onSubmit = useCallback(async () => {
    try {
        setIsLoading

       await signIn('credentials', {
            email,
            password, 
        })

        loginModal.onClose()
    } catch (error) {
        console.log(error)  
    } finally {
        setIsLoading(false)
    }
  }, [loginModal, email, password])
  
  const bodyContent = (
    <div className="flex flex-col gap-4"> 
        <Input 
            type="email"
            value={email}
            disabled={isLoading}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Email"
        />
        <Input 
            type="password"
            value={password}
            disabled={isLoading}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Password"
        />
    </div>
  )

  const footerContent = (
    <div className="text-neutral-400 text-center mt-4">
      <p>
        First time using Twitter?
        <span 
          onClick={onToggle} 
          className="text-white cursor-pointer hover:underline"
        >
           Create an account
        </span>
      </p>
    </div>
  )  

  return (
    <div>
        <Modal 
            disabled={isLoading} 
            isOpen={loginModal.isOpen} 
            title="Login" 
            actionLabel="Sign in" 
            onClose={loginModal.onClose}
            onSubmit={onSubmit}
            body={bodyContent}
            footer={footerContent}
            />
    </div>
  )
}

export default LoginModal