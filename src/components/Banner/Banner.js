import React, { useEffect, useState } from 'react';
import { SwiperSlide, Swiper } from "swiper/react"
import 'swiper/css';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Banner = () => {
    const [movies, setMovies] = useState([]);
    const url = 'https://api.themoviedb.org/3/movie/upcoming?api_key=ffbb0941ef45ff4d3301e36eb631d750'
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
    return (
        <section className="banner h-[600px] page-container mb-20">
            <Swiper
            slidesPerView={"auto"}
            grabCursor={true}
            >
                {
                    movies.length > 0 && movies.map((item) => {
                        return (
                            <SwiperSlide key={item.id}>
                                <BannerItem item={item}></BannerItem>
                            </SwiperSlide> 
                        )
                    })
                }
                       
            </Swiper>
        </section>
    );
};
//https://image.tmdb.org/t/p/w500/kqjL17yufvn9OVLyXYpvtyrFfak.jpg
const BannerItem = ({item}) => {
    const handleNavigate = useNavigate();
    const {title, poster_path, id} = item;
    return (
        <div className="w-full h-full rounded-lg bg-white relative">
          <div className="overlay absolute inset-0 bg-gradient-to-t from-[rgba(0,0,0,0.5)] to-[rgba(0,0,0,0.5)] rounded-lg"></div>
          <img 
            src={`https://image.tmdb.org/t/p/w500/${poster_path}`}
            alt=""
            className="w-full h-full object-cover rounded-lg"
          />
          <div className="absolute left-5 bottom-5 w-full text-white">
            <h2 className="font-bold text-3xl mb-5">{title}</h2>
            <div className="flex items-center gap-x-3 mb-8">
              <span className="py-2 px-4 border border-white rounded-md">
                Adventure
              </span>
              <span className="py-2 px-4 border border-white rounded-md">
                Adventure
              </span>
              <span className="py-2 px-4 border border-white rounded-md">
                Adventure
              </span>
            </div>
            <button className="py-3 px-6 rounded-lg bg-primary text-white font-medium"
                onClick={() => handleNavigate(`/movie/${id}`)}
            >Watch Now</button>
          </div>
        </div>
    )
}
export default Banner;