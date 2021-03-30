import React from "react";
import "./DifficultyTableRow.css";
import { StatePreview } from "./StatePreview";
import { HeatmapCell } from "./HeatmapCell";
import { Stage, Video } from "core";
import { countDistinctColors } from "../countDistinctColors";
import { sumVideoViewCount } from "../videoViewCount";

interface Props {
  stage: Stage;
  successRate: number;
  videos: Video[];
}

export const DifficultyTableRow: React.VFC<Props> = (props) => {
  const colorCount = countDistinctColors(props.stage);
  const videoViewCount =
    props.videos.length > 0 ? sumVideoViewCount(props.videos) : null;
  return (
    <tr className="DifficultyTableRow">
      <td>{props.stage.level}</td>
      <td>
        <StatePreview state={{ tubes: props.stage.tubes }} />
      </td>
      <td>
        <HeatmapCell value={colorCount} min={1} max={13}>
          {`${colorCount}色`}
        </HeatmapCell>
      </td>
      <td>
        <HeatmapCell value={props.successRate} min={0} max={1} reverse={true}>
          {`${props.successRate * 100}%`}
        </HeatmapCell>
      </td>
      <td>
        <HeatmapCell value={videoViewCount ?? 0} min={0} max={441072}>
          {videoViewCount ? `${Number(videoViewCount).toLocaleString()}回` : ""}
        </HeatmapCell>
      </td>
    </tr>
  );
};
