import React from 'react';
//https://image.tmdb.org/t/p/w500/kqjL17yufvn9OVLyXYpvtyrFfak.jpg
const MovieCard = ({item}) => {
    const {title, vote_average, release_date, poster_path} = item;
    return (
        <div className="movie-card rounded-lg p-3 bg-slate-800 text-white h-full flex flex-col select-none">
            <img 
              src={`https://image.tmdb.org/t/p/w500${poster_path}`}
              alt=""
              className="w-full h-[300px] rounded-lg object-cover mb-5"
            />
            <h3 className="text-xl text-white font-medium mb-3">{title}</h3>
            <div className="flex items-center justify-between text-sm opacity-50 mb-10">
              <span>{new Date(release_date).getFullYear()}</span>
              <span>{vote_average}</span>
            </div>
            <button className="py-3 px-6 rounded-lg bg-primary text-white font-medium w-full mt-auto">Watch Now</button>
        </div>
    );
};

export default MovieCard;