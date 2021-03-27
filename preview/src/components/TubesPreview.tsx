import React from "react";
import "./TubesPreview.css";
import { Tube } from "core";
import { colors } from "../colors";

interface Props {
  tubes: Tube[];
}

export const TubesPreview: React.VFC<Props> = (props) => {
  return (
    <div className="TubesPreview">
      {props.tubes.map((tubes, tubeIndex) => (
        <div className="TubesPreview-tube" key={tubeIndex}>
          {tubes.waters.map((water, waterIndex) => (
            <div
              className="TubesPreview-water"
              key={waterIndex}
              style={{ backgroundColor: colors.get(water) }}
            ></div>
          ))}
        </div>
      ))}
    </div>
  );
};
