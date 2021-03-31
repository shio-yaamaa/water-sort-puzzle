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

// http://pscolour.eu/English/howcan.htm
const colorScale = chroma.scale([
  "#82EF49",
  "#A6E738",
  "#BEE338",
  "#DCE45A",
  "#EDE164",
  "#F7CF55",
  "#FFC361",
  "#FFB26D",
  "#FFA26D",
]);

export const HeatmapCell: React.FC<Props> = (props) => {
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
