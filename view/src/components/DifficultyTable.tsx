import React from "react";
import "./DifficultyTable.css";
import { StatePreview } from "./StatePreview";
import { Stage, Video } from "core";
import { countDistinctColors } from "../countDistinctColors";
import {
  createLevelToVideosMap,
  createLevelToSuccessRateMap,
} from "../createMap";
import { sumVideoViewCount } from "../videoViewCount";

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
          <tr>
            <td>{stage.level}</td>
            <td>??</td>
            <td>{countDistinctColors(stage)}色</td>
            <td>{(levelToSuccessRate.get(stage.level) ?? 0) * 100}%</td>
            <td>{sumVideoViewCount(levelToVideos.get(stage.level) ?? [])}回</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};
