import React from 'react';

/**
 * Program card (level of care): cream card, outlined gold icon, optional
 * caps badge, caps title + description, optional link. For the 2x2 grid.
 */
export function ProgramCard({ icon, badge, title, children, href, linkLabel = 'Learn More', style, ...rest }) {
  return (
    <div
      style={{
        background: 'var(--cream-50)',
        border: '1px solid var(--gray-200)',
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
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
        <span style={{
          width: 60, height: 60, borderRadius: '50%',
          border: 'var(--icon-outline-w) solid var(--gold-500)',
          display: 'inline-flex', alignItems: 'center', justifyContent: 'center',
          color: 'var(--gold-700)',
        }}>{icon}</span>
        {badge && (
          <span style={{
            fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: 11,
            letterSpacing: '0.1em', textTransform: 'uppercase', color: 'var(--gold-700)',
            border: '1.5px solid var(--gold-500)', borderRadius: 999, padding: '5px 11px',
          }}>{badge}</span>
        )}
      </div>
      <h3 style={{
        margin: 0, fontFamily: 'var(--font-display)', fontWeight: 700,
        fontSize: 20, letterSpacing: '0.04em', textTransform: 'uppercase', color: 'var(--ink-900)',
      }}>{title}</h3>
      <p style={{ margin: 0, fontFamily: 'var(--font-body)', fontSize: 15.5, lineHeight: 1.6, color: 'var(--gray-600)', flexGrow: 1 }}>{children}</p>
      {href && (
        <a href={href} style={{
          fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: 13,
          letterSpacing: '0.06em', textTransform: 'uppercase', color: 'var(--gold-700)',
          textDecoration: 'none', display: 'inline-flex', alignItems: 'center', gap: 8,
        }}>{linkLabel}<span aria-hidden="true">&rarr;</span></a>
      )}
    </div>
  );
}
