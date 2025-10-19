import type { StaticUtility } from "@/interfaces";
import { alignContent } from "./alignContent";
import { alignItems } from "./alignItems";
import { alignSelf } from "./alignSelf";

export const alignUtilities: StaticUtility = {
  ...alignContent,
  ...alignItems,
  ...alignSelf,
};
