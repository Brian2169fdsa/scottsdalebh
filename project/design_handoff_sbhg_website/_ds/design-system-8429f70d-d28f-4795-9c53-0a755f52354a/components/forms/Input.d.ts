import * as React from 'react';

/**
 * Labeled text input. White field, 8px radius, gold focus ring. Pass onDark
 * for the navy Verify Insurance form (white labels). HIPAA helper in caption.
 */
export interface InputProps extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'style'> {
  label?: string;
  helper?: string;
  /** White label text for navy form sections. */
  onDark?: boolean;
  required?: boolean;
  style?: React.CSSProperties;
}

export function Input(props: InputProps): JSX.Element;
