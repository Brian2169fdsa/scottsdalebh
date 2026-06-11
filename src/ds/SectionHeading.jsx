import React from 'react';

/**
 * Section heading block: optional eyebrow + uppercase H2 + signature gold
 * underline rule. The recurring identity device on every section.
 */
export function SectionHeading({
  eyebrow,
  children,
  as = 'h2',
  align = 'left',
  onDark = false,
  style,
  ...rest
}) {
  const Tag = as;
  return (
    <div style={{ textAlign: align, ...style }} {...rest}>
      {eyebrow && (
        <p
          style={{
            margin: '0 0 14px',
            fontFamily: 'var(--font-display)',
            fontWeight: 600,
            fontSize: 'var(--eyebrow)',
            letterSpacing: 'var(--tracking-eyebrow)',
            textTransform: 'uppercase',
            color: 'var(--gold-500)',
          }}
        >
          {eyebrow}
        </p>
      )}
      <Tag
        style={{
          margin: 0,
          fontFamily: 'var(--font-display)',
          fontWeight: 800,
          fontSize: 'var(--display-lg)',
          lineHeight: 'var(--lh-heading)',
          textTransform: 'uppercase',
          letterSpacing: 'var(--tracking-display)',
          color: onDark ? 'var(--white)' : 'var(--ink-900)',
        }}
      >
        {children}
      </Tag>
      <span
        aria-hidden="true"
        style={{
          display: 'block',
          width: 'var(--rule-w)',
          height: 'var(--rule-h)',
          borderRadius: 2,
          background: 'var(--grad-gold)',
          marginTop: 18,
          marginInline: align === 'center' ? 'auto' : 0,
        }}
      />
    </div>
  );
}
