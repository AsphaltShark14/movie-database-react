import Github from "~/media/github.svg";

export const Footer = () => {
  return (
    <footer className="flex flex-col gap-4 px-2 py-10 md:px-8 md:py-20">
      <div className="flex flex-row items-center text-lg text-white">
        React Movie Database
      </div>
      <div className="flex items-center gap-2">
        <span className="text-sm opacity-80">Design by</span>
        <a href="https://movies.nuxt.space/" className="link">
          Nuxt Movies
        </a>
      </div>
      <div className="flex gap-2 items-center text-sm text-left opacity-80">
        <span>
          This product uses the{" "}
          <a
            className="link"
            href="https://www.themoviedb.org/documentation/api"
          >
            TMDB API
          </a>{" "}
          but is not endorsed or certified by TMDB.
        </span>
      </div>
      <div className="text-sm opacity-80">
        <a href="https://github.com/AsphaltShark14/movie-database-react">
          <img
            alt="GitHub repository"
            aria-label="GitHub repository"
            className="w-6 h-6"
            src={Github}
          />
        </a>
      </div>
    </footer>
  );
};
