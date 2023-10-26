import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { literal, object, safeParse, union } from "valibot";
import { typeListSelector } from "../../../store/selectors/generalSelector";

export const useLikeFeed = () => {
  const params = useParams();

  const parseResult = safeParse(
    object({
      type: union([literal("movie"), literal("tv")]),
    }),
    params
  );

  if (!parseResult.success) {
    throw console.warn(parseResult.issues);
  }

  const state = useSelector(typeListSelector(parseResult.output.type));

  return { collection: state, type: parseResult.output.type };
};
