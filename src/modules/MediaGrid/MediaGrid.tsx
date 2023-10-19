import { VirtuosoGrid, VirtuosoHandle } from "react-virtuoso";
import { MediaCard } from "../../components/MediaCard/MediaCard";
import { MediaBase } from "../../services/types";
import { useCallback, useRef } from "react";

type MediaGridProps = {
  collection: MediaBase[];
  onEndReached: (atBottom: boolean) => void;
};

export const MediaGrid = ({
  collection,
  onEndReached
}:
MediaGridProps) => {
  const virutosoRef = useRef<VirtuosoHandle>(null);
  
  const itemContent = useCallback((_index: number, media?: MediaBase) => {
    if (!media) {
      return;
    }

    return <MediaCard media={media} />;
  }, []);

  return (
    <section>
      <div className="flex w-full h-screen">
        <VirtuosoGrid
          ref={virutosoRef}
          data={collection}
          itemContent={itemContent}
          atBottomStateChange={onEndReached}
          listClassName="grid grid-cols-[repeat(auto-fill,minmax(12rem,1fr))] p-8"
          className="w-full"
        />
      </div>
    </section>
  );
};
