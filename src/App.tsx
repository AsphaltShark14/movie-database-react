import { QueryClient, QueryClientProvider } from "react-query";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import "./App.css";
import { ErrorPage } from "./routes/ErrorPage/ErrorPage";
import { Layout } from "./routes/Layout";
import { Root } from "./routes/Root";
import { Likes } from "./routes/likes/Likes";
import { Movie } from "./routes/movie/Movie/Movie";
import { Overview } from "./routes/movie/Movie/Overview/Overview";
import { MoviePhotos } from "./routes/movie/Movie/Photos/MoviePhotos";
import { MovieVideos } from "./routes/movie/Movie/Videos/MovieVideos";
import { Movies } from "./routes/movie/Movies";
import { MovieCategory } from "./routes/movie/categories/MovieCategory";
import { Person } from "./routes/person/Person";
import { Search } from "./routes/search/Search";
import { TvSeries } from "./routes/tv/TvSeries";
import { TvShow } from "./routes/tv/TvShow/TvShow";
import { TvSeriesCategory } from "./routes/tv/categories/TvSeriesCategory";
import { paths } from "./utils/paths";

function App() {
  const queryClient = new QueryClient();

  const router = createBrowserRouter([
    {
      element: <Layout />,
      errorElement: <ErrorPage />,
      children: [
        {
          path: paths.index,
          element: <Root />,
        },
        {
          path: paths.movies,
          element: <Movies />,
        },
        {
          path: paths.tv,
          element: <TvSeries />,
        },
        {
          path: paths.search,
          element: <Search />,
        },
        {
          path: paths.likes,
          element: <Likes />,
        },
        {
          path: paths.movie,
          element: <Movie />,
          children: [
            {
              path: paths.movie,
              element: <Overview />,
            },
            {
              path: paths.movieInfoPhotos,
              element: <MoviePhotos />,
            },
            {
              path: paths.movieInfoVideos,
              element: <MovieVideos />,
            },
          ],
        },
        {
          path: paths.tvShow,
          element: <TvShow />,
        },
        {
          path: paths.moviesCategory,
          element: <MovieCategory />,
        },
        {
          path: paths.tvSeriesCategory,
          element: <TvSeriesCategory />,
        },
        {
          path: paths.people,
          element: <Person />,
        },
      ],
    },
  ]);

  return (
    <QueryClientProvider client={queryClient}>
      <RouterProvider router={router} />
    </QueryClientProvider>
  );
}

export default App;
