import { Fragment } from "react";

import MovieList from "./components/Movies/MovieList";

function App() {
  return (
    <Fragment>
      <header className="header flex items-center justify-center gap-x-5 text-white py-10">
        <span className="text-primary">Home</span>
        <span>Movies</span>
      </header>
      <section className="banner h-[500px] page-container mb-20">
        <div className="w-full h-full rounded-lg bg-white relative">
        <div className="overlay absolute inset-0 bg-gradient-to-t from-[rgba(0,0,0,0.5)] to-[rgba(0,0,0,0.5)] rounded-lg"></div>
          <img 
            src="https://vcdn1-giaitri.vnecdn.net/2022/05/05/DoctorStrange2mmm-1651738078-4301-1651738447.jpg?w=1200&h=0&q=100&dpr=1&fit=crop&s=hvLU0ITOvD2EhxFK8TD8Og"
            alt=""
            className="w-full h-full object-cover rounded-lg"
          />
          <div className="absolute left-5 bottom-5 w-full text-white">
            <h2 className="font-bold text-3xl mb-5">Doctor Strange</h2>
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
            <button className="py-3 px-6 rounded-lg bg-primary text-white font-medium">Watch Now</button>
          </div>
        </div>
      </section>
      <section className="movies-layout page-container pb-20">
        <h2 className="text-white mb-10 text-3xl">Now Playing</h2>
        <MovieList></MovieList>
      </section>
      <section className="movies-layout page-container pb-20 mb-20">
        <h2 className="text-white mb-10 text-3xl">Top Rated</h2>
        <MovieList type="top_rated"></MovieList>
      </section>
      <section className="movies-layout page-container pb-20 mb-20">
        <h2 className="text-white mb-10 text-3xl">Trending</h2>
        <MovieList type="popular"></MovieList>
      </section>
      
    </Fragment>
  );
}

export default App;
