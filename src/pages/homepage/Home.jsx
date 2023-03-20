import React, { useEffect, useState } from 'react'
import './home.css'
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import MovieList from '../../components/movielist/MovieList';

const Home = () => {

    const [data, setData] = useState([]);
    
    useEffect(()=>{
         fetch(`https://api.themoviedb.org/3/movie/popular?api_key=${import.meta.env.VITE_REACT_API_KEY}`).
         then(res => res.json()).
         then(data => {
            setData(data.results)
         })
    }, []);

  return (
    <>
    <div className='poster_container'>
            <Carousel
                infiniteLoop={true}
                showThumbs={false}
                showStatus={false}
                transitionTime={3}
                interval={5000}
                autoPlay={true}
                axis={'vertical'}
            >
            {data.map(data=>(
                <>
                <div className='poster_img' key={data.id}>
                    <img  key={data.id} src={`https://image.tmdb.org/t/p/original${ data && data.backdrop_path}`}  />
                </div>
                <div className='poster_wrapper'>
                    <div key={data.id}>{data.title}</div>
                    <p>ratings : <span className='rating' key={data.id}>{data.vote_average}</span></p>
                </div>
                <div className='poster_desc'>
                    <p key={data.id}>{data.overview}</p>
                </div>
                </>
                ))}
            </Carousel>
            <MovieList/>
    </div>
            
    </>
  )
}

export default Home