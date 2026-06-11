import * as React from 'react';

/**
 * Pill badge / tag in caps. Use for level-of-care labels, accreditation
 * chips, status markers. Gold caps treatment, never lowercase.
 */
export interface BadgeProps {
  children: React.ReactNode;
  variant?: 'outline-gold' | 'solid-gold' | 'navy' | 'on-dark';
  style?: React.CSSProperties;
}

export function Badge(props: BadgeProps): JSX.Element;
