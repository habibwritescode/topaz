import React from 'react'

import MyCarousel from './MyCarousel'
import TestimonialItem from './TestimonialItem';

const TestimonialCarousel = () => {
  const items = ['cheerful-black-woman.png','cheerful-woman-with-notebook.png'];
  return (
    <>
      <MyCarousel items={2}>
        {
          items.map((item, idx) => (
            <TestimonialItem imageSrc={item} key={idx}/>
          ))
        }
      </MyCarousel>
    </>
  )
}

export default TestimonialCarousel
