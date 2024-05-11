import Image from 'next/image'
import Button from './Button'

const Hero = () => {
  return (
    <section className='max-container padding-container flex flex-col gap-20 py-8 pb-32 md:gap-28 lg:py-10 xl:flex-row'>
      <div className='flex flex-col rounded-3xl bg-slate-100 md:flex-grow md:flex-row'>
        <div>
          <Image
            src='/hero-img.png'
            alt='sneakers-img'
            width={550}
            height={24}
            className='w-full px-6 md:w-auto'
          ></Image>
        </div>
        <div className='mycss1 flex flex-row-reverse items-center pb-[60px]  md:w-2/5 md:flex-col md:pb-0 md:pt-[50px] lg:grow'>
          <div className='relative h-4/5 grow'>
            <h1 className='relative z-20 text-center text-5xl font-semibold max-[500px]:text-4xl md:mt-12'>
              أفضل<br></br> الأسعار في<br></br> السوق
            </h1>
            <img
              src='/white-rectangle.png'
              className='z-2 o absolute right-14 top-1 h-14 max-[500px]:right-5 max-[500px]:h-10 md:right-8 md:top-8 md:h-16'
            ></img>
            <img
              src='/blue-rectangle.png'
              className='o z-2 absolute right-14 top-24 h-14 max-[500px]:right-5 max-[500px]:h-10 md:right-8 md:top-36 md:h-16'
            ></img>
            <p className='mt-8 text-center text-xl font-normal max-[500px]:text-sm '>
              مع عروض بداية الصيف النارية
            </p>
          </div>
          <div className='flex h-1/2 grow items-center justify-center font-sans max-[380px]:hidden md:pt-3 lg:flex lg:items-start lg:justify-center'>
            <Button
              type='button'
              title='إشتري الأن'
              icon='/cart-icon.png'
              variant='btn-orange'
              className='max-[500px]:px-2'
            />
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
