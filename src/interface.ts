export interface ProgressProps {
  mode?: 'standard';
  duration?: number;
  begin?: number;
  repeatCount?: number | 'indefinite';
  from?: number;
  to?: number;
}

export const STANDARD = 'standard';
export const INDEFINITE = 'indefinite';

export const DEFAULT_DURATION = 5; // 5 seconds
export const DEFAULT_BEGIN = 0; // 0 seconds
export const DEFAULT_FROM = 0;
export const DEFAULT_TO = 180;

export const defaultProps: Partial<ProgressProps> = {
  mode: STANDARD,
  duration: DEFAULT_DURATION,
  begin: DEFAULT_BEGIN,
  repeatCount: INDEFINITE,
  from: DEFAULT_FROM,
  to: DEFAULT_TO,
};
