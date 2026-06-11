import React from 'react';

/**
 * SBHG logo lockup: gold cross badge mark + SCOTTSDALE gold caps over the
 * white tracked subtitle. markSrc points at the copied badge-mark.png asset.
 */
export function BadgeMark({
  markSrc = 'assets/badge-mark.png',
  size = 56,
  showType = true,
  onDark = true,
  style,
  ...rest
}) {
  return (
    <div style={{ display: 'inline-flex', alignItems: 'center', gap: size * 0.28, ...style }} {...rest}>
      <img src={markSrc} alt="Scottsdale Behavioral Health Group" width={size} height={size} style={{ display: 'block' }} />
      {showType && (
        <div style={{ lineHeight: 1 }}>
          <div style={{
            fontFamily: 'var(--font-display)',
            fontWeight: 800,
            fontSize: size * 0.46,
            letterSpacing: '0.04em',
            background: 'var(--grad-gold)',
            WebkitBackgroundClip: 'text',
            backgroundClip: 'text',
            color: 'transparent',
          }}>SCOTTSDALE</div>
          <div style={{
            fontFamily: 'var(--font-display)',
            fontWeight: 600,
            fontSize: size * 0.17,
            letterSpacing: '0.22em',
            color: onDark ? 'var(--white)' : 'var(--gray-600)',
            marginTop: size * 0.08,
          }}>BEHAVIORAL HEALTH GROUP</div>
        </div>
      )}
    </div>
  );
}
