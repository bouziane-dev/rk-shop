const Footer = () => {
  return (
    <section className='flex flex-col items-center bg-black py-16'>
      <h1 className='mb-4 text-2xl font-bold text-white'>RK SHOP</h1>
      <p className='mb-4 text-center text-sm leading-6 text-white  opacity-60'>
        complete your style with<br></br> awesome clothes
      </p>
      <div className='flex flex-row gap-3'>
        <a href='#' className='cursor-pointer'>
          <img src='fb-footer-icon.png' className='h-9'></img>
        </a>
        <a href='#' className='cursor-pointer'>
          <img src='ig-footer-icon.png' className='h-9'></img>
        </a>
      </div>
    </section>
  )
}

export default Footer
