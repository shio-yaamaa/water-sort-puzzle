export type Range = [number, number]; // [from, to)

export interface Stage {
  level: number;
  tubes: Tube[];
}

export interface State {
  tubes: Tube[];
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
