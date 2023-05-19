import { useCallback } from "react"

type ModalProps = {
    isOpen?: boolean
    onClose: () => void
    onSubmit: () => void
    title?: string
    body?: React.ReactElement
    footer?: React.ReactElement
    actionLabel?: string
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
    <div>Modal</div>
  )
}

export default Modal