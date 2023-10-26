import HeartEmpty from "../../media/heart-empty.svg";

export const LikeButton = () => {
  return (
    <button className="w-fit">
      <div className="flex gap-2">
        <img src={HeartEmpty} />
        <span className="text-left">Add to likes</span>
      </div>
    </button>
  );
};
