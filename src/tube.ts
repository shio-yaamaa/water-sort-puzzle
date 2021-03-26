import { Range, Tube, Water } from "./types";
import { isInRange } from "./range";

// Convert the content of the tube into a string.
// Only the tubes with the same content convert to the same string.
export const stringifyTube = (tube: Tube): string => {
  return tube.waters.join(",");
};

export const isTubeComplete = (tube: Tube): boolean => {
  return tube.waters.every((water) => water === tube.waters[0]);
};

const getTakableMaximum = (tube: Tube): [Water | null, number] => {
  let waterType: Water | null = null;
  let count = 0;
  for (const water of tube.waters) {
    if (water === Water.EMPTY) {
      continue;
    } else if (count === 0) {
      waterType = water;
      count++;
    } else if (water === waterType) {
      count++;
    } else {
      break;
    }
  }
  return [waterType, count];
};

const getAddableMaximum = (tube: Tube): [Water | null, number] => {
  const emptyCount = tube.waters.filter((water) => water === Water.EMPTY)
    .length;
  const nonEmptyWaters = tube.waters.filter((water) => water !== Water.EMPTY);
  const waterType = nonEmptyWaters.length > 0 ? nonEmptyWaters[0] : null;
  return [waterType, emptyCount];
};

// The caller is responsible for validating the transfer
const takeFromTube = (tube: Tube, waterType: Water, count: number): Tube => {
  if (waterType === Water.EMPTY) {
    throw new Error("Water.EMPTY cannot be taken from a tube");
  }
  const nonEmptyWaterCount = tube.waters.filter(
    (water) => water !== Water.EMPTY
  ).length;
  const takenRange: Range = [
    tube.waters.length - nonEmptyWaterCount,
    tube.waters.length - nonEmptyWaterCount + count,
  ];
  return {
    waters: tube.waters.map((water, index) => {
      if (isInRange(takenRange, index)) {
        if (water === waterType) {
          return Water.EMPTY;
        } else {
          throw new Error("Water type does not match");
        }
      } else {
        return water;
      }
    }) as [Water, Water, Water, Water],
  };
};

// The caller is responsible for validating the transfer
const addToTube = (tube: Tube, waterType: Water, count: number): Tube => {
  if (waterType === Water.EMPTY) {
    throw new Error("Water.EMPTY cannot be added to a tube");
  }
  const emptyWaterCount = tube.waters.filter((water) => water === Water.EMPTY)
    .length;
  if (emptyWaterCount < count) {
    throw new Error("Not enough empty space");
  }
  const addedRange: Range = [emptyWaterCount - count, emptyWaterCount];
  return {
    waters: tube.waters.map((water, index) => {
      if (isInRange(addedRange, index)) {
        if (water === Water.EMPTY) {
          return waterType;
        } else {
          throw new Error("The space is nonempty and cannot accept new water");
        }
      } else {
        return water;
      }
    }) as [Water, Water, Water, Water],
  };
};

// returns: [source, destination, isSuccessful]
export const pourMaximum = (
  source: Tube,
  destination: Tube
): [Tube, Tube, boolean] => {
  const [takableWaterType, takableCount] = getTakableMaximum(source);
  const [addableWaterType, addableCount] = getAddableMaximum(destination);
  if (takableCount === 0 || addableCount === 0 || takableWaterType === null) {
    return [source, destination, false];
  }
  if (addableWaterType === null || takableWaterType === addableWaterType) {
    const transferableCount = Math.min(takableCount, addableCount);
    return [
      takeFromTube(source, takableWaterType, transferableCount),
      addToTube(destination, takableWaterType, transferableCount),
      true,
    ];
  }
  return [source, destination, false];
};
