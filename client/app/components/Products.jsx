import React from 'react'
import ProductCard from './ProductCard'

const Products = () => {
  return (
    <section className='max-container padding-container relative flex flex-col gap-20 py-10 pb-32 md:gap-12 lg:py-14'>
      <div>
        <h2 className='regular-32 relative z-20 text-right font-semibold'>
          المنتجات
        </h2>
        <img
          src='/products-underline.png'
          className='z-2 absolute right-9 top-16 h-5 lg:right-24 lg:top-20 min-[1680px]:right-6'
        ></img>
      </div>
      <div>
        <ProductCard
          image={'/product1.jpg'}
          title={'Stan smith'}
          description={'vert/bleu'}
        />
      </div>
    </section>
  )
}

export default Products
