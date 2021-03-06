import { DEFAULT_DURATION } from './interface';

export const validateProgress = (progress: number) => {
  if (progress < 0) return 0;
  if (progress > 100) return 100;
  return progress;
};

export const validateDuration = (duration: number | undefined) => {
  if (!duration) return DEFAULT_DURATION;
  if (duration < 0) return DEFAULT_DURATION;
  return duration;
};

export const validateThreshold = (
  duration: number,
  threshold: number | undefined,
) => {
  if (!threshold || threshold < 0) return DEFAULT_DURATION;
  return Math.min(duration, threshold);
};

export const validateFireThreshold = (fireThreshold: number | undefined) => {
  if (!fireThreshold || fireThreshold < 0) return DEFAULT_DURATION;
  return fireThreshold;
};
