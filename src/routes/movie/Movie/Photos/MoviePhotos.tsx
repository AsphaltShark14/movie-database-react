import { useCallback, useRef } from "react";
import { VirtuosoGrid, VirtuosoGridHandle } from "react-virtuoso";
import { getImage, getImageSet } from "../../../../services/images";
import { Image } from "../../../../services/types";
import { useMovieQuery } from "../Movie.utils";

export const MoviePhotos = () => {
  const query = useMovieQuery();

  const movie = query.data;
  const posters = movie?.images.posters;
  const backdrops = movie?.images.backdrops;

  const virtuosoRef = useRef<VirtuosoGridHandle>(null);

  const posterContent = useCallback((_index: number, poster?: Image) => {
    if (!poster) {
      return;
    }

    return (
      <img
        alt={`${movie?.title} poster`}
        className="h-full max-h-full w-full object-cover text-black"
        key={poster.file_path}
        src={getImage(poster, "92")}
        srcSet={getImageSet(poster, "342")}
        style={{ aspectRatio: poster.aspect_ratio }}
        width={poster.width}
        height={poster.height}
      />
    );
  }, []);

  const backdropContent = useCallback((_index: number, backdrop?: Image) => {
    if (!backdrop) {
      return;
    }

    return (
      <img
        alt={`${movie?.title} backdrop`}
        className="h-full max-h-full w-full object-cover text-black"
        key={backdrop.file_path}
        src={getImage(backdrop, "92")}
        srcSet={getImageSet(backdrop, "500")}
        style={{ aspectRatio: backdrop.aspect_ratio }}
        width={backdrop.width}
        height={backdrop.height}
      />
    );
  }, []);

  if (!movie) {
    return <div>Loading...</div>;
  }

  return (
    <section className="flex flex-col gap-8 px-16 py-4">
      <div className="flex items-end gap-4">
        <h2 className="text-2xl">Backdrops</h2>
        <span className="text-sm opacity-80">
          {movie.images?.backdrops?.length || 0} Images
        </span>
      </div>
      <div className="flex w-full h-[540px]">
        <VirtuosoGrid
          ref={virtuosoRef}
          data={backdrops}
          itemContent={backdropContent}
          listClassName="grid grid-cols-[repeat(auto-fill,minmax(500px,1fr))] gap-6"
          className="w-full"
        />
      </div>
      <div className="flex items-end gap-4">
        <h2 className="text-2xl">Posters</h2>
        <span className="text-sm opacity-80">
          {movie.images?.posters?.length || 0} Images
        </span>
      </div>

      <div className="flex w-full h-screen">
        <VirtuosoGrid
          ref={virtuosoRef}
          data={posters}
          itemContent={posterContent}
          listClassName="grid grid-cols-[repeat(auto-fill,minmax(200px,1fr))] gap-6"
          className="w-full"
        />
      </div>
    </section>
  );
};
