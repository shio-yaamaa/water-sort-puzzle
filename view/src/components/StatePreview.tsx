import React from "react";
import "./StatePreview.css";
import { TubesPreview } from "./TubesPreview";
import { State, Water } from "core";

interface Props {
  colors: Map<Water, string>;
  state: State;
}

export const StatePreview: React.VFC<Props> = (props) => {
  return (
    <div className="StatePreview">
      <TubesPreview tubes={props.state.tubes} colors={props.colors} />
    </div>
  );
};
