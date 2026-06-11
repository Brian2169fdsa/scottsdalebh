import * as React from 'react';

/**
 * Section title device: optional gold eyebrow, uppercase Montserrat H2,
 * and the signature gold underline rule that draws in on scroll-reveal.
 *
 * @startingPoint section="Core" subtitle="Eyebrow + H2 + signature gold rule" viewport="700x200"
 */
export interface SectionHeadingProps {
  /** Gold caps label above the heading. */
  eyebrow?: React.ReactNode;
  children: React.ReactNode;
  as?: 'h1' | 'h2' | 'h3';
  align?: 'left' | 'center';
  /** White heading text for navy sections. */
  onDark?: boolean;
  style?: React.CSSProperties;
}

export function SectionHeading(props: SectionHeadingProps): JSX.Element;
