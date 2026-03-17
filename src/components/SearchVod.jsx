import React, { useRef } from 'react'
import {useNavigate} from "react-router-dom"

export default function SearchVod() {
  const inputRef = useRef();
  const nav = useNavigate();

  const onSub = (e) => {
    e.preventDefault()
    console.log(inputRef.current.value);
    nav("/?s="+inputRef.current.value)
  }

  return (
    <div className='mt-3'>
      <form onSubmit={onSub} className='d-flex col-md-4'>
        <input ref={inputRef} placeholder='search for movies...' type="search" className='form-control' />
        <button className='btn btn-dark'>Search</button>
      </form>
    </div>
  )
}
