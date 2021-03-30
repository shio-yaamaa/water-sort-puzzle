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
    <table className="DifficultyTable">
      <thead>
        <tr>
          <th>レベル</th>
          <th>初期状態</th>
          <th>色の数</th>
          <th>クリアできた割合</th>
          <th>解法動画の再生回数</th>
        </tr>
      </thead>
      <tbody>
        {props.stages.map((stage) => (
          <DifficultyTableRow
            stage={stage}
            successRate={levelToSuccessRate.get(stage.level) ?? 0}
            videos={levelToVideos.get(stage.level) ?? []}
          />
        ))}
      </tbody>
    </table>
  );
};
