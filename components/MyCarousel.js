import Carousel, { consts } from 'react-elastic-carousel';
import ArrowButton from './ArrowButton';


const MyCarousel = ({arrowWhite, items, children}) => {
  const myArrow= ({ type, onClick, isEdge }) => {
    const buttonImageSrc = type === consts.PREV ? '/icons/arrow-left.svg' : '/icons/arrow-right.svg'
    const arrow = type === consts.PREV ? 'left-arrow' : 'right-arrow'
    const pointer = type === consts.PREV ? '' : ''
    return (
      <div className={`${arrowWhite ? 'arrow-rel' : ''}`} onClick={onClick} disabled={isEdge}>
        <ArrowButton arrow={arrow} arrowWhite={arrowWhite} src={buttonImageSrc} className='arrow-button'>
          {pointer}
        </ArrowButton>
      </div>
    )
  }
  return (
    <Carousel 
      pagination={false}
      itemsToShow={items}
      renderArrow={myArrow}
      outerSpacing={20}
      breakPoints={[
        { width: 1, itemsToShow: 1, outerSpacing: 0},
        { width: 768, itemsToShow: 2 }
      ]}
    >
      {children}
    </Carousel>
  )
}
export default MyCarousel;
