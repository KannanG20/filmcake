import React, { useEffect, useState } from 'react'
import Card from '../card/Card'
import './movielist.css'
import { useParams } from 'react-router-dom'

const MovieList = () => {

  const { type } = useParams();
  const [currentMovie, setCurrentMovie] = useState([])
  
  useEffect(()=>{
      fetch(`https://api.themoviedb.org/3/movie/${!type ? `popular` : type}?api_key=${import.meta.env.VITE_REACT_API_KEY}`).then(res=>res.json()).
      then(data=> setCurrentMovie(data.results))
  }, [type]);
  
  return (
    <>
    <div className='movielist'>
        <h2>{`${!type ? 'Popular Movies' : type +" "+ 'movies'}`}</h2>
            <div className='card_container'>
                <Card data={currentMovie}/>
            </div>
    </div>
    </>
  )
}

export default MovieList