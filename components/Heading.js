const Heading = ({main, sub}) => {
  return (
    <>
      <h2 className='heading-secondary'>{main}</h2> 
      <h3 className='heading-tertiary'>{sub}</h3>
    </>
  )
}

export default Heading;