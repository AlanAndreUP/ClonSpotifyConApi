import React from 'react';
import AudioPlayer from 'react-audio-player';

const MusicPlayer = ({ audioUrl }) => {
  return (
    <div>
      <AudioPlayer
        src={audioUrl}
        autoPlay={false} 
        controls
      />
    </div>
  );
};

export default MusicPlayer;
