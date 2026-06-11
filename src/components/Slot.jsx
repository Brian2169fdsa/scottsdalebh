import React from 'react';

const TONES = {
  dusk:   'linear-gradient(150deg,#E8C89A,#C98B5C 38%,#7E5A52 64%,#2C3A57)',
  sand:   'linear-gradient(150deg,#F0DEC2,#D9B889 45%,#B6885A)',
  canyon: 'linear-gradient(150deg,#E5B98C,#B5663F 50%,#5E3E47)',
  calm:   'linear-gradient(150deg,#CBB68C,#8A7E76 45%,#3A4763)',
};

export function Slot({ id, src, alt = '', placeholder = 'Photo coming soon', h, ratio = '4 / 3', frame = true, radius = 17, tone }) {
  const inner = src ? (
    <img
      src={src} alt={alt}
      style={{ display: 'block', width: '100%', height: h || '100%', objectFit: 'cover', borderRadius: frame ? radius - 3 : radius }}
    />
  ) : (
    <div style={{
      display: 'flex', alignItems: 'center', justifyContent: 'center',
      width: '100%', height: h || 'auto', aspectRatio: h ? undefined : ratio,
      background: TONES[tone] || TONES.dusk,
      borderRadius: frame ? radius : radius,
    }}>
      <span style={{ fontFamily: 'var(--font-display)', fontSize: 11, letterSpacing: '.1em', textTransform: 'uppercase', color: 'rgba(255,255,255,.5)' }}>
        {placeholder}
      </span>
    </div>
  );

  if (!frame) return inner;
  return (
    <div className="sbhg-keyline" style={{ borderRadius: radius }}>
      {inner}
    </div>
  );
}
