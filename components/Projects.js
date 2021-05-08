import React from 'react'

import Heading from './Heading'
import ProjectsCarousel from './ProjectCarousel'


const Projects = () => {
  return (
    <section className='section-projects' id='projects'>
      <div className='section-projects__heading-box'>
        <Heading main={'Projects'} sub={'Latest projects'} />
      </div>

      <div className='section-projects__carousel-box'>
        <ProjectsCarousel />
      </div>

      <div className='section-projects__gallery-container'>
        <div className='section-projetcs__image-box'>
          <img src="/images/francesca-tosolini.png" alt="" className="section-projects__image"/>
        </div>
        <div className='section-projetcs__image-box'>
          <img src="/images/sidekix-media.png" alt="" className="section-projects__image"/>
        </div>
        <div className='section-projetcs__image-box'>
          <img src="/images/id-interiors.png" alt="" className="section-projects__image"/>
        </div>
        <div className='section-projetcs__image-box'>
          <img src="/images/chastity-cortijo.png" alt="" className="section-projects__image"/>
        </div>
        <div className='section-projetcs__image-box'>
          <img src="/images/devon-janse.png" alt="" className="section-projects__image"/>
        </div>
        <div className='section-projetcs__image-box'>
          <img src="/images/sonnie-hiles.png" alt="" className="section-projects__image"/>
        </div>
        <div className='section-projetcs__image-box'>
          <img src="/images/yann-maignan.png" alt="" className="section-projects__image"/>
        </div>
        <div className='section-projetcs__image-box'>
          <img src="/images/james-mcdonald.png" alt="" className="section-projects__image"/>
        </div>
        <div className='section-projetcs__image-box'>
          <img src="/images/cowomen.png" alt="" className="section-projects__image"/>
        </div>  
      </div>
    </section>
  )
}

export default Projects;
