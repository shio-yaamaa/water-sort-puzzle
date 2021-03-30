import { Stage } from "core";

export const countDistinctColors = (stage: Stage): number => {
  const waters = stage.tubes.map((tubes) => tubes.waters).flat();
  return new Set(waters).size;
};
