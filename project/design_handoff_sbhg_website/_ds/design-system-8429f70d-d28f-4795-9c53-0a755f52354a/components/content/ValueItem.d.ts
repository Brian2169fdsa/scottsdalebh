import * as React from 'react';

/**
 * One value in the Values Row — outlined gold icon circle, gold caps title,
 * one-line description. Place three across, divided by gold vertical rules.
 */
export interface ValueItemProps {
  /** Line icon node for the IconCircle. */
  icon: React.ReactNode;
  title: React.ReactNode;
  children: React.ReactNode;
  onDark?: boolean;
  style?: React.CSSProperties;
}

export function ValueItem(props: ValueItemProps): JSX.Element;
