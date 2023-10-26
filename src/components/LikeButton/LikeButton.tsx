import HeartEmpty from "../../media/heart-empty.svg";
import HeartFull from "../../media/heart.svg";

type LikeButtonProps = {
  onClick: () => void;
  hasLike: boolean;
};

export const LikeButton = ({ onClick, hasLike }: LikeButtonProps) => {
  return (
    <button className="w-fit" onClick={onClick}>
      {hasLike ? (
        <div className="flex gap-2">
          <img src={HeartFull} />
          <span className="text-left">Remove from likes</span>
        </div>
      ) : (
        <div className="flex gap-2">
          <img src={HeartEmpty} />
          <span className="text-left">Add to likes</span>
        </div>
      )}
    </button>
  );
};
