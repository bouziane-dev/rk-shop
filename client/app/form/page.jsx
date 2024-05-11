import React from 'react'
import { WILAYAS } from '../../constants'

const Form = () => {
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
              placeholder=' '
              required
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
              id='countries'
              className='block w-full rounded-lg border border-gray-300 p-2.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500'
            >
              <option disabled selected hidden>
                إختر ولاية السكن
              </option>
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
              id='countries'
              className='mb-5 block w-full rounded-lg border border-gray-300 p-2.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500'
            >
              <option disabled selected hidden>
                المنتج
              </option>

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
              required
            />
            <label
              htmlFor='floating_name'
              className='absolute top-3 -z-10 origin-[0] -translate-y-6 scale-75 transform text-sm text-gray-500 duration-300 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-focus:start-0 peer-focus:-translate-y-6 peer-focus:scale-75 peer-focus:font-medium peer-focus:text-blue-600 rtl:peer-focus:left-auto rtl:peer-focus:translate-x-1/4 dark:text-gray-400 peer-focus:dark:text-blue-500'
            >
              المقاس
            </label>
          </div>

          <button
            type='submit'
            className='mt-5 w-full rounded-lg bg-blue-700 px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 '
          >
            Submit
          </button>
        </form>
      </div>
    </section>
  )
}

export default Form
