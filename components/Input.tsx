type InputProps = {
  type?: string
  value?: string
  disabled?: boolean
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void
  placeholder?: string

}

const Input = ({type, value, disabled, onChange, placeholder}:InputProps) => {
  return (
    <input 
      type={type} 
      value={value} 
      disabled={disabled} 
      onChange={onChange}
      placeholder={placeholder} 
      className="
        w-full
        p-4
        text-lg
        bg-black
        border-2
        border-neutral-800 
        rounded-md
        outline-none
        text-white
        focus:border-sky-500
        focus:border-2
        transition
        disabled:bg-neutral-900
        disabled:opacity-70
        disabled:cursor-not-allowed 
      "
    />
  )
}

export default Input