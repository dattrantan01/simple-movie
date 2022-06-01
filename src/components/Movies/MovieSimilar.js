import React, { useEffect, useState } from 'react';

import MovieCard from './MovieCard';
import { SwiperSlide, Swiper } from "swiper/react"
import 'swiper/css';
import axios from 'axios';

const MovieSimilar = ({movieId}) => {
    // const {movieId} = useParams() //destructuring
    const [data, setData] = useState([]);
    const url = `https://api.themoviedb.org/3/movie/${movieId}/similar?api_key=ffbb0941ef45ff4d3301e36eb631d750`
    console.log(data)
    useEffect(() => {
        const fetchData = async() => {
            try{
                const response = await axios.get(url);
                if(response.data?.results){
                    setData(response.data.results);
                }
            }
            catch
            {
                throw new Error("fetch fail");
            }
        }
        
        fetchData();
    }, [movieId])
    return (
        <div className="page-container py-10">
            <h2 className="text-center text-4xl mb-10 text-white">Similar</h2>
            <div className="movie-list">
                <Swiper
                    spaceBetween={50}
                    slidesPerView={4}
                    grabCursor={true}
                >
                {
                    data.length > 0 && data.map((item) => {
                        
                        return (
                            <SwiperSlide key={item.id}>
                                <MovieCard item={item}></MovieCard>
                            </SwiperSlide>
                        )
                    })
                }
                </Swiper>
            </div>
        </div>
    )
};

export default MovieSimilar;