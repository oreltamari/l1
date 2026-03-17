import React from 'react'
import { Link } from 'react-router-dom'

export default function VodItem({item}) {
  return (
    <article className='p-2 col-lg-6'>
      {/* h-100 נותן את הגובה של האבא כדי
              שכולם יהיו בגובה באותה שורה */}
              {/* overflow-hidden - מונע מתמונה לרחף מעל האבא */}
      <div className='border p-2 h-100 overflow-hidden shadow'>
        <img src={item.Poster} className='col-2 me-2 float-start ' />
        <h4>{item.Title}</h4>
        <div>* Year: {item.Year}</div>
        <Link to={"/vod/" + item.imdbID}>More info</Link>
      </div>
    </article>
  )
}
