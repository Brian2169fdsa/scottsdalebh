import React from 'react';

/**
 * Small caps badge/tag. Gold-outline, gold-solid, or navy. Caps + tracked.
 */
export function Badge({ children, variant = 'outline-gold', style, ...rest }) {
  const variants = {
    'outline-gold': { background: 'transparent', color: 'var(--gold-700)', border: '1.5px solid var(--gold-500)' },
    'solid-gold': { background: 'var(--grad-gold)', color: 'var(--navy-900)', border: 'none' },
    navy: { background: 'var(--navy-800)', color: 'var(--white)', border: 'none' },
    'on-dark': { background: 'rgba(201,162,75,0.14)', color: 'var(--gold-300)', border: '1px solid rgba(201,162,75,0.4)' },
  };
  return (
    <span
      style={{
        display: 'inline-flex',
        alignItems: 'center',
        gap: 6,
        padding: '6px 12px',
        borderRadius: 'var(--radius-pill)',
        fontFamily: 'var(--font-display)',
        fontWeight: 700,
        fontSize: 12,
        letterSpacing: '0.08em',
        textTransform: 'uppercase',
        lineHeight: 1,
        ...variants[variant],
        ...style,
      }}
      {...rest}
    >
      {children}
    </span>
  );
}
