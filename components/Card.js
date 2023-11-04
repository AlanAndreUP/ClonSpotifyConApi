import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState, useRef } from 'react';
import { RiPlayFill } from "react-icons/ri";
import dotenv from 'dotenv';

dotenv.config();

const Card = ({ title, artist, imageSrc, idCancion, preview_url }) => {
  const [spotifyData, setSpotifyData] = useState(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef(new Audio());

  useEffect(() => {
      audioRef.current.addEventListener('ended', () => {
      setIsPlaying(false);
    });

    return () => {
     
      audioRef.current.pause();
    };
  }, []);

  const handlePlayClick = (e) => {
    e.preventDefault();
console.log(isPlaying);

    if (isPlaying) {
      audioRef.current.pause();
      setIsPlaying(false);
    }
else{
  fetch('/api/Token')
  .then((response) => response.json())
  .then((data) => {
    setSpotifyData(data);
  })
  .catch((error) => {
    console.error('Error al obtener datos de la API', error);
  });

fetch(`https://api.spotify.com/v1/tracks/${idCancion}`, {
  method: 'GET',
  headers: {
    'Authorization': `Bearer ${spotifyData}`,
    'Content-Type': 'application/json',
  },
})
  .then((response) => {
    if (!response.ok) {
      throw new Error('Error en la solicitud a la API de Spotify');
    }
    return response.json();
  })
  .then((data) => {
    if (data.preview_url) {
      audioRef.current.src = data.preview_url;
      setIsPlaying(true);
      audioRef.current.play();
     
    }
  })
  .catch((error) => {
    console.error('Error al obtener los detalles de la canción:', error);
  });
}
   
  };

  return (
    <div className="bg-spotify-lightgray rounded-lg p-4 hover:bg-spotify-lightgrayHover transition-all group">
      <div className="mb-4 relative">
        <Image
          src={imageSrc}
          width={200}
          height={350}
          alt="Album"
          className="rounded drop-shadow-2xl mx-auto"
        />
        <button className="p-3 text-3xl bg-spotify-green rounded-full text-spotify-gray absolute right-4 bottom-4 opacity-0 group-hover:opacity-100 transition-all duration-300 translate-y-2 group-hover:translate-y-0 ease-out">
          <RiPlayFill onClick={handlePlayClick} />
        </button>
        {isPlaying && <span>Reproduciendo...</span>}
      </div>
      <div>
        <h5 className="font-medium text-gray-100 mb-2">{title}</h5>
        <p className="text-gray-400 text-sm w-[18ch]">
          {artist}
        </p>
      </div>
    </div>
  );
};

export default Card;
