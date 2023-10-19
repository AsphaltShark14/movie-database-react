import { Stars } from "../../components/Stars/Stars";
import { getBackdrop, getBackdropSet } from "../../services/images";
import { MovieBase } from "../../services/types";

type MovieHeroProps = {
  media: MovieBase;
};

export const MovieHero = ({ media }: MovieHeroProps) => {
  return (
    <section className="bg-black">
      <div className="relative aspect-square md:aspect-[3/2] lg:aspect-[25/9]">
        <div className="absolute bottom-0 right-0 top-0 lg:left-1/3">
          <picture>
            <img
              alt={media.title || media.original_title}
              className="h-full w-full max-w-full object-cover text-black"
              src={getBackdrop(media, "w300")}
              srcSet={getBackdropSet(media)}
            />
          </picture>
        </div>
        <div className="absolute bottom-0 left-0 flex flex-col gap-2 bg-gradient-to-t from-black via-black to-transparent p-9 lg:w-2/3 lg:bg-gradient-to-r lg:px-24 lg:h-full">
          <h1 className="mt-2 text-4xl text-white text-left lg:text-5xl">
            {media.title || media.original_title}
          </h1>
          <div>
            <div className="flex flex-row gap-4">
              <Stars rating={media.vote_average} />
              <div className="text-sm text-gray-100 opacity-80">{`${media.vote_count} Reviews`}</div>
            </div>
          </div>
          <div className="text-left text-gray-100 line-clamp-[8]">
            {media.overview}
          </div>
        </div>
      </div>
    </section>
  );
};
