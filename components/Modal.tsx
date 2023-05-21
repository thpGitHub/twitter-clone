import { useCallback } from "react"
import {AiOutlineClose} from "react-icons/ai"
import Button from "./Button"

type ModalProps = {
    isOpen?: boolean
    onClose: () => void
    onSubmit: () => void
    title?: string
    body?: React.ReactElement
    footer?: React.ReactElement
    actionLabel: string
    disable?: boolean

}

const Modal = ({isOpen, onClose, onSubmit, title, body, footer, actionLabel, disable}: ModalProps) => {

  const handleClose = useCallback(() => {       
    if (disable) return
    onClose()
  }, [disable, onClose])

  const handleSubmit = useCallback(() => {
    if (disable) return
    onSubmit()
  }, [disable, onSubmit])

  if (!isOpen) return null  

  return (
    <>
      <div
        className="
          justify-center
          items-center
          flex
          overflow-x-hidden
          overflow-y-auto
          inset-0
          z-50 
          outline-none
          focus:outline-none
          bg-neutral-800
          bg-opacity-70
          fixed
        "
      >
        <div
          className="
          relative
          w-full
          h-full
          my-6
          mx-auto
          lg:w-3/6
          lg:max-w-3xl
          lg:h-auto
          "
        >
          {/*content*/}
          <div 
            className="
              h-full
              lg:h-auto
              border-0
              shadow-lg
              rounded-lg
              relative
              flex
              flex-col
              w-full
              bg-black
              outline-none
              focus:outline-none"
          >
            {/*header*/}
            <div
              className="
                flex
                ittems-center
                justify-between
                p-10
                rounded-t"
            >
              <h3 className="text-3xl text-white font-semibold">{title}</h3>
              <button
                onClick={handleClose}
                className="
                  p-1
                  ml-auto
                  border-0
                  text-white
                  hover:opacity-70
                  transition
                ">
                <AiOutlineClose size={20} />
              </button>
            </div>
            {/*body*/}
            <div className="relative p-10 flex-auto">
              {body}
            </div>
            {/*footer*/}
            <div className="flex flex-col gap-2 p-10">
              <Button 
                disabled
                label={actionLabel}
                secondary 
                fullWidth 
                large 
                onClick={handleSubmit} />
            </div>
          </div>
        </div>

      </div>
    </>
  )
}

export default Modal