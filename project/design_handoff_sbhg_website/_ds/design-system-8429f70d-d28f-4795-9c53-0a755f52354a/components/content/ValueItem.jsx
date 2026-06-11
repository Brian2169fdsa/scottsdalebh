import React from 'react';
import { IconCircle } from '../brand/IconCircle.jsx';

/**
 * Value item: outlined gold icon circle + gold caps title + one-line copy.
 * Used in the Values Row, separated by gold vertical dividers.
 */
export function ValueItem({ icon, title, children, onDark = true, style, ...rest }) {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center', gap: 16, padding: '0 20px', ...style }} {...rest}>
      <IconCircle onDark={onDark} size={72}>{icon}</IconCircle>
      <div style={{
        fontFamily: 'var(--font-display)',
        fontWeight: 700,
        fontSize: 16,
        letterSpacing: '0.1em',
        textTransform: 'uppercase',
        color: onDark ? 'var(--white)' : 'var(--ink-900)',
      }}>{title}</div>
      <p style={{
        margin: 0,
        fontFamily: 'var(--font-body)',
        fontSize: 15,
        lineHeight: 1.6,
        color: onDark ? 'rgba(255,255,255,0.72)' : 'var(--gray-600)',
        maxWidth: 240,
      }}>{children}</p>
    </div>
  );
}
