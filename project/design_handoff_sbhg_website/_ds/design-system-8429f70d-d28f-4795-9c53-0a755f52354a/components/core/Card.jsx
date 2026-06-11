import React from 'react';

/**
 * Surface card. Light (white) or warm (cream) on light sections with the
 * single soft shadow; navy-800 on dark sections (no shadow on navy).
 */
export function Card({
  children,
  surface = 'light',
  padding = 28,
  style,
  ...rest
}) {
  const surfaces = {
    light: { background: 'var(--white)', color: 'var(--gray-600)', boxShadow: 'var(--shadow-soft)', border: '1px solid var(--gray-200)' },
    warm: { background: 'var(--cream-50)', color: 'var(--gray-600)', boxShadow: 'var(--shadow-soft)', border: '1px solid var(--gray-200)' },
    dark: { background: 'var(--navy-800)', color: 'rgba(255,255,255,0.72)', boxShadow: 'none', border: '1px solid rgba(255,255,255,0.08)' },
  };
  return (
    <div
      style={{
        borderRadius: 'var(--radius-card)',
        padding,
        ...surfaces[surface],
        ...style,
      }}
      {...rest}
    >
      {children}
    </div>
  );
}
