import React, { Fragment } from 'react';
import MovieList from '../components/Movies/MovieList';
import Banner from '../components/Banner/Banner'
const HomePage = () => {
    return (
        <Fragment>
        <Banner></Banner>
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
};

export default HomePage;