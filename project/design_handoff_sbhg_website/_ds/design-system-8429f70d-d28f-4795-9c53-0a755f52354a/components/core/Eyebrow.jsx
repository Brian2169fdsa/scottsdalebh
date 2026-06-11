import React from 'react';

/**
 * Gold caps label. Uppercase, letter-spaced, gold — never used for body.
 */
export function Eyebrow({ children, align = 'left', style, ...rest }) {
  return (
    <p
      style={{
        margin: 0,
        fontFamily: 'var(--font-display)',
        fontWeight: 600,
        fontSize: 'var(--eyebrow)',
        letterSpacing: 'var(--tracking-eyebrow)',
        textTransform: 'uppercase',
        color: 'var(--gold-500)',
        textAlign: align,
        ...style,
      }}
      {...rest}
    >
      {children}
    </p>
  );
}
