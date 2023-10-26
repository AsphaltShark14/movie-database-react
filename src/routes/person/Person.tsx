import { MediaGrid } from "../../modules/MediaGrid/MediaGrid";
import { PersonHero } from "../../modules/PersonHero/PersonHero";
import { usePersonDetails } from "./Person.utils";

export const Person = () => {
  const query = usePersonDetails();

  const person = query.data;

  if (!person) {
    return <div>Loading...</div>;
  }

  return (
    <div className="max-h-screen overflow-y-scroll flex flex-col">
      <PersonHero person={person} />
      <MediaGrid
        collection={[
          ...(person.combined_credits?.cast || []),
          ...(person.combined_credits?.crew || []),
        ]}
        onEndReached={() => {}}
      />
    </div>
  );
};
