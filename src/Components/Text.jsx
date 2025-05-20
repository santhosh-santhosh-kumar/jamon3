import React, { useEffect } from 'react'
import AOS from 'aos';
import { useLocation } from 'react-router-dom';

function Text() {
      const location = useLocation();
      useEffect(() => {
        AOS.init({
          duration: 1000,
          easing: 'ease-in-out',
          once: true,
        });
      }, [location]);
  return (
    <div>
      <p className='text-4xl font-mainfont text-center' data-aos="zoom-in">
      Overing a broad spectrum from crafting captivating films to producing an array of engaging videos. Our commitment to unwavering quality stands as the cornerstone of our work, a quality that our clients trust and rely on.
      </p>
    </div>
  )
}

export default Text