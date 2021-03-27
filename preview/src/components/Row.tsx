import React from "react";
import "./Row.css";
import { StatePreview } from "./StatePreview";
import { State } from "core";

interface Props {
  parentState: State;
  children: {
    state: State;
    duplicate: boolean;
  }[];
}

export const Row: React.VFC<Props> = (props) => {
  return (
    <div className="Row">
      <div className="Row-parent-state">
        <StatePreview state={props.parentState} />
      </div>
      <div className="Row-arrow">
        <p>→</p>
      </div>
      {props.children.map((child, index) => (
        <div
          className={`Row-child-state ${child.duplicate ? "duplicate" : ""}`}
          key={index}
        >
          <StatePreview state={child.state} />
        </div>
      ))}
    </div>
  );
};
