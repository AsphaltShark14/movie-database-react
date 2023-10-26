import { useSelector } from "react-redux";
import { MediaCarousel } from "../../modules/MediaCarousel/MediaCarousel";
import { PeopleCarousel } from "../../modules/PeopleCarousel/PeopleCarousel";
import { paths } from "../../utils/paths";
import { StoreState } from "../../utils/types";

export const Likes = () => {
  const { movies, tv, people } = useSelector((state: StoreState) => state);

  return (
    <div className="flex max-h-screen flex-col overflow-y-scroll">
      <h1 className="px-8 py-4 text-4xl">Your Likes</h1>
      {movies.length > 0 ? (
        <MediaCarousel
          collection={movies}
          title="Favorite Movies"
          href={paths.likesType("movie")}
        />
      ) : null}
      {tv.length > 0 ? (
        <MediaCarousel
          collection={tv}
          title="Favorite TV Shows"
          href={paths.likesType("tv")}
        />
      ) : null}
      {people.length > 0 ? (
        <PeopleCarousel collection={people} title="Favorite People" />
      ) : null}
    </div>
  );
};
