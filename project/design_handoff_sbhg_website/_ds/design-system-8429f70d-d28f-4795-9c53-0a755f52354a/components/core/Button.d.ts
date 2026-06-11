import * as React from 'react';

/**
 * SBHG primary action. Gold gradient CTA on navy text; outline variants
 * adapt to dark or light surfaces. CTAs are verbs ("Verify Insurance").
 *
 * @startingPoint section="Core" subtitle="Gold gradient CTA + outline variants" viewport="700x120"
 */
export interface ButtonProps {
  children: React.ReactNode;
  /** primary = gold gradient. secondary-dark/light = outline. ghost = text only. */
  variant?: 'primary' | 'secondary-dark' | 'secondary-light' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  /** Render as an anchor when set. */
  href?: string;
  iconLeft?: React.ReactNode;
  iconRight?: React.ReactNode;
  disabled?: boolean;
  type?: 'button' | 'submit' | 'reset';
  onClick?: (e: React.MouseEvent) => void;
  style?: React.CSSProperties;
}

export function Button(props: ButtonProps): JSX.Element;
