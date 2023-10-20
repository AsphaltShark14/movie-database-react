import { Link } from "react-router-dom";
import { NoPoster } from "../../../components/MediaCard/NoPoster";
import { getProfile, getProfileSet } from "../../../services/images";
import { Cast, Crew } from "../../../services/types";
import { paths } from "../../../utils/paths";

type PeopleCarouselItemProps = {
  media: Cast | Crew;
};

export const PeopleCarouselItem = ({ media }: PeopleCarouselItemProps) => {
  return (
    <Link to={paths.person(media.id)} className="w-48">
      <div className="transition-scale scale-95 duration-300 ease-in-out hover:scale-100">
        <picture>
          {media.profile_path ? (
            <img
              alt={media.name}
              className="max-w-full border-4 border-base-300 object-cover "
              height={270}
              src={getProfile(media, "w45")}
              srcSet={getProfileSet(media)}
              width={185}
            />
          ) : (
            <NoPoster alt={media.name} />
          )}
        </picture>
      </div>
      <span className="text-gray-100">{media.name}</span>
    </Link>
  );
};
