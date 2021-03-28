import { State } from "core";

export interface Node {
  state: State;
  childNodes: Node[];
}
