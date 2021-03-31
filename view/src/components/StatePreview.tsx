import React from "react";
import "./StatePreview.css";
import { TubesPreview } from "./TubesPreview";
import { State, Water } from "core";

interface Props {
  colors: Map<Water, string>;
  state: State;
  isCompact?: boolean;
}

export const StatePreview: React.VFC<Props> = (props) => {
  return (
    <div className={`StatePreview ${props.isCompact ? "compact" : ""}`}>
      <TubesPreview
        tubes={props.state.tubes}
        colors={props.colors}
        isCompact={props.isCompact}
      />
    </div>
  );
};
