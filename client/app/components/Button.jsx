import Image from 'next/image'

const Button = ({ type, title, icon, variant, full }) => {
  return (
    <button
      className={`flexCenter gap-3 rounded-xl  ${variant} ${full && 'w-full'}`}
      type={type}
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
