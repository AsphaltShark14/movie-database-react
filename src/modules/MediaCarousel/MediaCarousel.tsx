import { Link } from "react-router-dom";
import { MediaCard } from "../../components/MediaCard/MediaCard";
import { MediaBase } from "../../services/types";

type MediaCarouselProps = {
  collection: MediaBase[];
  title: string;
  href: string;
};

export const MediaCarousel = ({
  collection,
  title,
  href,
}: MediaCarouselProps) => {
  return (
    <section>
      <div className="flex flex-row items-center px-12 py-2">
        <h2 className="text-2xl text-white">{title}</h2>
        <div className="flex-auto" />
        <Link
          className="transition-text opacity-80 duration-100 ease-in-out text-gray-100 hover:text-blue-600 hover:opacity-100"
          to={href}
        >
          Explore All
        </Link>
      </div>
      <div className="relative">
        <div className="overflow-y-auto px-8 py-4">
          <div className="carousel flex w-max flex-row gap-2">
            {collection?.map((media) => (
              <div className="carousel-item" key={media.id}>
                <MediaCard media={media} />
              </div>
            ))}
            <Link
              className="transition-text flex w-44 items-center justify-center duration-100 ease-in-out text-gray-100 hover:text-blue-600"
              to={href}
            >
              Explore All
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};
