import { Stage, State, Tube } from "./src/types";
export { Stage, State, Water } from "./src/types";

export const stages: Stage[];
export const stringifyTubes: (tubes: Tube[]) => string;
export const isStateComplete: (state: State) => boolean;
export const yieldChildStates: (state: State) => State[];
