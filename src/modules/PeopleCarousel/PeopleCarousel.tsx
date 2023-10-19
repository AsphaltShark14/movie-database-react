import { Cast, Crew } from "../../services/types";
import { PeopleCarouselItem } from "./PeopleCarouselItem/PeopleCarouselItem";

type PeopleCarouselProps = {
  collection: (Cast | Crew)[];
  title: string;
};

export const PeopleCarousel = ({ collection, title }: PeopleCarouselProps) => {
  return (
    <section>
      <div className="flex flex-row items-center px-12 py-2">
        <h2 className="text-2xl text-white">{title}</h2>
        <div className="flex-auto" />
      </div>
      <div className="relative">
        <div className="overflow-y-auto px-8 py-4">
          <div className="carousel flex w-max flex-row gap-2">
            {collection?.map((media) => (
              <div className="carousel-item" key={media.id}>
                <PeopleCarouselItem media={media} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
