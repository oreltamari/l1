import React from 'react'
import SearchVod from '../components/SearchVod'
import VodList from '../components/VodList'
import Strip from '../components/Strip'

export default function Home() {
  return (
    <>
     <Strip />
    <div className='container'>
     
      <SearchVod />
      <VodList />
    </div>
    </>
  )
}
