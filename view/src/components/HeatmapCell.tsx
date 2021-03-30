import React from "react";
import chroma from "chroma-js";
import "./HeatmapCell.css";

interface Props {
  value: number;
  min: number;
  max: number;
  reverse?: boolean;
}

export const HeatmapCell: React.FC<Props> = (props) => {
  const scale = chroma.scale(["#0f0", "#f00"]);
  const location = props.reverse
    ? (-props.value + props.max) / (props.max - props.min)
    : (props.value - props.min) / (props.max - props.min);
  return (
    <div
      className="HeatmapCell"
      style={{
        backgroundColor: scale(location).hex(),
      }}
    >
      {props.children}
    </div>
  );
};
