import React from 'react';

/**
 * Labeled select. Matches Input styling - white field, 8px radius.
 */
export function Select({
  label,
  id,
  onDark = false,
  required = false,
  options = [],
  placeholder,
  style,
  ...rest
}) {
  const selId = id || (label ? label.toLowerCase().replace(/\s+/g, '-') : undefined);
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 8, width: '100%' }}>
      {label && (
        <label
          htmlFor={selId}
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
      <div style={{ position: 'relative' }}>
        <select
          id={selId}
          required={required}
          defaultValue=""
          style={{
            width: '100%',
            padding: '13px 40px 13px 16px',
            fontFamily: 'var(--font-body)',
            fontSize: 16,
            color: 'var(--ink-900)',
            background: 'var(--white)',
            border: '1px solid var(--gray-200)',
            borderRadius: 'var(--radius-input)',
            outline: 'none',
            appearance: 'none',
            cursor: 'pointer',
            transition: 'border-color var(--transition-btn), box-shadow var(--transition-btn)',
            ...style,
          }}
          onFocus={(e) => { e.target.style.borderColor = 'var(--gold-500)'; e.target.style.boxShadow = '0 0 0 3px rgba(201,162,75,0.18)'; }}
          onBlur={(e) => { e.target.style.borderColor = 'var(--gray-200)'; e.target.style.boxShadow = 'none'; }}
          {...rest}
        >
          {placeholder && <option value="" disabled>{placeholder}</option>}
          {options.map((o) => {
            const val = typeof o === 'string' ? o : o.value;
            const lab = typeof o === 'string' ? o : o.label;
            return <option key={val} value={val}>{lab}</option>;
          })}
        </select>
        <span aria-hidden="true" style={{
          position: 'absolute', right: 16, top: '50%', transform: 'translateY(-50%)',
          width: 8, height: 8, borderRight: '2px solid var(--gold-700)', borderBottom: '2px solid var(--gold-700)',
          rotate: '45deg', pointerEvents: 'none', marginTop: -2,
        }} />
      </div>
    </div>
  );
}
