type StarsProps = {
  rating?: number;
};

export const Stars = ({ rating }: StarsProps) => {
  const stars = Math.round((rating || 0) * 10) / 10;
  const value = 100 - Math.round((rating || 0) * 10);
  const style = { clipPath: `inset(0px ${value}% 0px 0px)` };

  return (
    <div className="relative flex flex-row items-center gap-2">
      <img src="~/media/stars.png" className="h-3 w-20" alt="rating" />
      <img
        alt="rating"
        className="absolute h-3 w-20"
        style={style}
        src="~/media/stars-filled.png"
      />
      <div className="text-sm opacity-80">{stars}</div>
    </div>
  );
};
