import React from 'react'
import Main from '../components/Main'
import axios from "axios";
import {useEffect, useState} from "react";
import Movies from './Movies';

const Home = () => {
    const [movies, setMovies] = useState([]);
    const film = movies.length ? movies[Math.floor(Math.random()
        * movies.length)] : {
            backdrop_path: '',
            title: '',
            overview: ''
        }
        useEffect(() => {
            axios.get('https://api.themoviedb.org/3/movie/upcoming?api_key=8acb9e7e608c19af78799e7e5f021523&language=en-US&page=1')
            .then((response) => {
                setMovies(response.data.results);
            })
        }, [])
        const mov=[]
        const movkor=[]
        return (
            <>
                <Main />
            </>
            
          )
}


export default Home