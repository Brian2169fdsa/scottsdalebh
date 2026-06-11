import * as React from 'react';

/**
 * White testimonial card for navy sections — gold quote mark, quote, 5-star
 * row, navy initial avatar. Use original SBHG review content only.
 */
export interface TestimonialProps {
  quote: React.ReactNode;
  name: string;
  /** Sub-label, e.g. "Alumni, 2024" or city. */
  detail?: React.ReactNode;
  rating?: number;
  style?: React.CSSProperties;
}

export function Testimonial(props: TestimonialProps): JSX.Element;
