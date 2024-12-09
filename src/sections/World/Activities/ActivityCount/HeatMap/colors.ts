export const colorMapGithub = [
  "bg-green-100",
  "bg-green-200",
  "bg-green-300",
  "bg-green-400",
  "bg-green-500",
  "bg-green-600",
];

export const colorMapMisskey = [
  "bg-blue-100",
  "bg-blue-200",
  "bg-blue-300",
  "bg-blue-400",
  "bg-blue-500",
  "bg-blue-600",
];

const log100 = Math.log(100);

export const colorMappingCalc = (val: number, max: number, into: number) =>
  Math.floor((Math.log((val / max) * 100 + 1) / log100) * into); // 使用对数函数压小一点差距，避免浓的太浓淡的太淡
