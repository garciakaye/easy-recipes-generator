import React from 'react';
import { Player } from '@lottiefiles/react-lottie-player';


export default function LottieGirl() {
  return (
    <div>
      <Player
        autoplay
        loop
        src="https://assets10.lottiefiles.com/packages/lf20_tll0j4bb.json"
        style={{ height: '800px', width: '800px' }}
      >
      </Player>
    </div>
  )
}
