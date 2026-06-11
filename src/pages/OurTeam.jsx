import React from 'react';
import { Layout, CtaBand } from '../components/shared';
import { SectionHeading, Badge } from '../ds/index';
import { Slot } from '../components/Slot';

const TEAM = [
  { id: 'dr-mara', name: 'Dr. Mara Whitfield, MD', title: 'Medical Director', cred: 'Board-certified Psychiatrist',
    bio: 'Leads psychiatric care and medication management across every level, with two decades treating co-occurring mood and substance use disorders. [NEEDS-CLIENT] Replace with SBHG bio.' },
  { id: 'james-okafor', name: 'James Okafor, LPC', title: 'Chief Clinical Officer · Co-Founder', cred: 'Licensed Professional Counselor',
    bio: 'Built the clinical model around dignity and evidence — and still runs a weekly group. His own recovery shapes how the whole team shows up. [NEEDS-CLIENT] Replace with SBHG bio.' },
  { id: 'elena-cruz', name: 'Elena Cruz, LCSW', title: 'Clinical Director', cred: 'Licensed Clinical Social Worker',
    bio: 'Oversees programming and clinician development, with deep expertise in trauma-informed care and family systems work. [NEEDS-CLIENT] Replace with SBHG bio.' },
  { id: 'marcus-bell', name: 'Marcus Bell', title: 'Chief Executive Officer', cred: 'Healthcare Operations',
    bio: 'Keeps the lights warm and the standards high — responsible for an experience that feels more like care than process. [NEEDS-CLIENT] Replace with SBHG bio.' },
  { id: 'nina-patel', name: 'Nina Patel, PMHNP', title: 'Psychiatric Nurse Practitioner', cred: 'PMHNP-BC',
    bio: 'Partners with clients on medication and stabilization, known for never rushing a conversation. [NEEDS-CLIENT] Replace with SBHG bio.' },
  { id: 'theo-ramirez', name: 'Theo Ramirez, LAC', title: 'Primary Therapist', cred: 'Licensed Associate Counselor',
    bio: 'Specializes in motivational work and relapse prevention, meeting people exactly where they are. [NEEDS-CLIENT] Replace with SBHG bio.' },
  { id: 'sara-lindqvist', name: 'Sara Lindqvist, RDN', title: 'Wellness & Nutrition', cred: 'Registered Dietitian',
    bio: 'Brings the body back into recovery through nutrition, fitness, and holistic practice. [NEEDS-CLIENT] Replace with SBHG bio.' },
  { id: 'admissions', name: 'Your Admissions Team', title: 'First Point of Contact', cred: 'Available 24/7',
    bio: 'The voices you meet first — patient, judgment-free, and ready to help you understand every option. [NEEDS-CLIENT] Replace with SBHG bio.' },
];

function TeamIntro() {
  return (
    <section className="sbhg-section" style={{ background: 'var(--white)' }}>
      <div className="sbhg-container" style={{ maxWidth: 880, margin: '0 auto', textAlign: 'center', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 24 }}>
        <SectionHeading eyebrow="The people behind the care" align="center">Decades of experience, all in your corner</SectionHeading>
        <p style={{ fontFamily: 'var(--font-body)', fontSize: 'var(--body-lg)', lineHeight: 1.7, color: 'var(--gray-600)', margin: 0 }}>
          Recovery is built on relationships. Our clinicians bring [NEEDS-CLIENT] years of combined experience — and a shared belief that you deserve to be treated as a whole person, never a case number.
        </p>
        <div style={{ display: 'inline-flex', alignItems: 'center', gap: 10 }}>
          <Badge variant="outline-gold">Joint Commission Accredited</Badge>
          <Badge variant="outline-gold">LegitScript Certified</Badge>
        </div>
      </div>
    </section>
  );
}

function TeamGrid() {
  return (
    <section className="sbhg-section" style={{ background: 'var(--cream-50)' }}>
      <div className="sbhg-container">
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2,1fr)', gap: 28 }}>
          {TEAM.map((m) => (
            <article key={m.id} style={{ display: 'grid', gridTemplateColumns: '160px 1fr', gap: 24, background: 'var(--white)', border: '1px solid var(--gray-200)', borderRadius: 'var(--radius-card)', padding: 24, boxShadow: 'var(--shadow-soft)' }}>
              <div style={{ width: 160 }}>
                <Slot id={`team-${m.id}`} h={180} ratio="1 / 1" tone="sand" placeholder="Drop headshot" radius={16} />
              </div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
                <h3 style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: 19, letterSpacing: '.01em', color: 'var(--ink-900)', margin: 0, lineHeight: 1.2 }}>{m.name}</h3>
                <div style={{ fontFamily: 'var(--font-display)', fontWeight: 600, fontSize: 12.5, letterSpacing: '.08em', textTransform: 'uppercase', color: 'var(--gold-700)' }}>{m.title}</div>
                <div style={{ fontFamily: 'var(--font-body)', fontSize: 13.5, color: 'var(--gray-600)', fontStyle: 'italic' }}>{m.cred}</div>
                <p style={{ fontFamily: 'var(--font-body)', fontSize: 14.5, lineHeight: 1.6, color: 'var(--gray-600)', margin: '6px 0 0' }}>{m.bio}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default function OurTeam() {
  return (
    <Layout active="Our Team" hero={{
      eyebrow: 'Our Team', title: 'A team that sees you', crumb: 'Our Team',
      subtitle: 'Licensed clinicians, physicians, and a support team who chose this work for a reason. Meet the people who will walk beside you.',
      slotId: 'team-hero',
    }}>
      <TeamIntro />
      <TeamGrid />
      <CtaBand title="Want to meet the team?" body="The best way to know if we're the right fit is to talk. Reach out and we'll set up a conversation — no pressure, complete confidentiality." primary="Verify Insurance" secondary="Contact Us" secondaryHref="/contact" />
    </Layout>
  );
}
