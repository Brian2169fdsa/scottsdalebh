import * as React from 'react';

/**
 * The SBHG logo lockup — gold cross badge + SCOTTSDALE gold caps over the
 * white letter-spaced subtitle. Copy assets/badge-mark.png into your project
 * and point markSrc at it.
 */
export interface BadgeMarkProps {
  /** Path to the copied badge-mark.png. */
  markSrc?: string;
  /** Badge mark pixel size; type scales from it. */
  size?: number;
  /** Show the SCOTTSDALE / BEHAVIORAL HEALTH GROUP wordmark. */
  showType?: boolean;
  /** White subtitle for navy backgrounds (default). */
  onDark?: boolean;
  style?: React.CSSProperties;
}

export function BadgeMark(props: BadgeMarkProps): JSX.Element;
