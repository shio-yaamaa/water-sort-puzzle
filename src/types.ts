export type Range = [number, number]; // [from, to)

// The set of stringified States
// It's a set instead of list so that it can detect when the states are repeated
// The state of the current tubes are not included
export type History = Set<string>;

export interface Stage {
  level: number;
  tubes: Tube[];
}

export interface State {
  tubes: Tube[];
  history: History;
}

// 0: Top
// 3: Bottom
export interface Tube {
  waters: [Water, Water, Water, Water];
}

export enum Water {
  EMPTY = "empty",
  PINK = "pink",
  RED = "red",
  ORANGE = "orange",
  YELLOW = "yellow",
  OLIVE = "olive",
  LIME = "lime",
  GREEN = "green",
  SKYBLUE = "skyblue",
  BLUE = "blue",
  PURPLE = "purple",
  BROWN = "brown",
  GRAY = "gray",
}
