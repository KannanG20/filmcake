import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import Card from '../../components/card/Card';
import './movie.css'

const Movie = () => {

    const { id } = useParams();
    const [movie, setMovie] = useState({})
    const [video, setVideo] = useState([])
    const [similar, setSimilar] = useState([]);
    const [err, setErr] = useState(false);

    useEffect(()=>{
        const getData = async () => {
            try {
                const movieData = await fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=${import.meta.env.VITE_REACT_API_KEY}`)
                if(!movieData.ok){
                    setErr((prev)=>!prev)
                }else{
                    const movie = await movieData.json()
                    setMovie(movie)
                }
                const videoData = await fetch(`https://api.themoviedb.org/3/movie/${id}/videos?api_key=${import.meta.env.VITE_REACT_API_KEY}`)
                if(!videoData.ok){
                    throw new Error("Cannot Fetch Data")
                }else{
                    const video = await videoData.json()
                    setVideo(video.results[0])
                }
                const similarData = await fetch(`https://api.themoviedb.org/3/movie/${id}/similar?api_key=${import.meta.env.VITE_REACT_API_KEY}`)
                if(!similarData.ok){
                    throw new Error("cannot fetch data")
                }else{
                    const similar = await similarData.json()
                    setSimilar(similar.results)  
                }
            } catch (error) {
                setErr((prev)=>!prev)
            }
         }
         return () => getData();
    }, [id])


  return (
    <>
    {err ?

        <Error/>

         :
         
        <div className='movie_container'>
            <div className='movie_banner'>
                <img src={`https://image.tmdb.org/t/p/original${ movie && movie.backdrop_path}`}/>
            </div>
            <img className='movie_poster' src={`https://image.tmdb.org/t/p/original${ movie && movie.poster_path}`}/>
            <div className='movie_details'>
                <h1>{movie.original_title}</h1>
                <p>{movie.overview}</p>
                <p>ratings : <span style={{color: "yellow"}}>{movie.vote_average}</span></p>
                <h5 className='status'>{movie.status}</h5>
            </div>
            <div className='movie_trailer'>
            {video && 
            <>
                <h2>Trailer</h2>
                    <iframe width={1000} height={500}
                    src={`https://www.youtube.com/embed/${video.key}`}
                    className="yt">
                    </iframe>
            </>
            }
            </div>
            <div className='similar_wrapper'>
                <h2>Similar Movies</h2>
                    <Card data={similar}/>
            </div>
        </div>
    }
    </>
  )
}

export default Movie