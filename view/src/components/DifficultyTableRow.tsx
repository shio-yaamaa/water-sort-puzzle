import React from "react";
import "./DifficultyTableRow.css";
import { StatePreview } from "./StatePreview";
import { HeatmapCell } from "./HeatmapCell";
import { Stage, Video } from "core";
import { lightThemeColors } from "../colors";
import { countDistinctColors } from "../countDistinctColors";
import { formatPercentage } from "../formatPercentage";
import { easeInCubic, easeOutCubic, easeOutCirc } from "../easing";
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
    <>
      <div className="DifficultyTableRow-td numeral">{props.stage.level}</div>
      <StatePreview
        state={{ tubes: props.stage.tubes }}
        colors={lightThemeColors}
      />
      <HeatmapCell
        value={colorCount}
        min={1}
        max={13}
        easingFunction={easeInCubic}
      >
        <div className="DifficultyTableRow-td numeral">{`${colorCount}色`}</div>
      </HeatmapCell>
      <HeatmapCell
        value={props.successRate}
        min={0}
        max={1}
        reverse={true}
        easingFunction={easeOutCirc}
      >
        <div className="DifficultyTableRow-td numeral">
          {formatPercentage(props.successRate)}
        </div>
      </HeatmapCell>
      <HeatmapCell
        value={videoViewCount ?? 0}
        min={0}
        max={441072}
        easingFunction={easeOutCubic}
      >
        <div className="DifficultyTableRow-td numeral">
          {videoViewCount ? `${Number(videoViewCount).toLocaleString()}回` : ""}
        </div>
      </HeatmapCell>
    </>
  );
};
