import * as React from 'react';

/**
 * Gold uppercase caps label that sits above section headings.
 * Gold text rule: caps only, >=14px, letter-spaced. Never body copy.
 */
export interface EyebrowProps {
  children: React.ReactNode;
  align?: 'left' | 'center';
  style?: React.CSSProperties;
}

export function Eyebrow(props: EyebrowProps): JSX.Element;
