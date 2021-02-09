const ArrowButton = ({src, children}) => {
  return (
    <div className='arrow-box'>
      <img className='arrow' src={src} alt=""/>
      {children}
    </div>
  )
}

export default ArrowButton;