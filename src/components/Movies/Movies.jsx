import React from 'react';

const Movies = ({ movies }) => {
    console.log(movies);
    const {id,name,title, overview, poster_path, backdrop_path, popularity, first_air_date, release_date} = movies;
    return (
        <div className='ring-2 p-4 rounded h-[600px] shadow-lg bg-white'>
            <img className='rounded-3xl' src={`https://image.tmdb.org/t/p/w500${backdrop_path}`} alt="" />
            <div className='mt-6'>
                <h1 className="text-xl font-semibold tracking-wider text-indigo-600">{name ? name : title}</h1>
                <span className='font-semibold text-gray-400'>{first_air_date ? first_air_date : release_date}</span>
            </div>
        </div>
    );
};

export default Movies;