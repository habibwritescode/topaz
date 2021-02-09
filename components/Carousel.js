import Carousel, { consts } from 'react-elastic-carousel';
import ArrowButton from './ArrowButton';
import CarouselItem from './CarouselItem';


const Caarousel = () => {
  const items = ['cheerful-black-woman.png','cheerful-woman-with-notebook.png'];
  const myArrow= ({ type, onClick, isEdge }) => {
    const buttonImageSrc = type === consts.PREV ? '/icons/arrow-left.png' : '/icons/arrow-right.png'
    const pointer = type === consts.PREV ? '' : ''
    return (
      <div className='arrow-button-container' onClick={onClick} disabled={isEdge}>
        <ArrowButton src={buttonImageSrc}>
          {pointer}
        </ArrowButton>
      </div>
    )
  }
  return (
    <Carousel 
    pagination={false}
    itemsToShow={2}
    renderArrow={myArrow}
    outerSpacing={20}
    breakPoints={[
      { width: 1, itemsToShow: 1},
      { width: 768, itemsToShow: 2 }
    ]}
    >{
      items.map((item, idx) => (
        <CarouselItem imageSrc={item} key={idx}/>
        ))
      }
    </Carousel>
  )
}

export default Caarousel;