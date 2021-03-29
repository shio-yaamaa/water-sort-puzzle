import {
  State,
  Stage,
  isStateComplete,
  stringifyTubes,
  yieldChildStates,
} from "core";

interface Transfer {
  parentState: State;
  children: {
    state: State;
    duplicate: boolean;
  }[];
}

export const solve = (stage: Stage): Transfer[] => {
  console.log(`Solving level ${stage.level}...`);
  let completeCount = 0;
  let stuckCount = 0;
  const transfers: Transfer[] = [];

  const queue: State[] = [
    {
      tubes: stage.tubes,
    },
  ];
  const history = new Set<string>();

  while (queue.length > 0) {
    const state = queue.shift();
    if (!state) break;
    if (isStateComplete(state)) {
      // console.log("Complete", state.tubes);
      completeCount++;
    } else {
      transfers.push({
        parentState: state,
        children: [],
      });
      const childStates = yieldChildStates(state);
      if (childStates.length > 0) {
        transfers[transfers.length - 1].children.push(
          ...childStates.map((childState) => ({
            state: childState,
            duplicate: history.has(stringifyTubes(childState.tubes)),
          }))
        );
        const nonRepeatingChildStates = childStates.filter(
          (state) => !history.has(stringifyTubes(state.tubes))
        );
        queue.push(...nonRepeatingChildStates);
        for (const childState of nonRepeatingChildStates) {
          history.add(stringifyTubes(childState.tubes));
        }
      } else {
        // console.log("Stuck", state.tubes);
        stuckCount++;
      }
    }
  }

  if (completeCount === 0) {
    throw new Error("Could not solve");
  }

  console.log(`Completed ${completeCount} times`);
  console.log(`Stuck ${stuckCount} times`);

  return transfers;
};
