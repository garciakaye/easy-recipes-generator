import React from 'react';
import { Player } from '@lottiefiles/react-lottie-player';


export default function FoodCarousel() {
  return (
    <div>
      <Player
        autoplay
        loop
        src="https://assets10.lottiefiles.com/packages/lf20_kfqquhwr.json"
        style={{ height: '150px', width: '150px' }}
      >
      </Player>
    </div>
  )
}
