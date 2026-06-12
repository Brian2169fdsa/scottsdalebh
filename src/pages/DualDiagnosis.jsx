import React from 'react';
import { Layout, CtaStrip, SplitFeature, ChipGrid, ModalitiesGrid, InsuranceWall } from '../components/shared';
import { SectionHeading, Button } from '../ds/index';
import { Ico } from '../components/Ico';

const DD_SUBS = [
  ['Alcohol', '', '#'], ['Opioids', '', '#'], ['Methamphetamine', '', '#'],
  ['Cocaine', '', '#'], ['Benzodiazepines', '', '#'], ['Marijuana', '', '#'],
];
const DD_DIS = [
  ['PTSD & Trauma', '', '#'], ['Anxiety', '', '#'], ['Depression', '', '#'],
  ['Bipolar Disorder', '', '#'], ['Personality Disorders', '', '#'],
];

function TwoStep() {
  const steps = [
    ['01', 'search-check', 'Comprehensive assessment', 'We start by understanding the full picture - substance use and mental health together - through medical, psychiatric, and psychosocial evaluation. Nothing about you is treated in isolation.'],
    ['02', 'route', 'A single, personalized plan', 'One integrated team builds one plan that treats both conditions at once. Medication, therapy, and holistic care move in concert, and the plan evolves as you do.'],
  ];
  return (
    <section className="sbhg-section" style={{ background: 'var(--white)' }}>
      <div className="sbhg-container">
        <SectionHeading eyebrow="How integrated care works" align="center">Two conditions, one team, one plan</SectionHeading>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 28, marginTop: 48 }}>
          {steps.map(([num, icon, title, body]) => (
            <div key={num} style={{ position: 'relative', background: 'var(--cream-50)', border: '1px solid var(--gray-200)', borderRadius: 'var(--radius-card)', padding: '40px 36px', boxShadow: 'var(--shadow-soft)' }}>
              <span style={{ position: 'absolute', top: 28, right: 32, fontFamily: 'var(--font-display)', fontWeight: 800, fontSize: 56, lineHeight: 1, color: 'var(--cream-50)', WebkitTextStroke: '1px var(--gold-500)', opacity: .6 }}>{num}</span>
              <span style={{ width: 60, height: 60, borderRadius: '50%', border: '1.5px solid var(--gold-500)', display: 'inline-flex', alignItems: 'center', justifyContent: 'center', marginBottom: 20 }}><Ico name={icon} size={26} c="var(--gold-700)" /></span>
              <h3 style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: 22, textTransform: 'uppercase', letterSpacing: '.03em', color: 'var(--ink-900)', margin: '0 0 14px' }}>{title}</h3>
              <p style={{ fontFamily: 'var(--font-body)', fontSize: 16, lineHeight: 1.7, color: 'var(--gray-600)', margin: 0 }}>{body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function DualPaths() {
  return (
    <section style={{ position: 'relative', background: 'var(--navy-800)', padding: '92px 0', overflow: 'hidden' }}>
      <div className="sbhg-container" style={{ position: 'relative', textAlign: 'center', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 22 }}>
        <SectionHeading eyebrow="Wherever you start" align="center" onDark>Both paths lead to the same team</SectionHeading>
        <p style={{ fontFamily: 'var(--font-body)', fontSize: 'var(--body-lg)', color: 'rgba(255,255,255,.78)', maxWidth: 600, margin: 0, lineHeight: 1.65 }}>
          Whether substances or mental health brought you to this page, you'll be met by clinicians trained to treat both - at the same time.
        </p>
        <div style={{ display: 'flex', gap: 16, flexWrap: 'wrap', justifyContent: 'center', marginTop: 8 }}>
          <Button variant="primary" size="lg" href="/substance-abuse">Substance Recovery</Button>
          <Button variant="secondary-dark" size="lg" href="/mental-health">Mental Health Care</Button>
        </div>
      </div>
    </section>
  );
}

function SuccessStory() {
  return (
    <section className="sbhg-section" style={{ background: 'var(--cream-50)' }}>
      <div className="sbhg-container" style={{ maxWidth: 860, margin: '0 auto', textAlign: 'center' }}>
        <span style={{ fontFamily: 'var(--font-display)', fontWeight: 800, fontSize: 80, lineHeight: .8, color: 'var(--gold-500)' }}>{'“'}</span>
        <p style={{ fontFamily: 'var(--font-display)', fontWeight: 600, fontSize: 'clamp(22px,2.6vw,30px)', lineHeight: 1.4, color: 'var(--ink-900)', margin: '8px 0 24px', letterSpacing: '.005em' }}>
          For years I was told to fix the drinking first, then the depression - or the other way around. Here, both were finally treated as one. That's the first time anything actually held.
        </p>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 12 }}>
          <span style={{ width: 44, height: 44, borderRadius: '50%', background: 'var(--navy-800)', color: 'var(--gold-300)', display: 'inline-flex', alignItems: 'center', justifyContent: 'center', fontFamily: 'var(--font-display)', fontWeight: 800 }}>R</span>
          <span style={{ textAlign: 'left' }}>
            <span style={{ display: 'block', fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: 15, color: 'var(--ink-900)' }}>Renee K.</span>
            <span style={{ display: 'block', fontFamily: 'var(--font-body)', fontSize: 13.5, color: 'var(--gray-600)' }}>Alumni, 2024</span>
          </span>
        </div>
      </div>
    </section>
  );
}

export default function DualDiagnosis() {
  return (
    <Layout active="Dual Diagnosis" hero={{
      eyebrow: 'Dual Diagnosis', title: "When it's both, treat both", crumb: 'Dual Diagnosis',
      subtitle: 'Substance use and mental health conditions so often travel together. We treat them at the same time, with one integrated team - because treating one and ignoring the other rarely works.',
      slotId: 'dd-hero',
    }}>
      <CtaStrip />
      <SplitFeature
        eyebrow="Integrated treatment" title="Co-occurring, by design"
        body={['A dual diagnosis means a substance use disorder and a mental health condition are present together. Treated separately, each can quietly undo the progress of the other.', 'Our model brings psychiatry, addiction medicine, and therapy into one coordinated plan - so nothing falls through the cracks between two systems.']}
        bullets={['One team for both conditions', 'Continuous monitoring and plan adjustment', 'Addiction medicine + psychiatry under one roof']}
        cta="Verify Your Coverage" ctaHref="#verify" slotId="dd-intro" tone="calm" bg="var(--white)" />
      <TwoStep />
      <ChipGrid id="substances" eyebrow="Substances" title="Substances we address"
        items={DD_SUBS} icon="shield-plus" bg="var(--cream-50)" />
      <ChipGrid id="disorders" eyebrow="Conditions" title="Mental health conditions we treat"
        items={DD_DIS} icon="brain" bg="var(--white)" />
      <DualPaths />
      <SuccessStory />
      <ModalitiesGrid bg="var(--white)" />
      <InsuranceWall />
    </Layout>
  );
}
