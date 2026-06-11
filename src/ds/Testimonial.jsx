import React from 'react';

/**
 * Testimonial card: gold quote mark, quote, 5-star row, navy initial avatar +
 * name. White card placed on a navy section.
 */
export function Testimonial({ quote, name, detail, rating = 5, style, ...rest }) {
  const initial = (name || '?').trim().charAt(0).toUpperCase();
  return (
    <div
      style={{
        background: 'var(--white)',
        borderRadius: 'var(--radius-card)',
        padding: 32,
        boxShadow: 'var(--shadow-soft)',
        display: 'flex',
        flexDirection: 'column',
        gap: 18,
        ...style,
      }}
      {...rest}
    >
      <span aria-hidden="true" style={{
        fontFamily: 'var(--font-display)',
        fontWeight: 800,
        fontSize: 56,
        lineHeight: 0.6,
        height: 30,
        background: 'var(--grad-gold)',
        WebkitBackgroundClip: 'text',
        backgroundClip: 'text',
        color: 'transparent',
      }}>&ldquo;</span>
      <p style={{ margin: 0, fontFamily: 'var(--font-body)', fontSize: 16, lineHeight: 1.65, color: 'var(--ink-900)' }}>{quote}</p>
      <div style={{ display: 'flex', gap: 3 }} aria-label={`${rating} out of 5 stars`}>
        {Array.from({ length: 5 }).map((_, i) => (
          <svg key={i} width="16" height="16" viewBox="0 0 24 24" fill={i < rating ? 'var(--gold-500)' : 'var(--gray-200)'}>
            <path d="M12 2l2.9 6.1 6.6.9-4.8 4.6 1.2 6.6L12 18.6 6.1 20.8l1.2-6.6L2.5 9l6.6-.9z" />
          </svg>
        ))}
      </div>
      <div style={{ display: 'flex', alignItems: 'center', gap: 14, marginTop: 4 }}>
        <span style={{
          width: 44, height: 44, borderRadius: '50%',
          background: 'var(--navy-800)', color: 'var(--gold-300)',
          display: 'inline-flex', alignItems: 'center', justifyContent: 'center',
          fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: 18,
        }}>{initial}</span>
        <div>
          <div style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: 15, color: 'var(--ink-900)' }}>{name}</div>
          {detail && <div style={{ fontFamily: 'var(--font-body)', fontSize: 13, color: 'var(--gray-600)' }}>{detail}</div>}
        </div>
      </div>
    </div>
  );
}
