import React, { useEffect, useState } from 'react';
import MovieCard from './MovieCard';
import { SwiperSlide, Swiper } from "swiper/react"
import 'swiper/css';
import axios from 'axios';
//https://api.themoviedb.org/3/movie/now_playing?api_key=ffbb0941ef45ff4d3301e36eb631d750

const MovieList = ({type="now_playing"}) => {
    const [movies, setMovies] = useState([]);
    const url = `https://api.themoviedb.org/3/movie/${type}?api_key=ffbb0941ef45ff4d3301e36eb631d750`
    useEffect(() => {
        const fetchData = async() => {
            try{
                const response = await axios.get(url);
                if(response.data?.results){
                    setMovies(response.data.results);
                }
            }
            catch
            {
                throw new Error("fetch fail");
            }
        }
        
        fetchData();
    }, [])
    // console.log(movies)
    return (
        <div className="movie-list">
            <Swiper
                spaceBetween={50}
                slidesPerView={4}
                grabCursor={true}
            >
            {
                movies.length > 0 && movies.map((item) => {
                    return (
                        <SwiperSlide key={item.id}>
                            <MovieCard item={item}></MovieCard>
                        </SwiperSlide>
                    )
                })
            }
            </Swiper>
      </div>
    );
};

export default MovieList;