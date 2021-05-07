import Heading from "./Heading";
import TestimonialCarousel from "./TestimonialCarousel";

const Testimonials = () => {
  return (
    <section className='section-testimonials'>
      <div className='section-testimonials__heading'>
        <Heading main={'Testimonials'} sub={'What our customers have to say'} />
      </div>

      <TestimonialCarousel/>
    </section>
  )
}

export default Testimonials;
