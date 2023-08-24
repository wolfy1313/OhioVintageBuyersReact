import React from 'react'
import { Card } from 'flowbite-react'
// import '../../fonts/JeffLevine-NondescriptJNL.otf'
// import '../../fonts/ITCBlair-CondensedMedium.otf'

type Props = {}

const PageInfo = (props: Props) => {
  return (
    <Card className='b bg-amber-50'>
      <h5 className="mb-2 text-3xl font-bold text-gray-700 dark:text-white">
        Why do people sell to Ohio Vintage Buyers?
      </h5>
      <ul>
        <li className='text-2xl text-center underline font-bold mb-1'>Convenience</li>

        <li className='text-lg text-center mb-1'>We come to you, on a day and time that fits <u>YOUR</u> schedule. </li>

        <li className='text-2xl text-center underline font-bold mt-2 mb-1'>We Buy "As-Is"
        </li>
        <li className='text-lg text-center mb-1'>No need to clean or prepare any of your items before we arrive. Whether they are packed away in an attic or covered in dirt in a barn, we can look at them as-is, the wame way we can buy them.</li>
        <li className='text-2xl text-center underline font-bold mt-2 mb-1'>Get a Fair Cash Offer
        </li>
        <li className='text-lg text-center mb-1'>You are selling directly to us, so no expensive commission to an estate sale company or auction house.</li>
        <li></li>
      </ul>
      <p className="mb-5 text-base text-black dark:text-gray-400 sm:text-lg">
        * If you are interested in selling some of your old or unused items, let us know! Fill out the contact form below and we will be in touch. There's never any cost or obligation to you. WE WILL NEVER SHARE YOUR INFORMATION WITH ANYONE.
      </p>
    </Card>
  )
}

export default PageInfo