import React, { useState, useEffect } from 'react'
import { BsChevronCompactLeft, BsChevronCompactRight } from 'react-icons/bs'
import { RxDotFilled } from 'react-icons/rx'


type Props = {
  slideInterval: number
}


const ImageCarousel = (props: Props) => {
  const slides = [
    {
      url: `${process.env.PUBLIC_URL}/image0.jpeg`
    },
    {
      url: `${process.env.PUBLIC_URL}/image1-1.jpeg`
    },
    {
      url: `${process.env.PUBLIC_URL}/image1-2.jpeg`
    },
    {
      url: `${process.env.PUBLIC_URL}/image1.jpeg`
    },
    {
      url: `${process.env.PUBLIC_URL}/image01.jpeg`
    },
    {
      url: `${process.env.PUBLIC_URL}/image2-1.jpeg`
    },
    {
      url: `${process.env.PUBLIC_URL}/image2-2.jpeg`
    },
    {
      url: `${process.env.PUBLIC_URL}/image2.jpeg`
    },
    {
      url: `${process.env.PUBLIC_URL}/image02.jpeg`
    },
  ]

  const [currentIndex, setCurrentIndex] = useState(0)

  const prevSlide = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1
    setCurrentIndex(newIndex)
  }
  const nextSlide = () => {
    console.log("hello there next slide")
    const isLastSlide = currentIndex === slides.length - 1
    const newIndex = isLastSlide ? 0 : currentIndex + 1
    setCurrentIndex(newIndex)
  }

  // useEffect(() => {
  //   const intervalId = setInterval(() => {
  //     nextSlide();
  //   });

  //   return () => {
  //     clearInterval(intervalId)
  //   };
  // }, [currentIndex, props.slideInterval])

  const goToSlide = (slideIndex: number) => {
    setCurrentIndex(slideIndex)
  }
  return (
    <div>
      <div className='max-w-[780px] h-[1000px] w-full m-auto py-16 px-4 relative group'>
        <img
          src={slides[currentIndex].url}
          alt={`Slide ${currentIndex}`}
          className='w-full h-full rounded-2xl bg-center bg-cover duration-500'>
        </img>
        <div className='hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] left-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer'>
          <BsChevronCompactLeft onClick={prevSlide} size={30} />
        </div>
        <div className='hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] right-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer'>
          <BsChevronCompactRight onClick={nextSlide} size={30} />
        </div>
        <div className='flex top-4 justify-center py-2'>
          {slides.map((slide, slideIndex) => (
            <div key={slideIndex}
              onClick={() => goToSlide(slideIndex)}
              className='text-2xl cursor-pointer'>
              <RxDotFilled />
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default ImageCarousel