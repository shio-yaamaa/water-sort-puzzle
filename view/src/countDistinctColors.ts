import { Stage, Water } from "core";

export const countDistinctColors = (stage: Stage): number => {
  const waters = stage.tubes
    .map((tubes) => tubes.waters)
    .flat()
    .filter((water) => water !== Water.EMPTY);
  return new Set(waters).size;
};
