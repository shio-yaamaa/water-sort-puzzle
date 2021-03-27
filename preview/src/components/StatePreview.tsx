import React from "react";
import "./StatePreview.css";
import { TubesPreview } from "./TubesPreview";
import { State } from "core";

interface Props {
  state: State;
}

export const StatePreview: React.VFC<Props> = (props) => {
  return (
    <div className="StatePreview">
      <TubesPreview tubes={props.state.tubes} />
    </div>
  );
};
