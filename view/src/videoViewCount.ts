import { Video } from "core";

export const sumVideoViewCount = (videos: Video[]): number => {
  return videos
    .map((video) => video.viewCount)
    .reduce((count1, count2) => count1 + count2, 0);
};
