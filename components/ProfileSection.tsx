'use client'

import Image from 'next/image'
import { useState } from 'react'
import type { profileData, aboutData, resumeData, portfolioData, Project } from '@/lib/portfolio-data'
import ResumeModal from './ResumeModal'
import ProjectModal from './ProjectModal'

interface ProfileSectionProps {
  profile: typeof profileData
  about: typeof aboutData
  resume: typeof resumeData
  portfolio: typeof portfolioData
  onNavigateToProjects?: () => void
}

export default function ProfileSection({ profile, about, resume, portfolio, onNavigateToProjects }: ProfileSectionProps) {
  const initials = profile.name.split(' ').map(w => w[0]).join('').toUpperCase().slice(0, 2)
  const [isResumeModalOpen, setIsResumeModalOpen] = useState(false)
  const [selectedProject, setSelectedProject] = useState<Project | null>(null)
  const [isProjectModalOpen, setIsProjectModalOpen] = useState(false)

  const openResumeModal = () => setIsResumeModalOpen(true)
  const closeResumeModal = () => setIsResumeModalOpen(false)

  const openProjectModal = (projectName: string) => {
    const project = portfolio.projects.find(p => 
      p.title.toLowerCase() === projectName.toLowerCase() ||
      p.title.toLowerCase().includes(projectName.toLowerCase()) ||
      projectName.toLowerCase().includes(p.title.toLowerCase())
    )
    
    if (!project) {
      const mappings: { [key: string]: string } = {
        'iot-hub': 'IOT-HUB',
        'fullstack-next.js': 'FullStack Next',
        'trello-clone': 'Trello Clone',
        'fullstack-docker-qr': 'Fullstack Docker QR'
      }
      const mappedTitle = mappings[projectName.toLowerCase()]
      if (mappedTitle) {
        const foundProject = portfolio.projects.find(p => p.title === mappedTitle)
        if (foundProject) {
          setSelectedProject(foundProject)
          setIsProjectModalOpen(true)
        }
      }
    } else {
      setSelectedProject(project)
      setIsProjectModalOpen(true)
    }
  }

  const closeProjectModal = () => {
    setIsProjectModalOpen(false)
    setSelectedProject(null)
  }

  // Function to get project image by name
  const getProjectImage = (projectName: string) => {
    // Try exact match first
    let project = portfolio.projects.find(p => 
      p.title.toLowerCase() === projectName.toLowerCase()
    )
    
    // If no exact match, try partial matching
    if (!project) {
      project = portfolio.projects.find(p => {
        const projTitle = p.title.toLowerCase().replace(/[^a-z0-9]/g, '')
        const progName = projectName.toLowerCase().replace(/[^a-z0-9]/g, '')
        return projTitle.includes(progName) || progName.includes(projTitle)
      })
    }
    
    // Special case mappings for known variations
    if (!project) {
      const mappings: { [key: string]: string } = {
        'iot-hub': 'IOT-HUB',
        'fullstack-next.js': 'FullStack Next',
        'trello-clone': 'Trello Clone',
        'fullstack-docker-qr': 'Fullstack Docker QR'
      }
      const mappedTitle = mappings[projectName.toLowerCase()]
      if (mappedTitle) {
        project = portfolio.projects.find(p => p.title === mappedTitle)
      }
    }
    
    return project?.image || '/placeholder-logo.png'
  }

  return (
    <section className="min-h-screen pt-24 pb-16 px-6 md:px-12 lg:px-20" style={{ background: 'var(--bg)' }}>
      <div className="max-w-6xl mx-auto">

        {/* Section label */}
        <div className="mb-12 animate-fade-up">
          <span className="font-mono text-xs tracking-[0.3em] uppercase" style={{ color: 'var(--text-muted)' }}>
           Profile
          </span>
          <div className="section-line mt-3" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">

          {/* ── Left column ── */}
          <div className="animate-fade-up delay-100 space-y-6">

            {/* Identity Card - Avatar Only */}
            <div
              className="rounded-2xl p-6 card-hover relative overflow-hidden"
              style={{ background: 'var(--bg-card)', border: '1px solid var(--border)', boxShadow: 'var(--card-shadow)' }}
            >
              <div
                className="absolute top-0 left-0 right-0 h-px opacity-30"
                style={{ background: 'linear-gradient(90deg, transparent, var(--text-muted), transparent)' }}
              />

              {/* Avatar + name */}
              <div className="flex items-center gap-5 mb-4">
                <div className="relative w-28 h-28 rounded-full flex-shrink-0 overflow-hidden">
                  <Image
                    src={profile.avatar}
                    alt={profile.name}
                    fill
                    className="object-cover"
                    sizes="112px"
                  />
                </div>
                <div>
                  <h2 className="font-sans text-lg font-bold tracking-wide" style={{ color: 'var(--text)' }}>
                    {profile.name}
                  </h2>
                  <p className="font-mono text-xs mt-1" style={{ color: 'var(--text-muted)' }}>
                    {profile.title}
                  </p>
                  <p className="font-sans text-xs mt-1" style={{ color: 'var(--text-dim)' }}>
                    {profile.studying}
                  </p>
                </div>
              </div>
            </div>

            {/* Identity card */}
            <div
              className="rounded-2xl p-8 card-hover relative overflow-hidden"
              style={{ background: 'var(--bg-card)', border: '1px solid var(--border)', boxShadow: 'var(--card-shadow)' }}
            >
              <div
                className="absolute top-0 left-0 right-0 h-px opacity-30"
                style={{ background: 'linear-gradient(90deg, transparent, var(--text-muted), transparent)' }}
              />

              {/* About paragraphs */}
              <div className="space-y-3 mb-6">
                {about.description.map((para, i) => (
                  <p key={i} className="font-sans text-sm leading-relaxed" style={{ color: 'var(--text-muted)' }}>
                    {para}
                  </p>
                ))}
              </div>

              {/* CTA */}
              <button
                onClick={openResumeModal}
                className="block text-center py-3 rounded-xl font-sans text-sm font-semibold tracking-[0.1em] uppercase transition-all duration-200 hover:opacity-80 w-full"
                style={{ background: 'var(--accent)', color: 'var(--bg)', border: 'none' }}
              >
                Download Resume
              </button>
            </div>

            {/* Socials */}
            <div className="rounded-xl p-5" style={{ background: 'var(--bg-card)', border: '1px solid var(--border)' }}>
              <p className="font-mono text-xs tracking-widest uppercase mb-4" style={{ color: 'var(--text-muted)' }}>
                Find me on
              </p>
              <div className="grid grid-cols-2 gap-3">
                {Object.entries(profile.social).map(([platform, url]) => (
                  <a
                    key={platform}
                    href={url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 p-3 rounded-lg transition-all duration-200 hover:opacity-80"
                    style={{ background: 'var(--bg-2)', border: '1px solid var(--border)', textDecoration: 'none' }}
                  >
                    <span className="font-mono text-xs uppercase tracking-widest" style={{ color: 'var(--text-dim)' }}>
                      {platform.slice(0, 2).toUpperCase()}
                    </span>
                    <span className="font-sans text-xs truncate" style={{ color: 'var(--text-muted)' }}>
                      {platform}
                    </span>
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* ── Right column ── */}
          <div className="space-y-8 animate-fade-up delay-200">

            {/* Services */}
            <div>
              <h3 className="font-sans text-xs font-bold tracking-[0.2em] uppercase mb-5" style={{ color: 'var(--text)' }}>
                Services
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {about.services.map(svc => (
                  <div
                    key={svc.title}
                    className="p-4 rounded-xl card-hover"
                    style={{ background: 'var(--bg-card)', border: '1px solid var(--border)' }}
                  >
                    <p className="font-sans text-sm font-semibold mb-1" style={{ color: 'var(--text)' }}>{svc.title}</p>
                    <p className="font-sans text-xs leading-relaxed" style={{ color: 'var(--text-muted)' }}>{svc.description}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Tech skills (badges) */}
            <div>
              <h3 className="font-sans text-xs font-bold tracking-[0.2em] uppercase mb-5" style={{ color: 'var(--text)' }}>
                Tech Stack
              </h3>
              <div className="flex flex-wrap gap-3">
                {about.skills.map(skill => (
                  <div
                    key={skill.name}
                    className="flex items-center gap-2 px-4 py-2 rounded-lg card-hover cursor-default"
                    style={{ background: 'var(--bg-card)', border: '1px solid var(--border)' }}
                  >
                    <span className="font-sans text-xs font-semibold" style={{ color: 'var(--text)' }}>
                      {skill.name}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Skill bars */}
            <div>
              <h3 className="font-sans text-xs font-bold tracking-[0.2em] uppercase mb-5" style={{ color: 'var(--text)' }}>
                Proficiency
              </h3>
              <div className="space-y-4">
                {resume.skills.map(skill => (
                  <div key={skill.name}>
                    <div className="flex justify-between mb-2">
                      <span className="font-mono text-xs uppercase" style={{ color: 'var(--text-muted)' }}>{skill.name}</span>
                      <span className="font-mono text-xs" style={{ color: 'var(--text-dim)' }}>{skill.level}%</span>
                    </div>
                    <div className="h-px w-full" style={{ background: 'var(--border)' }}>
                      <div
                        className="h-full skill-bar-fill"
                        style={{ width: `${skill.level}%`, background: 'var(--text)' }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Education */}
            <div>
              <h3 className="font-sans text-xs font-bold tracking-[0.2em] uppercase mb-5" style={{ color: 'var(--text)' }}>
                Education
              </h3>
              <div className="relative">
                {/* Connecting line */}
                <div 
                  className="absolute left-4 top-4 bottom-4 w-px"
                  style={{ background: 'var(--border)' }}
                />
                
                {/* Education items */}
                <div className="space-y-6">
                  {resume.education.map((edu, index) => (
                    <div key={edu.title} className="relative">
                      {/* Timeline dot */}
                      <div 
                        className="absolute left-2 w-4 h-4 rounded-full border-2"
                        style={{ 
                          background: 'var(--bg-card)', 
                          borderColor: 'var(--text)',
                          zIndex: 1
                        }}
                      />
                      
                      {/* Content card */}
                      <div
                        className="ml-10 p-4 rounded-xl"
                        style={{ background: 'var(--bg-card)', border: '1px solid var(--border)' }}
                      >
                        <p className="font-mono text-xs" style={{ color: 'var(--text-muted)' }}>● {edu.period}</p>
                        <p className="font-sans text-sm font-semibold mt-1" style={{ color: 'var(--text)' }}>{edu.title}</p>
                        <p className="font-sans text-xs mt-1" style={{ color: 'var(--text-muted)' }}>{edu.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Projects in progress */}
            {about.projectsInProgress.length > 0 && about.projectsInProgress.some(proj => proj.name !== '#') && (
              <div>
                <h3 className="font-sans text-xs font-bold tracking-[0.2em] uppercase mb-5" style={{ color: 'var(--text)' }}>
                  In Progress
                </h3>
                <div className="space-y-6">
                  {about.projectsInProgress.filter(proj => proj.name !== '#').map(proj => (
                  <div
                    key={proj.name}
                    className="flex gap-6 p-5 rounded-xl card-hover cursor-pointer group"
                    style={{ background: 'var(--bg-card)', border: '1px solid var(--border)' }}
                    onClick={() => openProjectModal(proj.name)}
                  >
                    {/* Larger project image */}
                    <div className="relative w-20 h-20 rounded-xl flex-shrink-0 overflow-hidden">
                      <Image
                        src={getProjectImage(proj.name)}
                        alt={proj.name}
                        fill
                        className="object-cover transition-transform duration-300 group-hover:scale-105"
                        sizes="80px"
                      />
                    </div>
                    
                    {/* Content */}
                    <div className="flex-1 min-w-0">
                      <div className="flex items-start justify-between gap-4 mb-2">
                        <h4 className="font-sans text-base font-semibold leading-tight" style={{ color: 'var(--text)' }}>
                          {proj.name}
                        </h4>
                        <span 
                          className="font-mono text-xs px-2 py-1 rounded-full flex-shrink-0"
                          style={{ 
                            background: 'rgba(255,255,255,0.1)', 
                            color: 'var(--text-muted)',
                            border: '1px solid var(--border)'
                          }}
                        >
                          View Details
                        </span>
                      </div>
                      <p className="font-sans text-sm leading-relaxed line-clamp-2" style={{ color: 'var(--text-muted)' }}>
                        {proj.text}
                      </p>
                    </div>
                  </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Resume Modal */}
        <ResumeModal
          isOpen={isResumeModalOpen}
          onClose={closeResumeModal}
        />

        {/* Project Modal */}
        <ProjectModal
          project={selectedProject}
          isOpen={isProjectModalOpen}
          onClose={closeProjectModal}
        />
      </div>
    </section>
  )
}
