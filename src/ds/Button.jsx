import React from 'react';
import { Link } from 'react-router-dom';

export function Button({
  children,
  variant = 'primary',
  size = 'md',
  href,
  iconLeft,
  iconRight,
  disabled = false,
  type = 'button',
  onClick,
  style,
  ...rest
}) {
  const pad = size === 'lg' ? '16px 32px' : size === 'sm' ? '9px 18px' : '13px 26px';
  const fontSize = size === 'lg' ? 16 : size === 'sm' ? 13 : 14;

  const base = {
    display: 'inline-flex', alignItems: 'center', justifyContent: 'center', gap: 10,
    padding: pad, fontFamily: 'var(--font-display)', fontWeight: 700, fontSize,
    letterSpacing: 'var(--tracking-button)', textTransform: 'uppercase',
    borderRadius: 'var(--radius-input)', cursor: disabled ? 'not-allowed' : 'pointer',
    textDecoration: 'none', lineHeight: 1, whiteSpace: 'nowrap',
    border: '2px solid transparent',
    transition: 'background var(--transition-btn), border-color var(--transition-btn), color var(--transition-btn)',
    opacity: disabled ? 0.5 : 1, ...style,
  };

  const variants = {
    primary: { background: 'var(--grad-gold)', color: 'var(--navy-900)', borderColor: 'transparent' },
    'secondary-dark': { background: 'transparent', color: 'var(--gold-300)', borderColor: 'var(--gold-500)' },
    'secondary-light': { background: 'transparent', color: 'var(--navy-900)', borderColor: 'var(--navy-800)' },
    ghost: { background: 'transparent', color: 'var(--gold-500)', borderColor: 'transparent', padding: size === 'lg' ? '16px 12px' : '13px 8px' },
  };

  const styles = { ...base, ...variants[variant] };

  const onEnter = (e) => {
    if (disabled) return;
    if (variant === 'primary') { e.currentTarget.style.background = 'var(--gold-300)'; }
    else if (variant === 'secondary-dark') { e.currentTarget.style.background = 'var(--gold-500)'; e.currentTarget.style.color = 'var(--navy-900)'; }
    else if (variant === 'secondary-light') { e.currentTarget.style.background = 'var(--navy-800)'; e.currentTarget.style.color = 'var(--white)'; }
    else if (variant === 'ghost') { e.currentTarget.style.color = 'var(--gold-300)'; }
  };
  const onLeave = (e) => {
    if (disabled) return;
    e.currentTarget.style.background = variants[variant].background;
    e.currentTarget.style.color = variants[variant].color;
  };

  const content = <>{iconLeft}{children}{iconRight}</>;
  const shared = { style: styles, onMouseEnter: onEnter, onMouseLeave: onLeave, onClick: disabled ? undefined : onClick, ...rest };

  if (href && !disabled) {
    const isInternal = href.startsWith('/') && !href.startsWith('//');
    if (isInternal) return <Link to={href} {...shared}>{content}</Link>;
    return <a href={href} {...shared}>{content}</a>;
  }
  return <button type={type} disabled={disabled} {...shared}>{content}</button>;
}
