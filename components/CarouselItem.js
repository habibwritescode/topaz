const CarouselItem = ({imageSrc, name, role}) => {
  return (
    <div className='carousel-item'>
      <div className='carousel-item__image-and-text'>
        <img className='carousel-item__image' src={`/images/${imageSrc}`} alt=""/>
        <div className='carousel-item__text-box'>
          <p className='carousel-item__main-head'>Jenny Ika</p>
          <span className='carousel-item__sub-head paragraph'>Customer</span>
        </div>
      </div>
      <p className='carousel-item__quote paragraph'>“Some quick example text to build on the card title and make up the bulk of the card's content.  make up the bulk of the card's content. Some quick example text to build on the card”</p>
    </div>
  )
}

export default CarouselItem;