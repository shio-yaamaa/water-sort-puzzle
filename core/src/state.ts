import { Tube, State } from "./types";
import { stringifyTube, isTubeComplete, pourMaximum } from "./tube";

// Convert State.tubes into a string.
// Only the same combinations of tubes (not considering the order) convert to the same string.
export const stringifyTubes = (tubes: Tube[]): string => {
  return tubes
    .map((tube) => stringifyTube(tube))
    .sort()
    .join(".");
};

export const isStateComplete = (state: State) => {
  return state.tubes.every((tube) => isTubeComplete(tube));
};

export const yieldChildStates = (state: State): State[] => {
  if (isStateComplete(state)) {
    return [];
  }
  const childStates: State[] = [];
  state.tubes.forEach((sourceTube, sourceIndex) => {
    state.tubes.forEach((destinationTube, destinationIndex) => {
      if (sourceIndex === destinationIndex) {
        return;
      }
      const [
        updatedSourceTube,
        updatedDestinationTube,
        isSuccessful,
      ] = pourMaximum(sourceTube, destinationTube);
      if (!isSuccessful) {
        return;
      }
      const childTubes = state.tubes.map((tube, index) => {
        if (index === sourceIndex) {
          return updatedSourceTube;
        }
        if (index === destinationIndex) {
          return updatedDestinationTube;
        }
        return tube;
      });
      childStates.push({
        tubes: childTubes,
      });
    });
  });
  return childStates;
};
