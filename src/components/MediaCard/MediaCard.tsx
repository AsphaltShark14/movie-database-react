import { useMemo } from "react";
import { getPoster, getPosterSet } from "../../services/images";
import { MediaBase } from "../../services/types";
import { paths } from "../../utils/paths";
import { Stars } from "../Stars/Stars";
import { getHeading } from "./MediaCard.utils";

type MediaCardProps = {
  media: MediaBase;
};

export const MediaCard = ({ media }: MediaCardProps) => {
  const heading = useMemo(() => {
    return getHeading(media);
  }, [media]);

  return (
    <a href={paths.media(media.media_type, media.id)} className="w-48">
      <div className="transition-scale scale-95 duration-300 ease-in-out hover:scale-100">
        <picture>
          <img
            alt={heading}
            className="max-w-full border-4 border-base-300 object-cover text-black"
            height={270}
            src={getPoster(media, "92")}
            srcSet={getPosterSet(media, "185")}
            width={185}
          />
        </picture>
      </div>
      <div className="w-44">
        <span className="text-gray-100">{heading}</span>
        <div className="flex justify-center">
          <Stars rating={media.vote_average} />
        </div>
      </div>
    </a>
  );
};
