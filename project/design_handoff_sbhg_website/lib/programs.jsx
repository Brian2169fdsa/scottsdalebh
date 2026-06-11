/* global React, PageShell, CtaStrip, SplitFeature, CtaBand, InsuranceWall,
   SectionHeading, ProgramCard, Slot, Ico, Badge, Button */

function ProgramOverview() {
  const progs = [
    { badge: 'Detox', title: 'Medical Detox', icon: 'heart-pulse', body: 'Physician-led, around-the-clock withdrawal management.', href: '#detox' },
    { badge: 'Stabilization', title: 'MH Stabilization', icon: 'shield-check', body: 'A secure, calm reset during acute mental health crisis.', href: '#stabilization' },
    { badge: 'Residential', title: 'Inpatient', icon: 'bed-double', body: 'Immersive 24/7 care in a licensed, home-like setting.', href: '#inpatient' },
    { badge: 'PHP / IOP / OP', title: 'Outpatient', icon: 'sun', body: 'Step-down structure that flexes around your real life.', href: '#outpatient' },
    { badge: 'Evening IOP', title: 'Evening IOP', icon: 'moon', body: 'Evidence-based care after work, three nights a week.', href: '#evening' },
    { badge: 'Family', title: 'Family Therapy', icon: 'users-round', body: 'Healing the relationships that recovery depends on.', href: '#family' },
  ];
  return (
    <section className="sbhg-section" style={{ background: 'var(--white)' }}>
      <div className="sbhg-container">
        <SectionHeading eyebrow="The full continuum" align="center">One continuum, every level of care</SectionHeading>
        <p style={{ fontFamily: 'var(--font-body)', fontSize: 'var(--body-lg)', lineHeight: 1.7, color: 'var(--gray-600)', textAlign: 'center', maxWidth: 680, margin: '20px auto 0' }}>
          As your needs change, your care steps down with you — never an abrupt ending, always a next step.
        </p>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: 22, marginTop: 48 }}>
          {progs.map((p) => (
            <ProgramCard key={p.title} badge={p.badge} title={p.title} href={p.href} icon={<Ico name={p.icon} size={26} c="var(--gold-700)" />}>{p.body}</ProgramCard>
          ))}
        </div>
        <p style={{ textAlign: 'center', marginTop: 24, fontFamily: 'var(--font-body)', fontSize: 13, color: 'var(--gray-600)' }}>[NEEDS-CLIENT] Confirm which levels of care SBHG actually offers.</p>
      </div>
    </section>
  );
}

/* Outpatient schedule cards */
function OutpatientCards() {
  const cards = [
    ['PHP', 'Partial Hospitalization', 'Full days, 9 AM – 4 PM with a lunch hour. The most structured outpatient option — a true daytime program with evenings at home.'],
    ['IOP', 'Intensive Outpatient', 'Three hours a day, mornings (9–12) or afternoons (1–4). Serious structure that still leaves room for work or school.'],
    ['OP', 'Standard Outpatient', 'Four to six hours a week of individual and group therapy. Ongoing support as momentum becomes routine.'],
  ];
  return (
    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: 22, marginTop: 40 }}>
      {cards.map(([badge, title, body]) => (
        <div key={badge} style={{ background: 'var(--white)', border: '1px solid var(--gray-200)', borderRadius: 'var(--radius-card)', padding: 30, boxShadow: 'var(--shadow-soft)', display: 'flex', flexDirection: 'column', gap: 12 }}>
          <Badge variant="solid-gold">{badge}</Badge>
          <h3 style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: 19, letterSpacing: '.02em', color: 'var(--ink-900)', margin: '4px 0 0' }}>{title}</h3>
          <p style={{ fontFamily: 'var(--font-body)', fontSize: 15, lineHeight: 1.65, color: 'var(--gray-600)', margin: 0 }}>{body}</p>
        </div>
      ))}
    </div>
  );
}

function ContinuumList() {
  const steps = [
    ['30-day Residential (RTC)', 'Immersive, 24/7 stabilization and skill-building.'],
    ['30-day Intensive (PHP)', 'Full-day clinical structure with evenings at home.'],
    ['90-day Comprehensive (PHP/IOP)', 'Sustained care as independence grows.'],
    ['Extended Aftercare (IOP/OP)', 'Lighter-touch support to protect your progress.'],
    ['Family Workshop & Alumni', 'A community and resources for the long road after.'],
  ];
  return (
    <section id="continuum" style={{ background: 'var(--navy-900)', padding: '92px 0' }}>
      <div className="sbhg-container">
        <SectionHeading eyebrow="Continuum of care" align="center" onDark>A path that steps down with you</SectionHeading>
        <div style={{ marginTop: 48, maxWidth: 760, marginInline: 'auto', display: 'flex', flexDirection: 'column' }}>
          {steps.map(([title, body], i) => (
            <div key={title} style={{ display: 'flex', gap: 22, paddingBottom: i === steps.length - 1 ? 0 : 28 }}>
              <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                <span style={{ width: 16, height: 16, borderRadius: '50%', background: 'var(--grad-gold)', flexShrink: 0, marginTop: 4 }} />
                {i < steps.length - 1 && <span style={{ width: 2, flex: 1, background: 'rgba(201,162,75,.3)', marginTop: 6 }} />}
              </div>
              <div style={{ paddingBottom: 4 }}>
                <h3 style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: 18, textTransform: 'uppercase', letterSpacing: '.03em', color: '#fff', margin: '0 0 6px' }}>{title}</h3>
                <p style={{ fontFamily: 'var(--font-body)', fontSize: 15.5, lineHeight: 1.65, color: 'rgba(255,255,255,.72)', margin: 0 }}>{body}</p>
              </div>
            </div>
          ))}
        </div>
        <p style={{ textAlign: 'center', marginTop: 40, fontFamily: 'var(--font-body)', fontSize: 13, color: 'rgba(255,255,255,.5)' }}>[NEEDS-CLIENT] Durations and step-downs vary by client — confirm SBHG's structure.</p>
      </div>
    </section>
  );
}

function OutpatientSection() {
  return (
    <section id="outpatient" className="sbhg-section" style={{ background: 'var(--cream-50)' }}>
      <div className="sbhg-container">
        <span id="php" /><span id="iop" />
        <SectionHeading eyebrow="Outpatient" align="center">Care that lets life keep moving</SectionHeading>
        <p style={{ fontFamily: 'var(--font-body)', fontSize: 'var(--body-lg)', lineHeight: 1.7, color: 'var(--gray-600)', textAlign: 'center', maxWidth: 680, margin: '20px auto 0' }}>
          Live at home, keep working or studying, and still get serious clinical support. Interactive Journaling anchors the curriculum across every outpatient level.
        </p>
        <OutpatientCards />
      </div>
    </section>
  );
}

function ProgramsPage() {
  return (
    <PageShell active="Programs" hero={{
      eyebrow: 'Levels of Care', title: 'Programs built around your life', crumb: 'Programs',
      subtitle: 'From medical detox to evening outpatient, every level of care is part of one continuum — so support flexes with you instead of starting over.',
      slotId: 'pr-hero',
    }}>
      <CtaStrip />
      <ProgramOverview />
      <SplitFeature
        id="detox" eyebrow="Medical Detox" title="A safe place to begin"
        body="Withdrawal from alcohol and many other substances can be medically dangerous without supervision. Our physician-led detox manages it safely, around the clock, with comfort and dignity — then transitions you seamlessly into ongoing care."
        bullets={['Medically managed withdrawal protocols', '24/7 nursing in a calm, private setting', 'Physician-led care for complex cases']}
        cta="Verify Your Coverage" ctaHref="#verify" slotId="pr-detox" tone="calm" bg="var(--white)" />
      <SplitFeature
        id="stabilization" eyebrow="Mental Health Stabilization" title="Steady ground in a crisis"
        body="When things reach a breaking point, stabilization provides rapid assessment and a secure, supportive setting to bring you back to a safe baseline — the gateway to the deeper work that follows."
        bullets={['24-hour crisis intervention team', 'Medication management & monitoring', 'A clear plan for what comes next']}
        cta="Talk to Admissions" ctaHref="contact.html" slotId="pr-stab" tone="dusk" flip bg="var(--cream-50)" />
      <SplitFeature
        id="inpatient" eyebrow="Inpatient / Residential" title="Room to focus fully on you"
        body="Residential treatment means staying in a licensed, home-like setting with 24/7 clinical supervision. With daily life stripped of its usual pressures, you can give recovery your whole attention."
        bullets={['Individual & group psychotherapy', 'Psychiatry & medication management', 'Diet, fitness, and case management']}
        cta="See the Continuum" ctaHref="#continuum" slotId="pr-inpatient" tone="sand" bg="var(--white)" />
      <ContinuumList />
      <OutpatientSection />
      <SplitFeature
        id="evening" eyebrow="Evening IOP" title="Keep your life moving"
        body="Built for adults stable enough to live at home, Evening IOP delivers the same evidence-based care after the workday — three nights a week, with relapse-prevention and momentum at its core."
        bullets={['Mon · Wed · Thu, 5:30 – 8:30 PM', 'For full-time workers, students & parents', 'A strong step-down from residential or PHP']}
        cta="Verify Your Coverage" ctaHref="#verify" slotId="pr-evening" tone="canyon" flip bg="var(--cream-50)" />
      <SplitFeature
        id="family" eyebrow="Family Therapy" title="Healing, together"
        body="You define who counts as family — and we bring them in. Through guided sessions and a monthly support group, the people who love you build the understanding and tools to support your recovery for the long haul."
        bullets={['You choose who is part of the work', 'Internal Family Systems among our methods', 'Monthly family support group on Zoom']}
        cta="Talk to Admissions" ctaHref="contact.html" slotId="pr-family" tone="calm" bg="var(--white)" />
      <CtaBand title="Not sure which level is right?" body="A short conversation with our admissions team is the fastest way to find out. No pressure, no obligation — just clarity." primary="Verify Insurance" secondary="Call Now" secondaryHref="tel:+14805550100" />
      <InsuranceWall />
    </PageShell>
  );
}
