/* @ds-bundle: {"format":3,"namespace":"DesignSystem_8429f7","components":[{"name":"BadgeMark","sourcePath":"components/brand/BadgeMark.jsx"},{"name":"IconCircle","sourcePath":"components/brand/IconCircle.jsx"},{"name":"NotchBand","sourcePath":"components/brand/NotchBand.jsx"},{"name":"ProgramCard","sourcePath":"components/content/ProgramCard.jsx"},{"name":"StatBlock","sourcePath":"components/content/StatBlock.jsx"},{"name":"Testimonial","sourcePath":"components/content/Testimonial.jsx"},{"name":"ValueItem","sourcePath":"components/content/ValueItem.jsx"},{"name":"Badge","sourcePath":"components/core/Badge.jsx"},{"name":"Button","sourcePath":"components/core/Button.jsx"},{"name":"Card","sourcePath":"components/core/Card.jsx"},{"name":"Eyebrow","sourcePath":"components/core/Eyebrow.jsx"},{"name":"SectionHeading","sourcePath":"components/core/SectionHeading.jsx"},{"name":"Input","sourcePath":"components/forms/Input.jsx"},{"name":"Select","sourcePath":"components/forms/Select.jsx"}],"sourceHashes":{"components/brand/BadgeMark.jsx":"b0b232d117fd","components/brand/IconCircle.jsx":"fb6e9d31248f","components/brand/NotchBand.jsx":"d3afd8fed70c","components/content/ProgramCard.jsx":"4251212df0e9","components/content/StatBlock.jsx":"7edf0fe9f160","components/content/Testimonial.jsx":"176f02c29356","components/content/ValueItem.jsx":"a81de24950ea","components/core/Badge.jsx":"5c1b6da261f7","components/core/Button.jsx":"18ecae4e691e","components/core/Card.jsx":"cc5edad62a9a","components/core/Eyebrow.jsx":"050a4cbb1ba8","components/core/SectionHeading.jsx":"121279ada3eb","components/forms/Input.jsx":"96ad800e2acf","components/forms/Select.jsx":"8664fb89f349","ui_kits/website/Home.jsx":"c54cb0207d3a","ui_kits/website/sections.jsx":"d079d808576a"},"inlinedExternals":[],"unexposedExports":[]} */

(() => {

const __ds_ns = (window.DesignSystem_8429f7 = window.DesignSystem_8429f7 || {});

const __ds_scope = {};

(__ds_ns.__errors = __ds_ns.__errors || []);

// components/brand/BadgeMark.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * SBHG logo lockup: gold cross badge mark + SCOTTSDALE gold caps over the
 * white tracked subtitle. markSrc points at the copied badge-mark.png asset.
 */
function BadgeMark({
  markSrc = 'assets/badge-mark.png',
  size = 56,
  showType = true,
  onDark = true,
  style,
  ...rest
}) {
  return /*#__PURE__*/React.createElement("div", _extends({
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: size * 0.28,
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement("img", {
    src: markSrc,
    alt: "Scottsdale Behavioral Health Group",
    width: size,
    height: size,
    style: {
      display: 'block'
    }
  }), showType && /*#__PURE__*/React.createElement("div", {
    style: {
      lineHeight: 1
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 800,
      fontSize: size * 0.46,
      letterSpacing: '0.04em',
      background: 'var(--grad-gold)',
      WebkitBackgroundClip: 'text',
      backgroundClip: 'text',
      color: 'transparent'
    }
  }, "SCOTTSDALE"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 600,
      fontSize: size * 0.17,
      letterSpacing: '0.22em',
      color: onDark ? 'var(--white)' : 'var(--gray-600)',
      marginTop: size * 0.08
    }
  }, "BEHAVIORAL HEALTH GROUP")));
}
Object.assign(__ds_scope, { BadgeMark });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/brand/BadgeMark.jsx", error: String((e && e.message) || e) }); }

// components/brand/IconCircle.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Outlined gold icon circle (badge-back style). 1.5px gold border, line icon
 * inside — never filled, never multicolor. Pass an icon node as children.
 */
function IconCircle({
  children,
  size = 76,
  onDark = true,
  style,
  ...rest
}) {
  return /*#__PURE__*/React.createElement("span", _extends({
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
      width: size,
      height: size,
      borderRadius: 'var(--radius-pill)',
      border: 'var(--icon-outline-w) solid var(--gold-500)',
      color: onDark ? 'var(--gold-300)' : 'var(--gold-700)',
      flexShrink: 0,
      ...style
    }
  }, rest), children);
}
Object.assign(__ds_scope, { IconCircle });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/brand/IconCircle.jsx", error: String((e && e.message) || e) }); }

// components/brand/NotchBand.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * The Notch Band — gold gradient transition band with the angled chevron
 * notch. Place between adjacent dark sections. Max one per viewport.
 */
function NotchBand({
  height = 40,
  direction = 'down',
  style,
  ...rest
}) {
  const clip = direction === 'down' ? 'polygon(0 0, 46% 0, 50% 62%, 54% 0, 100% 0, 100% 100%, 0 100%)' : 'polygon(0 0, 100% 0, 100% 100%, 54% 100%, 50% 38%, 46% 100%, 0 100%)';
  return /*#__PURE__*/React.createElement("div", _extends({
    "aria-hidden": "true",
    style: {
      width: '100%',
      height,
      background: 'var(--grad-gold)',
      clipPath: clip,
      WebkitClipPath: clip,
      ...style
    }
  }, rest));
}
Object.assign(__ds_scope, { NotchBand });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/brand/NotchBand.jsx", error: String((e && e.message) || e) }); }

// components/content/ProgramCard.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Program card (level of care): cream card, outlined gold icon, optional
 * caps badge, caps title + description, optional link. For the 2x2 grid.
 */
function ProgramCard({
  icon,
  badge,
  title,
  children,
  href,
  linkLabel = 'Learn More',
  style,
  ...rest
}) {
  return /*#__PURE__*/React.createElement("div", _extends({
    style: {
      background: 'var(--cream-50)',
      border: '1px solid var(--gray-200)',
      borderRadius: 'var(--radius-card)',
      padding: 32,
      boxShadow: 'var(--shadow-soft)',
      display: 'flex',
      flexDirection: 'column',
      gap: 18,
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: 60,
      height: 60,
      borderRadius: '50%',
      border: 'var(--icon-outline-w) solid var(--gold-500)',
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
      color: 'var(--gold-700)'
    }
  }, icon), badge && /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 700,
      fontSize: 11,
      letterSpacing: '0.1em',
      textTransform: 'uppercase',
      color: 'var(--gold-700)',
      border: '1.5px solid var(--gold-500)',
      borderRadius: 999,
      padding: '5px 11px'
    }
  }, badge)), /*#__PURE__*/React.createElement("h3", {
    style: {
      margin: 0,
      fontFamily: 'var(--font-display)',
      fontWeight: 700,
      fontSize: 20,
      letterSpacing: '0.04em',
      textTransform: 'uppercase',
      color: 'var(--ink-900)'
    }
  }, title), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0,
      fontFamily: 'var(--font-body)',
      fontSize: 15.5,
      lineHeight: 1.6,
      color: 'var(--gray-600)',
      flexGrow: 1
    }
  }, children), href && /*#__PURE__*/React.createElement("a", {
    href: href,
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 700,
      fontSize: 13,
      letterSpacing: '0.06em',
      textTransform: 'uppercase',
      color: 'var(--gold-700)',
      textDecoration: 'none',
      display: 'inline-flex',
      alignItems: 'center',
      gap: 8
    }
  }, linkLabel, /*#__PURE__*/React.createElement("span", {
    "aria-hidden": "true"
  }, "\u2192")));
}
Object.assign(__ds_scope, { ProgramCard });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/content/ProgramCard.jsx", error: String((e && e.message) || e) }); }

// components/content/StatBlock.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Stat block: oversized gold numeral + white statement + caption source.
 * For the navy Stat Band. Use only sourced, verifiable figures.
 */
function StatBlock({
  value,
  statement,
  source,
  align = 'left',
  style,
  ...rest
}) {
  return /*#__PURE__*/React.createElement("div", _extends({
    style: {
      textAlign: align,
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 800,
      fontSize: 'clamp(48px, 6vw, 72px)',
      lineHeight: 1,
      fontVariantNumeric: 'tabular-nums',
      background: 'var(--grad-gold)',
      WebkitBackgroundClip: 'text',
      backgroundClip: 'text',
      color: 'transparent'
    }
  }, value), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: '14px 0 0',
      fontFamily: 'var(--font-body)',
      fontSize: 17,
      lineHeight: 1.55,
      color: 'var(--white)',
      maxWidth: 280,
      marginInline: align === 'center' ? 'auto' : 0
    }
  }, statement), source && /*#__PURE__*/React.createElement("p", {
    style: {
      margin: '10px 0 0',
      fontFamily: 'var(--font-body)',
      fontSize: 13,
      color: 'rgba(255,255,255,0.55)'
    }
  }, source));
}
Object.assign(__ds_scope, { StatBlock });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/content/StatBlock.jsx", error: String((e && e.message) || e) }); }

// components/content/Testimonial.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Testimonial card: gold quote mark, quote, 5-star row, navy initial avatar +
 * name. White card placed on a navy section.
 */
function Testimonial({
  quote,
  name,
  detail,
  rating = 5,
  style,
  ...rest
}) {
  const initial = (name || '?').trim().charAt(0).toUpperCase();
  return /*#__PURE__*/React.createElement("div", _extends({
    style: {
      background: 'var(--white)',
      borderRadius: 'var(--radius-card)',
      padding: 32,
      boxShadow: 'var(--shadow-soft)',
      display: 'flex',
      flexDirection: 'column',
      gap: 18,
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement("span", {
    "aria-hidden": "true",
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 800,
      fontSize: 56,
      lineHeight: 0.6,
      height: 30,
      background: 'var(--grad-gold)',
      WebkitBackgroundClip: 'text',
      backgroundClip: 'text',
      color: 'transparent'
    }
  }, "\u201C"), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0,
      fontFamily: 'var(--font-body)',
      fontSize: 16,
      lineHeight: 1.65,
      color: 'var(--ink-900)'
    }
  }, quote), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 3
    },
    "aria-label": `${rating} out of 5 stars`
  }, Array.from({
    length: 5
  }).map((_, i) => /*#__PURE__*/React.createElement("svg", {
    key: i,
    width: "16",
    height: "16",
    viewBox: "0 0 24 24",
    fill: i < rating ? 'var(--gold-500)' : 'var(--gray-200)'
  }, /*#__PURE__*/React.createElement("path", {
    d: "M12 2l2.9 6.1 6.6.9-4.8 4.6 1.2 6.6L12 18.6 6.1 20.8l1.2-6.6L2.5 9l6.6-.9z"
  })))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 14,
      marginTop: 4
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: 44,
      height: 44,
      borderRadius: '50%',
      background: 'var(--navy-800)',
      color: 'var(--gold-300)',
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
      fontFamily: 'var(--font-display)',
      fontWeight: 700,
      fontSize: 18
    }
  }, initial), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 700,
      fontSize: 15,
      color: 'var(--ink-900)'
    }
  }, name), detail && /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-body)',
      fontSize: 13,
      color: 'var(--gray-600)'
    }
  }, detail))));
}
Object.assign(__ds_scope, { Testimonial });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/content/Testimonial.jsx", error: String((e && e.message) || e) }); }

// components/content/ValueItem.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Value item: outlined gold icon circle + gold caps title + one-line copy.
 * Used in the Values Row, separated by gold vertical dividers.
 */
function ValueItem({
  icon,
  title,
  children,
  onDark = true,
  style,
  ...rest
}) {
  return /*#__PURE__*/React.createElement("div", _extends({
    style: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      textAlign: 'center',
      gap: 16,
      padding: '0 20px',
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement(__ds_scope.IconCircle, {
    onDark: onDark,
    size: 72
  }, icon), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 700,
      fontSize: 16,
      letterSpacing: '0.1em',
      textTransform: 'uppercase',
      color: onDark ? 'var(--white)' : 'var(--ink-900)'
    }
  }, title), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0,
      fontFamily: 'var(--font-body)',
      fontSize: 15,
      lineHeight: 1.6,
      color: onDark ? 'rgba(255,255,255,0.72)' : 'var(--gray-600)',
      maxWidth: 240
    }
  }, children));
}
Object.assign(__ds_scope, { ValueItem });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/content/ValueItem.jsx", error: String((e && e.message) || e) }); }

// components/core/Badge.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Small caps badge/tag. Gold-outline, gold-solid, or navy. Caps + tracked.
 */
function Badge({
  children,
  variant = 'outline-gold',
  style,
  ...rest
}) {
  const variants = {
    'outline-gold': {
      background: 'transparent',
      color: 'var(--gold-700)',
      border: '1.5px solid var(--gold-500)'
    },
    'solid-gold': {
      background: 'var(--grad-gold)',
      color: 'var(--navy-900)',
      border: 'none'
    },
    navy: {
      background: 'var(--navy-800)',
      color: 'var(--white)',
      border: 'none'
    },
    'on-dark': {
      background: 'rgba(201,162,75,0.14)',
      color: 'var(--gold-300)',
      border: '1px solid rgba(201,162,75,0.4)'
    }
  };
  return /*#__PURE__*/React.createElement("span", _extends({
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 6,
      padding: '6px 12px',
      borderRadius: 'var(--radius-pill)',
      fontFamily: 'var(--font-display)',
      fontWeight: 700,
      fontSize: 12,
      letterSpacing: '0.08em',
      textTransform: 'uppercase',
      lineHeight: 1,
      ...variants[variant],
      ...style
    }
  }, rest), children);
}
Object.assign(__ds_scope, { Badge });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Badge.jsx", error: String((e && e.message) || e) }); }

// components/core/Button.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * SBHG Button.
 * Primary = gold gradient on navy text. Secondary outlines adapt to surface.
 */
function Button({
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
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 10,
    padding: pad,
    fontFamily: 'var(--font-display)',
    fontWeight: 700,
    fontSize,
    letterSpacing: 'var(--tracking-button)',
    textTransform: 'uppercase',
    borderRadius: 'var(--radius-input)',
    cursor: disabled ? 'not-allowed' : 'pointer',
    textDecoration: 'none',
    lineHeight: 1,
    whiteSpace: 'nowrap',
    border: '2px solid transparent',
    transition: 'background var(--transition-btn), border-color var(--transition-btn), color var(--transition-btn)',
    opacity: disabled ? 0.5 : 1,
    ...style
  };
  const variants = {
    primary: {
      background: 'var(--grad-gold)',
      color: 'var(--navy-900)',
      borderColor: 'transparent'
    },
    'secondary-dark': {
      background: 'transparent',
      color: 'var(--gold-300)',
      borderColor: 'var(--gold-500)'
    },
    'secondary-light': {
      background: 'transparent',
      color: 'var(--navy-900)',
      borderColor: 'var(--navy-800)'
    },
    ghost: {
      background: 'transparent',
      color: 'var(--gold-500)',
      borderColor: 'transparent',
      padding: size === 'lg' ? '16px 12px' : '13px 8px'
    }
  };
  const styles = {
    ...base,
    ...variants[variant]
  };
  const onEnter = e => {
    if (disabled) return;
    if (variant === 'primary') {
      e.currentTarget.style.background = 'var(--gold-300)';
    } else if (variant === 'secondary-dark') {
      e.currentTarget.style.background = 'var(--gold-500)';
      e.currentTarget.style.color = 'var(--navy-900)';
    } else if (variant === 'secondary-light') {
      e.currentTarget.style.background = 'var(--navy-800)';
      e.currentTarget.style.color = 'var(--white)';
    } else if (variant === 'ghost') {
      e.currentTarget.style.color = 'var(--gold-300)';
    }
  };
  const onLeave = e => {
    if (disabled) return;
    e.currentTarget.style.background = variants[variant].background;
    e.currentTarget.style.color = variants[variant].color;
  };
  const content = /*#__PURE__*/React.createElement(React.Fragment, null, iconLeft, children, iconRight);
  const shared = {
    style: styles,
    onMouseEnter: onEnter,
    onMouseLeave: onLeave,
    onClick: disabled ? undefined : onClick,
    ...rest
  };
  if (href && !disabled) {
    return /*#__PURE__*/React.createElement("a", _extends({
      href: href
    }, shared), content);
  }
  return /*#__PURE__*/React.createElement("button", _extends({
    type: type,
    disabled: disabled
  }, shared), content);
}
Object.assign(__ds_scope, { Button });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Button.jsx", error: String((e && e.message) || e) }); }

// components/core/Card.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Surface card. Light (white) or warm (cream) on light sections with the
 * single soft shadow; navy-800 on dark sections (no shadow on navy).
 */
function Card({
  children,
  surface = 'light',
  padding = 28,
  style,
  ...rest
}) {
  const surfaces = {
    light: {
      background: 'var(--white)',
      color: 'var(--gray-600)',
      boxShadow: 'var(--shadow-soft)',
      border: '1px solid var(--gray-200)'
    },
    warm: {
      background: 'var(--cream-50)',
      color: 'var(--gray-600)',
      boxShadow: 'var(--shadow-soft)',
      border: '1px solid var(--gray-200)'
    },
    dark: {
      background: 'var(--navy-800)',
      color: 'rgba(255,255,255,0.72)',
      boxShadow: 'none',
      border: '1px solid rgba(255,255,255,0.08)'
    }
  };
  return /*#__PURE__*/React.createElement("div", _extends({
    style: {
      borderRadius: 'var(--radius-card)',
      padding,
      ...surfaces[surface],
      ...style
    }
  }, rest), children);
}
Object.assign(__ds_scope, { Card });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Card.jsx", error: String((e && e.message) || e) }); }

// components/core/Eyebrow.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Gold caps label. Uppercase, letter-spaced, gold — never used for body.
 */
function Eyebrow({
  children,
  align = 'left',
  style,
  ...rest
}) {
  return /*#__PURE__*/React.createElement("p", _extends({
    style: {
      margin: 0,
      fontFamily: 'var(--font-display)',
      fontWeight: 600,
      fontSize: 'var(--eyebrow)',
      letterSpacing: 'var(--tracking-eyebrow)',
      textTransform: 'uppercase',
      color: 'var(--gold-500)',
      textAlign: align,
      ...style
    }
  }, rest), children);
}
Object.assign(__ds_scope, { Eyebrow });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Eyebrow.jsx", error: String((e && e.message) || e) }); }

// components/core/SectionHeading.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Section heading block: optional eyebrow + uppercase H2 + signature gold
 * underline rule. The recurring identity device on every section.
 */
function SectionHeading({
  eyebrow,
  children,
  as = 'h2',
  align = 'left',
  onDark = false,
  style,
  ...rest
}) {
  const Tag = as;
  return /*#__PURE__*/React.createElement("div", _extends({
    style: {
      textAlign: align,
      ...style
    }
  }, rest), eyebrow && /*#__PURE__*/React.createElement("p", {
    style: {
      margin: '0 0 14px',
      fontFamily: 'var(--font-display)',
      fontWeight: 600,
      fontSize: 'var(--eyebrow)',
      letterSpacing: 'var(--tracking-eyebrow)',
      textTransform: 'uppercase',
      color: 'var(--gold-500)'
    }
  }, eyebrow), /*#__PURE__*/React.createElement(Tag, {
    style: {
      margin: 0,
      fontFamily: 'var(--font-display)',
      fontWeight: 800,
      fontSize: 'var(--display-lg)',
      lineHeight: 'var(--lh-heading)',
      textTransform: 'uppercase',
      letterSpacing: 'var(--tracking-display)',
      color: onDark ? 'var(--white)' : 'var(--ink-900)'
    }
  }, children), /*#__PURE__*/React.createElement("span", {
    "aria-hidden": "true",
    style: {
      display: 'block',
      width: 'var(--rule-w)',
      height: 'var(--rule-h)',
      borderRadius: 2,
      background: 'var(--grad-gold)',
      marginTop: 18,
      marginInline: align === 'center' ? 'auto' : 0
    }
  }));
}
Object.assign(__ds_scope, { SectionHeading });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/SectionHeading.jsx", error: String((e && e.message) || e) }); }

// components/forms/Input.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Text input with label + optional helper. Adapts to dark (verify form,
 * white fields on navy) or light surfaces.
 */
function Input({
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
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 8,
      width: '100%'
    }
  }, label && /*#__PURE__*/React.createElement("label", {
    htmlFor: inputId,
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 600,
      fontSize: 13,
      letterSpacing: '0.04em',
      textTransform: 'uppercase',
      color: onDark ? 'var(--white)' : 'var(--ink-900)'
    }
  }, label, required && /*#__PURE__*/React.createElement("span", {
    style: {
      color: 'var(--gold-500)'
    }
  }, " *")), /*#__PURE__*/React.createElement("input", _extends({
    id: inputId,
    type: type,
    required: required,
    style: {
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
      ...style
    },
    onFocus: e => {
      e.target.style.borderColor = 'var(--gold-500)';
      e.target.style.boxShadow = '0 0 0 3px rgba(201,162,75,0.18)';
    },
    onBlur: e => {
      e.target.style.borderColor = 'var(--gray-200)';
      e.target.style.boxShadow = 'none';
    }
  }, rest)), helper && /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0,
      fontFamily: 'var(--font-body)',
      fontSize: 13,
      color: onDark ? 'rgba(255,255,255,0.6)' : 'var(--gray-600)'
    }
  }, helper));
}
Object.assign(__ds_scope, { Input });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Input.jsx", error: String((e && e.message) || e) }); }

// components/forms/Select.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Labeled select. Matches Input styling — white field, 8px radius.
 */
function Select({
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
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 8,
      width: '100%'
    }
  }, label && /*#__PURE__*/React.createElement("label", {
    htmlFor: selId,
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 600,
      fontSize: 13,
      letterSpacing: '0.04em',
      textTransform: 'uppercase',
      color: onDark ? 'var(--white)' : 'var(--ink-900)'
    }
  }, label, required && /*#__PURE__*/React.createElement("span", {
    style: {
      color: 'var(--gold-500)'
    }
  }, " *")), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative'
    }
  }, /*#__PURE__*/React.createElement("select", _extends({
    id: selId,
    required: required,
    defaultValue: "",
    style: {
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
      ...style
    },
    onFocus: e => {
      e.target.style.borderColor = 'var(--gold-500)';
      e.target.style.boxShadow = '0 0 0 3px rgba(201,162,75,0.18)';
    },
    onBlur: e => {
      e.target.style.borderColor = 'var(--gray-200)';
      e.target.style.boxShadow = 'none';
    }
  }, rest), placeholder && /*#__PURE__*/React.createElement("option", {
    value: "",
    disabled: true
  }, placeholder), options.map(o => {
    const val = typeof o === 'string' ? o : o.value;
    const lab = typeof o === 'string' ? o : o.label;
    return /*#__PURE__*/React.createElement("option", {
      key: val,
      value: val
    }, lab);
  })), /*#__PURE__*/React.createElement("span", {
    "aria-hidden": "true",
    style: {
      position: 'absolute',
      right: 16,
      top: '50%',
      transform: 'translateY(-50%)',
      width: 8,
      height: 8,
      borderRight: '2px solid var(--gold-700)',
      borderBottom: '2px solid var(--gold-700)',
      rotate: '45deg',
      pointerEvents: 'none',
      marginTop: -2
    }
  })));
}
Object.assign(__ds_scope, { Select });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Select.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/Home.jsx
try { (() => {
/* global React, UtilityBar, Header, Hero, StatBand, IntroBlock, SplitFeature, CtaBand, ValuesRow, Testimonials, Programs, InsuranceWall, VerifyForm, Footer, Ico */

function HomePage() {
  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(UtilityBar, null), /*#__PURE__*/React.createElement(Header, null), /*#__PURE__*/React.createElement(Hero, null), /*#__PURE__*/React.createElement(StatBand, null), /*#__PURE__*/React.createElement(IntroBlock, null), /*#__PURE__*/React.createElement(SplitFeature, {
    eyebrow: "Mental Health",
    title: "Care for the whole you",
    body: "Anxiety, depression, trauma \u2014 whatever brought you here, you'll find a team that treats the person, not just the diagnosis. Together we build a plan rooted in your goals.",
    bullets: ["Individual & group therapy", "Trauma-informed clinicians", "Psychiatry & medication management"],
    cta: "Explore Mental Health",
    tone: "calm",
    bg: "var(--cream-50)"
  }), /*#__PURE__*/React.createElement(CtaBand, null), /*#__PURE__*/React.createElement(SplitFeature, {
    eyebrow: "Substance Abuse",
    title: "Recovery on your terms",
    body: "From detox through aftercare, our continuum meets you wherever you are. No judgment, no shortcuts \u2014 just steady, evidence-based support toward a life you choose.",
    bullets: ["Medically supported detox", "Relapse-prevention skills", "Lifelong alumni community"],
    cta: "Explore Substance Abuse",
    tone: "canyon",
    flip: true,
    bg: "var(--white)"
  }), /*#__PURE__*/React.createElement(ValuesRow, null), /*#__PURE__*/React.createElement(Testimonials, null), /*#__PURE__*/React.createElement(Programs, null), /*#__PURE__*/React.createElement(InsuranceWall, null), /*#__PURE__*/React.createElement(VerifyForm, null), /*#__PURE__*/React.createElement(Footer, null));
}
window.HomePage = HomePage;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/Home.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/sections.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/* global React */
const {
  useState
} = React;
const DS = window.DesignSystem_8429f7;
const {
  Button,
  SectionHeading,
  Badge,
  Input,
  Select,
  BadgeMark,
  NotchBand,
  IconCircle,
  StatBlock,
  ValueItem,
  Testimonial,
  ProgramCard
} = DS;
const MARK = '../../assets/badge-mark.png';
const Ico = ({
  name,
  size = 24,
  c,
  sw = 1.6
}) => React.createElement('i', {
  'data-lucide': name,
  style: {
    width: size,
    height: size,
    color: c,
    strokeWidth: sw,
    display: 'inline-flex'
  }
});

/* Warm desert-Southwest placeholder "photo" */
function Photo({
  h = 'auto',
  ratio = '4 / 3',
  tone = 'dusk',
  label,
  style
}) {
  const tones = {
    dusk: 'linear-gradient(150deg, #E8C89A 0%, #C98B5C 38%, #7E5A52 64%, #2C3A57 100%)',
    sand: 'linear-gradient(150deg, #F0DEC2 0%, #D9B889 45%, #B6885A 100%)',
    canyon: 'linear-gradient(150deg, #E5B98C 0%, #B5663F 50%, #5E3E47 100%)',
    calm: 'linear-gradient(150deg, #CBB68C 0%, #8A7E76 45%, #3A4763 100%)'
  };
  return /*#__PURE__*/React.createElement("div", {
    style: {
      width: '100%',
      height: h,
      aspectRatio: h === 'auto' ? ratio : 'auto',
      borderRadius: 'inherit',
      background: tones[tone] || tones.dusk,
      position: 'relative',
      overflow: 'hidden',
      ...style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      inset: 0,
      background: 'radial-gradient(120% 80% at 80% 10%, rgba(255,255,255,.18), transparent 60%)'
    }
  }), label && /*#__PURE__*/React.createElement("span", {
    style: {
      position: 'absolute',
      left: 14,
      bottom: 12,
      fontFamily: 'var(--font-display)',
      fontSize: 10,
      letterSpacing: '.14em',
      textTransform: 'uppercase',
      color: 'rgba(255,255,255,.85)'
    }
  }, label));
}

/* ---------------- Utility Bar ---------------- */
function UtilityBar() {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      background: 'var(--navy-900)',
      height: 44,
      display: 'flex',
      alignItems: 'center'
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "sbhg-container",
    style: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      width: '100%'
    }
  }, /*#__PURE__*/React.createElement("a", {
    href: "tel:+10000000000",
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 9,
      color: 'var(--gold-300)',
      textDecoration: 'none',
      fontFamily: 'var(--font-display)',
      fontWeight: 700,
      fontSize: 13,
      letterSpacing: '.06em',
      textTransform: 'uppercase'
    }
  }, /*#__PURE__*/React.createElement(Ico, {
    name: "phone-call",
    size: 15,
    c: "var(--gold-300)"
  }), " Get Help Today \xB7 (480) 555\u20110100"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 16
    }
  }, ['facebook', 'instagram', 'linkedin'].map(s => /*#__PURE__*/React.createElement("a", {
    key: s,
    href: "#",
    "aria-label": s,
    style: {
      color: 'var(--gold-300)',
      display: 'inline-flex'
    }
  }, /*#__PURE__*/React.createElement(Ico, {
    name: s,
    size: 16,
    c: "var(--gold-300)"
  }))))));
}

/* ---------------- Header / Nav ---------------- */
function Header() {
  const [open, setOpen] = useState(null);
  const nav = [{
    label: 'Substance Abuse',
    items: ['Alcohol', 'Opioids', 'Stimulants', 'Detox & Withdrawal']
  }, {
    label: 'Mental Health',
    items: ['Anxiety', 'Depression', 'Trauma & PTSD', 'Mood Disorders']
  }, {
    label: 'Dual Diagnosis',
    items: []
  }, {
    label: 'Our Team',
    items: []
  }, {
    label: 'Articles',
    items: []
  }, {
    label: 'Contact',
    items: []
  }];
  return /*#__PURE__*/React.createElement("header", {
    style: {
      position: 'sticky',
      top: 0,
      zIndex: 40,
      background: 'var(--navy-800)',
      height: 80,
      display: 'flex',
      alignItems: 'center',
      borderBottom: '1px solid rgba(255,255,255,.06)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "sbhg-container",
    style: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      width: '100%'
    }
  }, /*#__PURE__*/React.createElement(BadgeMark, {
    markSrc: MARK,
    size: 42
  }), /*#__PURE__*/React.createElement("nav", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 4
    }
  }, nav.map(n => /*#__PURE__*/React.createElement("div", {
    key: n.label,
    style: {
      position: 'relative'
    },
    onMouseEnter: () => setOpen(n.items.length ? n.label : null),
    onMouseLeave: () => setOpen(null)
  }, /*#__PURE__*/React.createElement("button", {
    style: {
      background: 'none',
      border: 'none',
      cursor: 'pointer',
      color: 'var(--white)',
      fontFamily: 'var(--font-display)',
      fontWeight: 600,
      fontSize: 14,
      letterSpacing: '.03em',
      padding: '10px 14px',
      display: 'inline-flex',
      alignItems: 'center',
      gap: 6
    }
  }, n.label, n.items.length > 0 && /*#__PURE__*/React.createElement(Ico, {
    name: "chevron-down",
    size: 15,
    c: "var(--gold-300)"
  })), open === n.label && n.items.length > 0 && /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      top: '100%',
      left: 0,
      minWidth: 220,
      background: 'var(--navy-700)',
      borderRadius: 12,
      padding: 8,
      boxShadow: '0 18px 40px rgba(0,0,0,.35)',
      border: '1px solid rgba(201,162,75,.2)'
    }
  }, n.items.map(it => /*#__PURE__*/React.createElement("a", {
    key: it,
    href: "#",
    style: {
      display: 'block',
      padding: '10px 14px',
      color: 'var(--white)',
      textDecoration: 'none',
      fontFamily: 'var(--font-body)',
      fontSize: 15,
      borderRadius: 8,
      borderLeft: '2px solid transparent'
    },
    onMouseEnter: e => {
      e.currentTarget.style.borderLeftColor = 'var(--gold-500)';
      e.currentTarget.style.background = 'rgba(255,255,255,.04)';
    },
    onMouseLeave: e => {
      e.currentTarget.style.borderLeftColor = 'transparent';
      e.currentTarget.style.background = 'transparent';
    }
  }, it)))))), /*#__PURE__*/React.createElement(Button, {
    variant: "primary",
    size: "sm",
    href: "#verify"
  }, "Verify Insurance")));
}

/* ---------------- Hero ---------------- */
function Hero() {
  return /*#__PURE__*/React.createElement("section", {
    style: {
      position: 'relative',
      background: 'linear-gradient(150deg, #6E5638 0%, #3C3A44 45%, #0E1B33 100%)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      inset: 0,
      background: 'var(--grad-navy-fade)'
    }
  }), /*#__PURE__*/React.createElement("div", {
    className: "sbhg-container",
    style: {
      position: 'relative',
      padding: '110px 24px 130px',
      textAlign: 'center',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      gap: 26
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: MARK,
    width: 84,
    height: 84,
    alt: ""
  }), /*#__PURE__*/React.createElement("h1", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 800,
      fontSize: 'var(--display-xl)',
      lineHeight: 1.08,
      textTransform: 'uppercase',
      letterSpacing: '.04em',
      color: 'var(--white)',
      maxWidth: 760,
      margin: 0
    }
  }, "Your path to lasting recovery starts here"), /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: 'var(--font-body)',
      fontSize: 'var(--body-lg)',
      lineHeight: 1.6,
      color: 'rgba(255,255,255,.82)',
      maxWidth: 560,
      margin: 0
    }
  }, "Compassionate, evidence-based behavioral health care in the heart of Scottsdale \u2014 built entirely around you."), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 16,
      flexWrap: 'wrap',
      justifyContent: 'center',
      marginTop: 6
    }
  }, /*#__PURE__*/React.createElement(Button, {
    variant: "primary",
    size: "lg",
    href: "#verify"
  }, "Verify Insurance"), /*#__PURE__*/React.createElement(Button, {
    variant: "secondary-dark",
    size: "lg",
    href: "tel:+10000000000",
    iconLeft: /*#__PURE__*/React.createElement(Ico, {
      name: "phone",
      size: 18,
      c: "currentColor"
    })
  }, "Call Now"))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      bottom: -1,
      left: 0,
      right: 0
    }
  }, /*#__PURE__*/React.createElement(NotchBand, {
    height: 42
  })));
}

/* ---------------- Stat Band ---------------- */
function StatBand() {
  return /*#__PURE__*/React.createElement("section", {
    style: {
      background: 'var(--navy-900)',
      padding: '76px 0'
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "sbhg-container",
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(3, 1fr)',
      gap: 0,
      alignItems: 'center'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      padding: '0 36px'
    }
  }, /*#__PURE__*/React.createElement(StatBlock, {
    value: "1 in 5",
    statement: "U.S. adults experience mental illness in a given year.",
    source: "Source: NIMH, 2023"
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: '0 36px',
      borderLeft: '1px solid rgba(201,162,75,.35)',
      borderRight: '1px solid rgba(201,162,75,.35)'
    }
  }, /*#__PURE__*/React.createElement(StatBlock, {
    value: "48.7M",
    statement: "Americans lived with a substance use disorder last year.",
    source: "Source: SAMHSA NSDUH, 2022"
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: '0 36px'
    }
  }, /*#__PURE__*/React.createElement(StatBlock, {
    value: "24/7",
    statement: "Admissions support \u2014 there is no wrong time to reach out.",
    source: "Confidential & always available"
  }))));
}

/* ---------------- Intro Block ---------------- */
function IntroBlock() {
  return /*#__PURE__*/React.createElement("section", {
    className: "sbhg-section",
    style: {
      background: 'var(--white)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "sbhg-container",
    style: {
      maxWidth: 820,
      textAlign: 'center',
      margin: '0 auto',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      gap: 24
    }
  }, /*#__PURE__*/React.createElement(SectionHeading, {
    eyebrow: "Why Scottsdale",
    align: "center"
  }, "A higher standard of care"), /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: 'var(--font-body)',
      fontSize: 'var(--body-lg)',
      lineHeight: 1.7,
      color: 'var(--gray-600)',
      margin: 0
    }
  }, "You deserve more than a program \u2014 you deserve a team that sees you. We pair clinical excellence with genuine warmth, so every step of your recovery feels supported, dignified, and entirely your own."), /*#__PURE__*/React.createElement("a", {
    href: "tel:+10000000000",
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 12,
      fontFamily: 'var(--font-display)',
      fontWeight: 800,
      fontSize: 26,
      color: 'var(--navy-800)',
      textDecoration: 'none'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: 44,
      height: 44,
      borderRadius: '50%',
      border: '1.5px solid var(--gold-500)',
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
      color: 'var(--gold-700)'
    }
  }, /*#__PURE__*/React.createElement(Ico, {
    name: "phone",
    size: 20,
    c: "var(--gold-700)"
  })), "(480) 555\u20110100")));
}

/* ---------------- Split Feature ---------------- */
function SplitFeature({
  eyebrow,
  title,
  body,
  bullets,
  cta,
  tone,
  flip = false,
  bg = 'var(--cream-50)'
}) {
  const text = /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 22,
      justifyContent: 'center'
    }
  }, /*#__PURE__*/React.createElement(SectionHeading, {
    eyebrow: eyebrow
  }, title), /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: 'var(--font-body)',
      fontSize: 'var(--body-lg)',
      lineHeight: 1.7,
      color: 'var(--gray-600)',
      margin: 0
    }
  }, body), /*#__PURE__*/React.createElement("ul", {
    style: {
      listStyle: 'none',
      padding: 0,
      margin: 0,
      display: 'flex',
      flexDirection: 'column',
      gap: 12
    }
  }, bullets.map(b => /*#__PURE__*/React.createElement("li", {
    key: b,
    style: {
      display: 'flex',
      gap: 12,
      alignItems: 'flex-start',
      fontFamily: 'var(--font-body)',
      fontSize: 16,
      color: 'var(--gray-600)'
    }
  }, /*#__PURE__*/React.createElement(Ico, {
    name: "check",
    size: 20,
    c: "var(--gold-700)",
    sw: 2.2
  }), " ", b))), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(Button, {
    variant: "secondary-light"
  }, cta)));
  const photo = /*#__PURE__*/React.createElement("div", {
    className: "sbhg-keyline",
    style: {
      alignSelf: 'center'
    }
  }, /*#__PURE__*/React.createElement(Photo, {
    h: 420,
    tone: tone,
    label: "Original photography",
    style: {
      borderRadius: 17
    }
  }));
  return /*#__PURE__*/React.createElement("section", {
    className: "sbhg-section",
    style: {
      background: bg
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "sbhg-container",
    style: {
      display: 'grid',
      gridTemplateColumns: '1fr 1fr',
      gap: 64,
      alignItems: 'stretch'
    }
  }, flip ? /*#__PURE__*/React.createElement(React.Fragment, null, photo, text) : /*#__PURE__*/React.createElement(React.Fragment, null, text, photo)));
}

/* ---------------- CTA Band ---------------- */
function CtaBand() {
  return /*#__PURE__*/React.createElement("section", {
    style: {
      position: 'relative',
      background: 'var(--navy-800)',
      padding: '96px 0',
      overflow: 'hidden'
    }
  }, /*#__PURE__*/React.createElement("div", {
    "aria-hidden": "true",
    style: {
      position: 'absolute',
      right: -80,
      top: '50%',
      transform: 'translateY(-50%)',
      width: 320,
      height: 320,
      opacity: 0.07
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      left: '50%',
      top: 0,
      transform: 'translateX(-50%)',
      width: 104,
      height: 320,
      background: 'var(--white)',
      borderRadius: 16
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      top: '50%',
      left: 0,
      transform: 'translateY(-50%)',
      width: 320,
      height: 104,
      background: 'var(--white)',
      borderRadius: 16
    }
  })), /*#__PURE__*/React.createElement("div", {
    className: "sbhg-container",
    style: {
      position: 'relative',
      textAlign: 'center',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      gap: 24
    }
  }, /*#__PURE__*/React.createElement(SectionHeading, {
    eyebrow: "You don't have to wait",
    align: "center",
    onDark: true
  }, "Reach out today \u2014 we'll take it from here"), /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: 'var(--font-body)',
      fontSize: 'var(--body-lg)',
      color: 'rgba(255,255,255,.78)',
      maxWidth: 560,
      margin: 0
    }
  }, "One conversation is all it takes to begin. Our admissions team is standing by, ready to listen."), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 16,
      flexWrap: 'wrap',
      justifyContent: 'center',
      marginTop: 6
    }
  }, /*#__PURE__*/React.createElement(Button, {
    variant: "primary",
    size: "lg",
    href: "#verify"
  }, "Verify Insurance"), /*#__PURE__*/React.createElement(Button, {
    variant: "secondary-dark",
    size: "lg",
    href: "tel:+10000000000"
  }, "Call (480) 555-0100"))));
}

/* ---------------- Values Row ---------------- */
function ValuesRow() {
  return /*#__PURE__*/React.createElement("section", {
    style: {
      background: 'var(--navy-900)',
      padding: '80px 0'
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "sbhg-container",
    style: {
      display: 'flex',
      alignItems: 'stretch',
      justifyContent: 'center',
      gap: 0
    }
  }, /*#__PURE__*/React.createElement(ValueItem, {
    icon: /*#__PURE__*/React.createElement(Ico, {
      name: "shield-check",
      size: 30,
      c: "var(--gold-300)"
    }),
    title: "Integrity"
  }, "We do the right thing, even when no one is watching."), /*#__PURE__*/React.createElement("div", {
    className: "sbhg-vrule"
  }), /*#__PURE__*/React.createElement(ValueItem, {
    icon: /*#__PURE__*/React.createElement(Ico, {
      name: "heart-handshake",
      size: 30,
      c: "var(--gold-300)"
    }),
    title: "Compassion"
  }, "We care deeply about every person who walks through our doors."), /*#__PURE__*/React.createElement("div", {
    className: "sbhg-vrule"
  }), /*#__PURE__*/React.createElement(ValueItem, {
    icon: /*#__PURE__*/React.createElement(Ico, {
      name: "award",
      size: 30,
      c: "var(--gold-300)"
    }),
    title: "Excellence"
  }, "We strive for better, every single day.")));
}

/* ---------------- Testimonials ---------------- */
function Testimonials() {
  const data = [{
    name: 'Marcus R.',
    detail: 'Alumni, 2024',
    quote: 'The team met me exactly where I was. For the first time in years, I felt genuinely heard — not like a case number.'
  }, {
    name: 'Dana W.',
    detail: 'Family member',
    quote: 'They guided our whole family with patience and honesty. The communication never stopped, and neither did their care.'
  }, {
    name: 'Theo L.',
    detail: 'Alumni, 2023',
    quote: 'Calm, dignified, and deeply human. I left with real tools and a community that still checks in on me.'
  }];
  return /*#__PURE__*/React.createElement("section", {
    style: {
      background: 'var(--navy-900)',
      padding: '20px 0 96px'
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "sbhg-container"
  }, /*#__PURE__*/React.createElement(SectionHeading, {
    eyebrow: "In their words",
    align: "center",
    onDark: true
  }, "Stories of recovery"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(3, 1fr)',
      gap: 24,
      marginTop: 44
    }
  }, data.map(d => /*#__PURE__*/React.createElement(Testimonial, _extends({
    key: d.name
  }, d, {
    rating: 5
  }))))));
}

/* ---------------- Program Cards ---------------- */
function Programs() {
  const progs = [{
    badge: 'PHP',
    title: 'Partial Hospitalization',
    icon: 'sun',
    body: 'Structured daytime treatment with the comfort of returning home each evening.'
  }, {
    badge: 'IOP',
    title: 'Intensive Outpatient',
    icon: 'calendar-clock',
    body: 'Flexible sessions that fit around work, school, and family life.'
  }, {
    badge: 'OP',
    title: 'Outpatient',
    icon: 'users',
    body: 'Ongoing therapy and support as you build lasting momentum in recovery.'
  }, {
    badge: 'E-IOP',
    title: 'Virtual IOP',
    icon: 'monitor',
    body: 'The same evidence-based care, delivered securely from wherever you are.'
  }];
  return /*#__PURE__*/React.createElement("section", {
    className: "sbhg-section",
    style: {
      background: 'var(--cream-50)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "sbhg-container"
  }, /*#__PURE__*/React.createElement(SectionHeading, {
    eyebrow: "Levels of care",
    align: "center"
  }, "Programs built around your life"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: '1fr 1fr',
      gap: 24,
      marginTop: 44
    }
  }, progs.map(p => /*#__PURE__*/React.createElement(ProgramCard, {
    key: p.badge,
    badge: p.badge,
    title: p.title,
    href: "#",
    icon: /*#__PURE__*/React.createElement(Ico, {
      name: p.icon,
      size: 28,
      c: "var(--gold-700)"
    })
  }, p.body))), /*#__PURE__*/React.createElement("p", {
    style: {
      textAlign: 'center',
      marginTop: 22,
      fontFamily: 'var(--font-body)',
      fontSize: 13,
      color: 'var(--gray-600)'
    }
  }, "[NEEDS-CLIENT] Confirm SBHG's actual levels of care before launch.")));
}

/* ---------------- Insurance Wall ---------------- */
function InsuranceWall() {
  const payers = ['Aetna', 'Cigna', 'BlueCross', 'United', 'Humana', 'Anthem'];
  return /*#__PURE__*/React.createElement("section", {
    className: "sbhg-section",
    style: {
      background: 'var(--white)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "sbhg-container",
    style: {
      textAlign: 'center'
    }
  }, /*#__PURE__*/React.createElement(SectionHeading, {
    eyebrow: "Coverage",
    align: "center"
  }, "Most major insurance accepted"), /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: 'var(--font-body)',
      fontSize: 'var(--body-lg)',
      color: 'var(--gray-600)',
      maxWidth: 580,
      margin: '20px auto 0'
    }
  }, "We'll handle the paperwork. Verify your benefits in minutes \u2014 confidentially and with no obligation."), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(6, 1fr)',
      gap: 20,
      marginTop: 48,
      alignItems: 'center'
    }
  }, payers.map(p => /*#__PURE__*/React.createElement("div", {
    key: p,
    style: {
      height: 64,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      background: 'var(--cream-50)',
      borderRadius: 12,
      border: '1px solid var(--gray-200)',
      fontFamily: 'var(--font-display)',
      fontWeight: 700,
      letterSpacing: '.02em',
      color: '#9aa1ad',
      filter: 'grayscale(1)',
      fontSize: 15
    }
  }, p))), /*#__PURE__*/React.createElement("p", {
    style: {
      marginTop: 22,
      fontFamily: 'var(--font-body)',
      fontSize: 13,
      color: 'var(--gray-600)'
    }
  }, "[NEEDS-CLIENT] Display only payers SBHG actually accepts.")));
}

/* ---------------- Verify Form ---------------- */
function VerifyForm() {
  const [sent, setSent] = useState(false);
  return /*#__PURE__*/React.createElement("section", {
    id: "verify",
    style: {
      background: 'var(--navy-900)',
      padding: '96px 0'
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "sbhg-container",
    style: {
      display: 'grid',
      gridTemplateColumns: '0.9fr 1.1fr',
      gap: 64,
      alignItems: 'center'
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(SectionHeading, {
    eyebrow: "No obligation",
    onDark: true
  }, "Verify your insurance"), /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: 'var(--font-body)',
      fontSize: 'var(--body-lg)',
      color: 'rgba(255,255,255,.78)',
      lineHeight: 1.7,
      marginTop: 20
    }
  }, "Share a few details and our admissions team will confirm your benefits \u2014 usually within one business day. Confidential, always."), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 10,
      marginTop: 24,
      color: 'var(--gold-300)',
      alignItems: 'center',
      fontFamily: 'var(--font-display)',
      fontWeight: 700,
      fontSize: 13,
      letterSpacing: '.06em',
      textTransform: 'uppercase'
    }
  }, /*#__PURE__*/React.createElement(Ico, {
    name: "lock",
    size: 16,
    c: "var(--gold-300)"
  }), " HIPAA-compliant & secure")), /*#__PURE__*/React.createElement("div", {
    style: {
      background: 'var(--navy-800)',
      borderRadius: 'var(--radius-card)',
      padding: 36,
      border: '1px solid rgba(201,162,75,.18)'
    }
  }, sent ? /*#__PURE__*/React.createElement("div", {
    style: {
      textAlign: 'center',
      padding: '40px 0',
      color: 'var(--white)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'inline-flex',
      marginBottom: 16
    }
  }, /*#__PURE__*/React.createElement(IconCircle, {
    size: 64
  }, /*#__PURE__*/React.createElement(Ico, {
    name: "check",
    size: 28,
    c: "var(--gold-300)",
    sw: 2.4
  }))), /*#__PURE__*/React.createElement("h3", {
    style: {
      fontFamily: 'var(--font-display)',
      textTransform: 'uppercase',
      letterSpacing: '.04em',
      color: 'var(--white)',
      margin: '0 0 8px'
    }
  }, "Thank you"), /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: 'var(--font-body)',
      color: 'rgba(255,255,255,.75)',
      margin: 0
    }
  }, "We'll be in touch within one business day.")) : /*#__PURE__*/React.createElement("form", {
    onSubmit: e => {
      e.preventDefault();
      setSent(true);
    },
    style: {
      display: 'grid',
      gridTemplateColumns: '1fr 1fr',
      gap: 18
    }
  }, /*#__PURE__*/React.createElement(Input, {
    label: "Full Name",
    placeholder: "Jane Doe",
    required: true,
    onDark: true
  }), /*#__PURE__*/React.createElement(Input, {
    label: "Phone",
    type: "tel",
    placeholder: "(480) 555-0102",
    required: true,
    onDark: true
  }), /*#__PURE__*/React.createElement(Input, {
    label: "Email",
    type: "email",
    placeholder: "jane@email.com",
    onDark: true
  }), /*#__PURE__*/React.createElement(Input, {
    label: "Date of Birth",
    type: "text",
    placeholder: "MM / DD / YYYY",
    onDark: true
  }), /*#__PURE__*/React.createElement(Select, {
    label: "Insurance Provider",
    placeholder: "Select provider",
    options: ['Aetna', 'Cigna', 'BlueCross BlueShield', 'UnitedHealthcare', 'Humana', 'Other'],
    onDark: true,
    required: true
  }), /*#__PURE__*/React.createElement(Input, {
    label: "Member ID",
    placeholder: "XYZ123456",
    onDark: true
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      gridColumn: '1 / -1'
    }
  }, /*#__PURE__*/React.createElement(Input, {
    label: "Anything we should know?",
    placeholder: "Optional message",
    onDark: true
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      gridColumn: '1 / -1',
      marginTop: 4
    }
  }, /*#__PURE__*/React.createElement(Button, {
    variant: "primary",
    size: "lg",
    type: "submit",
    style: {
      width: '100%'
    }
  }, "Verify My Benefits")), /*#__PURE__*/React.createElement("p", {
    style: {
      gridColumn: '1 / -1',
      margin: 0,
      fontFamily: 'var(--font-body)',
      fontSize: 12.5,
      color: 'rgba(255,255,255,.55)',
      lineHeight: 1.5
    }
  }, "By submitting, you agree to be contacted about treatment. Your information is protected under HIPAA and never sold.")))));
}

/* ---------------- Footer ---------------- */
function Footer() {
  const cols = [{
    h: 'Programs',
    links: ['Substance Abuse', 'Mental Health', 'Dual Diagnosis', 'Levels of Care']
  }, {
    h: 'Explore',
    links: ['Our Team', 'Articles', 'Verify Insurance', 'Contact']
  }, {
    h: 'Contact',
    links: ['[NEEDS-CLIENT] Address', '(480) 555-0100', 'admissions@scottsdalebh.com']
  }];
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("footer", {
    style: {
      background: 'var(--navy-900)',
      padding: '72px 0 40px'
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "sbhg-container",
    style: {
      display: 'grid',
      gridTemplateColumns: '1.4fr 1fr 1fr 1fr',
      gap: 40
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(BadgeMark, {
    markSrc: MARK,
    size: 44
  }), /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: 'var(--font-body)',
      fontSize: 15,
      color: 'rgba(255,255,255,.7)',
      lineHeight: 1.7,
      marginTop: 18,
      maxWidth: 280
    }
  }, "Transforming lives through compassionate care and lasting recovery."), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 10,
      marginTop: 20
    }
  }, ['Joint Commission', 'LegitScript', 'AZDHS'].map(b => /*#__PURE__*/React.createElement("span", {
    key: b,
    style: {
      fontFamily: 'var(--font-display)',
      fontSize: 10,
      letterSpacing: '.08em',
      textTransform: 'uppercase',
      color: 'var(--gold-300)',
      border: '1px solid rgba(201,162,75,.4)',
      borderRadius: 6,
      padding: '6px 9px'
    }
  }, b)))), cols.map(c => /*#__PURE__*/React.createElement("div", {
    key: c.h
  }, /*#__PURE__*/React.createElement("h4", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 700,
      fontSize: 13,
      letterSpacing: '.1em',
      textTransform: 'uppercase',
      color: 'var(--gold-300)',
      margin: '0 0 18px'
    }
  }, c.h), /*#__PURE__*/React.createElement("ul", {
    style: {
      listStyle: 'none',
      padding: 0,
      margin: 0,
      display: 'flex',
      flexDirection: 'column',
      gap: 11
    }
  }, c.links.map(l => /*#__PURE__*/React.createElement("li", {
    key: l
  }, /*#__PURE__*/React.createElement("a", {
    href: "#",
    style: {
      fontFamily: 'var(--font-body)',
      fontSize: 14.5,
      color: 'rgba(255,255,255,.72)',
      textDecoration: 'none'
    }
  }, l))))))), /*#__PURE__*/React.createElement("div", {
    className: "sbhg-container",
    style: {
      borderTop: '1px solid rgba(255,255,255,.08)',
      marginTop: 48,
      paddingTop: 24,
      display: 'flex',
      justifyContent: 'space-between',
      flexWrap: 'wrap',
      gap: 12
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-body)',
      fontSize: 12.5,
      color: 'rgba(255,255,255,.5)'
    }
  }, "\xA9 2026 Scottsdale Behavioral Health Group. AZDHS License #[NEEDS-CLIENT]."), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-body)',
      fontSize: 12.5,
      color: 'rgba(255,255,255,.5)'
    }
  }, "Privacy Policy \xB7 Terms \xB7 Accessibility"))), /*#__PURE__*/React.createElement(NotchBand, {
    height: 26,
    direction: "up"
  }));
}

/* ---------------- Interior Hero (short navy hero) ---------------- */
function InteriorHero({
  title,
  crumb
}) {
  return /*#__PURE__*/React.createElement("section", {
    style: {
      position: 'relative',
      background: 'linear-gradient(150deg, #4A4030 0%, #2A3147 55%, #0E1B33 100%)',
      overflow: 'hidden'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      inset: 0,
      background: 'var(--grad-navy-fade)'
    }
  }), /*#__PURE__*/React.createElement("div", {
    "aria-hidden": "true",
    style: {
      position: 'absolute',
      right: -70,
      top: '50%',
      transform: 'translateY(-50%)',
      width: 280,
      height: 280,
      opacity: 0.06
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      left: '50%',
      top: 0,
      transform: 'translateX(-50%)',
      width: 92,
      height: 280,
      background: 'var(--white)',
      borderRadius: 14
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      top: '50%',
      left: 0,
      transform: 'translateY(-50%)',
      width: 280,
      height: 92,
      background: 'var(--white)',
      borderRadius: 14
    }
  })), /*#__PURE__*/React.createElement("div", {
    className: "sbhg-container",
    style: {
      position: 'relative',
      padding: '64px 24px 72px',
      display: 'flex',
      flexDirection: 'column',
      gap: 16
    }
  }, /*#__PURE__*/React.createElement("nav", {
    style: {
      display: 'flex',
      gap: 8,
      alignItems: 'center',
      fontFamily: 'var(--font-display)',
      fontWeight: 600,
      fontSize: 12,
      letterSpacing: '.08em',
      textTransform: 'uppercase',
      color: 'rgba(255,255,255,.6)'
    }
  }, /*#__PURE__*/React.createElement("a", {
    href: "index.html",
    style: {
      color: 'var(--gold-300)',
      textDecoration: 'none'
    }
  }, "Home"), /*#__PURE__*/React.createElement(Ico, {
    name: "chevron-right",
    size: 13,
    c: "rgba(255,255,255,.4)"
  }), /*#__PURE__*/React.createElement("span", null, crumb)), /*#__PURE__*/React.createElement("h1", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 800,
      fontSize: 'var(--display-lg)',
      textTransform: 'uppercase',
      letterSpacing: '.04em',
      color: 'var(--white)',
      margin: 0
    }
  }, title), /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'block',
      width: 64,
      height: 3,
      borderRadius: 2,
      background: 'var(--grad-gold)'
    }
  })));
}

/* ---------------- Contact Section (info + form) ---------------- */
function ContactSection() {
  const [sent, setSent] = useState(false);
  const rows = [{
    icon: 'map-pin',
    label: 'Visit',
    value: '[NEEDS-CLIENT] Scottsdale, Arizona'
  }, {
    icon: 'phone',
    label: 'Call',
    value: '(480) 555-0100'
  }, {
    icon: 'mail',
    label: 'Email',
    value: 'admissions@scottsdalebh.com'
  }, {
    icon: 'clock',
    label: 'Hours',
    value: 'Admissions support, 24 / 7'
  }];
  return /*#__PURE__*/React.createElement("section", {
    className: "sbhg-section",
    style: {
      background: 'var(--white)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "sbhg-container",
    style: {
      display: 'grid',
      gridTemplateColumns: '1fr 1.1fr',
      gap: 64,
      alignItems: 'start'
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(SectionHeading, {
    eyebrow: "Get in touch"
  }, "We're here whenever you're ready"), /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: 'var(--font-body)',
      fontSize: 'var(--body-lg)',
      lineHeight: 1.7,
      color: 'var(--gray-600)',
      margin: '20px 0 32px'
    }
  }, "Call, email, or send a message \u2014 a real member of our admissions team will respond, with no pressure and complete confidentiality."), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 22
    }
  }, rows.map(r => /*#__PURE__*/React.createElement("div", {
    key: r.label,
    style: {
      display: 'flex',
      gap: 16,
      alignItems: 'center'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: 52,
      height: 52,
      borderRadius: '50%',
      border: '1.5px solid var(--gold-500)',
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
      color: 'var(--gold-700)',
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement(Ico, {
    name: r.icon,
    size: 22,
    c: "var(--gold-700)"
  })), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 700,
      fontSize: 12,
      letterSpacing: '.1em',
      textTransform: 'uppercase',
      color: 'var(--gold-700)'
    }
  }, r.label), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-body)',
      fontSize: 17,
      color: 'var(--ink-900)',
      marginTop: 2
    }
  }, r.value))))), /*#__PURE__*/React.createElement("div", {
    className: "sbhg-keyline",
    style: {
      marginTop: 32
    }
  }, /*#__PURE__*/React.createElement(Photo, {
    h: 200,
    tone: "sand",
    label: "Map \u2014 Scottsdale, AZ",
    style: {
      borderRadius: 17
    }
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      background: 'var(--cream-50)',
      border: '1px solid var(--gray-200)',
      borderRadius: 'var(--radius-card)',
      padding: 36,
      boxShadow: 'var(--shadow-soft)'
    }
  }, sent ? /*#__PURE__*/React.createElement("div", {
    style: {
      textAlign: 'center',
      padding: '48px 0'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'inline-flex',
      marginBottom: 16
    }
  }, /*#__PURE__*/React.createElement(IconCircle, {
    size: 64,
    onDark: false
  }, /*#__PURE__*/React.createElement(Ico, {
    name: "check",
    size: 28,
    c: "var(--gold-700)",
    sw: 2.4
  }))), /*#__PURE__*/React.createElement("h3", {
    style: {
      fontFamily: 'var(--font-display)',
      textTransform: 'uppercase',
      letterSpacing: '.04em',
      color: 'var(--ink-900)',
      margin: '0 0 8px'
    }
  }, "Message sent"), /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: 'var(--font-body)',
      color: 'var(--gray-600)',
      margin: 0
    }
  }, "We'll reach out within one business day.")) : /*#__PURE__*/React.createElement("form", {
    onSubmit: e => {
      e.preventDefault();
      setSent(true);
    },
    style: {
      display: 'grid',
      gridTemplateColumns: '1fr 1fr',
      gap: 18
    }
  }, /*#__PURE__*/React.createElement(Input, {
    label: "Full Name",
    placeholder: "Jane Doe",
    required: true
  }), /*#__PURE__*/React.createElement(Input, {
    label: "Phone",
    type: "tel",
    placeholder: "(480) 555-0102",
    required: true
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      gridColumn: '1 / -1'
    }
  }, /*#__PURE__*/React.createElement(Input, {
    label: "Email",
    type: "email",
    placeholder: "jane@email.com"
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      gridColumn: '1 / -1'
    }
  }, /*#__PURE__*/React.createElement(Select, {
    label: "How can we help?",
    placeholder: "Select a topic",
    options: ['Verify insurance', 'Ask about programs', 'Speak with admissions', 'Something else']
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      gridColumn: '1 / -1'
    }
  }, /*#__PURE__*/React.createElement(Input, {
    label: "Message",
    placeholder: "Tell us a little about what you're looking for"
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      gridColumn: '1 / -1',
      marginTop: 4
    }
  }, /*#__PURE__*/React.createElement(Button, {
    variant: "primary",
    size: "lg",
    type: "submit",
    style: {
      width: '100%'
    }
  }, "Send Message")), /*#__PURE__*/React.createElement("p", {
    style: {
      gridColumn: '1 / -1',
      margin: 0,
      fontFamily: 'var(--font-body)',
      fontSize: 12.5,
      color: 'var(--gray-600)',
      lineHeight: 1.5
    }
  }, "Your information is protected under HIPAA and never sold.")))));
}
Object.assign(window, {
  Photo,
  UtilityBar,
  Header,
  Hero,
  StatBand,
  IntroBlock,
  SplitFeature,
  CtaBand,
  ValuesRow,
  Testimonials,
  Programs,
  InsuranceWall,
  VerifyForm,
  Footer,
  Ico,
  InteriorHero,
  ContactSection
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/sections.jsx", error: String((e && e.message) || e) }); }

__ds_ns.BadgeMark = __ds_scope.BadgeMark;

__ds_ns.IconCircle = __ds_scope.IconCircle;

__ds_ns.NotchBand = __ds_scope.NotchBand;

__ds_ns.ProgramCard = __ds_scope.ProgramCard;

__ds_ns.StatBlock = __ds_scope.StatBlock;

__ds_ns.Testimonial = __ds_scope.Testimonial;

__ds_ns.ValueItem = __ds_scope.ValueItem;

__ds_ns.Badge = __ds_scope.Badge;

__ds_ns.Button = __ds_scope.Button;

__ds_ns.Card = __ds_scope.Card;

__ds_ns.Eyebrow = __ds_scope.Eyebrow;

__ds_ns.SectionHeading = __ds_scope.SectionHeading;

__ds_ns.Input = __ds_scope.Input;

__ds_ns.Select = __ds_scope.Select;

})();
