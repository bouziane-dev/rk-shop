import React from 'react'
import Button from './Button'

const Faq = () => {
  return (
    <section className='mt-16 flex flex-col md:flex-row 2xl:px-[100px] 2xl:py-[10px] 3xl:px-[200px]'>
      <div className='w-full px-4 py-5 md:py-5 md:pr-2'>
        <img
          src='/discount-img.jpg'
          className='h-full max-w-[100%] rounded-xl md:rounded-none'
        ></img>
      </div>
      <div className='relative flex h-[400px] w-[100%] flex-col justify-center bg-[#63C1F6] md:h-auto'>
        <h1 className='relative z-20 mb-4 text-center text-[3rem] font-bold max-[500px]:text-4xl lg:text-[3.5rem] lg:leading-[4rem]'>
          تخفيضات<br></br> فصل الصيف
        </h1>
        <img
          src='/white-rectangle.png'
          className='i z-2 absolute right-36 top-24 h-16 max-[500px]:top-24 max-[500px]:h-10  md:right-28 md:top-24 md:h-16 lg:right-40 lg:top-[8rem] lg:h-20 min-[1200px]:top-[11rem]'
        ></img>
        <p className='mb-3 text-center font-semibold lg:text-xl'>
          صالحة لغاية شهر أوت
        </p>
        <div className='mt-3 flex justify-center'>
          <Button
            type='button'
            title='إشتري الأن'
            icon='/cart-icon.png'
            variant='btn-orange'
          />
        </div>
      </div>
    </section>
  )
}

export default Faq
