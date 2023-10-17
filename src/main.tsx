import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import { ErrorPage } from './routes/ErrorPage/ErrorPage.tsx'
import { paths } from './utils/paths.ts'
import { Movie } from './routes/movie/Movie.tsx'
import { Tv } from './routes/tv/Tv.tsx'
import { Search } from './routes/search/Search.tsx'

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: paths.movies,
        element: <Movie />
      },
      {
        path: paths.tv,
        element: <Tv />
      },
      {
        path: paths.search,
        element: <Search />
      },
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
