import React, { useEffect, useState } from 'react';
import axios from 'axios';
import MovieCard from '../components/Movies/MovieCard';

const MoviesPage = () => {
    const [movies, setMovies] = useState([]);
    const url = `https://api.themoviedb.org/3/movie/popular?api_key=ffbb0941ef45ff4d3301e36eb631d750`
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
    // console.log(movies);
    return (
        <div className="py-10 page-container">
            <div className="flex w-full mb-7">
                <input className="border border-primary w-full bg-transparent text-white p-3 outline-none rounded-lg"
                    placeholder="Search here"
                    type="text"

                />
            </div>
            <div className="grid grid-cols-4 gap-10">
                {
                    movies.map((item) => {
                        return (
                            <MovieCard key={item.id} item={item}></MovieCard>
                        )
                    })
                }
            </div>
            
        </div>
    );
};

export default MoviesPage;