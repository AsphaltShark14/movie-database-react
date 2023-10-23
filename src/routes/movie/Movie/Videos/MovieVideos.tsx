import { useMovieQuery } from "../Movie.utils";

export const MovieVideos = () => {
  const query = useMovieQuery();

  const movie = query.data;

  if (!movie) {
    return <div>Loading...</div>;
  }

  return (
    <section className="grid grid-cols-[repeat(auto-fill,minmax(20rem,1fr))] gap-6 px-16 py-4">
      {movie.videos?.results?.map((video) => (
        <a
          className="aspect-video"
          href={`https://www.youtube.com/watch?v=${video.key}`}
          key={video.id}
          target="_none"
        >
          <img
            alt={video.name}
            className="h-full max-h-full w-full object-cover text-black"
            height={600}
            src={`https://movies-proxy.vercel.app/ipx/f_webp,s_400x600/youtube/vi/${video.key}/maxresdefault.jpg`}
            width={400}
          />
          <div className="mt-2 flex flex-col gap-2 text-gray-100">
            <span>{video.name}</span>
            <span className="op-60 text-sm">{video.type}</span>
          </div>
        </a>
      ))}
    </section>
  );
};
