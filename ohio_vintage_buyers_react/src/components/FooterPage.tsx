import React from 'react'
import { Footer } from 'flowbite-react'

type Props = {}

const FooterPage = (props: Props) => {
  return (
    <Footer container={true} className='b bg-amber-100'>
      <div className="w-full text-center">
        <div className="w-full justify-between sm:flex sm:items-center sm:justify-between">
          <Footer.Brand
            href="https://ohiovintagebuyers.com"
            src="https://static.vecteezy.com/system/resources/previews/002/492/652/original/ohio-officially-flag-free-vector.jpg"
            alt="Flowbite Logo"
            name="Ohio Vintage Buyers"
          />
        </div>
        <Footer.Divider />
        <Footer.Copyright
          href="#"
          by="Ohio Vintage Buyers™"
          year={2023}
        />
      </div>
    </Footer>
  )
}

export default FooterPage