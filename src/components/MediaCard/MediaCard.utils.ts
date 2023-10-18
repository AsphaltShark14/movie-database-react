import { MediaBase } from "../../services/types";

export const getHeading = (media: MediaBase) => {
  if ("title" in media) {
    return media.title;
  }

  if ("name" in media) {
    return media.name;
  }
}