import React from 'react';
import { Layout, Watermark, SplitFeature, CtaBand, Testimonials, InsuranceWall } from '../components/shared';
import { Button, SectionHeading, StatBlock, NotchBand, ValueItem, ProgramCard } from '../ds/index';
import { Ico } from '../components/Ico';
import { Slot } from '../components/Slot';

const MARK = '/assets/badge-mark.png';
const PHONE = '(480) 555‑0100';
const TEL = 'tel:+14805550100';

function HomeHero() {
  return (
    <section className="sbhg-home-hero" style={{ position: 'relative', overflow: 'hidden', contain: 'strict', height: 800, display: 'flex', alignItems: 'center', justifyContent: 'center', backgroundColor: 'var(--navy-900)', backgroundImage: 'url("/assets/hero-bg.jpg")', backgroundSize: 'cover', backgroundPosition: 'center 30%', backgroundRepeat: 'no-repeat' }}>
      <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(180deg, rgba(14,27,51,0.54) 0%, rgba(14,27,51,0.34) 100%)' }} />
      <Watermark />
      <div className="sbhg-container" style={{ position: 'relative', padding: '0 24px', display: 'flex', flexDirection: 'column', gap: 24, maxWidth: 820, textAlign: 'center', alignItems: 'center' }}>
        <img src={MARK} width={80} height={80} alt="" />
        <h1 style={{ fontFamily: 'var(--font-display)', fontWeight: 800, fontSize: 'var(--display-xl)', lineHeight: 1.07, textTransform: 'uppercase', letterSpacing: '.04em', color: '#fff', margin: 0 }}>
          Your path to lasting recovery starts here
        </h1>
        <p style={{ fontFamily: 'var(--font-body)', fontSize: 'var(--body-lg)', lineHeight: 1.6, color: 'rgba(255,255,255,.85)', maxWidth: 560, margin: 0 }}>
          Compassionate, evidence-based behavioral health care in the heart of Scottsdale — built entirely around you.
        </p>
        <div style={{ display: 'flex', gap: 16, flexWrap: 'wrap', justifyContent: 'center', marginTop: 6 }}>
          <Button variant="primary" size="lg" href="#verify">Verify Insurance</Button>
          <Button variant="secondary-dark" size="lg" href={TEL} iconLeft={<Ico name="phone" size={18} c="currentColor" />}>Call Now</Button>
        </div>
      </div>
      <div style={{ position: 'absolute', bottom: -1, left: 0, right: 0 }}><NotchBand height={42} /></div>
    </section>
  );
}

function StatBand() {
  return (
    <section style={{ background: 'var(--navy-900)', padding: '76px 0' }}>
      <div className="sbhg-container sbhg-stat-band" style={{ display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', alignItems: 'center' }}>
        <div style={{ padding: '0 36px' }}><StatBlock value="1 in 5" statement="U.S. adults experience mental illness in a given year." source="Source: NIMH, 2023" /></div>
        <div style={{ padding: '0 36px', borderLeft: '1px solid rgba(201,162,75,.35)', borderRight: '1px solid rgba(201,162,75,.35)' }}><StatBlock value="48.7M" statement="Americans lived with a substance use disorder last year." source="Source: SAMHSA NSDUH, 2022" /></div>
        <div style={{ padding: '0 36px' }}><StatBlock value="24/7" statement="Admissions support — there is no wrong time to reach out." source="Confidential & always available" /></div>
      </div>
    </section>
  );
}

function IntroBlock() {
  return (
    <section className="sbhg-section" style={{ background: 'var(--white)' }}>
      <div className="sbhg-container" style={{ maxWidth: 820, textAlign: 'center', margin: '0 auto', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 24 }}>
        <SectionHeading eyebrow="Why Scottsdale" align="center">A higher standard of care</SectionHeading>
        <p style={{ fontFamily: 'var(--font-body)', fontSize: 'var(--body-lg)', lineHeight: 1.7, color: 'var(--gray-600)', margin: 0 }}>
          You deserve more than a program — you deserve a team that sees you. We pair clinical excellence with genuine warmth, so every step of your recovery feels supported, dignified, and entirely your own.
        </p>
        <a href={TEL} style={{ display: 'inline-flex', alignItems: 'center', gap: 12, fontFamily: 'var(--font-display)', fontWeight: 800, fontSize: 26, color: 'var(--navy-800)', textDecoration: 'none' }}>
          <span style={{ width: 44, height: 44, borderRadius: '50%', border: '1.5px solid var(--gold-500)', display: 'inline-flex', alignItems: 'center', justifyContent: 'center', color: 'var(--gold-700)' }}><Ico name="phone" size={20} c="var(--gold-700)" /></span>
          {PHONE}
        </a>
      </div>
    </section>
  );
}

function FullBleedImage() {
  return (
    <section className="sbhg-fullbleed" style={{ position: 'relative', width: '100%', height: 900, overflow: 'hidden', contain: 'strict', backgroundColor: 'var(--navy-900)', backgroundImage: 'url("/assets/mh-entrance.jpg")', backgroundSize: 'cover', backgroundPosition: 'center 40%', backgroundRepeat: 'no-repeat' }} aria-label="Recovery statistics">
      <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(90deg, rgba(14,27,51,.62) 0%, rgba(14,27,51,.54) 42%, rgba(14,27,51,.32) 100%)' }} />
      <div className="sbhg-container sbhg-fullbleed-grid" style={{ position: 'relative', height: '100%', display: 'grid', gridTemplateColumns: '1.4fr 0.6fr', gap: 72, alignItems: 'center' }}>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 22, maxWidth: 700 }}>
          <h2 style={{ fontFamily: 'var(--font-display)', fontWeight: 800, fontSize: 'clamp(28px,2.9vw,42px)', lineHeight: 1.16, textTransform: 'uppercase', letterSpacing: '.05em', color: '#fff', margin: 0 }}>
            Recovery isn't rare. 73% of adults who've faced a substance use problem say they're in recovery — or recovered.
          </h2>
          <span style={{ display: 'block', width: 64, height: 3, borderRadius: 2, background: 'var(--grad-gold)' }} />
          <p style={{ fontFamily: 'var(--font-body)', fontSize: 14, color: 'rgba(255,255,255,.7)', margin: 0 }}>Source: SAMHSA, National Survey on Drug Use and Health</p>
          <p style={{ fontFamily: 'var(--font-body)', fontSize: 16.5, lineHeight: 1.65, color: 'rgba(255,255,255,.9)', margin: '4px 0 0', maxWidth: 620 }}>
            Mental health and substance use disorders are treatable — and recovery is the most common outcome, not the exception. At Scottsdale Behavioral Health Group, evidence-based care meets genuine compassion, so treatment is built around you, not a template.
          </p>
          <p style={{ fontFamily: 'var(--font-body)', fontSize: 16.5, lineHeight: 1.65, color: 'rgba(255,255,255,.9)', margin: 0, maxWidth: 620 }}>
            Our licensed clinicians work with you to address root causes, set clear goals, and build a foundation that lasts long after treatment ends.
          </p>
        </div>
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center', gap: 26 }}>
          <div style={{ width: 220, height: 220, borderRadius: '50%', background: 'var(--grad-gold)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <svg viewBox="0 0 100 100" width="118" height="118" aria-hidden="true">
              <path d="M40 12 H60 V40 H88 V60 H60 V88 H40 V60 H12 V40 H40 Z" fill="#13234A" />
            </svg>
          </div>
          <div style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: 18, lineHeight: 1.35, letterSpacing: '.02em', textTransform: 'uppercase', color: '#fff' }}>
            Understand more about<br />our approach to recovery
          </div>
          <Button variant="primary" size="lg" href="/mental-health" style={{ minWidth: 220, letterSpacing: '.06em' }}>Learn More</Button>
        </div>
      </div>
      <div style={{ position: 'absolute', bottom: -1, left: 0, right: 0 }}><NotchBand height={42} /></div>
    </section>
  );
}

function ValuesRow() {
  return (
    <section style={{ background: 'var(--navy-900)', padding: '80px 0' }}>
      <div className="sbhg-container sbhg-values-row" style={{ display: 'flex', alignItems: 'stretch', justifyContent: 'center' }}>
        <ValueItem icon={<Ico name="shield-check" size={30} c="var(--gold-300)" />} title="Integrity">We do the right thing, even when no one is watching.</ValueItem>
        <div className="sbhg-vrule" />
        <ValueItem icon={<Ico name="heart-handshake" size={30} c="var(--gold-300)" />} title="Compassion">We care deeply about every person who walks through our doors.</ValueItem>
        <div className="sbhg-vrule" />
        <ValueItem icon={<Ico name="award" size={30} c="var(--gold-300)" />} title="Excellence">We strive for better, every single day.</ValueItem>
      </div>
    </section>
  );
}

function ProgramsHome() {
  const progs = [
    { badge: 'PHP', title: 'Partial Hospitalization', icon: 'sun', body: 'Structured daytime treatment with the comfort of returning home each evening.', href: '/programs#php' },
    { badge: 'IOP', title: 'Intensive Outpatient', icon: 'calendar-clock', body: 'Flexible sessions that fit around work, school, and family life.', href: '/programs#iop' },
    { badge: 'OP', title: 'Outpatient', icon: 'users', body: 'Ongoing therapy and support as you build lasting momentum in recovery.', href: '/programs#outpatient' },
    { badge: 'E-IOP', title: 'Evening IOP', icon: 'moon', body: 'Evidence-based care that keeps your life moving — evenings, after work.', href: '/programs#evening' },
  ];
  return (
    <section className="sbhg-section" style={{ background: 'var(--cream-50)' }}>
      <div className="sbhg-container">
        <SectionHeading eyebrow="Levels of care" align="center">Programs built around your life</SectionHeading>
        <div className="sbhg-grid-2" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 24, marginTop: 44 }}>
          {progs.map((p) => (
            <ProgramCard key={p.badge} badge={p.badge} title={p.title} href={p.href} icon={<Ico name={p.icon} size={28} c="var(--gold-700)" />}>{p.body}</ProgramCard>
          ))}
        </div>
      </div>
    </section>
  );
}

export default function Home() {
  return (
    <Layout active="Home">
      <HomeHero />
      <StatBand />
      <IntroBlock />
      <FullBleedImage />
      <SplitFeature
        eyebrow="Mental Health" title="Care for the whole you"
        body="Anxiety, depression, trauma — whatever brought you here, you'll find a team that treats the person, not just the diagnosis. Together we build a plan rooted in your goals."
        bullets={['Individual & group therapy', 'Trauma-informed clinicians', 'Psychiatry & medication management']}
        cta="Explore Mental Health" ctaHref="/mental-health" slotId="home-mh" photoSrc="/assets/mh-care.png" tone="calm" bg="var(--cream-50)"
      />
      <CtaBand />
      <SplitFeature
        eyebrow="Substance Abuse" title="Recovery on your terms"
        body="From detox through aftercare, our continuum meets you wherever you are. No judgment, no shortcuts — just steady, evidence-based support toward a life you choose."
        bullets={['Medically supported detox', 'Relapse-prevention skills', 'Lifelong alumni community']}
        cta="Explore Substance Abuse" ctaHref="/substance-abuse" slotId="home-sa" photoSrc="/assets/sa-recovery.png" tone="canyon" flip bg="var(--white)"
      />
      <ValuesRow />
      <Testimonials />
      <ProgramsHome />
      <InsuranceWall />
    </Layout>
  );
}
