import React from 'react'
import Navbar from './Navbar'
import {albumsData} from '../assets/assets'
import AlbumItem from './AlbumItem'
import { songsData } from '../assets/assets'
import SongItem from './SongItem'

const DisplayHome = () => {
  return (
    
          <>
          <Navbar />

          <div className='mb-4'>
              <h1 className='my-5 font-bold text-2xl'>Featured Charts</h1>
              <div className='flex overflow-auto '>
                  
                   {albumsData.map((item, idx) => (
                       <AlbumItem key={idx} id={ item.id} name={item.name} image={item.image} desc={item.desc} />
                   ))}
                  
              </div>
          </div>

          <div className='mb-4'>
              <h1 className='my-5 font-bold text-2xl'>Today's biggest hits</h1>
              <div className='flex overflow-auto '>
                  
                   {songsData.map((item, idx) => (
                       <SongItem key={idx} id={item.id } name={item.name} image={item.image} desc={item.desc} />
                   ))}
                  
              </div>

          </div>
          </>
   
  )
}

export default DisplayHome
