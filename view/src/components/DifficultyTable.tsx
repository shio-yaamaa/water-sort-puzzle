import React from "react";
import "./DifficultyTable.css";
import { DifficultyTableRow } from "./DifficultyTableRow";
import { Stage, Video } from "core";
import {
  createLevelToVideosMap,
  createLevelToSuccessRateMap,
} from "../createMap";

interface Props {
  stages: Stage[];
  videos: { level: number; videos: Video[] }[];
  successRates: { level: number; successRate: number }[];
}

export const DifficultyTable: React.VFC<Props> = (props) => {
  const levelToVideos = createLevelToVideosMap(props.videos);
  const levelToSuccessRate = createLevelToSuccessRateMap(props.successRates);
  return (
    <div className="DifficultyTable">
      <div className="DifficultyTable-th">レベル</div>
      <div className="DifficultyTable-th">初期状態</div>
      <div className="DifficultyTable-th">色の数</div>
      <div className="DifficultyTable-th">クリアできた割合</div>
      <div className="DifficultyTable-th">解法動画の再生回数</div>
      {props.stages.map((stage) => (
        <DifficultyTableRow
          stage={stage}
          successRate={levelToSuccessRate.get(stage.level) ?? 0}
          videos={levelToVideos.get(stage.level) ?? []}
        />
      ))}
    </div>
  );
};
