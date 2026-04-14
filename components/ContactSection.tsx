'use client'

import type { profileData, contactData } from '@/lib/portfolio-data'

interface ContactSectionProps {
  profile: typeof profileData
  contact: typeof contactData
}

export default function ContactSection({ profile, contact }: ContactSectionProps) {
  const socials = Object.entries(profile.social).map(([platform, url]) => ({
    platform,
    url,
    icon: platform.slice(0, 2).toUpperCase(),
    handle: url.split('/').pop() ?? platform,
  }))

  return (
    <section className="min-h-screen pt-24 pb-16 px-6 md:px-12 lg:px-20" style={{ background: 'var(--bg)' }}>
      <div className="max-w-6xl mx-auto">

        {/* Header */}
        <div className="mb-12 animate-fade-up">
          <span className="font-mono text-xs tracking-[0.3em] uppercase" style={{ color: 'var(--text-muted)' }}>
           Contact
          </span>
          <div className="section-line mt-3" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">

          {/* Left */}
          <div className="animate-fade-up delay-100">
            <h2 className="font-display text-[clamp(3rem,7vw,6rem)] leading-none mb-2" style={{ color: 'var(--text)' }}>
              CONTACT
            </h2>
            <div
              className="font-display text-[clamp(2rem,5vw,4.5rem)] leading-none mb-8"
              style={{ color: 'transparent', WebkitTextStroke: '1px var(--text-muted)' }}
            >
              {/* ME */}
            </div>

            {/* Info rows */}
            <div className="space-y-4 mb-8">
              {[
                { label: 'Email', value: contact.email, href: `mailto:${contact.email}` },
                // { label: 'Location', value: contact.location, href: contact.mapUrl },
                { label: 'University', value: profile.studying, href: undefined },
                { label: 'Faculty', value: profile.faculty, href: undefined },
              ].map(({ label, value, href }) => (
                <div
                  key={label}
                  className="flex items-start gap-4 p-4 rounded-xl"
                  style={{ background: 'var(--bg-card)', border: '1px solid var(--border)' }}
                >
                  <span className="font-mono text-xs uppercase tracking-widest w-20 flex-shrink-0 pt-0.5" style={{ color: 'var(--text-dim)' }}>
                    {label}
                  </span>
                  {href ? (
                    <a
                      href={href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="font-sans text-sm transition-opacity hover:opacity-70"
                      style={{ color: 'var(--text)', textDecoration: 'none' }}
                    >
                      {value} ↗
                    </a>
                  ) : (
                    <span className="font-sans text-sm" style={{ color: 'var(--text)' }}>{value}</span>
                  )}
                </div>
              ))}
            </div>

            {/* Avatar card */}
            <div
              className="flex items-center gap-4 p-5 rounded-2xl"
              style={{ background: 'var(--bg-card)', border: '1px solid var(--border)' }}
            >
              <div
                className="w-14 h-14 rounded-full flex items-center justify-center font-display text-xl flex-shrink-0"
                style={{ background: 'var(--bg-2)', border: '2px solid var(--border)', color: 'var(--text)' }}
              >
                PS
              </div>
              <div>
                <p className="font-sans text-sm font-bold" style={{ color: 'var(--text)' }}>{profile.name}</p>
                <p className="font-mono text-xs mt-1" style={{ color: 'var(--text-muted)' }}>{profile.title}</p>
                <p className="font-sans text-xs mt-1" style={{ color: 'var(--text-dim)' }}>{contact.location}, Thailand</p>
              </div>
            </div>
          </div>

          {/* Right: socials */}
          <div className="space-y-4 animate-fade-up delay-200">
            {socials.map(({ platform, url, icon, handle }) => (
              <a
                key={platform}
                href={url}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-5 p-5 rounded-xl group card-hover"
                style={{ background: 'var(--bg-card)', border: '1px solid var(--border)', textDecoration: 'none', display: 'flex' }}
              >
                <div
                  className="w-10 h-10 rounded-lg flex items-center justify-center font-mono text-xs font-bold flex-shrink-0 transition-all duration-200 group-hover:scale-105"
                  style={{ background: 'var(--bg-2)', border: '1px solid var(--border)', color: 'var(--text)' }}
                >
                  {icon}
                </div>
                <div className="flex-1">
                  <p className="font-mono text-xs uppercase tracking-widest" style={{ color: 'var(--text-muted)' }}>{platform}</p>
                  <p className="font-sans text-sm font-semibold mt-1" style={{ color: 'var(--text)' }}>{handle}</p>
                </div>
                <span className="font-mono text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-200" style={{ color: 'var(--text-muted)' }}>
                  ↗
                </span>
              </a>
            ))}

            {/* Email CTA */}
            {/* <a
              href={`mailto:${contact.email}`}
              className="flex items-center justify-center gap-3 p-5 rounded-xl font-sans text-sm font-semibold tracking-[0.1em] uppercase transition-all duration-200 hover:opacity-80"
              style={{ background: 'var(--accent)', color: 'var(--bg)', textDecoration: 'none', display: 'flex' }}
            >
              Send Email ↗
            </a> */}
          </div>
        </div>

        {/* Thank you */}
        <div className="text-center mt-20 animate-fade-up delay-400">
          <h2 className="font-display text-[clamp(3rem,10vw,9rem)] leading-none" style={{ color: 'var(--text)' }}>
            {/* THANK YOU */}
          </h2>
          <div
            className="font-display text-[clamp(2rem,7vw,7rem)] leading-none"
            style={{ color: 'transparent', WebkitTextStroke: '1px var(--text-dim)' }}
          >
            {/* FOR YOUR */}
          </div>
        </div>
      </div>
    </section>
  )
}
