import React from 'react'

const ContactForm = () => {
  return (
    <div>
      <div className='flex justify-center'>
        <form className='w-full max-w-sm mt-20 border-4 px-3 py-3 border-gray-600' method="POST" action="https://formspree.io/f/mjvddkno" encType="multipart/form-data">
          <div className='md:flex md:items-center mb-6'>
            <div className='md:w-1/3'>
              <label className='block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4'>Your Name:
              </label>
            </div>
            <div className='md:w-2/3'>
              <input className='bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500' id="inline-full-name" name='name' type="text" placeholder="Your Name" />
            </div>
          </div>
          <div className='md:flex md:items-center mb-6'>
            <div className='md:w-1/3'>
              <label className='block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4'> Your Email:
              </label>
            </div>
            <div className='md:w-2/3'>
              <input className='bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500' id="inline-email" name='email' type="text" placeholder="Your Email" />
            </div>
          </div>
          <div className='md:flex md:items-center mb-6'>
            <div className='md:w-1/3'>
              <label className='block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4'>Give a brief description about your items. Anything you think we might need to know:
              </label>
            </div>
            <div className='md:w-2/3'>
              <textarea name="message" className='bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500' id="inline-email" placeholder="Give a brief description about your items. Anything you think we might need to know:"></textarea>
            </div>
          </div>

          <div className="md:flex justify-center">
            <button className="shadow bg-red-500 hover:bg-blue-400 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded" type="submit">
              Get Vintage'd
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default ContactForm