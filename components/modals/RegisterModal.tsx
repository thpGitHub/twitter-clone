import { use, useCallback, useState } from "react"
import axios from "axios"

import useLoginModal from "@/hooks/useLoginModal"
import useRegisterModal from "@/hooks/useRegisterModal"

import Input from "../Input"
import Modal from "../Modal"
import toast from "react-hot-toast"
import {signIn} from "next-auth/react"

const RegisterModal = () => {
  const loginModal = useLoginModal()
  const registerModal = useRegisterModal()
  
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [name, setName] = useState('')
  const [username, setUsername] = useState('')
  const [isLoading, setIsLoading] = useState(false)

  const onToggle = useCallback(() => {
    if (isLoading) return
    loginModal.onOpen()
    registerModal.onClose()
  }, [isLoading, loginModal, registerModal])

  const onSubmit = useCallback(async () => {
    try {
        setIsLoading

        await axios.post('/api/register', {
            email,
            password,
            username,
            name
        })

        toast.success('Account created.')

        signIn('credentials', { 
            email,
            password,
        })

        registerModal.onClose()
    } catch (error) {
        console.log(error)  
        toast.error("Something went wrong.")
    } finally {
        setIsLoading(false)
    }
  }, [registerModal, email, password, username, name])
  
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
            type="text"
            value={name}
            disabled={isLoading}
            onChange={(e) => setName(e.target.value)}
            placeholder="Name"
        />
        <Input 
            type="text"
            value={username}
            disabled={isLoading}
            onChange={(e) => setUsername(e.target.value)}
            placeholder="Username"
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
          Already have an account?
          <span 
            onClick={onToggle} 
            className="text-white cursor-pointer hover:underline"
          >
            Sign in
          </span>
        </p>
      </div>
    )

  return (
    <div>
        <Modal 
            disabled={isLoading} 
            isOpen={registerModal.isOpen} 
            title="Create an account" 
            actionLabel="Register" 
            onClose={registerModal.onClose}
            onSubmit={onSubmit}
            body={bodyContent}
            footer={footerContent}
            />
    </div>
  )
}

export default RegisterModal