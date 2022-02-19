import Marquee from 'react-easy-marquee';

import slider1 from '../assets/slider1.jpg';
import slider2 from '../assets/slider2.jpg';
import slider3 from '../assets/slider3.jpg';

const ImageSlide = () => {
  return (
    <Marquee height='15rem' reverse duration='10000' pauseOnHover>
      <figure>
        <img src={slider1} alt='Banner-1' className='h-52' />
      </figure>
      <figure>
        <img src={slider2} alt='Banner-2' className='h-52' />
      </figure>
      <figure>
        <img src={slider3} alt='Banner-3' className='h-52' />
      </figure>
    </Marquee>
  );
};

export default ImageSlide;
