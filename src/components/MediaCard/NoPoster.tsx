import camera from "../../media/camera.png";

type PosterProps = {
  alt?: string;
};

export const NoPoster = ({ alt }: PosterProps) => {
  return (
    <div className="transition-scale scale-95 duration-300 ease-in-out m-0 hover:scale-100">
      <div className="w-[185px] h-[270px] bg-cyan-100 border-4 border-base-300 flex justify-center content-center">
        <img
          alt={alt}
          height={100}
          src={camera}
          width={60}
          className="max-h-28 max-w-28 m-auto"
        />
      </div>
    </div>
  );
};
