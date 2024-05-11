import React from 'react'

const Benefits = () => {
  return (
    <section className='flex flex-col items-center py-24'>
      <h1 className='mb-10 text-2xl font-bold'>صفحاتنا على مواقع التواصل</h1>
      <div className='flex flex-row gap-5'>
        <a href='#' className='cursor-pointer'>
          <img src='/ig-logo.png' alt='instagram-logo' className='h-10' />
        </a>
        <a href='#' className='cursor-pointer'>
          <img src='/fb-logo.png' alt='facebook-logo' className='h-10' />
        </a>
        <a href='#' className='cursor-pointer'>
          <img src='/tiktok-logo.png' alt='tiktok-logo' className='h-10' />
        </a>
      </div>
    </section>
  )
}

export default Benefits
