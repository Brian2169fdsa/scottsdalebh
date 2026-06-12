import React, { useState, useEffect, useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';
import {
  Button, SectionHeading, Badge, Input, Select,
  BadgeMark, NotchBand, IconCircle, StatBlock, ValueItem, Testimonial, ProgramCard,
} from '../ds/index';
import { Ico } from './Ico';
import { Slot } from './Slot';
import { ChatWidget } from './ChatWidget';

const MARK = '/assets/badge-mark.png';
const PHONE = '(480) 555‑0100';
const TEL = 'tel:+14805550100';

/* ============================================================
   NAVIGATION DATA
   ============================================================ */
const MODALITIES = [
  ['Occupational Therapy', '/substance-abuse#modalities'],
  ['Cognitive Behavioral Therapy', '/substance-abuse#modalities'],
  ['Dialectical Behavior Therapy', '/substance-abuse#modalities'],
  ['Acceptance & Commitment', '/substance-abuse#modalities'],
  ['Motivational Interviewing', '/substance-abuse#modalities'],
  ['Solution-Focused Therapy', '/substance-abuse#modalities'],
  ['Internal Family Systems', '/substance-abuse#modalities'],
  ['Deep Brain Reorienting', '/substance-abuse#modalities'],
  ['EMDR Therapy', '/substance-abuse#modalities'],
  ['Neurofeedback Therapy', '/substance-abuse#modalities'],
  ['Narrative Therapy', '/substance-abuse#modalities'],
  ['Grief Therapy', '/substance-abuse#modalities'],
  ['Trauma Therapy', '/substance-abuse#modalities'],
  ['Somatic Experiencing', '/substance-abuse#modalities'],
];

const NAV = [
  {
    label: 'Substance Abuse', href: '/substance-abuse',
    cols: [
      { h: 'Substances', items: [['Alcohol','/substance-abuse#substances'],['Opioids','/substance-abuse#substances'],['Methamphetamine','/substance-abuse#substances'],['Cocaine','/substance-abuse#substances'],['Benzodiazepines','/substance-abuse#substances'],['Marijuana','/substance-abuse#substances']] },
      { h: 'Treatment', items: [['Detox','/programs#detox'],['Inpatient','/programs#inpatient'],['Outpatient','/programs#outpatient'],['Evening IOP','/programs#evening'],['Family Therapy','/programs#family']] },
      { h: 'Modalities', wide: true, items: MODALITIES },
    ],
  },
  {
    label: 'Mental Health', href: '/mental-health',
    cols: [
      { h: 'Disorders', items: [['PTSD & Trauma','/mental-health#disorders'],['Anxiety','/mental-health#disorders'],['Depression','/mental-health#disorders'],['Bipolar Disorder','/mental-health#disorders'],['Personality Disorders','/mental-health#disorders']] },
      { h: 'Treatment', items: [['Stabilization','/programs#stabilization'],['Inpatient','/programs#inpatient'],['Outpatient','/programs#outpatient'],['Evening IOP','/programs#evening'],['Family Therapy','/programs#family']] },
      { h: 'Modalities', wide: true, items: MODALITIES },
    ],
  },
  {
    label: 'Dual Diagnosis', href: '/dual-diagnosis',
    cols: [
      { h: 'Substances', items: [['Alcohol','/substance-abuse#substances'],['Opioids','/substance-abuse#substances'],['Methamphetamine','/substance-abuse#substances'],['Cocaine','/substance-abuse#substances'],['Benzodiazepines','/substance-abuse#substances'],['Marijuana','/substance-abuse#substances']] },
      { h: 'Disorders', items: [['PTSD & Trauma','/mental-health#disorders'],['Anxiety','/mental-health#disorders'],['Depression','/mental-health#disorders'],['Bipolar Disorder','/mental-health#disorders'],['Personality Disorders','/mental-health#disorders']] },
      { h: 'Treatment', items: [['Detox','/programs#detox'],['Stabilization','/programs#stabilization'],['Inpatient','/programs#inpatient'],['Outpatient','/programs#outpatient'],['Family Therapy','/programs#family']] },
      { h: 'Modalities', items: MODALITIES.slice(0, 8) },
    ],
  },
  { label: 'Programs', href: '/programs' },
  { label: 'Our Team', href: '/our-team' },
  { label: 'Insurance', href: '/insurance' },
  { label: 'Contact', href: '/contact' },
];

/* ============================================================
   SCROLL REVEAL
   ============================================================ */
export function useScrollReveal() {
  useEffect(() => {
    const sections = Array.from(document.querySelectorAll('section'));
    const reveal = (el) => el.classList.add('is-visible');

    sections.forEach((s) => {
      s.classList.add('sbhg-reveal');
      if (s.getBoundingClientRect().top < window.innerHeight) reveal(s);
    });

    if (!('IntersectionObserver' in window)) return;

    const io = new IntersectionObserver(
      (entries) => entries.forEach((e) => { if (e.isIntersecting) { reveal(e.target); io.unobserve(e.target); } }),
      { threshold: 0, rootMargin: '0px 0px -8% 0px' },
    );
    sections.forEach((s) => { if (!s.classList.contains('is-visible')) io.observe(s); });
    return () => io.disconnect();
  }, []);
}

/* ============================================================
   UTILITY BAR
   ============================================================ */
export function UtilityBar() {
  return (
    <div style={{ background: 'var(--navy-900)', height: 44, display: 'flex', alignItems: 'center', position: 'relative', zIndex: 60 }}>
      <div className="sbhg-container" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', width: '100%' }}>
        <a href={TEL} style={{ display: 'inline-flex', alignItems: 'center', gap: 9, color: 'var(--gold-300)', textDecoration: 'none', fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: 13, letterSpacing: '.06em', textTransform: 'uppercase' }}>
          <Ico name="phone-call" size={15} c="var(--gold-300)" /> Get Help Today · {PHONE}
        </a>
        <div style={{ display: 'flex', gap: 16 }}>
          {['facebook', 'instagram', 'linkedin'].map((s) => (
            <a key={s} href="#" aria-label={s} style={{ color: 'var(--gold-300)', display: 'inline-flex' }}><Ico name={s} size={16} c="var(--gold-300)" /></a>
          ))}
        </div>
      </div>
    </div>
  );
}

/* ============================================================
   HEADER + MEGA-MENU
   ============================================================ */
function MegaPanel({ cols }) {
  return (
    <div style={{ position: 'absolute', left: 0, right: 0, top: '100%', background: 'var(--navy-700)', borderTop: '1px solid rgba(201,162,75,.25)', boxShadow: '0 28px 50px rgba(0,0,0,.4)' }}>
      <div className="sbhg-container" style={{ display: 'flex', padding: '32px 24px 36px' }}>
        {cols.map((c, i) => (
          <React.Fragment key={c.h}>
            {i > 0 && <div className="sbhg-vrule" style={{ margin: '0 32px' }} />}
            <div style={{ flex: c.wide ? 1.7 : 1, minWidth: 0 }}>
              <div style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: 12, letterSpacing: '.14em', textTransform: 'uppercase', color: 'var(--gold-300)', paddingBottom: 12, marginBottom: 12, borderBottom: '1px solid rgba(201,162,75,.3)' }}>{c.h}</div>
              <ul style={{ listStyle: 'none', margin: 0, padding: 0, display: 'grid', gridTemplateColumns: c.wide ? '1fr 1fr' : '1fr', columnGap: 28, rowGap: 2 }}>
                {c.items.map(([label, href], j) => (
                  <li key={label + j}>
                    <Link to={href} style={{ display: 'block', padding: '8px 12px', margin: '0 -12px', color: 'rgba(255,255,255,.82)', textDecoration: 'none', fontFamily: 'var(--font-body)', fontSize: 14.5, borderRadius: 7, borderLeft: '2px solid transparent', transition: 'background .12s, border-color .12s, color .12s' }}
                      onMouseEnter={(e) => { e.currentTarget.style.borderLeftColor = 'var(--gold-500)'; e.currentTarget.style.background = 'rgba(255,255,255,.05)'; e.currentTarget.style.color = '#fff'; }}
                      onMouseLeave={(e) => { e.currentTarget.style.borderLeftColor = 'transparent'; e.currentTarget.style.background = 'transparent'; e.currentTarget.style.color = 'rgba(255,255,255,.82)'; }}>{label}</Link>
                  </li>
                ))}
              </ul>
            </div>
          </React.Fragment>
        ))}
      </div>
    </div>
  );
}

export function Header({ active }) {
  const [open, setOpen] = useState(null);
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [mobileExpanded, setMobileExpanded] = useState(null);
  const location = useLocation();

  useEffect(() => { setOpen(null); setDrawerOpen(false); setMobileExpanded(null); }, [location.pathname]);

  // Prevent body scroll when drawer is open
  useEffect(() => {
    document.body.style.overflow = drawerOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [drawerOpen]);

  const closeDrawer = () => { setDrawerOpen(false); setMobileExpanded(null); };

  return (
    <>
      <style>{`
        .sbhg-nav-desktop { display: flex; }
        .sbhg-verify-btn { display: inline-flex; }
        .sbhg-hamburger { display: none; }
        @media (max-width: 768px) {
          .sbhg-nav-desktop { display: none !important; }
          .sbhg-verify-btn { display: none !important; }
          .sbhg-hamburger { display: inline-flex !important; }
        }
      `}</style>
      <header style={{ position: 'sticky', top: 0, zIndex: 50, background: 'var(--navy-800)', borderBottom: '1px solid rgba(255,255,255,.06)' }}
        onMouseLeave={() => setOpen(null)}>
        <div className="sbhg-container" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', width: '100%', height: 80 }}>
          <Link to="/" style={{ display: 'inline-flex', textDecoration: 'none' }}><BadgeMark markSrc={MARK} size={42} /></Link>

          {/* Desktop nav */}
          <nav className="sbhg-nav-desktop" style={{ alignItems: 'center', gap: 2 }}>
            {NAV.map((n) => {
              const isActive = active === n.label;
              return (
                <div key={n.label} onMouseEnter={() => setOpen(n.cols ? n.label : null)}>
                  <Link to={n.href} style={{ display: 'inline-flex', alignItems: 'center', gap: 6, textDecoration: 'none', color: isActive ? 'var(--gold-300)' : 'var(--white)', fontFamily: 'var(--font-display)', fontWeight: 600, fontSize: 13.5, letterSpacing: '.03em', padding: '28px 13px', borderBottom: isActive ? '2px solid var(--gold-500)' : '2px solid transparent' }}>
                    {n.label}{n.cols && <Ico name="chevron-down" size={14} c="var(--gold-300)" />}
                  </Link>
                </div>
              );
            })}
          </nav>

          {/* Desktop CTA */}
          <span className="sbhg-verify-btn">
            <Button variant="primary" size="sm" href="#verify">Verify Insurance</Button>
          </span>

          {/* Hamburger button — mobile only */}
          <button
            className="sbhg-hamburger"
            aria-label={drawerOpen ? 'Close menu' : 'Open menu'}
            onClick={() => setDrawerOpen((v) => !v)}
            style={{ alignItems: 'center', justifyContent: 'center', width: 44, height: 44, background: 'none', border: '1px solid rgba(201,162,75,.4)', borderRadius: 8, cursor: 'pointer', color: 'var(--gold-300)' }}
          >
            <Ico name={drawerOpen ? 'x' : 'menu'} size={22} c="var(--gold-300)" />
          </button>
        </div>

        {/* Desktop mega-panel */}
        {open && NAV.find((n) => n.label === open)?.cols && (
          <MegaPanel cols={NAV.find((n) => n.label === open).cols} />
        )}
      </header>

      {/* Mobile drawer overlay */}
      {drawerOpen && (
        <div
          style={{ position: 'fixed', inset: 0, zIndex: 49, background: 'rgba(0,0,0,.45)' }}
          onClick={closeDrawer}
        />
      )}

      {/* Mobile drawer */}
      <div style={{
        position: 'fixed', top: 0, left: 0, right: 0, zIndex: 200,
        background: '#0E1B33',
        transform: drawerOpen ? 'translateY(0)' : 'translateY(-100%)',
        transition: 'transform .3s cubic-bezier(.4,0,.2,1)',
        maxHeight: '100dvh',
        overflowY: 'auto',
        boxShadow: '0 12px 48px rgba(0,0,0,.6)',
      }}>
        {/* Drawer header */}
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '0 20px', height: 72, borderBottom: '1px solid rgba(201,162,75,.2)' }}>
          <Link to="/" onClick={closeDrawer} style={{ display: 'inline-flex', textDecoration: 'none' }}>
            <BadgeMark markSrc={MARK} size={38} />
          </Link>
          <button
            aria-label="Close menu"
            onClick={closeDrawer}
            style={{ display: 'inline-flex', alignItems: 'center', justifyContent: 'center', width: 40, height: 40, background: 'none', border: '1px solid rgba(201,162,75,.4)', borderRadius: 8, cursor: 'pointer' }}
          >
            <Ico name="x" size={20} c="var(--gold-300)" />
          </button>
        </div>

        {/* Drawer nav items */}
        <nav>
          {NAV.map((n) => {
            const isExpanded = mobileExpanded === n.label;
            return (
              <div key={n.label} style={{ borderBottom: '1px solid rgba(201,162,75,.15)' }}>
                {n.cols ? (
                  /* Parent item with sub-links — accordion */
                  <>
                    <button
                      onClick={() => setMobileExpanded(isExpanded ? null : n.label)}
                      style={{ width: '100%', display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '18px 20px', background: 'none', border: 'none', cursor: 'pointer', textAlign: 'left', fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: 16, letterSpacing: '.04em', textTransform: 'uppercase', color: 'var(--gold-300)' }}
                    >
                      {n.label}
                      <Ico name={isExpanded ? 'chevron-up' : 'chevron-down'} size={16} c="var(--gold-300)" />
                    </button>
                    {isExpanded && (
                      <div style={{ background: 'rgba(0,0,0,.25)', paddingBottom: 8 }}>
                        {/* Link to the main page itself */}
                        <Link
                          to={n.href}
                          onClick={closeDrawer}
                          style={{ display: 'block', padding: '11px 32px', fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: 13, letterSpacing: '.06em', textTransform: 'uppercase', color: 'var(--gold-500)', textDecoration: 'none' }}
                        >
                          View All — {n.label}
                        </Link>
                        {n.cols.map((col) => (
                          <React.Fragment key={col.h}>
                            <div style={{ padding: '10px 32px 4px', fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: 11, letterSpacing: '.12em', textTransform: 'uppercase', color: 'rgba(201,162,75,.6)' }}>{col.h}</div>
                            {col.items.map(([label, href], j) => (
                              <Link
                                key={label + j}
                                to={href}
                                onClick={closeDrawer}
                                style={{ display: 'block', padding: '10px 32px', fontFamily: 'var(--font-body)', fontSize: 15, color: 'rgba(255,255,255,.82)', textDecoration: 'none', borderLeft: '2px solid transparent' }}
                                onMouseEnter={(e) => { e.currentTarget.style.borderLeftColor = 'var(--gold-500)'; e.currentTarget.style.color = '#fff'; }}
                                onMouseLeave={(e) => { e.currentTarget.style.borderLeftColor = 'transparent'; e.currentTarget.style.color = 'rgba(255,255,255,.82)'; }}
                              >
                                {label}
                              </Link>
                            ))}
                          </React.Fragment>
                        ))}
                      </div>
                    )}
                  </>
                ) : (
                  /* Simple link */
                  <Link
                    to={n.href}
                    onClick={closeDrawer}
                    style={{ display: 'block', padding: '18px 20px', fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: 16, letterSpacing: '.04em', textTransform: 'uppercase', color: 'var(--gold-300)', textDecoration: 'none' }}
                  >
                    {n.label}
                  </Link>
                )}
              </div>
            );
          })}
        </nav>

        {/* Drawer CTA */}
        <div style={{ padding: '24px 20px 32px' }}>
          <a
            href="#verify"
            onClick={closeDrawer}
            style={{ display: 'block', width: '100%', textAlign: 'center', padding: '16px 24px', background: 'var(--gold-500)', color: '#0E1B33', fontFamily: 'var(--font-display)', fontWeight: 800, fontSize: 15, letterSpacing: '.06em', textTransform: 'uppercase', textDecoration: 'none', borderRadius: 8 }}
          >
            Verify Insurance
          </a>
        </div>
      </div>
    </>
  );
}

/* ============================================================
   WATERMARK CROSS
   ============================================================ */
export function Watermark() {
  return (
    <div aria-hidden="true" style={{ position: 'absolute', right: -70, top: '50%', transform: 'translateY(-50%)', width: 300, height: 300, opacity: 0.06, pointerEvents: 'none' }}>
      <div style={{ position: 'absolute', left: '50%', top: 0, transform: 'translateX(-50%)', width: 96, height: 300, background: '#fff', borderRadius: 16 }} />
      <div style={{ position: 'absolute', top: '50%', left: 0, transform: 'translateY(-50%)', width: 300, height: 96, background: '#fff', borderRadius: 16 }} />
    </div>
  );
}

/* ============================================================
   INTERIOR HERO
   ============================================================ */
export function InteriorHero({ eyebrow, title, crumb, subtitle, slotId }) {
  const crumbNav = (
    <nav style={{ display: 'flex', gap: 8, alignItems: 'center', fontFamily: 'var(--font-display)', fontWeight: 600, fontSize: 12, letterSpacing: '.08em', textTransform: 'uppercase', color: 'rgba(255,255,255,.55)' }}>
      <Link to="/" style={{ color: 'var(--gold-300)', textDecoration: 'none' }}>Home</Link>
      <Ico name="chevron-right" size={13} c="rgba(255,255,255,.4)" />
      <span>{crumb}</span>
    </nav>
  );
  return (
    <section style={{ position: 'relative', background: 'linear-gradient(150deg,#4A4030 0%,#2A3147 55%,#0E1B33 100%)', overflow: 'hidden' }}>
      <div style={{ position: 'absolute', inset: 0, background: 'var(--grad-navy-fade)' }} />
      <Watermark />
      <div className="sbhg-container" style={{ position: 'relative', padding: '70px 24px 84px' }}>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 16, maxWidth: 720 }}>
          {crumbNav}
          {eyebrow && <p className="sbhg-eyebrow" style={{ color: 'var(--gold-300)' }}>{eyebrow}</p>}
          <h1 style={{ fontFamily: 'var(--font-display)', fontWeight: 800, fontSize: 'var(--display-xl)', textTransform: 'uppercase', letterSpacing: '.04em', color: 'var(--white)', margin: 0, lineHeight: 1.1 }}>{title}</h1>
          <span style={{ display: 'block', width: 64, height: 3, borderRadius: 2, background: 'var(--grad-gold)' }} />
          {subtitle && <p style={{ fontFamily: 'var(--font-body)', fontSize: 'var(--body-lg)', lineHeight: 1.65, color: 'rgba(255,255,255,.8)', margin: '4px 0 0', maxWidth: 560 }}>{subtitle}</p>}
          <div style={{ display: 'flex', gap: 14, flexWrap: 'wrap', marginTop: 8 }}>
            <Button variant="primary" href="#verify">Verify Insurance</Button>
            <Button variant="secondary-dark" href={TEL} iconLeft={<Ico name="phone" size={17} c="currentColor" />}>Call Now</Button>
          </div>
        </div>
      </div>
      <div style={{ position: 'absolute', bottom: -1, left: 0, right: 0 }}><NotchBand height={36} /></div>
    </section>
  );
}

/* ============================================================
   CTA STRIP
   ============================================================ */
export function CtaStrip() {
  const actions = [
    { icon: 'phone', label: 'Call Now', sub: PHONE, href: TEL },
    { icon: 'shield-check', label: 'Verify Insurance', sub: 'No obligation', href: '#verify' },
    { icon: 'message-circle', label: 'Get Help', sub: 'Speak with admissions', href: '/contact' },
    { icon: 'map-pin', label: 'Get Directions', sub: 'Scottsdale, AZ', href: '#' },
  ];
  return (
    <section style={{ background: 'var(--navy-900)' }}>
      <div className="sbhg-container sbhg-cta-strip" style={{ display: 'grid', gridTemplateColumns: 'repeat(4,1fr)' }}>
        {actions.map((a, i) => (
          <a key={a.label} href={a.href} style={{ display: 'flex', alignItems: 'center', gap: 16, padding: '26px 28px', textDecoration: 'none', borderLeft: i ? '1px solid rgba(201,162,75,.22)' : 'none' }}
            onMouseEnter={(e) => { e.currentTarget.style.background = 'rgba(255,255,255,.03)'; }}
            onMouseLeave={(e) => { e.currentTarget.style.background = 'transparent'; }}>
            <span style={{ width: 46, height: 46, borderRadius: '50%', border: '1.5px solid var(--gold-500)', display: 'inline-flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}><Ico name={a.icon} size={20} c="var(--gold-300)" /></span>
            <span>
              <span style={{ display: 'block', fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: 14, letterSpacing: '.04em', textTransform: 'uppercase', color: '#fff' }}>{a.label}</span>
              <span style={{ display: 'block', fontFamily: 'var(--font-body)', fontSize: 13, color: 'rgba(255,255,255,.6)', marginTop: 3 }}>{a.sub}</span>
            </span>
          </a>
        ))}
      </div>
    </section>
  );
}

/* ============================================================
   SPLIT FEATURE
   ============================================================ */
const pStyle = { fontFamily: 'var(--font-body)', fontSize: 'var(--body-lg)', lineHeight: 1.7, color: 'var(--gray-600)', margin: 0 };

export function SplitFeature({ eyebrow, title, body, bullets = [], cta, ctaHref = '#', slotId, tone = 'dusk', flip = false, bg = 'var(--cream-50)', id }) {
  const text = (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 22, justifyContent: 'center' }}>
      <SectionHeading eyebrow={eyebrow}>{title}</SectionHeading>
      {Array.isArray(body) ? body.map((p, i) => <p key={i} style={pStyle}>{p}</p>) : <p style={pStyle}>{body}</p>}
      {bullets.length > 0 && (
        <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: 12 }}>
          {bullets.map((b) => (
            <li key={b} style={{ display: 'flex', gap: 12, alignItems: 'flex-start', fontFamily: 'var(--font-body)', fontSize: 16, color: 'var(--gray-600)' }}>
              <Ico name="check" size={20} c="var(--gold-700)" sw={2.2} /> {b}
            </li>
          ))}
        </ul>
      )}
      {cta && <div><Button variant="secondary-light" href={ctaHref}>{cta}</Button></div>}
    </div>
  );
  const photo = (
    <div style={{ alignSelf: 'center', width: '100%' }}>
      <Slot id={slotId} h={420} tone={tone} placeholder="Photo coming soon" />
    </div>
  );
  return (
    <section id={id} className="sbhg-section" style={{ background: bg }}>
      <div className="sbhg-container sbhg-split" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 64, alignItems: 'stretch' }}>
        {flip ? <>{photo}{text}</> : <>{text}{photo}</>}
      </div>
    </section>
  );
}

/* ============================================================
   CHIP GRID
   ============================================================ */
export function ChipGrid({ eyebrow, title, intro, items, icon = 'arrow-right', cols = 3, bg = 'var(--white)', id }) {
  return (
    <section id={id} className="sbhg-section" style={{ background: bg }}>
      <div className="sbhg-container">
        <SectionHeading eyebrow={eyebrow} align="center">{title}</SectionHeading>
        {intro && <p style={{ ...pStyle, textAlign: 'center', maxWidth: 640, margin: '20px auto 0' }}>{intro}</p>}
        <div className="sbhg-grid-3" style={{ display: 'grid', gridTemplateColumns: `repeat(${cols},1fr)`, gap: 20, marginTop: 44 }}>
          {items.map(([label, desc, href]) => (
            <a key={label} href={href || '#'} style={{ display: 'flex', alignItems: 'center', gap: 16, padding: '22px 24px', background: 'var(--cream-50)', border: '1px solid var(--gray-200)', borderRadius: 'var(--radius-card)', textDecoration: 'none', boxShadow: 'var(--shadow-soft)', transition: 'transform .15s, border-color .15s' }}
              onMouseEnter={(e) => { e.currentTarget.style.transform = 'translateY(-3px)'; e.currentTarget.style.borderColor = 'var(--gold-500)'; }}
              onMouseLeave={(e) => { e.currentTarget.style.transform = 'none'; e.currentTarget.style.borderColor = 'var(--gray-200)'; }}>
              <span style={{ width: 48, height: 48, borderRadius: '50%', border: '1.5px solid var(--gold-500)', display: 'inline-flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}><Ico name={icon} size={20} c="var(--gold-700)" /></span>
              <span>
                <span style={{ display: 'block', fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: 17, color: 'var(--ink-900)', letterSpacing: '.01em' }}>{label}</span>
                {desc && <span style={{ display: 'block', fontFamily: 'var(--font-body)', fontSize: 14, color: 'var(--gray-600)', marginTop: 3 }}>{desc}</span>}
              </span>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ============================================================
   MODALITIES GRID
   ============================================================ */
const MODALITY_NAMES = [
  'Occupational Therapy','Cognitive Behavioral Therapy','Dialectical Behavior Therapy',
  'Acceptance & Commitment','Motivational Interviewing','Solution-Focused Therapy',
  'Internal Family Systems','Deep Brain Reorienting','EMDR Therapy','Neurofeedback Therapy',
  'Narrative Therapy','Grief Therapy','Trauma Therapy','Somatic Experiencing',
];

export function ModalitiesGrid({ bg = 'var(--cream-50)', onDark = false }) {
  return (
    <section id="modalities" className="sbhg-section" style={{ background: bg }}>
      <div className="sbhg-container">
        <SectionHeading eyebrow="Evidence-based methods" align="center" onDark={onDark}>Therapeutic modalities</SectionHeading>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill,minmax(230px,1fr))', gap: 14, marginTop: 44 }}>
          {MODALITY_NAMES.map((label) => (
            <div key={label} style={{ display: 'flex', alignItems: 'center', gap: 12, padding: '16px 18px', background: onDark ? 'var(--navy-800)' : 'var(--white)', border: onDark ? '1px solid rgba(201,162,75,.2)' : '1px solid var(--gray-200)', borderRadius: 14, boxShadow: onDark ? 'none' : 'var(--shadow-soft)' }}>
              <Ico name="check-circle" size={18} c="var(--gold-500)" sw={1.8} />
              <span style={{ fontFamily: 'var(--font-body)', fontSize: 15, color: onDark ? 'rgba(255,255,255,.85)' : 'var(--ink-900)' }}>{label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ============================================================
   CTA BAND
   ============================================================ */
export function CtaBand({ eyebrow = "You don't have to wait", title = 'Reach out today — we\'ll take it from here', body = 'One conversation is all it takes to begin. Our admissions team is standing by, ready to listen.', primary = 'Verify Insurance', primaryHref = '#verify', secondary, secondaryHref = '#' }) {
  return (
    <section style={{ position: 'relative', background: 'var(--navy-800)', padding: '92px 0', overflow: 'hidden' }}>
      <Watermark />
      <div className="sbhg-container" style={{ position: 'relative', textAlign: 'center', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 22 }}>
        <SectionHeading eyebrow={eyebrow} align="center" onDark>{title}</SectionHeading>
        <p style={{ fontFamily: 'var(--font-body)', fontSize: 'var(--body-lg)', color: 'rgba(255,255,255,.78)', maxWidth: 580, margin: 0, lineHeight: 1.65 }}>{body}</p>
        <div style={{ display: 'flex', gap: 16, flexWrap: 'wrap', justifyContent: 'center', marginTop: 6 }}>
          <Button variant="primary" size="lg" href={primaryHref}>{primary}</Button>
          {secondary && <Button variant="secondary-dark" size="lg" href={secondaryHref}>{secondary}</Button>}
        </div>
      </div>
    </section>
  );
}

/* ============================================================
   FAQ ACCORDION
   ============================================================ */
export function FaqAccordion({ eyebrow = 'Good to know', title = 'Common questions', items, bg = 'var(--cream-50)' }) {
  const [open, setOpen] = useState(0);
  return (
    <section className="sbhg-section" style={{ background: bg }}>
      <div className="sbhg-container" style={{ maxWidth: 820, margin: '0 auto' }}>
        <SectionHeading eyebrow={eyebrow} align="center">{title}</SectionHeading>
        <div style={{ marginTop: 40, display: 'flex', flexDirection: 'column', gap: 12 }}>
          {items.map(([q, a], i) => {
            const isOpen = open === i;
            return (
              <div key={i} style={{ background: 'var(--white)', border: '1px solid var(--gray-200)', borderRadius: 14, boxShadow: 'var(--shadow-soft)', overflow: 'hidden' }}>
                <button onClick={() => setOpen(isOpen ? -1 : i)} style={{ width: '100%', display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 16, padding: '20px 24px', background: 'none', border: 'none', cursor: 'pointer', textAlign: 'left', fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: 17, color: 'var(--ink-900)' }}>
                  {q}
                  <Ico name={isOpen ? 'minus' : 'plus'} size={20} c="var(--gold-700)" />
                </button>
                {isOpen && <div style={{ padding: '0 24px 22px', fontFamily: 'var(--font-body)', fontSize: 16, lineHeight: 1.7, color: 'var(--gray-600)' }}>{a}</div>}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

/* ============================================================
   TESTIMONIALS
   ============================================================ */
const DEFAULT_TESTIMONIALS = [
  { name: 'Marcus R.', detail: 'Alumni, 2024', quote: 'The team met me exactly where I was. For the first time in years, I felt genuinely heard — not like a case number.' },
  { name: 'Dana W.', detail: 'Family member', quote: 'They guided our whole family with patience and honesty. The communication never stopped, and neither did their care.' },
  { name: 'Theo L.', detail: 'Alumni, 2023', quote: 'Calm, dignified, and deeply human. I left with real tools and a community that still checks in on me.' },
];

export function Testimonials({ data, eyebrow = 'In their words', title = 'Stories of recovery' }) {
  const items = data || DEFAULT_TESTIMONIALS;
  return (
    <section style={{ background: 'var(--navy-900)', padding: '92px 0' }}>
      <div className="sbhg-container">
        <SectionHeading eyebrow={eyebrow} align="center" onDark>{title}</SectionHeading>
        <div className="sbhg-testimonials-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: 24, marginTop: 48 }}>
          {items.map((d) => <Testimonial key={d.name} {...d} rating={5} />)}
        </div>
      </div>
    </section>
  );
}

/* ============================================================
   INSURANCE WALL
   ============================================================ */
export function InsuranceWall() {
  return (
    <section className="sbhg-section" style={{ background: 'var(--white)' }}>
      <div className="sbhg-container" style={{ textAlign: 'center' }}>
        <SectionHeading eyebrow="Coverage" align="center">Most major insurance accepted</SectionHeading>
        <p style={{ ...pStyle, maxWidth: 580, margin: '20px auto 0' }}>We'll handle the paperwork. Verify your benefits in minutes — confidentially and with no obligation.</p>
        <img src="/assets/payers.jpg" alt="Accepted insurance payers" width={1600} height={533} decoding="sync" loading="eager" style={{ display: 'block', width: '100%', maxWidth: 1040, height: 'auto', aspectRatio: '1600 / 533', margin: '48px auto 0' }} />
      </div>
    </section>
  );
}

/* ============================================================
   VERIFY FORM
   ============================================================ */
export function VerifyForm() {
  const [sent, setSent] = useState(false);
  return (
    <section id="verify" style={{ background: 'var(--navy-900)', padding: '96px 0' }}>
      <div className="sbhg-container sbhg-verify-grid" style={{ display: 'grid', gridTemplateColumns: '0.9fr 1.1fr', gap: 64, alignItems: 'center' }}>
        <div>
          <SectionHeading eyebrow="No obligation" onDark>Verify your insurance</SectionHeading>
          <p style={{ fontFamily: 'var(--font-body)', fontSize: 'var(--body-lg)', color: 'rgba(255,255,255,.78)', lineHeight: 1.7, marginTop: 20 }}>
            Share a few details and our admissions team will confirm your benefits — usually within one business day. Confidential, always.
          </p>
          <div style={{ display: 'flex', gap: 10, marginTop: 24, color: 'var(--gold-300)', alignItems: 'center', fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: 13, letterSpacing: '.06em', textTransform: 'uppercase' }}>
            <Ico name="lock" size={16} c="var(--gold-300)" /> HIPAA-compliant &amp; secure
          </div>
        </div>
        <div style={{ background: 'var(--navy-800)', borderRadius: 'var(--radius-card)', padding: 36, border: '1px solid rgba(201,162,75,.18)' }}>
          {sent ? (
            <div style={{ textAlign: 'center', padding: '40px 0', color: 'var(--white)' }}>
              <div style={{ display: 'inline-flex', marginBottom: 16 }}><IconCircle size={64}><Ico name="check" size={28} c="var(--gold-300)" sw={2.4} /></IconCircle></div>
              <h3 style={{ fontFamily: 'var(--font-display)', textTransform: 'uppercase', letterSpacing: '.04em', color: 'var(--white)', margin: '0 0 8px' }}>Thank you</h3>
              <p style={{ fontFamily: 'var(--font-body)', color: 'rgba(255,255,255,.75)', margin: 0 }}>We'll be in touch within one business day.</p>
            </div>
          ) : (
            <form onSubmit={(e) => { e.preventDefault(); setSent(true); }} className="sbhg-verify-form" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 18 }}>
              <Input label="Full Name" placeholder="Jane Doe" required onDark />
              <Input label="Phone" type="tel" placeholder="(480) 555-0102" required onDark />
              <Input label="Email" type="email" placeholder="jane@email.com" onDark />
              <Input label="Date of Birth" type="text" placeholder="MM / DD / YYYY" onDark />
              <Select label="Insurance Provider" placeholder="Select provider" options={['Aetna', 'Cigna', 'BlueCross BlueShield', 'UnitedHealthcare', 'Humana', 'Other']} onDark required />
              <Input label="Member ID" placeholder="XYZ123456" onDark />
              <div style={{ gridColumn: '1 / -1' }}><Input label="Anything we should know?" placeholder="Optional message" onDark /></div>
              <div style={{ gridColumn: '1 / -1', marginTop: 4 }}><Button variant="primary" size="lg" type="submit" style={{ width: '100%' }}>Verify My Benefits</Button></div>
              <p style={{ gridColumn: '1 / -1', margin: 0, fontFamily: 'var(--font-body)', fontSize: 12.5, color: 'rgba(255,255,255,.55)', lineHeight: 1.5 }}>
                By submitting, you agree to be contacted about treatment. Your information is protected under HIPAA and never sold.
              </p>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}

/* ============================================================
   FOOTER
   ============================================================ */
export function Footer() {
  const cols = [
    { h: 'Programs', links: [['/substance-abuse', 'Substance Abuse'], ['/mental-health', 'Mental Health'], ['/dual-diagnosis', 'Dual Diagnosis'], ['/programs', 'Levels of Care']] },
    { h: 'Explore', links: [['/our-team', 'Our Team'], ['/insurance', 'Insurance & Admissions'], ['#verify', 'Verify Insurance'], ['/contact', 'Contact']] },
    { h: 'Contact', links: [['#', '[NEEDS-CLIENT] Address'], [TEL, PHONE], ['mailto:admissions@scottsdalebh.com', 'admissions@scottsdalebh.com']] },
  ];
  return (
    <>
      <footer style={{ background: 'var(--navy-900)', padding: '76px 0 40px' }}>
        <div className="sbhg-container sbhg-footer-grid" style={{ display: 'grid', gridTemplateColumns: '1.4fr 1fr 1fr 1fr', gap: 40 }}>
          <div>
            <BadgeMark markSrc={MARK} size={44} />
            <p style={{ fontFamily: 'var(--font-body)', fontSize: 15, color: 'rgba(255,255,255,.7)', lineHeight: 1.7, marginTop: 18, maxWidth: 300 }}>
              Transforming lives through compassionate care and lasting recovery.
            </p>
            <div style={{ display: 'flex', gap: 10, marginTop: 20, flexWrap: 'wrap' }}>
              {['Joint Commission', 'LegitScript', 'AZDHS'].map((b) => (
                <span key={b} style={{ fontFamily: 'var(--font-display)', fontSize: 10, letterSpacing: '.08em', textTransform: 'uppercase', color: 'var(--gold-300)', border: '1px solid rgba(201,162,75,.4)', borderRadius: 6, padding: '6px 9px' }}>{b}</span>
              ))}
            </div>
          </div>
          {cols.map((c) => (
            <div key={c.h}>
              <h4 style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: 13, letterSpacing: '.1em', textTransform: 'uppercase', color: 'var(--gold-300)', margin: '0 0 18px' }}>{c.h}</h4>
              <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: 11 }}>
                {c.links.map(([href, label]) => (
                  <li key={label}>
                    {href.startsWith('/') ? (
                      <Link to={href} style={{ fontFamily: 'var(--font-body)', fontSize: 14.5, color: 'rgba(255,255,255,.72)', textDecoration: 'none' }}>{label}</Link>
                    ) : (
                      <a href={href} style={{ fontFamily: 'var(--font-body)', fontSize: 14.5, color: 'rgba(255,255,255,.72)', textDecoration: 'none' }}>{label}</a>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className="sbhg-container" style={{ borderTop: '1px solid rgba(255,255,255,.08)', marginTop: 48, paddingTop: 24, display: 'flex', justifyContent: 'space-between', flexWrap: 'wrap', gap: 12, alignItems: 'center' }}>
          <span style={{ fontFamily: 'var(--font-body)', fontSize: 12.5, color: 'rgba(255,255,255,.5)' }}>© 2026 Scottsdale Behavioral Health Group. AZDHS License #[NEEDS-CLIENT].</span>
          <span style={{ fontFamily: 'var(--font-body)', fontSize: 12.5, color: 'rgba(255,255,255,.5)' }}>Privacy Policy · Terms · Accessibility</span>
          <span style={{ fontFamily: 'var(--font-body)', fontSize: 12.5, color: 'rgba(255,255,255,.38)' }}>
            Website built by{' '}
            <a href="https://phxcw.com" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--gold-500)', textDecoration: 'none', fontWeight: 600 }}>Phoenix Creative Works</a>
          </span>
        </div>
      </footer>
      <NotchBand height={26} direction="up" />
    </>
  );
}

/* ============================================================
   LAYOUT (page shell)
   ============================================================ */
export function Layout({ active, hero, showVerify = true, children }) {
  useScrollReveal();
  return (
    <div>
      <UtilityBar />
      <Header active={active} />
      {hero && <InteriorHero {...hero} />}
      {children}
      {showVerify && <VerifyForm />}
      <Footer />
      <ChatWidget />
    </div>
  );
}
