import * as React from 'react';

/**
 * Rounded (20px) surface container. Light/warm cards carry the single soft
 * shadow; dark cards (navy) carry none — shadows never appear on navy.
 */
export interface CardProps {
  children: React.ReactNode;
  surface?: 'light' | 'warm' | 'dark';
  padding?: number | string;
  style?: React.CSSProperties;
}

export function Card(props: CardProps): JSX.Element;
