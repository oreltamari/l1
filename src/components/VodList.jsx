import axios from 'axios';
import React, { useEffect, useState } from 'react'
import {useSearchParams,Link} from "react-router-dom"
import VodItem from './VodItem';

export default function VodList() {
  const [list,setList] = useState([]);
  const [loading,setLoading] = useState(false);
  const [query] = useSearchParams();

  useEffect(() => {
    doApi();
  },[query])

  const doApi = async() => {
    const queryS = query.get("s") || "black"
    console.log(queryS);
    const url = `https://omdbapi.com/?s=${queryS}&apikey=5a292f28`
    try {
      setLoading(true);
      setList([]);
      const {data} = await axios.get(url);
      console.log(data.Search);
      setList(data.Search)
      setLoading(false);
    } catch (error) {
      console.log(error)
    }
    
  }

  return (
    <div>
      {loading && <h2>Loading...</h2>}
      <div className='row'>
        {list.map(item => {
          return (
            <VodItem key={item.imdbID} item={item}/>
          )
        })}
      </div>
    </div>
  )
}
