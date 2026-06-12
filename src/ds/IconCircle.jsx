import React from 'react';

/**
 * Outlined gold icon circle (badge-back style). 1.5px gold border, line icon
 * inside - never filled, never multicolor. Pass an icon node as children.
 */
export function IconCircle({ children, size = 76, onDark = true, style, ...rest }) {
  return (
    <span
      style={{
        display: 'inline-flex',
        alignItems: 'center',
        justifyContent: 'center',
        width: size,
        height: size,
        borderRadius: 'var(--radius-pill)',
        border: 'var(--icon-outline-w) solid var(--gold-500)',
        color: onDark ? 'var(--gold-300)' : 'var(--gold-700)',
        flexShrink: 0,
        ...style,
      }}
      {...rest}
    >
      {children}
    </span>
  );
}
