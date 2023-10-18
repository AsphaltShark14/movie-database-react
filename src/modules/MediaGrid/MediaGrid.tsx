import { MediaCard } from "../../components/MediaCard/MediaCard";
import { MediaBase } from "../../services/types";

type MediaGridProps = {
  collection: MediaBase[];
  // currentPage: number;
  // onMore?: () => void;
  // pageCount: number;
  // parentContainer?: RefObject<HTMLDivElement>;
};

export const MediaGrid = ({
  collection,
}: // currentPage,
// onMore,
// pageCount,
// parentContainer,
MediaGridProps) => {
  // const [isThrottle, setThrottle] = useState(true);
  // const [hasScroll, setScroll] = useState(true);

  // const handleScroll = () => {
  //   if (!parentContainer?.current) {
  //     return;
  //   }

  //   const endOfPage =
  //     parentContainer.current.clientHeight +
  //       parentContainer.current.scrollTop >=
  //     parentContainer.current.scrollHeight - 100;

  //   console.log({
  //     clientHeight: parentContainer.current.clientHeight,
  //     scrollTop: parentContainer.current.scrollTop,
  //     scrollHeight: parentContainer.current.scrollHeight,
  //   });

  //   if (endOfPage) {
  //     onMore?.();
  //   }

  //   if (currentPage === pageCount) {
  //     setScroll(false);
  //   }
  // };

  return (
    <section>
      <div
        // onScroll={() => {
        //   if (isThrottle || !hasScroll) {
        //     return;
        //   }
        //   setThrottle(true);
        //   setTimeout(() => {
        //     handleScroll();
        //     setThrottle(false);
        //   }, 1000);
        // }}
        className="grid grid-cols-[repeat(auto-fill,minmax(12rem,1fr))] gap-4 p-8"
      >
        {collection?.map((media) => (
          <MediaCard key={media.id} media={media} />
        ))}
      </div>
    </section>
  );
};
