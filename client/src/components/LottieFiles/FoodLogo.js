import React from 'react';
import { Player } from '@lottiefiles/react-lottie-player';


export default function LottieGirl() {
  return (
    <div>
      <Player
        autoplay
        // loop
        src="https://assets8.lottiefiles.com/packages/lf20_kfqquhwr.json"
        style={{ height: '100px', width: '100px' }}
      >
      </Player>
    </div>
  )
}
