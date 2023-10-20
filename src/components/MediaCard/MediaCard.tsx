import { useMemo } from "react";
import { Link } from "react-router-dom";
import { getPoster, getPosterSet } from "../../services/images";
import { MediaBase } from "../../services/types";
import { paths } from "../../utils/paths";
import { Stars } from "../Stars/Stars";
import { getHeading } from "./MediaCard.utils";
import { NoPoster } from "./NoPoster";

type MediaCardProps = {
  media: MediaBase;
};

export const MediaCard = ({ media }: MediaCardProps) => {
  const heading = useMemo(() => {
    return getHeading(media);
  }, [media]);

  return (
    <Link to={paths.media(media.media_type, media.id)} className="w-48">
      {!!media.poster_path ? (
        <div className="transition-scale scale-95 duration-300 ease-in-out hover:scale-100">
          <picture>
            <img
              alt={heading}
              className="max-w-[185px] max-h-[270px] min-h-[270px] min-w-[185px] border-4 border-base-300 object-cover text-black"
              height={270}
              src={getPoster(media, "92")}
              srcSet={getPosterSet(media, "185")}
              width={185}
            />
          </picture>
        </div>
      ) : (
        <NoPoster alt={heading} />
      )}

      <div className="w-44">
        <span className="text-gray-100 line-clamp-2">{heading}</span>
        <div className="flex justify-center">
          <Stars rating={media.vote_average} />
        </div>
      </div>
    </Link>
  );
};
