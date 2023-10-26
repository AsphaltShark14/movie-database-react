import { MediaGrid } from "../../../modules/MediaGrid/MediaGrid";
import { getListItem } from "../../../utils/format";
import { useLikeFeed } from "./LikesExpand.utils";

export const LikesExpand = () => {
  const { collection, type } = useLikeFeed();

  if (!collection) {
    return <div>No likes found...</div>;
  }

  return (
    <div className="flex max-h-screen flex-col overflow-y-scroll">
      <h1 className="px-8 py-4 text-4xl">
        {getListItem({ query: "favorite", type })}
      </h1>
      <div>
        <MediaGrid collection={collection} />
      </div>
    </div>
  );
};
