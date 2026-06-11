import * as React from 'react';

export type SelectOption = string | { value: string; label: string };

/**
 * Labeled dropdown matching Input. White field, gold chevron + focus ring.
 */
export interface SelectProps {
  label?: string;
  id?: string;
  onDark?: boolean;
  required?: boolean;
  options?: SelectOption[];
  placeholder?: string;
  style?: React.CSSProperties;
  onChange?: (e: React.ChangeEvent<HTMLSelectElement>) => void;
}

export function Select(props: SelectProps): JSX.Element;
