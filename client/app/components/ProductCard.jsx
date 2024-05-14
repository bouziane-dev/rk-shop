'use client'
import React from 'react'
import { faArrowRightLong } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useRouter } from 'next/navigation'

const ProductCard = ({ image, title, description }) => {
  const router = useRouter()
  const handleClick = () => {
    router.push('/form')
  }

  return (
    <div className='flex w-fit flex-col'>
      <div className='mb-6 h-auto w-auto'>
        <img
          src={image}
          alt='product'
          className='h-full max-w-[200px] rounded-[30px] transition-all duration-300 hover:max-w-[300px] md:max-w-[250px]'
        ></img>
      </div>

      <div className='flex flex-row justify-between pl-2'>
        <div>
          <h2 className='text-lg font-bold md:text-xl'>{title}</h2>
          <p className='md:text-md mt-1 text-sm text-gray-500'>{description}</p>
        </div>
        <div
          className='flex w-5 cursor-pointer items-center md:w-5'
          onClick={handleClick}
        >
          <FontAwesomeIcon icon={faArrowRightLong} />
        </div>
      </div>
    </div>
  )
}

export default ProductCard
