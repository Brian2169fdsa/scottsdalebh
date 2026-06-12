import React from 'react';
import { Layout, CtaStrip, InsuranceWall, FaqAccordion, SplitFeature } from '../components/shared';
import { SectionHeading, IconCircle } from '../ds/index';
import { Ico } from '../components/Ico';

const FAQ = [
  ['Will my insurance cover treatment?', 'Most major plans cover behavioral health to some degree. The fastest way to know is to verify your benefits - we will confirm coverage, in-network status, and any out-of-pocket estimate, then walk you through exactly what it means.'],
  ['How do I find out what I owe?', 'Submit the verify-insurance form or call us. With your plan details, we contact your insurer directly and translate the fine print into a plain-language summary of what to expect.'],
  ['What if my plan is not listed?', "Our payer list is not exhaustive. Even out-of-network, many plans offer meaningful behavioral health benefits - share your information and we'll check."],
  ['What about out-of-pocket costs?', 'We are transparent about cost before you commit to anything. Where insurance leaves a gap, we will discuss flexible options so finances never become the reason you wait.'],
  ['What if I have no insurance?', 'Private pay is available and often allows immediate admission with full personalization and no insurance constraints. Ask our admissions team about cash-pay options.'],
];

function AccessMission() {
  return (
    <section className="sbhg-section" style={{ background: 'var(--white)' }}>
      <div className="sbhg-container" style={{ maxWidth: 880, margin: '0 auto', textAlign: 'center', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 24 }}>
        <SectionHeading eyebrow="Reclaim your future" align="center">Cost should never decide whether you get well</SectionHeading>
        <p style={{ fontFamily: 'var(--font-body)', fontSize: 'var(--body-lg)', lineHeight: 1.7, color: 'var(--gray-600)', margin: 0 }}>
          We work with most major insurers and offer flexible private-pay options - and we handle the paperwork so you can focus on what matters. Verifying your benefits is free, confidential, and carries no obligation.
        </p>
      </div>
    </section>
  );
}

function AdmissionSteps() {
  const steps = [
    ['phone-call', 'Reach out', 'Call or submit the form. A real member of our admissions team listens and answers your questions.'],
    ['file-check', 'Verify benefits', 'We confirm your coverage - usually within one business day - and explain exactly what it means.'],
    ['door-open', 'Begin care', 'With a plan and a start date in hand, your recovery begins. We coordinate everything in between.'],
  ];
  return (
    <section style={{ background: 'var(--navy-900)', padding: '92px 0' }}>
      <div className="sbhg-container">
        <SectionHeading eyebrow="How admissions works" align="center" onDark>Three steps, one phone call</SectionHeading>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: 28, marginTop: 48 }}>
          {steps.map(([icon, title, body], i) => (
            <div key={title} style={{ textAlign: 'center', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 16 }}>
              <IconCircle size={76}><Ico name={icon} size={30} c="var(--gold-300)" /></IconCircle>
              <div style={{ fontFamily: 'var(--font-display)', fontWeight: 800, fontSize: 14, letterSpacing: '.12em', color: 'var(--gold-300)' }}>STEP {i + 1}</div>
              <h3 style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: 19, textTransform: 'uppercase', letterSpacing: '.03em', color: '#fff', margin: 0 }}>{title}</h3>
              <p style={{ fontFamily: 'var(--font-body)', fontSize: 15.5, lineHeight: 1.65, color: 'rgba(255,255,255,.74)', margin: 0, maxWidth: 300 }}>{body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default function Insurance() {
  return (
    <Layout active="Insurance" hero={{
      eyebrow: 'Insurance & Admissions', title: 'Getting started is simple', crumb: 'Insurance & Admissions',
      subtitle: 'Verify your coverage, understand your options, and take the first step - all in one place, all confidential.',
      slotId: 'ins-hero',
    }}>
      <CtaStrip />
      <AccessMission />
      <InsuranceWall />
      <AdmissionSteps />
      <SplitFeature
        eyebrow="Private pay" title="Care without insurance constraints"
        body="Choosing to pay privately can mean immediate admission, full flexibility, and a plan shaped entirely around you - no coverage limits dictating your care. We blend in-network and cash-pay options to fit your situation."
        bullets={['Immediate admission, when time matters', 'No insurance-driven limits on your plan', 'Premier, fully personalized care']}
        cta="Talk to Admissions" ctaHref="/contact" slotId="ins-private" tone="sand" bg="var(--white)" />
      <FaqAccordion eyebrow="Good to know" title="Insurance, answered" items={FAQ} bg="var(--cream-50)" />
    </Layout>
  );
}
