import * as React from 'react';

/**
 * Signature gold gradient band with the angled chevron notch — the transition
 * device between major dark sections (hero→content, pre-footer→footer).
 * Maximum one per viewport.
 */
export interface NotchBandProps {
  height?: number;
  /** Chevron points down (default) or up. */
  direction?: 'down' | 'up';
  style?: React.CSSProperties;
}

export function NotchBand(props: NotchBandProps): JSX.Element;
