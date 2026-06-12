import React from 'react';

/**
 * The Notch Band - gold gradient transition band with the angled chevron
 * notch. Place between adjacent dark sections. Max one per viewport.
 */
export function NotchBand({ height = 40, direction = 'down', style, ...rest }) {
  const clip = direction === 'down'
    ? 'polygon(0 0, 46% 0, 50% 62%, 54% 0, 100% 0, 100% 100%, 0 100%)'
    : 'polygon(0 0, 100% 0, 100% 100%, 54% 100%, 50% 38%, 46% 100%, 0 100%)';
  return (
    <div
      aria-hidden="true"
      style={{
        width: '100%',
        height,
        background: 'var(--grad-gold)',
        clipPath: clip,
        WebkitClipPath: clip,
        ...style,
      }}
      {...rest}
    />
  );
}
