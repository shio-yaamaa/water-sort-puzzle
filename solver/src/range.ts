import { Range } from "./types";

export const isInRange = (range: Range, number: number): boolean => {
  return range[0] <= number && number < range[1];
};
