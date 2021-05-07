import React from 'react'
import MyCarousel from './MyCarousel'

const ProjectsCarousel = () => {
  const images = [
    '/images/francesca-tosolini.png',
    '/images/sidekix-media.png',
    '/images/id-interiors.png',
    '/images/chastity-cortijo.png',
    '/images/devon-janse.png',
    '/images/sonnie-hiles.png',
    '/images/yann-maignan.png',
    '/images/james-mcdonald.png',
    '/images/cowomen.png',
  ]

  return (
    <>
      <MyCarousel arrowWhite>
          {images.map( (src, idx) => (
            <div className='project-item' key={idx}>
              <img className='project-item__image' src={src} alt=""/>
            </div>
            ))
          }
      </MyCarousel> 
    </>
  )
}

export default ProjectsCarousel
