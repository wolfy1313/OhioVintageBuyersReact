import React from 'react'
import { Card } from 'flowbite-react'
// import '../../fonts/JeffLevine-NondescriptJNL.otf'
// import '../../fonts/ITCBlair-CondensedMedium.otf'

type Props = {}

const PageInfo = (props: Props) => {
  return (
    <Card className='b bg-yellow-400'>
      <h5 className="mb-2 text-3xl font-bold text-gray-700 dark:text-white">
        Sell your old stuff. Let it live again. You old bastard.
      </h5>
      <p className="mb-5 text-base text-black dark:text-gray-400 sm:text-lg">
        We buy vintage items because we like to. We could just go on and on about how much stuff we like to buy. We like a old tractor. We like a old shirt with a tractor on it. We like a old shirt with a tractor on it that was worn by some old one on an old tractor. We like to fish in clothes that were worn by fishermans and smell like really old fishes. We buy that from you. What do you need it for? It is just reminding you about how someone you used to know liked to fish and never warshed they shirts.
      </p>
    </Card>
  )
}

export default PageInfo