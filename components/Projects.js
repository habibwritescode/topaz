import React from 'react'
import Heading from './Heading'

const Projects = () => {
  return (
    <section className='section-projects' id='projects'>
      <div className='section-projects__heading-box'>
        <Heading main={'Projects'} sub={'Latest projects'} />
      </div>

      <div className='section-projects__gallery-container'>
        <img src="/images/francesca-tosolini.png" alt="" className="section-projects__image"/>
        <img src="/images/sidekix-media.png" alt="" className="section-projects__image"/>
        <img src="/images/id-interiors.png" alt="" className="section-projects__image"/>
        <img src="/images/chastity-cortijo.png" alt="" className="section-projects__image"/>
        <img src="/images/devon-janse.png" alt="" className="section-projects__image"/>
        <img src="/images/sonnie-hiles.png" alt="" className="section-projects__image"/>
        <img src="/images/yann-maignan.png" alt="" className="section-projects__image"/>
        <img src="/images/james-mcdonald.png" alt="" className="section-projects__image"/>
        <img src="/images/cowomen.png" alt="" className="section-projects__image"/>
      </div>
    </section>
  )
}

export default Projects;