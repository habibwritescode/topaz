const TestimonialItem = ({imageSrc}) => {
  return (
    <div className='testimonial-item'>
      <div className='testimonial-item__image-and-text'>
        <img className='testimonial-item__image' src={`/images/${imageSrc}`} alt=""/>
        <div className='testimonial-item__text-box'>
          <p className='testimonial-item__main-head'>Jenny Ika</p>
          <span className='testimonial-item__sub-head paragraph'>Customer</span>
        </div>
      </div>
      <p className='testimonial-item__quote paragraph'>“Some quick example text to build on the card title and make up the bulk of the card's content.  make up the bulk of the card's content. Some quick example text to build on the card”</p>
    </div>
  )
}

export default TestimonialItem;
