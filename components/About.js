import Heading from "./Heading"
import Counter from './Counter';

const About = () => {
  return (
    <section className='section-about'>
      <div className='section-about__image-box'>
        <img className='section-about__image' src="/images/hutomo-abrianto.png" alt=""/>
      </div>

      <div className='section-about__text-box'>
        <div className='section-about__heading'>
          <Heading main={'About'} sub={'We want the best for you'} />
        </div>
        <p className='section-about__paragraph paragraph'>
        Some quick example text to build on the card title and make up the bulk of the card's content.  make up the bulk of the card's content. Some quick example text to build on the card title and make up the bulk of the card's content.  make up the bulk of the card's content. Some quick example text to build on the card title and make up the bulk of the card's content.  make up the bulk of the card's content.Some quick example text to build on
        </p>
        <div className='section-about__proof-box'>
          <div className='section-about__proof'>
              <Counter className='section-about__proof-number' end={300}/>
            <p className='section-about__proof-text paragraph'>Projects completed</p>
          </div>
        
          <div className='section-about__proof'>
            <Counter className='section-about__proof-number' end={300}/>
            <p className='section-about__proof-text paragraph'>Satisfied customers</p>
          </div>
        
          <div className='section-about__proof'>
            <Counter className='section-about__proof-number' end={20}/>
            <p className='section-about__proof-text paragraph'>Awards won</p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About;