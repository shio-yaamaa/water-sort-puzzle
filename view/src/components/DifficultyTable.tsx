import React from "react";
import "./DifficultyTable.css";
import { StatePreview } from "./StatePreview";
import { Stage } from "core";

interface Props {
  stages: Stage[];
  videos: any[];
  difficulties: { level: number; completeCount: number; stuckCount: number }[];
}

export const DifficultyTable: React.VFC<Props> = (props) => {
  return <table className="DifficultyTable"></table>;
};
