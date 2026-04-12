'use client'

import { useState } from 'react'
import { portfolioConfig } from '@/lib/portfolio-data'
import Navbar from '@/components/Navbar'
import Hero from '@/components/Hero'
import Marquee from '@/components/Marquee'
import ProfileSection from '@/components/ProfileSection'
import ProjectSection from '@/components/ProjectSection'
import ContactSection from '@/components/ContactSection'

export type Section = 'HERO' | 'PROFIL' | 'PROJECT' | 'CONTACT'

export default function Home() {
  const [section, setSection] = useState<Section>('HERO')

  const handleNav = (s: string) => {
    setSection(s as Section)
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  const handleStart = () => {
    setSection('PROFIL')
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  const handleNavigateToProjects = () => {
    setSection('PROJECT')
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <div className="noise min-h-screen" style={{ background: 'var(--bg)' }}>
      {section !== 'HERO' && (
        <Navbar activeSection={section} onNav={handleNav} />
      )}

      {section === 'HERO' && (
        <Hero
          name={portfolioConfig.profile.name}
          title={portfolioConfig.profile.title}
          subtitle={`${portfolioConfig.profile.studying} · ${portfolioConfig.profile.faculty}`}
          onStart={handleStart}
        />
      )}

      {section !== 'HERO' && (
        <>
          <Marquee skills={portfolioConfig.about.skills.map(s => s.name)} />

          {section === 'PROFIL' && (
            <ProfileSection
              profile={portfolioConfig.profile}
              about={portfolioConfig.about}
              resume={portfolioConfig.resume}
              portfolio={portfolioConfig.portfolio}
              onNavigateToProjects={handleNavigateToProjects}
            />
          )}

          {section === 'PROJECT' && (
            <ProjectSection projects={[...portfolioConfig.portfolio.projects]} />
          )}

          {section === 'CONTACT' && (
            <ContactSection
              profile={portfolioConfig.profile}
              contact={portfolioConfig.contact}
            />
          )}
        </>
      )}
    </div>
  )
}
