import { getBackdrop, getBackdropSet } from "../../services/images";
import { TvBase } from "../../services/types";

type TvSeriesHeroProps = {
  media: TvBase;
  isDescription?: boolean;
};

export const TvSeriesHero = ({
  media,
  isDescription = true,
}: TvSeriesHeroProps) => {
  return (
    <section className="bg-black">
      <div className="relative aspect-square md:aspect-[3/2] lg:aspect-[25/9]">
        <div className="absolute bottom-0 right-0 top-0 lg:left-1/3">
          <picture>
            <img
              alt={media.name || media.original_name}
              className="h-full w-full max-w-full object-cover text-black"
              src={getBackdrop(media, "w300")}
              srcSet={getBackdropSet(media)}
            />
          </picture>
        </div>
        <div className="absolute bottom-0 left-0 flex flex-col gap-2 bg-gradient-to-t from-black via-black to-transparent p-9 lg:w-2/3 lg:bg-gradient-to-r lg:px-24 lg:h-full">
          <h1 className="mt-2 text-4xl text-white text-left lg:text-5xl">
            {media.name || media.original_name}
          </h1>
          <div>
            <div className="flex flex-row gap-2 opacity-80 whitespace-nowrap text-gray-100">
              <div>
                <div>{media.vote_average}</div>
              </div>
              <div>{`${media.vote_count} Reviews`}</div>
            </div>
          </div>
          {isDescription ? (
            <div className="text-left text-gray-100 line-clamp-[7]">
              {media.overview}
            </div>
          ) : null}
        </div>
      </div>
    </section>
  );
};
