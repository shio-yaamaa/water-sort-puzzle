import React from "react";
import "./TubesPreview.css";
import { Tube, Water } from "core";

interface Props {
  tubes: Tube[];
  colors: Map<Water, string>;
  isCompact?: boolean;
}

export const TubesPreview: React.VFC<Props> = (props) => {
  return (
    <div className={`TubesPreview ${props.isCompact ? "compact" : ""}`}>
      {props.tubes.map((tubes, tubeIndex) => (
        <div className="TubesPreview-tube" key={tubeIndex}>
          {tubes.waters.map((water, waterIndex) => (
            <div
              className="TubesPreview-water"
              key={waterIndex}
              style={{ backgroundColor: props.colors.get(water) }}
            ></div>
          ))}
        </div>
      ))}
    </div>
  );
};
