import React from 'react'

const ContactForm = () => {
  return (
    <div>
      <div className='flex justify-center'>
        <form className='w-full max-w-sm mt-10 border-4 px-3 py-3 border-gray-600' method="POST" action="https://formspree.io/f/mjvddkno" encType="multipart/form-data">
          <div className='md:flex md:items-center mb-6'>
            <div className='md:w-1/3'>
              <label className='block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4'>Your Name:
              </label>
            </div>
            <div className='md:w-2/3'>
              <input className='bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500' id="inline-full-name" type="text" placeholder="Your Name" />
            </div>
          </div>
          <div className='md:flex md:items-center mb-6'>
            <div className='md:w-1/3'>
              <label className='block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4'> Your Email:
              </label>
            </div>
            <div className='md:w-2/3'>
              <input className='bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500' id="inline-email" type="text" placeholder="Your Email" />
            </div>
          </div>
          <div className='md:flex md:items-center mb-6'>
            <div className='md:w-1/3'>
              <label className='block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4'>Details about your items:
              </label>
            </div>
            <div className='md:w-2/3'>
              <textarea name="message" className='bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500' id="inline-email" placeholder="Details of your items"></textarea>
            </div>
          </div>
          <div className='md:flex md:items-center mb-6'>
            <div className='md:w-1/3'>
              <label className='block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4'>Include any pertinent images here
              </label>
            </div>
            <div className='md:w-2/3'>
              <input type="file" name="attachment" accept="image/png, image/jpeg" className="block w-full text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400" id="file_input" />
              <p className="mt-1 text-sm text-gray-500 font-bold dark:text-gray-500" id="file_input_help">PNG or JPG images only please.</p>
            </div>
          </div>
          <div className="md:flex justify-center">
            <button className="shadow bg-blue-500 hover:bg-blue-400 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded" type="button">
              Get Vintage'd
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default ContactForm