import ListAlbums from "../components/ListAlbums";
import { useEffect, useState } from 'react';
export default function Home() {
  const [spotifyData, setSpotifyData] = useState(null);
  const [enjambreData, setEnjambre] = useState(null);
  const [AventureData, setAventure] = useState(null);
  const [AnglesData, setAngeles] = useState(null);

  useEffect(() => {
    fetch('/api/hello') 
      .then((response) => response.json())
      .then((data) => {
       
        setSpotifyData(data); 
       
      })
      .catch((error) => {
        console.error('Error al obtener datos de la API', error);
      });
  }, []);
  useEffect(() => {
    fetch('/api/Enjambre') 
      .then((response) => response.json())
      .then((data) => {
       
        setEnjambre(data); 
        
        
      })
      .catch((error) => {
        console.error('Error al obtener datos de la API', error);
      });
  }, []);
  useEffect(() => {
    fetch('/api/AdventureTime') 
      .then((response) => response.json())
      .then((data) => {
       
        setAventure(data); 
        
        
      })
      .catch((error) => {
        console.error('Error al obtener datos de la API', error);
      });
  }, []);
  useEffect(() => {
    fetch('/api/LosAngelesAzules') 
      .then((response) => response.json())
      .then((data) => {
       
        setAngeles(data); 
        

      })
      .catch((error) => {
        console.error('Error al obtener datos de la API', error);
      });
  }, []);
  const playlists = spotifyData;
  const dormir = AventureData;
  const enfoque = AnglesData ;
  const estadoDeAnimo = enjambreData;

  return (
    <div className="pt-28 md:pl-72 p-8">
      <ListAlbums title="Spotify Playlists" data={spotifyData} />
      <ListAlbums title="Dormir" data={AventureData}/>
      <ListAlbums title="Enfoque" data={AnglesData}/>
      <ListAlbums title="Estado de ánimo"data={enjambreData} />
    </div>
  );
}
