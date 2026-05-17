import React from 'react';
import img1 from '../img/bg.png';

const Topposter = () => {
  return (
    <div
      style={{
        marginTop: '56px', // matches mobile header height (h-14)
        width: '100%',
        // Responsive height: shorter on mobile, full screen on desktop
        height: 'clamp(240px, 54.5vw, 100vh)',
        overflow: 'hidden',
        position: 'relative',
      }}
    >
      <img
        src={img1}
        alt="Suha Scribbles banner"
        style={{
          width: '100%',
          height: '100%',
          objectFit: 'cover',
          objectPosition: 'center top',
          display: 'block',
        }}
      />
    </div>
  );
};

export default Topposter;