import { QueryClient, QueryClientProvider } from "react-query";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import "./App.css";
import { ErrorPage } from "./routes/ErrorPage/ErrorPage";
import { Layout } from "./routes/Layout";
import { Root } from "./routes/Root";
import { Likes } from "./routes/likes/Likes";
import { Movies } from "./routes/movie/Movies";
import { Movie } from "./routes/movie/[movieId]/Movie";
import { Search } from "./routes/search/Search";
import { TvSeries } from "./routes/tv/TvSeries";
import { TvShow } from "./routes/tv/[tvId]/TvShow";
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
        },
        {
          path: paths.tvShow,
          element: <TvShow />,
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
