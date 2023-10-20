import clsx from "clsx";
import { Link, Outlet, useLocation } from "react-router-dom";
import { MovieHero } from "../../../modules/MovieHero/MovieHero";
import { paths } from "../../../utils/paths";
import { useMovieQuery } from "./Movie.utils";

export const Movie = () => {
  const location = useLocation();
  const query = useMovieQuery();

  const movie = query.data;

  if (!movie) {
    return <div>Loading...</div>;
  }

  const overviewHref = paths.media("movie", movie.id);
  const videoHref = paths.movieVideo(movie.id);
  const photoHref = paths.moviePhotos(movie.id);

  return (
    <div className="flex max-h-screen flex-col gap-4 overflow-y-scroll">
      <MovieHero media={movie} isDescription={false} />
      <div className="flex flex-row items-center justify-center gap-4">
        <Link
          to={overviewHref}
          className={clsx(
            "transition-text p-2 text-xl text-gray-100 uppercase opacity-70 duration-100 ease-in-out hover:opacity-100",
            {
              "border-b-2 border-b-white opacity-100":
                overviewHref === location.pathname,
            }
          )}
          preventScrollReset
        >
          Overview
        </Link>
        <Link
          to={videoHref}
          className={clsx(
            "transition-text p-2 text-xl text-gray-100 uppercase opacity-70 duration-100 ease-in-out hover:opacity-100",
            {
              "border-b-2 border-b-white opacity-100":
                videoHref === location.pathname,
            }
          )}
          preventScrollReset
        >
          Videos
        </Link>
        <Link
          to={photoHref}
          className={clsx(
            "transition-text p-2 text-xl text-gray-100 uppercase opacity-70 duration-100 ease-in-out hover:opacity-100",
            {
              "border-b-2 border-b-white opacity-100":
                photoHref === location.pathname,
            }
          )}
          preventScrollReset
        >
          Photos
        </Link>
      </div>
      <Outlet />
    </div>
  );
};
