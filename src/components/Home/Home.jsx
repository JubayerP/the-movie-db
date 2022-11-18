import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Movies from '../Movies/Movies';

const Home = () => {
    const movies = useLoaderData();
    console.log(movies);
    return (
        <div>
            <div className='bg-[url("https://www.themoviedb.org/t/p/w1920_and_h600_multi_faces_filter(duotone,032541,01b4e4)/oE6bhqqVFyIECtBzqIuvh6JdaB5.jpg")] h-[90vh] bg-no-repeat'>
                <div className='flex pl-14 items-center h-[70vh]'>
                    <h1 className='text-5xl font-semibold text-white w-[60%] leading-tight'><span className='text-7xl font-bold text-white block'>Welcome.</span> Millions of movies, TV shows and people to discover. <span className='text-indigo-800'>Explore now.</span></h1>
                </div>
            </div>

            <div className='py-20 grid grid-cols-3 gap-4 px-10 bg-slate-600'>
                {
                    movies.results.slice(0,9).map(movie => <Movies key={movie.id} movies={ movie} />)
                }
            </div>
        </div>
    );
};

export default Home;