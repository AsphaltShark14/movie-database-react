import Facebook from "../../media/facebook.svg";
import Imdb from "../../media/imdb.svg";
import Instagram from "../../media/instagram.svg";
import LinkLogo from "../../media/link.svg";
import Twitter from "../../media/twitter.svg";

type SocialsProps = {
  links: Record<string, string | undefined>;
  isPerson?: boolean;
};

export const Socials = ({ links, isPerson }: SocialsProps) => {
  return (
    <ul className="flex flex-row gap-4 opacity-80">
      {links.twitter_id ? (
        <li>
          <a
            aria-label="Twitter account"
            href={`https://twitter.com/${links.twitter_id}`}
            rel="noopener"
            target="_blank"
          >
            <img
              src={Twitter}
              alt="twitter"
              className="scale-95 transition duration-300 ease-in-out hover:scale-110 w-5 h-5"
            />
          </a>
        </li>
      ) : null}
      {links.facebook_id ? (
        <li>
          <a
            aria-label="Facebook account"
            href={`https://facebook.com/${links.facebook_id}`}
            rel="noopener"
            target="_blank"
          >
            <img
              src={Facebook}
              alt="facebook"
              className="scale-95 transition duration-300 ease-in-out hover:scale-110 w-5 h-5"
            />
          </a>
        </li>
      ) : null}
      {links.instagram_id ? (
        <li>
          <a
            aria-label="Instagram account"
            href={`https://instagram.com/${links.instagram_id}`}
            rel="noopener"
            target="_blank"
          >
            <img
              src={Instagram}
              alt="instagram"
              className="scale-95 transition duration-300 ease-in-out hover:scale-110 w-5 h-5"
            />
          </a>
        </li>
      ) : null}
      {links.imdb_id ? (
        <li>
          <a
            aria-label="IMDb account"
            href={`https://www.imdb.com/${isPerson ? "name" : "title"}/${
              links.imdb_id
            }`}
            rel="noopener"
            target="_blank"
          >
            <img
              src={Imdb}
              alt="imdb"
              className="scale-95 transition duration-300 ease-in-out hover:scale-110 w-5 h-5"
            />
          </a>
        </li>
      ) : null}
      {links.homepage ? (
        <li>
          <a
            aria-label="Homepage"
            href={links.homepage}
            rel="noopener"
            target="_blank"
          >
            <img
              src={LinkLogo}
              alt="homepage"
              className="scale-95 transition duration-300 ease-in-out hover:scale-110 w-5 h-5"
            />
          </a>
        </li>
      ) : null}
    </ul>
  );
};
