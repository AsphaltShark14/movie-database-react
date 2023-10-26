import { getProfile, getProfileSet } from "../../services/images";
import { PersonDetails } from "../../services/types";
import { formatDate } from "../../utils/format";
import { Socials } from "../Socials/Socials";
import { calculateAge } from "./PersonHero.utils";

type PersonHeroProps = {
  person: PersonDetails;
};

export const PersonHero = ({ person }: PersonHeroProps) => {
  return (
    <section className="flex justify-center p-6">
      <div className="flex flex-row items-center gap-8">
        <div className="hidden flex-grow md:flex">
          {person.profile_path ? (
            <div className="min-w-max">
              <picture>
                <img
                  alt={person.name}
                  className="w-80 text-black"
                  src={getProfile(person, "w45")}
                  srcSet={getProfileSet(person)}
                />
              </picture>
            </div>
          ) : null}
        </div>
        <div className="flex flex-col gap-6">
          <div>
            <h2 className="mb-4 text-3xl text-left">{person.name}</h2>
            {person.biography ? (
              <div className="opacity-80 text-left max-h-80 overflow-y-auto pr-3">
                {person.biography
                  .split("\n")
                  .filter((section) => section !== "")
                  .map((section) => (
                    <p key={section} className="mt-4">
                      {section}
                    </p>
                  ))}
              </div>
            ) : null}
          </div>
          <div className="grid grid-cols-[max-content_1fr] items-center gap-3 text-sm opacity-80 lg:grid-cols-[max-content_1fr_max-content_1fr]">
            {person.known_for_department ? (
              <>
                <div className="text-left font-bold">Known For</div>
                <div className="text-right">{person.known_for_department}</div>
              </>
            ) : null}
            {person.birthday ? (
              <>
                <div className="text-left font-bold">Born</div>
                <div className="text-right">
                  {formatDate(person.birthday)}{" "}
                  {!person.deathday ? (
                    <span>(age {calculateAge(person.birthday)})</span>
                  ) : null}
                </div>
              </>
            ) : null}

            {person.place_of_birth ? (
              <>
                <div className="text-left font-bold">Place of Birth</div>
                <div className="text-right">{person.place_of_birth}</div>
              </>
            ) : null}

            {person.deathday ? (
              <>
                <div className="text-left font-bold">Died</div>
                <div className="text-right">
                  {formatDate(person.deathday)}{" "}
                  {person.birthday ? (
                    <span>
                      age {calculateAge(person.birthday, person.deathday)}
                    </span>
                  ) : null}
                </div>
              </>
            ) : null}
          </div>

          <div>
            <Socials
              isPerson
              links={{
                ...person.external_ids,
                homepage: person.homepage,
              }}
            />
          </div>
        </div>
      </div>
    </section>
  );
};
