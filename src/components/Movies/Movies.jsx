import React from 'react';

const Movies = ({ movies }) => {
    console.log(movies);
    const {id,name,title, overview, poster_path, backdrop_path, popularity, first_air_date, release_date} = movies;
    return (
        <div className='ring-2 p-4 rounded h-[500px] shadow-lg bg-white'>
            <img className='rounded-3xl' src={`https://image.tmdb.org/t/p/w500${backdrop_path}`} alt="" />
            <div className='mt-6'>
                <h1 className="text-xl font-semibold tracking-wider text-indigo-600">{name ? name : title}</h1>
                <span className='font-semibold text-gray-400'>Release Date: {first_air_date ? first_air_date : release_date}</span>
                <span className='block text-gray-400 '>Popularity: {popularity}</span>
                <p className='py-5 font-normal text-sm text-gray-600'>{overview.slice(0,100) }</p>
            </div>
            <button className='w-full bg-indigo-600 py-2 rounded-sm text-slate-200 text-md'>Show Details</button>
        </div>
    );
};

export default Movies;