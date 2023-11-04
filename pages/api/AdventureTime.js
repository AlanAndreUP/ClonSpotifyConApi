import fetch from 'node-fetch';
import dotenv from 'dotenv';
const accessTokenModule = require('../../accessToken');
dotenv.config();

export default async function handler(req, res) {
 
    const accessToken = accessTokenModule.getAccessToken();

  const searchUrl = 'https://api.spotify.com/v1/search';
  const query = 'q=AventureTime&type=track';  
  const searchHeaders = {
    Authorization: `Bearer ${accessToken}`,
  };

  const searchResponse = await fetch(`${searchUrl}?${query}`, {
    method: 'GET',
    headers: searchHeaders,
  });

  const searchData = await searchResponse.json();
  res.status(200).json(searchData);
}
