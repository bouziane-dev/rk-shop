import { NAV_LINKS } from '../../constants'
import Image from 'next/image'
import Link from 'next/link'
import Button from './Button'

const Navbar = () => {
  return (
    <nav className='flexBetween max-container padding-container relative z-30 py-5'>
      <div className='flex items-center gap-16 lg:gap-20'>
        <div className='lg:flexCenter font-sans'>
          <Button
            type='button'
            title='إشتري الأن'
            icon='/cart-icon.png'
            variant='btn-orange'
          />
        </div>

        <ul className='hidden h-full gap-16 md:flex lg:gap-20'>
          {NAV_LINKS.map(link => (
            <Link
              href={link.href}
              key={link.key}
              className='regular-18 flexCenter cursor-pointer pb-1.5 font-sans text-neutral-950 transition-all hover:font-bold'
            >
              {link.label}
            </Link>
          ))}
        </ul>
      </div>

      <Link href='/' className='regular-20'>
        RK Shop
      </Link>
    </nav>
  )
}

export default Navbar
