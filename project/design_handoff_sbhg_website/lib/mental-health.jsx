/* global React, PageShell, CtaStrip, SplitFeature, ChipGrid, ModalitiesGrid,
   Testimonials, InsuranceWall, SectionHeading, Slot, Ico, IconCircle, Badge */

const MH_DISORDERS = [
  ['PTSD & Trauma', 'Process what happened in a safe, trauma-informed setting.'],
  ['Anxiety', 'Quiet the noise and rebuild a sense of steady ground.'],
  ['Depression', 'Find your way back toward energy, meaning, and connection.'],
  ['Bipolar Disorder', 'Stabilize mood with integrated psychiatry and therapy.'],
  ['Personality Disorders', 'Long-term skills for relationships and emotional regulation.'],
].map(([l, d]) => [l, d, '#disorders']);

function ClinicalFoundation() {
  const cards = [
    ['book-open', 'Interactive Journaling', 'Our experiential, client-centered core curriculum — you do the work on the page, then bring it to life in group and individual sessions.'],
    ['stethoscope', 'Weekly psychiatry', 'Psychiatric evaluation and medication management, reviewed weekly and adjusted around how you actually feel.'],
    ['clipboard-list', 'Case management', 'Coordinated care and discharge planning so the transition out is as supported as the time inside.'],
    ['flower-2', 'Holistic practices', 'Acupuncture, yoga, and fitness round out a plan that treats the whole person, not just the diagnosis.'],
  ];
  return (
    <section className="sbhg-section" style={{ background: 'var(--white)' }}>
      <div className="sbhg-container">
        <SectionHeading eyebrow="Our clinical foundation" align="center">Method, matched to you</SectionHeading>
        <p style={{ fontFamily: 'var(--font-body)', fontSize: 'var(--body-lg)', lineHeight: 1.7, color: 'var(--gray-600)', textAlign: 'center', maxWidth: 680, margin: '20px auto 0' }}>
          We blend proven modalities — CBT, DBT, ACT, EMDR, motivational interviewing and more — around a consistent clinical spine.
        </p>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4,1fr)', gap: 22, marginTop: 48 }}>
          {cards.map(([icon, title, body]) => (
            <div key={title} style={{ display: 'flex', flexDirection: 'column', gap: 14, padding: 28, background: 'var(--cream-50)', border: '1px solid var(--gray-200)', borderRadius: 'var(--radius-card)', boxShadow: 'var(--shadow-soft)' }}>
              <span style={{ width: 52, height: 52, borderRadius: '50%', border: '1.5px solid var(--gold-500)', display: 'inline-flex', alignItems: 'center', justifyContent: 'center', color: 'var(--gold-700)' }}><Ico name={icon} size={22} c="var(--gold-700)" /></span>
              <h3 style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: 17, letterSpacing: '.02em', color: 'var(--ink-900)', margin: 0 }}>{title}</h3>
              <p style={{ fontFamily: 'var(--font-body)', fontSize: 14.5, lineHeight: 1.6, color: 'var(--gray-600)', margin: 0 }}>{body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* Weekly group schedule — the signature trust device */
function GroupSchedule() {
  const days = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'];
  const rows = [
    ['9:00', 'Mindfulness & Check-In', ['Process group', 'Skills lab', 'Process group', 'Skills lab', 'Process group'], 'M. Reyes, LCSW'],
    ['10:30', 'Core Curriculum', ['CBT', 'DBT', 'ACT', 'Trauma group', 'Relapse prevention'], 'J. Okafor, LPC'],
    ['12:00', 'Lunch & Reflection', ['—', '—', '—', '—', '—'], ''],
    ['1:00', 'Experiential Track', ['Art therapy', 'Yoga', 'Music therapy', 'Fitness', 'Nature group'], 'Holistic team'],
    ['2:30', 'Closing Group', ['Goals', 'Gratitude', 'Goals', 'Gratitude', 'Week in review'], 'Primary therapist'],
  ];
  return (
    <section className="sbhg-section" style={{ background: 'var(--cream-50)' }}>
      <div className="sbhg-container">
        <SectionHeading eyebrow="A published rhythm" align="center">Your week, structured for momentum</SectionHeading>
        <p style={{ fontFamily: 'var(--font-body)', fontSize: 'var(--body-lg)', lineHeight: 1.7, color: 'var(--gray-600)', textAlign: 'center', maxWidth: 680, margin: '20px auto 36px' }}>
          A predictable schedule is part of the medicine. Here's an illustrative week — every group is led by a licensed clinician.
        </p>
        <div style={{ overflowX: 'auto', borderRadius: 'var(--radius-card)', border: '1px solid var(--gray-200)', boxShadow: 'var(--shadow-soft)', background: 'var(--white)' }}>
          <table style={{ width: '100%', borderCollapse: 'collapse', minWidth: 820, fontFamily: 'var(--font-body)' }}>
            <thead>
              <tr style={{ background: 'var(--navy-800)' }}>
                <th style={thStyle}>Time</th>
                {days.map((d) => <th key={d} style={thStyle}>{d}</th>)}
              </tr>
            </thead>
            <tbody>
              {rows.map(([time, name, cells, fac], ri) => (
                <tr key={time} style={{ borderTop: '1px solid var(--gray-200)', background: ri % 2 ? 'var(--cream-50)' : 'var(--white)' }}>
                  <td style={{ ...tdStyle, fontFamily: 'var(--font-display)', fontWeight: 700, color: 'var(--gold-700)', whiteSpace: 'nowrap' }}>
                    {time}
                    <span style={{ display: 'block', fontFamily: 'var(--font-body)', fontWeight: 400, fontSize: 12, color: 'var(--gray-600)', marginTop: 4 }}>{name}</span>
                  </td>
                  {cells.map((c, ci) => (
                    <td key={ci} style={{ ...tdStyle, color: c === '—' ? 'var(--gray-200)' : 'var(--ink-900)' }}>{c}</td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p style={{ textAlign: 'center', marginTop: 22, fontFamily: 'var(--font-body)', fontSize: 13, color: 'var(--gray-600)' }}>[NEEDS-CLIENT] Confirm SBHG's actual group calendar, facilitators &amp; credentials — and whether to publish it.</p>
      </div>
    </section>
  );
}
const thStyle = { padding: '16px 18px', textAlign: 'left', fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: 12, letterSpacing: '.08em', textTransform: 'uppercase', color: 'var(--gold-300)' };
const tdStyle = { padding: '16px 18px', fontSize: 14.5, verticalAlign: 'top' };

function EveningCalendar() {
  const rows = [
    ['Evening IOP', 'Mon · Wed · Thu', '5:30 – 8:30 PM', 'For adults stable at home — relapse prevention & momentum.'],
    ['Family Support Group', 'First Tuesday monthly', '6:00 – 7:30 PM', 'Free, open to loved ones. Held on Zoom.'],
    ['Alumni Night', 'Last Thursday monthly', '6:30 – 8:00 PM', 'Reconnect, celebrate milestones, give back.'],
  ];
  return (
    <section style={{ background: 'var(--navy-900)', padding: '92px 0' }}>
      <div className="sbhg-container">
        <SectionHeading eyebrow="Evenings, family & alumni" align="center" onDark>Care that fits a full life</SectionHeading>
        <div style={{ marginTop: 44, display: 'flex', flexDirection: 'column', gap: 14 }}>
          {rows.map(([name, days, time, desc]) => (
            <div key={name} style={{ display: 'grid', gridTemplateColumns: '1.1fr 1fr .8fr 1.6fr', gap: 20, alignItems: 'center', background: 'var(--navy-800)', border: '1px solid rgba(201,162,75,.2)', borderRadius: 16, padding: '22px 28px' }}>
              <span style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: 17, color: '#fff', letterSpacing: '.02em' }}>{name}</span>
              <span style={{ display: 'inline-flex', alignItems: 'center', gap: 9, fontFamily: 'var(--font-body)', fontSize: 14.5, color: 'rgba(255,255,255,.78)' }}><Ico name="calendar" size={16} c="var(--gold-300)" />{days}</span>
              <span style={{ display: 'inline-flex', alignItems: 'center', gap: 9, fontFamily: 'var(--font-body)', fontSize: 14.5, color: 'rgba(255,255,255,.78)' }}><Ico name="clock" size={16} c="var(--gold-300)" />{time}</span>
              <span style={{ fontFamily: 'var(--font-body)', fontSize: 14, color: 'rgba(255,255,255,.62)' }}>{desc}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function MentalHealthPage() {
  return (
    <PageShell active="Mental Health" hero={{
      eyebrow: 'Mental Health', title: 'Care for the whole you', crumb: 'Mental Health',
      subtitle: 'Primary mental health treatment for adults — many of whom have no substance-use history at all. Whatever brought you here, we treat the person, not just the diagnosis.',
      slotId: 'mh-hero',
    }}>
      <CtaStrip />
      <SplitFeature
        eyebrow="Primary mental health" title="You belong here"
        body={['Not everyone who needs intensive mental health care has struggled with substances — and you should never feel out of place for seeking help. A large share of the people we treat come to us for depression, anxiety, bipolar, or trauma alone.', "If that's you, you'll find a program designed for exactly this: psychiatric depth, real therapy, and a calm place to get well."]}
        bullets={['Adult primary psychiatric care', 'Co-occurring conditions welcome', 'No substance-use history required']}
        cta="Verify Your Coverage" ctaHref="#verify" slotId="mh-intro" tone="calm" bg="var(--white)" />
      <ClinicalFoundation />
      <ChipGrid id="disorders" eyebrow="Conditions we treat" title="What brought you here matters less than where you're going"
        items={MH_DISORDERS} icon="brain" cols={3} bg="var(--cream-50)" />
      <GroupSchedule />
      <EveningCalendar />
      <ModalitiesGrid bg="var(--white)" />
      <Testimonials title="Healing, in their words" />
      <InsuranceWall />
    </PageShell>
  );
}
