import React from 'react';
import { Player } from '@lottiefiles/react-lottie-player';


export default function FoodCarousel() {
  return (
    <div>
      <Player
        autoplay
        loop
        src="https://assets9.lottiefiles.com/packages/lf20_kqjmcwdh.json"
        style={{ height: '300px', width: '300px' }}
      >
      </Player>
    </div>
  )
}
