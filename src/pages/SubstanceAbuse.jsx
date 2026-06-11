import React from 'react';
import { Layout, CtaStrip, SplitFeature, ChipGrid, ModalitiesGrid, Testimonials, InsuranceWall } from '../components/shared';
import { SectionHeading, IconCircle } from '../ds/index';
import { Ico } from '../components/Ico';

const SA_SUBS = [
  ['Alcohol', 'Medically supported withdrawal and a path beyond cravings.', '#substances'],
  ['Opioids', 'MAT-informed care for prescription and illicit opioid dependence.', '#substances'],
  ['Methamphetamine', 'Stimulant-specific recovery with cognitive and mood support.', '#substances'],
  ['Cocaine', 'Breaking the cycle with structure, therapy, and community.', '#substances'],
  ['Benzodiazepines', 'Careful, physician-guided tapering and stabilization.', '#substances'],
  ['Marijuana', 'Support for dependence that has started to cost you more than it gives.', '#substances'],
];

function Alumni() {
  const items = [
    ['users-round', 'Alumni community', 'Stay connected through regular events, milestones, and a network that genuinely shows up for one another.'],
    ['calendar-heart', 'Ongoing support groups', 'Weekly peer groups keep accountability and encouragement within reach long after discharge.'],
    ['handshake', 'Mentorship & networking', 'Give back and grow forward — alumni support those who are earlier in their journey.'],
  ];
  return (
    <section className="sbhg-section" style={{ background: 'var(--navy-900)' }}>
      <div className="sbhg-container">
        <SectionHeading eyebrow="Beyond treatment" align="center" onDark>An alumni community for life</SectionHeading>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: 28, marginTop: 48 }}>
          {items.map(([icon, title, body]) => (
            <div key={title} style={{ background: 'var(--navy-800)', border: '1px solid rgba(201,162,75,.2)', borderRadius: 'var(--radius-card)', padding: 32, textAlign: 'center', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 16 }}>
              <IconCircle size={72}><Ico name={icon} size={30} c="var(--gold-300)" /></IconCircle>
              <h3 style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: 19, textTransform: 'uppercase', letterSpacing: '.03em', color: '#fff', margin: 0 }}>{title}</h3>
              <p style={{ fontFamily: 'var(--font-body)', fontSize: 15.5, lineHeight: 1.65, color: 'rgba(255,255,255,.74)', margin: 0 }}>{body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default function SubstanceAbuse() {
  return (
    <Layout active="Substance Abuse" hero={{
      eyebrow: 'Substance Abuse', title: 'Recovery on your terms', crumb: 'Substance Abuse',
      subtitle: 'From your first call through life after treatment, our continuum meets you exactly where you are — with medical expertise and steady, judgment-free support.',
      slotId: 'sa-hero',
    }}>
      <CtaStrip />
      <SplitFeature
        eyebrow="Recovery is possible" title="A continuum that holds you"
        body={['Addiction is not a failure of willpower — it is a treatable health condition. Our care moves with you across every stage, from medical detox through extended outpatient and alumni support.', 'You set the goals. We bring the clinical depth, the warmth, and the structure to help you reach them and stay there.']}
        bullets={['Detox through aftercare under one roof', 'Plans personalized to your history and goals', 'Whole-person care: body, mind, and relationships']}
        cta="Verify Your Coverage" ctaHref="#verify" slotId="sa-intro" tone="canyon" bg="var(--white)"
      />
      <ChipGrid id="substances" eyebrow="Substances we treat" title="Care for what you're facing"
        intro="Every substance shapes the body and mind differently. Your plan is built for yours."
        items={SA_SUBS} icon="shield-plus" bg="var(--cream-50)" />
      <SplitFeature
        id="detox" eyebrow="Medical Detox" title="A safe, supervised first step"
        body={['For many substances, stopping suddenly without supervision is genuinely dangerous. Our medical team manages withdrawal with around-the-clock monitoring, comfort, and dignity.', 'Detox is where recovery becomes possible — a stable foundation to begin the real work.']}
        bullets={['Physician-led withdrawal protocols', '24/7 nursing in a calm, private setting', 'Seamless step-down into ongoing care']}
        cta="See Our Programs" ctaHref="/programs#detox" slotId="sa-detox" tone="calm" flip bg="var(--white)" />
      <SplitFeature
        eyebrow="Extended Care" title="Time enough to truly heal"
        body="Lasting change rarely happens on a 28-day clock. Where it serves you, we offer longer durations and step-down levels of care — because the strongest outcomes come from not rushing the foundation."
        bullets={['Flexible lengths of stay matched to your progress', 'Gradual transitions, never abrupt endings', 'Relapse-prevention woven through every phase']}
        cta="Explore Levels of Care" ctaHref="/programs" slotId="sa-extended" tone="sand" bg="var(--cream-50)" />
      <Alumni />
      <SplitFeature
        id="family" eyebrow="Family Services" title="Recovery is a family story"
        body="Addiction affects everyone who loves you — and healing can, too. We bring families into the process with education, guided sessions, and a monthly support group, so the people in your corner can heal alongside you."
        bullets={['Family therapy guided by your clinician', 'Education on boundaries and communication', 'Monthly family support group']}
        cta="Family Therapy" ctaHref="/programs#family" slotId="sa-family" tone="dusk" flip bg="var(--white)" />
      <ModalitiesGrid bg="var(--cream-50)" />
      <Testimonials title="Recovery, in their words" />
      <InsuranceWall />
    </Layout>
  );
}
