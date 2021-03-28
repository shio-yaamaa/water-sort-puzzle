import {
  stages,
  Stage,
  State,
  isStateComplete,
  stringifyTubes,
  yieldChildStates,
} from "core";
import { Node } from "./types";
import { Counter } from "./counter";
import { pickRandomly } from "./utils";

const TRIAL_COUNT = 10000;
const REPETITION_LIMIT = 10;

const main = (): void => {
  for (const stage of stages) {
    console.log("--------------------");
    measureDifficultyOfStage(stage, TRIAL_COUNT);
  }
};

const calculateDifficulty = (completeCount: number, stuckCount: number) => {
  return stuckCount / (completeCount + stuckCount);
};

// Returns the root node
const buildGraph = (stage: Stage): Node => {
  const stringifiedTubesToNode = new Map<string, Node>();

  const initialState: State = {
    tubes: stage.tubes,
  };
  const rootNode: Node = {
    state: {
      tubes: stage.tubes,
    },
    childNodes: [],
  };
  stringifiedTubesToNode.set(stringifyTubes(initialState.tubes), rootNode);
  const queue: Node[] = [rootNode];

  while (queue.length > 0) {
    const node = queue.shift();
    if (!node) break;
    if (isStateComplete(node.state)) {
      continue;
    }
    const childStates = yieldChildStates(node.state);
    for (const childState of childStates) {
      const stringifiedChild = stringifyTubes(childState.tubes);
      const existingChildNode = stringifiedTubesToNode.get(stringifiedChild);
      if (existingChildNode) {
        node.childNodes.push(existingChildNode);
      } else {
        const childNode: Node = {
          state: childState,
          childNodes: [],
        };
        node.childNodes.push(childNode);
        stringifiedTubesToNode.set(stringifiedChild, childNode);
        queue.push(childNode);
      }
    }
  }

  return rootNode;
};

// Returns if succeeded
const randomPlay = (graph: Node): boolean => {
  const counter = new Counter();
  let currentNode = graph;
  while (true) {
    const pickedChildNode = pickRandomly(currentNode.childNodes);
    if (pickedChildNode === null) return false;
    if (isStateComplete(pickedChildNode.state)) return true;
    const count = counter.increment(
      stringifyTubes(pickedChildNode.state.tubes)
    );
    if (count > REPETITION_LIMIT) return false;
    currentNode = pickedChildNode;
  }
};

const measureDifficultyOfStage = (
  stage: Stage,
  sampleCount: number
): number => {
  console.log(`Solving level ${stage.level}...`);

  const graph = buildGraph(stage);
  let completeCount = 0;
  let stuckCount = 0;

  for (let i = 0; i < sampleCount; i++) {
    const succeeded = randomPlay(graph);
    if (succeeded) {
      completeCount++;
    } else {
      stuckCount++;
    }
  }

  console.log(`Completed ${completeCount} times`);
  console.log(`Stuck ${stuckCount} times`);

  const difficulty = calculateDifficulty(completeCount, stuckCount);
  console.log(`Difficulty: ${difficulty}`);

  return difficulty;
};

main();
