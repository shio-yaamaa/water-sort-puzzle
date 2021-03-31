import React from "react";
import chroma from "chroma-js";
import "./HeatmapCell.css";

interface Props {
  value: number;
  min: number;
  max: number;
  reverse?: boolean;
  easingFunction?: (number: number) => number;
}

export const HeatmapCell: React.FC<Props> = (props) => {
  const colorScale = chroma.scale(["#0f0", "#f00"]);

  const location = (props.value - props.min) / (props.max - props.min);
  const transformedLocation = props.easingFunction
    ? props.easingFunction(location)
    : location;
  return (
    <div
      className="HeatmapCell"
      style={{
        backgroundColor: colorScale(
          props.reverse ? 1 - transformedLocation : transformedLocation
        ).hex(),
      }}
    >
      {props.children}
    </div>
  );
};
