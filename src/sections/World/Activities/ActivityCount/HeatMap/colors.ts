export const colorMapGithub = [
  "bg-green-300",
  "bg-green-400",
  "bg-green-500",
  "bg-green-600",
];

export const colorMapMisskey = [
  "bg-blue-300",
  "bg-blue-400",
  "bg-blue-500",
  "bg-blue-600",
];

export const colorMappingCalc = (
  val: number,
  max: number,
  colorsCount: number,
) => Math.floor((val / max) * colorsCount);
