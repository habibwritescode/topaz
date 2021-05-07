const ArrowButton = ({src, children, arrowWhite, arrow}) => {
  return (
    <div className={`arrow-box ${arrow} ${arrowWhite ? 'arrow--white' : ''}`}>
      <img className='arrow-icon' src={src} alt=""/>
      {children}
    </div>
  )
}

export default ArrowButton;
