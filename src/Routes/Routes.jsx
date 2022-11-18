import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import Home from '../components/Home/Home';
import Main from '../components/Main/Main';

const API_KEY = '05f2d96910794273ed15bab12fec1494';
   export const router = createBrowserRouter([
        {
            path: '/',
           element: <Main />,
           children: [
               {
                   path: '/',
                   element: <Home />,
                   loader: async()=>fetch(`https://api.themoviedb.org/3/trending/all/day?api_key=${API_KEY}`)
               },
               {
                   path: '/home',
                   element: <Home />
               }
            ]
        }
    ])