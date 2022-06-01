import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
// import { SwiperSlide, Swiper } from "swiper/react"
import 'swiper/css';
// import MovieCard from './MovieCard';
import MovieSimilar from './MovieSimilar';
const MoviesPageDetail = () => {
    const [movie, setMovie] = useState({});
    const {movieId} = useParams() //destructuring
    const url = `https://api.themoviedb.org/3/movie/${movieId}?api_key=ffbb0941ef45ff4d3301e36eb631d750`
    useEffect(() => {
        const fetchData = async() => {
            try{
                const response = await axios.get(url);
                if(response.data){
                    setMovie(response.data);
                }
            }
            catch
            {
                throw new Error("fetch fail");
            }
        }
        
        fetchData();
    }, [movieId])

    const { poster_path, backdrop_path, title, genres, overview } = movie;
 
    return (
        <div className="pb-10">
            <div className="w-full h-[600px] relative">
                <div className="absolute inset-0 bg-black opacity-50"></div>
                <div className="w-full h-full bg-cover bg-no-repeat"
                    style={{
                        backgroundImage: `url(https://image.tmdb.org/t/p/original${backdrop_path})`
                    }}
                ></div>
            </div>
            <div className="w-full h-[500px] max-w-[800px] mx-auto -translate-y-2/4 relative">
                <img 
                    src={`https://image.tmdb.org/t/p/original${poster_path}`}
                    alt=""
                    className="w-full h-full object-cover rounded-xl"
                />
            </div>
            <h1 className="text-center font-bold text-white text-4xl -mt-[200px] mb-10">{title}</h1>
            
                {
                    genres &&
                    (genres.length > 0 && (
                        <div className="flex items-center justify-center gap-x-5 mb-10">
                            {
                                genres.map((item) => {
                                    return (
                                        <span key={item.id}
                                            className="py-2 px-4 border-primary text-primary  border rounded"
                                        >
                                        {item.name}
                                        </span>
                                    )
                                })
                            }
                        </div>
                    ))    
                }
            
            <p className="text-center mx-auto text-white leading-relaxed max-w-[600px] mb-10">{overview}</p>
            <MovieCredits></MovieCredits>
            <MovieVideo></MovieVideo>
            <MovieSimilar movieId={movieId}></MovieSimilar>
        </div>
    );
};
const MovieCredits = () =>{
    const {movieId} = useParams() //destructuring
    const [data, setData] = useState([]);
    const url = `https://api.themoviedb.org/3/movie/${movieId}/credits?api_key=ffbb0941ef45ff4d3301e36eb631d750`
    // console.log(data)
    useEffect(() => {
        const fetchData = async() => {
            try{
                const response = await axios.get(url);
                if(response.data){
                    setData(response.data);
                }
            }
            catch
            {
                throw new Error("fetch fail");
            }
        }
        
        fetchData();
    }, [movieId])
    if(!data) return null;
    const { cast } = data;
    if( !cast || cast.length <= 0) return null;
    return (
        <div className="page-container pb-10">
            <h2 className="text-center text-4xl mb-10 text-white">Casts</h2>
            <div className="grid grid-cols-4 gap-5">
               {
                  cast.slice(0,4).map((item) => {
                       return (
                        <div className="cast-item" key={item.id}>
                            <img 
                                src={`https://image.tmdb.org/t/p/original${item.profile_path}`}
                                alt=""
                                className="w-full h-[300px] object-cover"
                            />
                            <h3 className="text-white font-medium text-xl text-center">{item.name}</h3>
                        </div>
                 
                       )
                   })
               }
            </div>
        </div>
    )
}
//https://api.themoviedb.org/3/movie/{movie_id}/videos?api_key=
const MovieVideo = () => {
    const {movieId} = useParams() //destructuring
    const [data, setData] = useState([]);
    const url = `https://api.themoviedb.org/3/movie/${movieId}/videos?api_key=ffbb0941ef45ff4d3301e36eb631d750`
    // console.log(data)
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
    // if(!data)
    return (
        <div className="page-container py-10">
            <div className="flex flex-col gap-10">
            {
                data.slice(0,2).map((item) => {
                    return (
                        <div className="" key={item.id}>
                            <h3 className="mb-5 text-xl font-medium p-1 bg-secondary inline-block text-white bg-purple-600">
                                {item.name}
                            </h3>
                            <div className="w-full aspect-video">

                                <iframe width="864" height="486" src={`https://www.youtube.com/embed/${item.key}`} title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen
                                className="w-full h-full"
                                >
                                </iframe>
                            </div>
                        </div>
                    )
                })
            }
           
            </div>
        </div>
    )
}
//<iframe width="853" height="480" src="https://www.youtube.com/embed/ON6UouAqQIg" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

// const MovieSimilar = () => {
//     const {movieId} = useParams() //destructuring
//     const [data, setData] = useState([]);
//     const url = `https://api.themoviedb.org/3/movie/${movieId}/similar?api_key=ffbb0941ef45ff4d3301e36eb631d750`
//     console.log(data)
//     useEffect(() => {
//         const fetchData = async() => {
//             try{
//                 const response = await axios.get(url);
//                 if(response.data?.results){
//                     setData(response.data.results);
//                 }
//             }
//             catch
//             {
//                 throw new Error("fetch fail");
//             }
//         }
        
//         fetchData();
//     }, [])
//     return (
//         <div className="page-container py-10">
//             <h2 className="text-center text-4xl mb-10 text-white">Similar</h2>
//             <div className="movie-list">
//             <Swiper
//                 spaceBetween={50}
//                 slidesPerView={4}
//                 grabCursor={true}
//             >
//             {
//                 data.length > 0 && data.map((item) => {
                    
//                     return (
//                         <SwiperSlide key={item.id}>
//                             <MovieCard item={item}></MovieCard>
//                         </SwiperSlide>
//                     )
//                 })
//             }
//             </Swiper>
//             </div>
//         </div>
//     )
// }

export default MoviesPageDetail;