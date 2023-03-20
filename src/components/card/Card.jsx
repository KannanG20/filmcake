import React, { useEffect, useState } from 'react'
import './card.css'
import { Link } from 'react-router-dom'


const Card = ({ data }) => {

  return (
    <div className='card_container'>
      {data.map((movie)=> (
        <Link to={`/movie/${movie.id}`} key={movie.id}>
          <div className='card_wrapper'>
            <img src={`https://image.tmdb.org/t/p/original${ movie && movie.poster_path}`}/>
            <div className='card_overlay'>
              <p>{`${movie.overview.slice(0, 150)}`}</p>
            </div>
          </div>
        </Link>
      ))}
    </div>
  )
}

export default Card