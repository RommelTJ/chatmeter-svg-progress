export interface ProgressProps {
  mode?: 'standard';
  duration?: number;
  begin?: number;
  repeatCount?: number | 'infinite';
}

export const STANDARD = 'standard';
export const INFINITE = 'infinite';

export const DEFAULT_DURATION = 5; // 5 seconds
export const DEFAULT_BEGIN = 0; // 0 seconds

export const defaultProps: Partial<ProgressProps> = {
  mode: STANDARD,
  duration: DEFAULT_DURATION,
  begin: DEFAULT_BEGIN,
  repeatCount: INFINITE,
};
