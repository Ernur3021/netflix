import axios from "axios"
import {useEffect, useState} from "react"

function Main() {

    const [movies, setMovies] = useState([]);
    const film = movies?.length ? movies[Math.floor(Math.random() 
        * movies.length)] : {
            backdrop_path: '',
            title: ''
        } 
        useEffect(() => {
            axios.get('https://api.themoviedb.org/3/movie/upcoming?api_key=8acb9e7e608c19af78799e7e5f021523&language=en-US&page=1')
            .then((response) => {
                setMovies(response.data.results);
            })
        }, [])
        console.log(movies)

  return (
    <>
        <div>
            <img className="#" src={`https://image.tmdb.org/t/p/original/${film.backdrop_path}`} alt="" width='100%'/>
        </div>
    </>
  )
}

export default Main