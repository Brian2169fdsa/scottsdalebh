import React, { useState } from 'react';
import { Layout } from '../components/shared';
import { SectionHeading, Button, Input, Select, IconCircle } from '../ds/index';
import { Ico } from '../components/Ico';
import { Slot } from '../components/Slot';

const PHONE = '(480) 555‑0100';
const TEL = 'tel:+14805550100';

const CONTACT_ROWS = [
  { icon: 'map-pin', label: 'Visit', value: '[NEEDS-CLIENT] Scottsdale, Arizona' },
  { icon: 'phone', label: 'Call', value: PHONE },
  { icon: 'mail', label: 'Email', value: 'admissions@scottsdalebh.com' },
  { icon: 'clock', label: 'Hours', value: 'Open 24 / 7 / 365 — admissions support always available' },
];

function ContactSection() {
  const [sent, setSent] = useState(false);
  return (
    <section className="sbhg-section" style={{ background: 'var(--white)' }}>
      <div className="sbhg-container" style={{ display: 'grid', gridTemplateColumns: '1fr 1.1fr', gap: 64, alignItems: 'start' }}>
        <div>
          <SectionHeading eyebrow="Get in touch">We're here whenever you're ready</SectionHeading>
          <p style={{ fontFamily: 'var(--font-body)', fontSize: 'var(--body-lg)', lineHeight: 1.7, color: 'var(--gray-600)', margin: '20px 0 32px' }}>
            Call, email, or send a message — a real member of our admissions team will respond, with no pressure and complete confidentiality.
          </p>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 22 }}>
            {CONTACT_ROWS.map((r) => (
              <div key={r.label} style={{ display: 'flex', gap: 16, alignItems: 'center' }}>
                <span style={{ width: 52, height: 52, borderRadius: '50%', border: '1.5px solid var(--gold-500)', display: 'inline-flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}><Ico name={r.icon} size={22} c="var(--gold-700)" /></span>
                <div>
                  <div style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: 12, letterSpacing: '.1em', textTransform: 'uppercase', color: 'var(--gold-700)' }}>{r.label}</div>
                  <div style={{ fontFamily: 'var(--font-body)', fontSize: 16, color: 'var(--ink-900)', marginTop: 2 }}>{r.value}</div>
                </div>
              </div>
            ))}
          </div>
          <div style={{ marginTop: 32 }}><Slot id="contact-map" h={220} tone="sand" placeholder="Drop a map image — Scottsdale, AZ" /></div>
        </div>
        <div style={{ background: 'var(--cream-50)', border: '1px solid var(--gray-200)', borderRadius: 'var(--radius-card)', padding: 36, boxShadow: 'var(--shadow-soft)' }}>
          {sent ? (
            <div style={{ textAlign: 'center', padding: '48px 0' }}>
              <div style={{ display: 'inline-flex', marginBottom: 16 }}><IconCircle size={64} onDark={false}><Ico name="check" size={28} c="var(--gold-700)" sw={2.4} /></IconCircle></div>
              <h3 style={{ fontFamily: 'var(--font-display)', textTransform: 'uppercase', letterSpacing: '.04em', color: 'var(--ink-900)', margin: '0 0 8px' }}>Message sent</h3>
              <p style={{ fontFamily: 'var(--font-body)', color: 'var(--gray-600)', margin: 0 }}>We'll reach out within one business day.</p>
            </div>
          ) : (
            <form onSubmit={(e) => { e.preventDefault(); setSent(true); }} style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 18 }}>
              <Input label="First Name" placeholder="Jane" required />
              <Input label="Last Name" placeholder="Doe" required />
              <Input label="Phone" type="tel" placeholder="(480) 555-0102" required />
              <Input label="Email" type="email" placeholder="jane@email.com" required />
              <div style={{ gridColumn: '1 / -1' }}><Select label="How can we help?" placeholder="Select a topic" options={['Verify insurance', 'Ask about programs', 'Speak with admissions', 'Something else']} /></div>
              <div style={{ gridColumn: '1 / -1' }}><Input label="Message" placeholder="Tell us a little about what you're looking for" /></div>
              <label style={{ gridColumn: '1 / -1', display: 'flex', gap: 10, alignItems: 'flex-start', fontFamily: 'var(--font-body)', fontSize: 13, color: 'var(--gray-600)', lineHeight: 1.5 }}>
                <input type="checkbox" style={{ marginTop: 3, accentColor: 'var(--gold-700)' }} />
                I consent to be contacted by phone, email, or SMS about treatment.
              </label>
              <div style={{ gridColumn: '1 / -1', marginTop: 2 }}><Button variant="primary" size="lg" type="submit" style={{ width: '100%' }}>Send Message</Button></div>
              <p style={{ gridColumn: '1 / -1', margin: 0, fontFamily: 'var(--font-body)', fontSize: 12.5, color: 'var(--gray-600)', lineHeight: 1.5 }}>Your information is protected under HIPAA and never sold.</p>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}

function Specialties() {
  const tags = ['Mental Health', 'Substance Abuse', 'Dual Diagnosis', 'Detox', 'Inpatient', 'PHP', 'IOP', 'Evening IOP', 'Family Therapy'];
  return (
    <section style={{ background: 'var(--navy-900)', padding: '80px 0' }}>
      <div className="sbhg-container" style={{ textAlign: 'center' }}>
        <SectionHeading eyebrow="Specialized care in Scottsdale" align="center" onDark>Whatever you're facing, start here</SectionHeading>
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: 12, justifyContent: 'center', marginTop: 36 }}>
          {tags.map((t) => (
            <span key={t} style={{ fontFamily: 'var(--font-display)', fontWeight: 600, fontSize: 13.5, letterSpacing: '.04em', color: 'rgba(255,255,255,.85)', border: '1px solid rgba(201,162,75,.4)', borderRadius: 999, padding: '10px 20px' }}>{t}</span>
          ))}
        </div>
        <div style={{ marginTop: 40 }}>
          <Button variant="primary" size="lg" href={TEL}>Call {PHONE}</Button>
        </div>
      </div>
    </section>
  );
}

function Gallery() {
  return (
    <section className="sbhg-section" style={{ background: 'var(--cream-50)' }}>
      <div className="sbhg-container">
        <SectionHeading eyebrow="Our space" align="center">A calm, dignified place to heal</SectionHeading>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4,1fr)', gap: 16, marginTop: 44 }}>
          {['calm', 'sand', 'dusk', 'canyon'].map((tone, i) => (
            <Slot key={i} id={`gallery-${i}`} h={200} ratio="3 / 4" tone={tone} placeholder="Drop a facility photo" radius={16} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default function Contact() {
  return (
    <Layout active="Contact" showVerify={false} hero={{
      eyebrow: 'Contact', title: 'Reach out — we answer', crumb: 'Contact',
      subtitle: "Open 24/7/365. Whenever you're ready, a real person is here to help you take the next step.",
      slotId: 'contact-hero',
    }}>
      <ContactSection />
      <Specialties />
      <Gallery />
    </Layout>
  );
}
