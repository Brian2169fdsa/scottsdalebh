import * as React from 'react';

/**
 * Oversized gold numeral + white statement + caption source line, for the
 * navy Stat Band. Statistics must be sourced and cited (SAMHSA, NIMH, NIH).
 */
export interface StatBlockProps {
  /** The oversized numeral, e.g. "1 in 5" or "21M". */
  value: React.ReactNode;
  statement: React.ReactNode;
  /** Citation shown in caption type, e.g. "Source: NIMH, 2023". */
  source?: React.ReactNode;
  align?: 'left' | 'center';
  style?: React.CSSProperties;
}

export function StatBlock(props: StatBlockProps): JSX.Element;
