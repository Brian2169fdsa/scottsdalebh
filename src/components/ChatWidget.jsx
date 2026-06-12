import React, { useState, useRef, useEffect } from 'react';
import { Ico } from './Ico';

const PHONE = '(480) 555‑0100';
const TEL = 'tel:+14805550100';

const SUGGESTIONS = [
  'What programs do you offer?',
  'Do you accept my insurance?',
  'How do I get started?',
  'What is dual diagnosis treatment?',
];

function TypingDots() {
  return (
    <div style={{ display: 'flex', gap: 5, alignItems: 'center', padding: '4px 2px' }}>
      {[0, 1, 2].map((i) => (
        <span key={i} style={{
          width: 7, height: 7, borderRadius: '50%',
          background: 'var(--gold-500)', opacity: 0.7,
          animation: `sbhg-bounce 1.2s ease-in-out infinite`,
          animationDelay: `${i * 0.18}s`,
        }} />
      ))}
    </div>
  );
}

export function ChatWidget() {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState('');
  const [loading, setLoading] = useState(false);
  const [unread, setUnread] = useState(false);
  const bottomRef = useRef(null);

  useEffect(() => {
    if (bottomRef.current) {
      bottomRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  }, [messages, loading]);

  useEffect(() => {
    if (open) setUnread(false);
  }, [open]);

  const send = async (text) => {
    const userMsg = { role: 'user', content: text };
    const next = [...messages, userMsg];
    setMessages(next);
    setInput('');
    setLoading(true);

    try {
      const res = await fetch('/api/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ messages: next }),
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data.error || `Server error ${res.status}`);
      if (!data.content) throw new Error('Empty response');
      setMessages((prev) => [...prev, { role: 'assistant', content: data.content }]);
      if (!open) setUnread(true);
    } catch (err) {
      console.error('Chat error:', err?.message);
      setMessages((prev) => [...prev, {
        role: 'assistant',
        content: 'I\'m having trouble connecting right now. Please call us directly at ' + PHONE + ' - we\'re available 24/7 and always happy to help.',
      }]);
    } finally {
      setLoading(false);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (input.trim() && !loading) send(input.trim());
  };

  return (
    <>
      <style>{`
        @keyframes sbhg-bounce {
          0%, 80%, 100% { transform: translateY(0); opacity: 0.5; }
          40% { transform: translateY(-5px); opacity: 1; }
        }
        @keyframes sbhg-fadein {
          from { opacity: 0; transform: translateY(12px) scale(.97); }
          to   { opacity: 1; transform: translateY(0)    scale(1); }
        }
        .sbhg-chat-input::placeholder { color: rgba(255,255,255,.35); }
        @media (max-width: 768px) {
          .sbhg-chat-panel {
            left: 10px !important;
            right: 10px !important;
            bottom: 86px !important;
            width: auto !important;
            max-height: 72dvh !important;
            border-radius: 16px !important;
          }
          .sbhg-chat-btn {
            bottom: 16px !important;
            right: 16px !important;
            width: 54px !important;
            height: 54px !important;
          }
        }
      `}</style>

      {/* Floating toggle button */}
      <button
        className="sbhg-chat-btn"
        onClick={() => setOpen((o) => !o)}
        aria-label={open ? 'Close chat' : 'Open chat'}
        style={{
          position: 'fixed', bottom: 28, right: 28, zIndex: 10000,
          width: 60, height: 60, borderRadius: '50%',
          background: 'var(--navy-800)',
          border: '2px solid var(--gold-500)',
          boxShadow: '0 6px 28px rgba(0,0,0,.42)',
          cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center',
          transition: 'transform .15s, box-shadow .15s',
        }}
        onMouseEnter={(e) => { e.currentTarget.style.transform = 'scale(1.1)'; e.currentTarget.style.boxShadow = '0 8px 36px rgba(0,0,0,.5)'; }}
        onMouseLeave={(e) => { e.currentTarget.style.transform = 'none'; e.currentTarget.style.boxShadow = '0 6px 28px rgba(0,0,0,.42)'; }}
      >
        <Ico name={open ? 'x' : 'message-circle'} size={26} c="var(--gold-300)" />
        {unread && !open && (
          <span style={{
            position: 'absolute', top: 2, right: 2,
            width: 14, height: 14, borderRadius: '50%',
            background: '#E53E3E', border: '2px solid var(--navy-800)',
          }} />
        )}
      </button>

      {/* Chat panel */}
      {open && (
        <div className="sbhg-chat-panel" style={{
          position: 'fixed', bottom: 100, right: 28, zIndex: 9999,
          width: 380, maxHeight: 570,
          background: 'var(--navy-800)',
          border: '1px solid rgba(201,162,75,.28)',
          borderRadius: 20,
          boxShadow: '0 12px 56px rgba(0,0,0,.48)',
          display: 'flex', flexDirection: 'column', overflow: 'hidden',
          animation: 'sbhg-fadein .18s ease-out',
        }}>

          {/* Header */}
          <div style={{
            padding: '14px 18px',
            borderBottom: '1px solid rgba(201,162,75,.18)',
            display: 'flex', alignItems: 'center', gap: 12,
            background: 'var(--navy-900)',
          }}>
            <div style={{
              width: 42, height: 42, borderRadius: '50%',
              background: 'var(--grad-gold)',
              display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0,
            }}>
              <Ico name="heart-handshake" size={20} c="#0E1B33" />
            </div>
            <div style={{ flex: 1, minWidth: 0 }}>
              <div style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: 14.5, color: '#fff', letterSpacing: '.02em' }}>
                SBHG Admissions
              </div>
              <div style={{ fontFamily: 'var(--font-body)', fontSize: 12, color: 'rgba(255,255,255,.52)', marginTop: 1 }}>
                Powered by Claude AI · Open 24/7
              </div>
            </div>
            <a href={TEL} style={{
              display: 'inline-flex', alignItems: 'center', gap: 6,
              fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: 12,
              color: 'var(--gold-300)', textDecoration: 'none', letterSpacing: '.04em',
              flexShrink: 0,
            }}>
              <Ico name="phone" size={13} c="var(--gold-300)" /> Call
            </a>
          </div>

          {/* Messages */}
          <div style={{ flex: 1, overflowY: 'auto', padding: '16px 16px 8px', display: 'flex', flexDirection: 'column', gap: 10 }}>
            {messages.length === 0 && (
              <>
                <div style={{
                  padding: '12px 14px',
                  background: 'rgba(255,255,255,.07)',
                  borderRadius: '16px 16px 16px 4px',
                  fontFamily: 'var(--font-body)', fontSize: 14, lineHeight: 1.6,
                  color: 'rgba(255,255,255,.88)',
                }}>
                  Hi! I'm here to help you learn about our programs and your options. What can I answer for you?
                </div>
                <div style={{ display: 'flex', flexDirection: 'column', gap: 7, marginTop: 4 }}>
                  {SUGGESTIONS.map((s) => (
                    <button key={s} onClick={() => send(s)} style={{
                      textAlign: 'left', cursor: 'pointer',
                      background: 'rgba(201,162,75,.10)',
                      border: '1px solid rgba(201,162,75,.28)',
                      borderRadius: 10, padding: '9px 13px',
                      fontFamily: 'var(--font-body)', fontSize: 13.5, color: 'var(--gold-300)',
                      transition: 'background .12s',
                    }}
                      onMouseEnter={(e) => { e.currentTarget.style.background = 'rgba(201,162,75,.22)'; }}
                      onMouseLeave={(e) => { e.currentTarget.style.background = 'rgba(201,162,75,.10)'; }}>
                      {s}
                    </button>
                  ))}
                </div>
              </>
            )}

            {messages.map((m, i) => (
              <div key={i} style={{ display: 'flex', justifyContent: m.role === 'user' ? 'flex-end' : 'flex-start' }}>
                <div style={{
                  maxWidth: '82%',
                  padding: '10px 14px',
                  borderRadius: m.role === 'user' ? '16px 16px 4px 16px' : '16px 16px 16px 4px',
                  background: m.role === 'user' ? 'var(--gold-500)' : 'rgba(255,255,255,.09)',
                  fontFamily: 'var(--font-body)', fontSize: 14, lineHeight: 1.55,
                  color: m.role === 'user' ? '#fff' : 'rgba(255,255,255,.9)',
                  whiteSpace: 'pre-wrap', wordBreak: 'break-word',
                }}>
                  {m.content}
                </div>
              </div>
            ))}

            {loading && (
              <div style={{ display: 'flex', justifyContent: 'flex-start' }}>
                <div style={{
                  padding: '10px 16px',
                  borderRadius: '16px 16px 16px 4px',
                  background: 'rgba(255,255,255,.09)',
                }}>
                  <TypingDots />
                </div>
              </div>
            )}

            <div ref={bottomRef} />
          </div>

          {/* Input */}
          <div style={{ padding: '10px 14px 12px', borderTop: '1px solid rgba(201,162,75,.14)' }}>
            <form onSubmit={handleSubmit} style={{ display: 'flex', gap: 8 }}>
              <input
                className="sbhg-chat-input"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Type a message…"
                autoComplete="off"
                style={{
                  flex: 1, background: 'rgba(255,255,255,.07)',
                  border: '1px solid rgba(201,162,75,.22)',
                  borderRadius: 10, padding: '9px 13px',
                  fontFamily: 'var(--font-body)', fontSize: 14, color: '#fff',
                  outline: 'none', transition: 'border-color .15s',
                }}
                onFocus={(e) => { e.currentTarget.style.borderColor = 'var(--gold-500)'; }}
                onBlur={(e) => { e.currentTarget.style.borderColor = 'rgba(201,162,75,.22)'; }}
              />
              <button
                type="submit"
                disabled={!input.trim() || loading}
                style={{
                  width: 40, height: 40, borderRadius: 10, flexShrink: 0,
                  background: 'var(--gold-500)', border: 'none',
                  cursor: input.trim() && !loading ? 'pointer' : 'not-allowed',
                  opacity: input.trim() && !loading ? 1 : 0.45,
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  transition: 'opacity .15s',
                }}>
                <Ico name="send" size={17} c="#0E1B33" />
              </button>
            </form>
            <div style={{ marginTop: 7, textAlign: 'center', display: 'flex', justifyContent: 'center', gap: 8, alignItems: 'center', flexWrap: 'wrap' }}>
              <a href="https://claude.ai" target="_blank" rel="noopener noreferrer"
                style={{ fontFamily: 'var(--font-body)', fontSize: 11, color: 'rgba(255,255,255,.3)', textDecoration: 'none' }}>
                Powered by Claude AI
              </a>
              <span style={{ color: 'rgba(255,255,255,.2)', fontSize: 10 }}>·</span>
              <a href="https://phxcw.com" target="_blank" rel="noopener noreferrer"
                style={{ fontFamily: 'var(--font-body)', fontSize: 11, color: 'rgba(255,255,255,.38)', textDecoration: 'none' }}>
                Built by Phoenix Creative Works
              </a>
              <span style={{ color: 'rgba(255,255,255,.2)', fontSize: 10 }}>·</span>
              <a href={TEL} style={{ fontFamily: 'var(--font-body)', fontSize: 11, color: 'var(--gold-500)', textDecoration: 'none' }}>
                {PHONE}
              </a>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
