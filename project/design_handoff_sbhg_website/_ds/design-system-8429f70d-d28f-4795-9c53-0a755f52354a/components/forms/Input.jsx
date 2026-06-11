import React from 'react';

/**
 * Text input with label + optional helper. Adapts to dark (verify form,
 * white fields on navy) or light surfaces.
 */
export function Input({
  label,
  helper,
  id,
  onDark = false,
  required = false,
  type = 'text',
  style,
  ...rest
}) {
  const inputId = id || (label ? label.toLowerCase().replace(/\s+/g, '-') : undefined);
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 8, width: '100%' }}>
      {label && (
        <label
          htmlFor={inputId}
          style={{
            fontFamily: 'var(--font-display)',
            fontWeight: 600,
            fontSize: 13,
            letterSpacing: '0.04em',
            textTransform: 'uppercase',
            color: onDark ? 'var(--white)' : 'var(--ink-900)',
          }}
        >
          {label}{required && <span style={{ color: 'var(--gold-500)' }}> *</span>}
        </label>
      )}
      <input
        id={inputId}
        type={type}
        required={required}
        style={{
          width: '100%',
          padding: '13px 16px',
          fontFamily: 'var(--font-body)',
          fontSize: 16,
          color: 'var(--ink-900)',
          background: 'var(--white)',
          border: '1px solid var(--gray-200)',
          borderRadius: 'var(--radius-input)',
          outline: 'none',
          transition: 'border-color var(--transition-btn), box-shadow var(--transition-btn)',
          ...style,
        }}
        onFocus={(e) => { e.target.style.borderColor = 'var(--gold-500)'; e.target.style.boxShadow = '0 0 0 3px rgba(201,162,75,0.18)'; }}
        onBlur={(e) => { e.target.style.borderColor = 'var(--gray-200)'; e.target.style.boxShadow = 'none'; }}
        {...rest}
      />
      {helper && (
        <p style={{
          margin: 0,
          fontFamily: 'var(--font-body)',
          fontSize: 13,
          color: onDark ? 'rgba(255,255,255,0.6)' : 'var(--gray-600)',
        }}>{helper}</p>
      )}
    </div>
  );
}
