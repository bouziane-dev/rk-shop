'use client'

import React, { useEffect, useState } from 'react'
import { WILAYAS } from '../../../constants'
import { submitFormData } from '../../functions/api/formSubmitEndpoint'

const Form = () => {
  //? Form states to manage values
  const [fullname, setFullname] = useState('')
  const [phone, setPhone] = useState('')
  const [wilaya, setWilaya] = useState('')
  const [address, setAddress] = useState('')
  const [product, setProduct] = useState('')
  const [size, setSize] = useState('')
  const [quantity, setQuantity] = useState(1)

  //? Prices
  const [price, setPrice] = useState(0)
  const [deliveryPrice, setDeliveryPrice] = useState(0)
  const [total, setTotal] = useState(0)

  //* Handler for quantity change
  const handleQuantityChange = event => {
    const value = parseInt(event.target.value)
    setQuantity(value)
  }

  //* Handler for wilaya change
  const handleWilayaChange = event => {
    const value = event.target.value

    setWilaya(value)
  }

  //* Update delivery price accordingly
  useEffect(() => {
    //? Delivery price
    let deliveryPrice = wilaya === 'Algiers' ? 400 : wilaya !== '' ? 700 : 0

    setDeliveryPrice(deliveryPrice)
  }, [wilaya])

  //* Update price accordingly
  useEffect(() => {
    let newPrice = price * quantity

    setPrice(newPrice)
  }, [quantity])

  //* Handler for product change
  const handleProductChange = event => {
    const value = event.target.value
    setProduct(value)
  }

  //* Calculate total price based on quantity and product price
  useEffect(() => {
    const calculateTotalPrice = () => {
      if (product) {
        //? Product price
        const productPrice = 2200
        setPrice(productPrice)

        //? Total price calculation
        const totalPrice = productPrice * quantity + deliveryPrice
        setTotal(totalPrice)
      }
    }

    calculateTotalPrice() //? Call the function to calculate total price initially
  }, [product, quantity, wilaya])

  //* Form submit handler
  const handleSubmit = async e => {
    e.preventDefault()

    //? Convert phone to a number
    const phoneAsNumber = parseInt(phone)

    //? Check if all required fields are filled
    if (
      fullname &&
      phone &&
      wilaya &&
      address &&
      product &&
      size &&
      price &&
      deliveryPrice &&
      total
    ) {
      //* Gather form data
      const orderData = {
        fullname: fullname,
        phone: phoneAsNumber,
        wilaya: wilaya,
        address: address,
        product: product,
        size: size,
        quantity: quantity,
        price: price,
        deliveryPrice: deliveryPrice,
        total: total
      }

      try {
        //* Submit form data
        const response = await submitFormData(orderData)
        console.log('Form submitted successfully:', response)

        //* Clear form fields
        setFullname('')
        setPhone('')
        setWilaya('')
        setAddress('')
        setProduct('')
        setSize('')
        setQuantity(1)
        setDeliveryPrice(0)
        setPrice(0)
        setTotal(0)

        //* Navigate user back to home page
        window.location.href = 'http://localhost:3000'
      } catch (error) {
        console.error('Error submitting form:', error)
      }
    } else {
      //? Display this message to fill all required fields
      console.log('Please fill all required fields!')
    }
  }

  //* Validation function to accept only letters
  const handleFullnameChange = event => {
    const value = event.target.value.replace(/[^a-zA-Z\s]/g, '')
    setFullname(value)
  }

  //* Validation function to accept only numbers
  const handlePhoneChange = event => {
    const value = event.target.value.replace(/\D/g, '')
    setPhone(value)
  }

  //* Validation function to accept only numbers
  const handleSizeChange = event => {
    const value = event.target.value.replace(/\D/g, '')
    setSize(value)
  }

  //* Validation function to accept letters, numbers, and special characters
  const handleAddressChange = event => {
    const value = event.target.value.replace(/[^\w\s]/gi, '')
    setAddress(value)
  }

  return (
    <section style={{ direction: 'rtl' }} className='pb-28 pt-10'>
      <h1 className='mb-8 text-center text-2xl max-[400px]:text-lg'>
        لإتمام طلبك أدخل المعلومات التالية:
      </h1>
      <div className='mx-6 rounded-lg border border-gray-300 p-6 sm:mx-[100px]'>
        <form className='mx-auto max-w-md'>
          <div className='group relative z-0 mb-5 w-full'>
            <input
              type='name'
              name='floating_name'
              id='floating_name'
              className='peer block w-full appearance-none border-0 border-b-2 border-gray-300 bg-transparent px-0 py-2.5 text-sm text-gray-900 focus:border-blue-600 focus:outline-none focus:ring-0   dark:focus:border-blue-500'
              value={fullname}
              onChange={handleFullnameChange}
              required
              placeholder=''
            />
            <label
              htmlFor='floating_name'
              className='absolute top-3 -z-10 origin-[0] -translate-y-6 scale-75 transform text-sm text-gray-500 duration-300 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-focus:start-0 peer-focus:-translate-y-6 peer-focus:scale-75 peer-focus:font-medium peer-focus:text-blue-600 rtl:peer-focus:left-auto rtl:peer-focus:translate-x-1/4 dark:text-gray-400 peer-focus:dark:text-blue-500'
            >
              الإسم الكامل
            </label>
          </div>

          <div className='group relative z-0 mb-5 w-full'>
            <input
              type='phone'
              name='floating_phone'
              id='floating_phone'
              className='peer block w-full appearance-none border-0 border-b-2 border-gray-300 bg-transparent px-0 py-2.5 text-sm text-gray-900 focus:border-blue-600 focus:outline-none focus:ring-0 '
              placeholder=' '
              value={phone}
              onChange={handlePhoneChange}
              required
            />
            <label
              htmlFor='floating_phone'
              className='absolute top-3 -z-10 origin-[0] -translate-y-6 scale-75 transform text-sm text-gray-500 duration-300 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-focus:start-0 peer-focus:-translate-y-6 peer-focus:scale-75 peer-focus:font-medium peer-focus:text-blue-600 rtl:peer-focus:translate-x-1/4 dark:text-gray-400 peer-focus:dark:text-blue-500'
            >
              رقم الهاتف
            </label>
          </div>

          <div className='mb-3 mt-8'>
            <select
              value={wilaya}
              onChange={handleWilayaChange}
              className='block w-full rounded-lg border border-gray-300 p-2.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500'
            >
              <option disabled={wilaya}>إختر ولاية السكن</option>
              {WILAYAS.map(wilaya => (
                <option key={wilaya.value} value={wilaya.value}>
                  {wilaya.name}
                </option>
              ))}
            </select>
          </div>

          <div className='group relative z-0 mb-5 w-full'>
            <input
              type='name'
              name='floating_name'
              id='floating_name'
              className='peer block w-full appearance-none border-0 border-b-2 border-gray-300 bg-transparent px-0 py-2.5 text-sm text-gray-900 focus:border-blue-600 focus:outline-none focus:ring-0   dark:focus:border-blue-500'
              placeholder=' '
              value={address}
              onChange={handleAddressChange}
              required
            />
            <label
              htmlFor='floating_name'
              className='absolute top-3 -z-10 origin-[0] -translate-y-6 scale-75 transform text-sm text-gray-500 duration-300 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-focus:start-0 peer-focus:-translate-y-6 peer-focus:scale-75 peer-focus:font-medium peer-focus:text-blue-600 rtl:peer-focus:left-auto rtl:peer-focus:translate-x-1/4 dark:text-gray-400 peer-focus:dark:text-blue-500'
            >
              العنوان
            </label>
          </div>

          <div className='mb-3 mt-8'>
            <select
              value={product}
              onChange={handleProductChange}
              id='countries'
              className='mb-5 block w-full rounded-lg border border-gray-300 p-2.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500'
            >
              <option disabled={product}>المنتج</option>

              <option value={'stan-smith-bleu'}>Stan Smith (bleu)</option>
              <option value={'stan-smith-vert'}>Stan Smith (vert)</option>
            </select>
          </div>

          <div className='group relative z-0 mb-5 w-full'>
            <input
              type='name'
              name='floating_name'
              id='floating_name'
              className='peer block w-full appearance-none border-0 border-b-2 border-gray-300 bg-transparent px-0 py-2.5 text-sm text-gray-900 focus:border-blue-600 focus:outline-none focus:ring-0   dark:focus:border-blue-500'
              placeholder=' '
              value={size}
              onChange={handleSizeChange}
              required
            />
            <label
              htmlFor='floating_name'
              className='absolute top-3 -z-10 origin-[0] -translate-y-6 scale-75 transform text-sm text-gray-500 duration-300 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-focus:start-0 peer-focus:-translate-y-6 peer-focus:scale-75 peer-focus:font-medium peer-focus:text-blue-600 rtl:peer-focus:left-auto rtl:peer-focus:translate-x-1/4 dark:text-gray-400 peer-focus:dark:text-blue-500'
            >
              المقاس
            </label>
          </div>

          <label
            htmlFor='counter-input'
            className='mb-3 mt-7 block text-sm font-medium text-gray-900'
          >
            إختر الكمية
          </label>

          <div className='relative flex items-center'>
            <button
              type='button'
              id='decrement-button'
              onClick={() =>
                setQuantity(prevQuantity => Math.max(prevQuantity - 1, 1))
              }
              data-input-counter-decrement='counter-input'
              className='inline-flex h-5 w-5 flex-shrink-0 items-center justify-center rounded-md border border-gray-300 bg-gray-100 hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-gray-100 '
            >
              <svg
                className='h-2.5 w-2.5 text-gray-900 '
                aria-hidden='true'
                xmlns='http://www.w3.org/2000/svg'
                fill='none'
                viewBox='0 0 18 2'
              >
                <path
                  stroke='currentColor'
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  strokeWidth='2'
                  d='M1 1h16'
                />
              </svg>
            </button>
            <input
              type='text'
              id='counter-input'
              data-input-counter
              className='max-w-[2.5rem] flex-shrink-0 border-0 bg-transparent text-center text-sm font-normal text-gray-900 focus:outline-none focus:ring-0 '
              placeholder=''
              value={quantity}
              onChange={handleQuantityChange}
              required
            />
            <button
              type='button'
              onClick={() => setQuantity(prevQuantity => prevQuantity + 1)}
              id='increment-button'
              data-input-counter-increment='counter-input'
              className='inline-flex h-5 w-5 flex-shrink-0 items-center justify-center rounded-md border border-gray-300 bg-gray-100 hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-gray-100 '
            >
              <svg
                className='h-2.5 w-2.5 text-gray-900 '
                aria-hidden='true'
                xmlns='http://www.w3.org/2000/svg'
                fill='none'
                viewBox='0 0 18 18'
              >
                <path
                  stroke='currentColor'
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  strokeWidth='2'
                  d='M9 1v16M1 9h16'
                />
              </svg>
            </button>
          </div>

          <div className='mt-7 border border-dashed border-gray-500 bg-gray-200 py-2'>
            <div className='mt-5 flex flex-row justify-between px-5'>
              <h className='mb-2'>السعر</h>
              <p className='text-lg '>{price * quantity}.00 دج</p>
            </div>

            <div className='mt-5 flex flex-row justify-between px-5'>
              <h className='mb-2'>سعر التوصيل</h>
              <p className='text-lg '>{deliveryPrice}.00 دج</p>
            </div>

            <div className='mt-5 flex w-full flex-row justify-between border border-t-gray-500 px-5 pt-2'>
              <h className='mb-2 font-semibold'> السعر الإجمالي</h>
              <p className='text-lg font-semibold'>{total}.00 دج</p>
            </div>
          </div>

          <button
            onClick={e => handleSubmit(e)}
            type='submit'
            className='mt-5 w-full rounded-lg bg-blue-700 px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 '
          >
            تأكيد الطلب
          </button>
        </form>
      </div>
    </section>
  )
}

export default Form
