import { Water } from "core";

const originalColors = new Map<Water, string>([
  [Water.EMPTY, "rgba(0, 0, 0, 0)"],
  [Water.PINK, "#D9677C"],
  [Water.RED, "#B5392D"],
  [Water.ORANGE, "#DB9051"],
  [Water.YELLOW, "#EDDA6D"],
  [Water.OLIVE, "#7E9530"],
  [Water.LIME, "#81D385"],
  [Water.GREEN, "#2E6338"],
  [Water.SKYBLUE, "#68A1DF"],
  [Water.BLUE, "#382EBB"],
  [Water.PURPLE, "#692F8E"],
  [Water.BROWN, "#774C1A"],
  [Water.GRAY, "#636465"],
]);

const brighterColors = new Map<Water, string>([
  [Water.EMPTY, "rgba(0, 0, 0, 0)"],
  [Water.PINK, "#F06292"], // Pink 300
  [Water.RED, "#E53935"], // Red 600
  [Water.ORANGE, "#FF9800"], // Orange 500
  [Water.YELLOW, "#FFEB3B"], // Yellow 500
  [Water.OLIVE, "#9E9D24"], // Lime 800
  [Water.LIME, "#64DD17"], // Light Green A700
  [Water.GREEN, "#2E7D32"], // Green 800
  [Water.SKYBLUE, "#4FC3F7"], // Light Blue 300
  [Water.BLUE, "#3F51B5"], // Indigo 500
  [Water.PURPLE, "#8E24AA"], // Purple 600
  [Water.BROWN, "#795548"], // Brown 500
  [Water.GRAY, "#757575"], // Gray 600
]);

export const colors = brighterColors;
