import axios from 'axios';
import React, { useEffect, useState } from 'react'
import {useParams,useNavigate} from "react-router-dom"

export default function VodInfo() {
  const [vodItem,setVodItem] = useState({})
  const [loading,setLoading] = useState(false);
  const params = useParams();
  const nav = useNavigate();

  useEffect(() => {
    doApi();
  },[])

  const doApi = async() => {
    const url = `https://omdbapi.com/?i=${params["id"]}&apikey=5a292f28`
    try {
      setLoading(true);
      const {data} = await axios.get(url);
      setVodItem(data);
      console.log(data);
      setLoading(false)
    } catch (error) {
      console.log(error)
    }
  }
  return (
    <div className='container text-center pb-3'>
      {loading ? <h2>Loading...</h2> :
      <>
        <h1>Movie: {vodItem.Title}</h1>
        <img src={vodItem.Poster} />
        <p style={{maxWidth:"500px"}} className='mx-auto'>Plot: {vodItem.Plot}</p>
        <div>Rating:{vodItem.imdbRating}</div>
        <button className='btn btn-info' onClick={() => {
          nav(-1)
        }}>Back to list</button>
      </>
      }
    </div>
  )
}


