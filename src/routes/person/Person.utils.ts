import { useParams } from "react-router-dom"
import { object, safeParse, string } from "valibot";

export const usePersonDetails = () => {
  const params = useParams();

  const parseResult = safeParse(object({ personId: string() }), params);

  if (!parseResult.success) {
    return console.warn(parseResult.issues);
  }
}