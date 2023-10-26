import { useCallback, useRef } from "react";
import { VirtuosoGrid, VirtuosoGridHandle } from "react-virtuoso";
import { MediaCard } from "../../components/MediaCard/MediaCard";
import { MediaBase } from "../../services/types";

type MediaGridProps = {
  collection: MediaBase[];
  onEndReached?: (atBottom: boolean) => void;
};

export const MediaGrid = ({ collection, onEndReached }: MediaGridProps) => {
  const virtuosoRef = useRef<VirtuosoGridHandle>(null);

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
          ref={virtuosoRef}
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
