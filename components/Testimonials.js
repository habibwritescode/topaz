import Heading from "./Heading";
import Caarousel from "./Carousel";

const Testimonials = () => {
  return (
    <section className='section-testimonials'>
      <div className='section-testimonials__heading'>
      <Heading main={'Testimonials'} sub={'What our customers have to say'} />
      </div>
      <Caarousel />
    </section>
  )
}

export default Testimonials;