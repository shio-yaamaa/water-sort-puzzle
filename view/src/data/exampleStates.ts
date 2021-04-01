import { State, Water } from "core";

// States I want to render to create sample images

export const exampleStates: State[] = [
  // Parent 1
  {
    tubes: [
      { waters: [Water.EMPTY, Water.EMPTY, Water.ORANGE, Water.BLUE] },
      { waters: [Water.BLUE, Water.RED, Water.ORANGE, Water.ORANGE] },
      { waters: [Water.RED, Water.ORANGE, Water.BLUE, Water.RED] },
      { waters: [Water.EMPTY, Water.EMPTY, Water.EMPTY, Water.BLUE] },
      { waters: [Water.EMPTY, Water.EMPTY, Water.EMPTY, Water.RED] },
    ],
  },
  // Parent 2
  {
    tubes: [
      { waters: [Water.RED, Water.RED, Water.ORANGE, Water.BLUE] },
      { waters: [Water.BLUE, Water.RED, Water.ORANGE, Water.ORANGE] },
      { waters: [Water.EMPTY, Water.ORANGE, Water.BLUE, Water.RED] },
      { waters: [Water.EMPTY, Water.EMPTY, Water.EMPTY, Water.BLUE] },
      { waters: [Water.EMPTY, Water.EMPTY, Water.EMPTY, Water.EMPTY] },
    ],
  },
  // Parent 3
  {
    tubes: [
      { waters: [Water.EMPTY, Water.RED, Water.ORANGE, Water.BLUE] },
      { waters: [Water.BLUE, Water.RED, Water.ORANGE, Water.ORANGE] },
      { waters: [Water.EMPTY, Water.ORANGE, Water.BLUE, Water.RED] },
      { waters: [Water.EMPTY, Water.EMPTY, Water.EMPTY, Water.BLUE] },
      { waters: [Water.EMPTY, Water.EMPTY, Water.EMPTY, Water.RED] },
    ],
  },
  // Current
  {
    tubes: [
      { waters: [Water.EMPTY, Water.EMPTY, Water.ORANGE, Water.BLUE] },
      { waters: [Water.BLUE, Water.RED, Water.ORANGE, Water.ORANGE] },
      { waters: [Water.EMPTY, Water.ORANGE, Water.BLUE, Water.RED] },
      { waters: [Water.EMPTY, Water.EMPTY, Water.EMPTY, Water.BLUE] },
      { waters: [Water.EMPTY, Water.EMPTY, Water.RED, Water.RED] },
    ],
  },
  // Child 1
  {
    tubes: [
      { waters: [Water.EMPTY, Water.EMPTY, Water.EMPTY, Water.BLUE] },
      { waters: [Water.BLUE, Water.RED, Water.ORANGE, Water.ORANGE] },
      { waters: [Water.ORANGE, Water.ORANGE, Water.BLUE, Water.RED] },
      { waters: [Water.EMPTY, Water.EMPTY, Water.EMPTY, Water.BLUE] },
      { waters: [Water.EMPTY, Water.EMPTY, Water.RED, Water.RED] },
    ],
  },
  // Child 2
  {
    tubes: [
      { waters: [Water.EMPTY, Water.EMPTY, Water.ORANGE, Water.BLUE] },
      { waters: [Water.EMPTY, Water.RED, Water.ORANGE, Water.ORANGE] },
      { waters: [Water.EMPTY, Water.ORANGE, Water.BLUE, Water.RED] },
      { waters: [Water.EMPTY, Water.EMPTY, Water.BLUE, Water.BLUE] },
      { waters: [Water.EMPTY, Water.EMPTY, Water.RED, Water.RED] },
    ],
  },
  // Child 3
  {
    tubes: [
      { waters: [Water.EMPTY, Water.ORANGE, Water.ORANGE, Water.BLUE] },
      { waters: [Water.BLUE, Water.RED, Water.ORANGE, Water.ORANGE] },
      { waters: [Water.EMPTY, Water.EMPTY, Water.BLUE, Water.RED] },
      { waters: [Water.EMPTY, Water.EMPTY, Water.EMPTY, Water.BLUE] },
      { waters: [Water.EMPTY, Water.EMPTY, Water.RED, Water.RED] },
    ],
  },
];
