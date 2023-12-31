import { QueryClient, QueryClientProvider } from "react-query";
import { Provider } from "react-redux";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import "./App.css";
import { ErrorPage } from "./routes/ErrorPage/ErrorPage";
import { Layout } from "./routes/Layout";
import { Root } from "./routes/Root";
import { MovieGenre } from "./routes/genre/MovieGenre/MovieGenre";
import { TvGenre } from "./routes/genre/TvGenre/TvGenre";
import { Likes } from "./routes/likes/Likes";
import { LikesExpand } from "./routes/likes/LikesExpand/LikesExpand";
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
import { store } from "./store/store";
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
        {
          path: paths.likesExpand,
          element: <LikesExpand />,
        },
        {
          path: paths.movieGenre,
          element: <MovieGenre />,
        },
        {
          path: paths.tvGenre,
          element: <TvGenre />,
        },
      ],
    },
  ]);

  return (
    <QueryClientProvider client={queryClient}>
      <Provider store={store}>
        <RouterProvider router={router} />
      </Provider>
    </QueryClientProvider>
  );
}

export default App;
