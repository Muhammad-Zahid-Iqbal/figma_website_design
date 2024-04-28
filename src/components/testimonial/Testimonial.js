import React from 'react';
import testimonial_icon from '../../images/testimonial_icon.svg';
import ijaz from '../../images/ijaz.svg';
import johan from '../../images/johan.svg';
import mackel from '../../images/mackel.svg';

const testimonialData = [
  {
    image: ijaz,
    name: 'Ajaz',
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco',
    number: '01'
  },
  {
    image: johan,
    name: 'Johan',
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco',
    number: '02'
  },
  {
    image: mackel,
    name: 'Mackel',
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco',
    number: '03'
  }
];

const Testimonial = () => {
  return (
    <div className='testimonial_main'>
      <div className='container '>
        <div className='pt-5'>
          <img src={testimonial_icon} className='d-flex m-auto' alt='testimonial_icon'/>
        </div>
        <div className='pt-4 pb-5'>
          <h2 className='d-flex m-auto justify-content-center text-white'>What our clients say about us?</h2>
        </div>
        <div className='row'>
          {testimonialData.map((testimonial, index) => (
            <div key={index} className='col-12 col-sm-4 pb-5'>
              <div className='testimonial_col'>
                <div className='testi_img'>
                  <img src={testimonial.image} alt={testimonial.name}/>
                </div>
                <div className='title_name pt-5'>
                  <h2 className='text-white'>{testimonial.name}</h2>
                </div>
                <div className='para_ijaz'>
                  <p className='text-white'>{testimonial.text}</p>
                </div>
                <div className='user_number'>
                  <div className='number_border'>
                    <h2 className='text-white'>{testimonial.number}</h2>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Testimonial;
