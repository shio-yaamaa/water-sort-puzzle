import { stages } from "../../data/stages";
import { Stage, State } from "./types";
import { isStateComplete, stringifyTubes, yieldChildStates } from "./state";

const main = (): void => {
  for (const stage of stages.slice(stages.length - 3, stages.length)) {
    console.log("--------------------");
    measureDifficultyOfStage(stage);
  }
};

// How many times you get stuck while solving the problem once
const computeDifficulty = (completeCount: number, stuckCount: number) => {
  return stuckCount / completeCount;
};

const measureDifficultyOfStage = (stage: Stage): number => {
  console.log(`Solving level ${stage.level}...`);
  let completeCount = 0;
  let stuckCount = 0;

  const queue: State[] = [
    {
      tubes: stage.tubes,
      history: new Set(),
    },
  ];
  // TODO: Consider the order of the tubes?
  const history = new Set<string>();

  while (queue.length > 0) {
    const state = queue.shift();
    if (!state) break;
    if (isStateComplete(state)) {
      // console.log("Complete", state.tubes);
      completeCount++;
    } else {
      const childStates = yieldChildStates(state);
      if (childStates.length > 0) {
        const nonRepeatingChildStates = childStates.filter(
          (childStates) => !history.has(stringifyTubes(childStates.tubes))
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

  const difficulty = computeDifficulty(completeCount, stuckCount);
  console.log(`Difficulty: ${difficulty}`);

  return difficulty;
};

main();
