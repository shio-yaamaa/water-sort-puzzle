import { Video } from "core";

export const createLevelToVideosMap = (
  items: {
    level: number;
    videos: Video[];
  }[]
): Map<number, Video[]> => {
  return new Map<number, Video[]>(
    items.map((item) => [item.level, item.videos])
  );
};

export const createLevelToSuccessRateMap = (
  items: {
    level: number;
    successRate: number;
  }[]
): Map<number, number> => {
  return new Map<number, number>(
    items.map((item) => [item.level, item.successRate])
  );
};
