import React from 'react';
import { Player } from '@lottiefiles/react-lottie-player';
import animationData from './lottie/bubbles.json';

const Spinner = () => {
  return (
    <div className="lottie-container">
      <Player
        autoplay
        loop
        src={animationData}
        style={{ height: '100px', width: '100px' }}
      ></Player>
    </div>
  );
};

export default Spinner;
