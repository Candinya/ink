export type ActivityCountPerPlatform = {
  total: number;
  max: number;
  day: number[];
};

export type ActivityCountAPIResponse = {
  days: number;
  github: ActivityCountPerPlatform;
  misskey: ActivityCountPerPlatform;
};
