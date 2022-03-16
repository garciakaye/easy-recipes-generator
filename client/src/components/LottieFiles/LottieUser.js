import React from 'react';
import { Player } from '@lottiefiles/react-lottie-player';


export default function FoodCarousel() {
  return (
    <div>
      <Player
        autoplay
        loop
        src="https://assets9.lottiefiles.com/packages/lf20_sy48zdcn.json"
        style={{ height: '100px', width: '100px' }}
      >
      </Player>
    </div>
  )
}
