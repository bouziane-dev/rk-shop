'use client'
import Image from 'next/image'
import { useRouter } from 'next/navigation'

const Button = ({ type, title, icon, variant, full }) => {
  const router = useRouter()

  const handleClick = () => {
    router.push('/form')
  }

  return (
    <button
      className={`flexCenter gap-3 rounded-xl  ${variant} ${full && 'w-full'}`}
      type={type}
      onClick={handleClick}
    >
      {icon && (
        <Image
          src={icon}
          alt={title}
          width={24}
          height={24}
          className='text-white'
        />
      )}
      <label className='bold-16 cursor-pointer whitespace-nowrap'>
        {title}
      </label>
    </button>
  )
}

export default Button
