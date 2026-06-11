import * as React from 'react';

/**
 * 1.5px gold-outlined circle holding a line icon (badge-back style). Used for
 * value/feature icons. Never filled, never multicolor — outline only.
 */
export interface IconCircleProps {
  /** A line icon (e.g. Lucide SVG) sized ~40% of the circle. */
  children: React.ReactNode;
  size?: number;
  /** Gold-300 icon for navy; gold-700 for light. */
  onDark?: boolean;
  style?: React.CSSProperties;
}

export function IconCircle(props: IconCircleProps): JSX.Element;
