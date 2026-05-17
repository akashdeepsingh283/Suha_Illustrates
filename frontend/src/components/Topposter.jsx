import React from 'react';
import img1 from '../img/bg.png';

const Topposter = () => {
  return (
    <div
      style={{
        marginTop: 'clamp(56px, 8vw, 64px)', // push below fixed header only
        width: '100%',
        height: 'clamp(200px, 60vw, 93vh)',
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