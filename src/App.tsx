import { QueryClient, QueryClientProvider } from "react-query";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import "./App.css";
import { ErrorPage } from "./routes/ErrorPage/ErrorPage";
import { Movie } from "./routes/movie/Movie";
import { Root } from "./routes/root/Root";
import { Search } from "./routes/search/Search";
import { Tv } from "./routes/tv/Tv";
import { paths } from "./utils/paths";

function App() {
  const queryClient = new QueryClient();

  const router = createBrowserRouter([
    {
      path: paths.index,
      element: <Root />,
      errorElement: <ErrorPage />,
    },
    {
      path: paths.movies,
      element: <Movie />,
    },
    {
      path: paths.tv,
      element: <Tv />,
    },
    {
      path: paths.search,
      element: <Search />,
    },
  ]);

  return (
    <QueryClientProvider client={queryClient}>
      <RouterProvider router={router} />
    </QueryClientProvider>
  );
}

export default App;
