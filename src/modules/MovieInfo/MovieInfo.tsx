import { useMemo } from "react";
import { Link } from "react-router-dom";
import { getPoster, getPosterSet } from "../../services/images";
import { MovieExtraDetails, TvExtraDetails } from "../../services/types";
import {
  formatCurrency,
  formatDate,
  formatLanguage,
  formatRuntime,
} from "../../utils/format";
import { paths } from "../../utils/paths";
import { Socials } from "../Socials/Socials";

type MovieInfoProps = {
  media: MovieExtraDetails | TvExtraDetails;
};

export const MovieInfo = ({ media }: MovieInfoProps) => {
  const directors = useMemo(() => {
    return (
      media.credits?.crew?.filter((person) => person.job === "Director") || []
    );
  }, []);

  return (
    <section className="flex justify-center p-6">
      <div className="flex max-w-5xl flex-row items-center gap-8">
        <div className="hidden flex-grow md:flex">
          <div className="min-w-max">
            <picture>
              <img
                alt="Poster"
                className="h-full w-80 max-w-full object-cover text-black"
                src={getPoster(media, "92")}
                srcSet={getPosterSet(media, "342")}
              />
            </picture>
          </div>
        </div>

        <div className="flex flex-col gap-6">
          {media.overview ? (
            <div>
              <h2 className="mb-4 text-3xl text-left">Storyline</h2>
              <div className="text-left opacity-80">{media.overview}</div>
            </div>
          ) : null}
          <div className="grid grid-cols-[max-content_1fr] items-center gap-3 text-sm opacity-80 lg:grid-cols-[max-content_1fr_max-content_1fr]">
            {media.media_type === "movie" && media.release_date ? (
              <>
                <div className="text-left font-bold">Released</div>
                <div className="text-right">
                  {formatDate(media.release_date)}
                </div>
              </>
            ) : null}
            {media.media_type === "movie" && media.runtime ? (
              <>
                <div className="text-left font-bold">Runtime</div>
                <div className="text-right">{formatRuntime(media.runtime)}</div>
              </>
            ) : null}
            {directors && directors.length > 0 ? (
              <>
                <div className="text-left font-bold">Director</div>
                <div className="text-right">
                  {directors.map((person, i) => (
                    <>
                      <Link to={paths.person(person.id)}>{person.name}</Link>
                      {i < directors?.length - 1 ? ", " : ""}
                    </>
                  ))}
                </div>
              </>
            ) : null}
            {media.media_type === "movie" && media.budget ? (
              <>
                <div className="text-left font-bold">Budget</div>
                <div className="text-right">{formatCurrency(media.budget)}</div>
              </>
            ) : null}
            {media.media_type === "movie" && media.revenue ? (
              <>
                <div className="text-left font-bold">Revenue</div>
                <div className="text-right">
                  {formatCurrency(media.revenue)}
                </div>
              </>
            ) : null}
            {media.media_type && media.genres ? (
              <>
                <div className="text-left font-bold">Genre</div>
                <div className="text-right">
                  {media.genres.map(
                    (genre, i, arr) =>
                      media.media_type && (
                        <>
                          <Link to={paths.genre(media.media_type, genre.id)}>
                            {genre.name}
                          </Link>
                          {i < arr.length - 1 ? ", " : ""}
                        </>
                      )
                  )}
                </div>
              </>
            ) : null}
            {media.status ? (
              <>
                <div className="text-left font-bold">Status</div>
                <div className="text-right">{media.status}</div>
              </>
            ) : null}
            {media.original_language ? (
              <>
                <div className="text-left font-bold">Language</div>
                <div className="text-right">
                  {formatLanguage(media.original_language)}
                </div>
              </>
            ) : null}
            {media.production_companies ? (
              <>
                <div className="text-left font-bold">Production</div>
                <div className="text-right">
                  {media.production_companies.map((c) => c.name).join(", ")}
                </div>
              </>
            ) : null}
          </div>
          <div>
            <Socials
              links={{
                ...media.external_ids,
                homepage: media.homepage,
              }}
            />
          </div>
        </div>
      </div>
    </section>
  );
};
