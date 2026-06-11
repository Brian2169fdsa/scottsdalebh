import React from 'react';

/**
 * Stat block: oversized gold numeral + white statement + caption source.
 * For the navy Stat Band. Use only sourced, verifiable figures.
 */
export function StatBlock({ value, statement, source, align = 'left', style, ...rest }) {
  return (
    <div style={{ textAlign: align, ...style }} {...rest}>
      <div style={{
        fontFamily: 'var(--font-display)',
        fontWeight: 800,
        fontSize: 'clamp(48px, 6vw, 72px)',
        lineHeight: 1,
        fontVariantNumeric: 'tabular-nums',
        background: 'var(--grad-gold)',
        WebkitBackgroundClip: 'text',
        backgroundClip: 'text',
        color: 'transparent',
      }}>{value}</div>
      <p style={{
        margin: '14px 0 0',
        fontFamily: 'var(--font-body)',
        fontSize: 17,
        lineHeight: 1.55,
        color: 'var(--white)',
        maxWidth: 280,
        marginInline: align === 'center' ? 'auto' : 0,
      }}>{statement}</p>
      {source && (
        <p style={{
          margin: '10px 0 0',
          fontFamily: 'var(--font-body)',
          fontSize: 13,
          color: 'rgba(255,255,255,0.55)',
        }}>{source}</p>
      )}
    </div>
  );
}
