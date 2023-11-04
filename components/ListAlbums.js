import Link from "next/link";
import React from "react";
import Card from "./Card";

const ListAlbums = ({ title, data }) => {

  return (
    <div className="mb-8">
      <div className="flex items-center justify-between mb-8">
        <Link
          href="/"
          className="text-2xl font-bold text-white hover:underline"
        >
          {title}
        </Link>
        <Link
          href="/"
          className="uppercase text-sm font-bold tracking-[2px] hover:underline"
        >
          Ver todo
        </Link>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-6 gap-6">
      {data && data.tracks && data.tracks.items && data.tracks.items.length > 0 && data.tracks.items.map((song, index) => {
  if (song.preview_url !== null) {
    return (
      <Card
        key={index}
        title={song.name}
        artist={song.artists[0].name}
        imageSrc={song.album.images[1].url}
        idCancion={song.id}
        preview_url={song.preview_url}
      />
    );
  } else {
    return null; 
  }
})}

      </div>
     
    </div>
    
  );

};

export default ListAlbums;
