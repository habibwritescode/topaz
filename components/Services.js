import Heading from './Heading';

const Services = () => {
  return (
    <section className='section-services' id='services'>
      <div className='section-services__text'>
        <Heading main={'Services'} sub={'What we do'} />
        <div className='section-services__services-box'>
          <div className='section-services__services-one'>
            <div className='section-services__service'>
              <div className='section-services__icon-box'>
              <img className='section-services__icon' src="/icons/home.svg" alt=""/>
              </div>
              <h4 className='section-services__sub-heading'>Residential design</h4>
              <p className='section-services__paragraph paragraph'>Some quick example text to build on the card title and make up the bulk of the card's content.  make up the bulk of the card's content. Some quick example text to build on the card</p>
            </div>
            <div className='section-services__service'>
              <div className='section-services__icon-box'>
              <img className='section-services__icon' src="/icons/shopping-cart.svg" alt=""/>
              </div>
              <h4 className='section-services__sub-heading'>Ecommerce design</h4>
              <p className='section-services__paragraph paragraph'>Some quick example text to build on the card title and make up the bulk of the card's content.  make up the bulk of the card's content. Some quick example text to build on the card</p>
            </div>
          </div>


          <div className='section-services__services-two'>
            <div className='section-services__service'>
              <div className='section-services__icon-box'>
              <img className='section-services__icon' src="/icons/briefcase.svg" alt=""/>
              </div>
              <h4 className='section-services__sub-heading'>Office design</h4>
              <p className='section-services__paragraph paragraph'>Some quick example text to build on the card title and make up the bulk of the card's content.  make up the bulk of the card's content. Some quick example text to build on the card</p>
            </div>
            <div className='section-services__service'>
              <div className='section-services__icon-box'>
              <img className='section-services__icon' src="/icons/repeat.svg" alt=""/>
              </div>
              <h4 className='section-services__sub-heading'>Revamp</h4>
              <p className='section-services__paragraph paragraph'>Some quick example text to build on the card title and make up the bulk of the card's content.  make up the bulk of the card's content. Some quick example text to build on the card</p>
            </div>
          </div>
        </div>
      </div>

      <div className='section-services__image-box'>
        <img className='section-services__image' src="/images/dawid-liberadzki.png" alt=""/>
      </div>
    </section>
  )
}

export default Services;
