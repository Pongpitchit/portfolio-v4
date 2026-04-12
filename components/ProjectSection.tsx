'use client'

import { useState } from 'react'
import Image from 'next/image'
import type { Project } from '@/lib/portfolio-data'
import { portfolioData } from '@/lib/portfolio-data'
import ProjectModal from './ProjectModal'

interface ProjectSectionProps {
  projects: Project[]
}

export default function ProjectSection({ projects }: ProjectSectionProps) {
  const categories = ['all', ...portfolioData.categories.filter(c => c !== 'all')]
  const [activeCategory, setActiveCategory] = useState<string>('all')
  const [selectedProject, setSelectedProject] = useState<Project | null>(null)
  const [isModalOpen, setIsModalOpen] = useState(false)

  const openModal = (project: Project) => {
    setSelectedProject(project)
    setIsModalOpen(true)
  }

  const closeModal = () => {
    setIsModalOpen(false)
    setSelectedProject(null)
  }

  const filtered = activeCategory === 'all'
    ? projects
    : projects.filter(p => p.category === activeCategory)

  const hero = filtered[0] ?? null
  const rest = filtered.slice(1)

  return (
    <section className="min-h-screen pt-24 pb-16 px-6 md:px-12 lg:px-20" style={{ background: 'var(--bg)' }}>
      <div className="max-w-6xl mx-auto">

        {/* Header */}
        <div className="mb-10 animate-fade-up">
          <span className="font-mono text-xs tracking-[0.3em] uppercase" style={{ color: 'var(--text-muted)' }}>
          Projects
          </span>
          <div className="section-line mt-3" />
        </div>

        {/* Title + filters */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-10 animate-fade-up delay-100">
          <div>
            <h2 className="font-display text-[clamp(2.5rem,6vw,5rem)] leading-none" style={{ color: 'var(--text)' }}>
              PROJECTS
            </h2>
            <div
              className="font-display text-[clamp(1.5rem,3vw,3rem)] leading-none mt-1"
              style={{ color: 'transparent', WebkitTextStroke: '1px var(--text-muted)' }}
            >
              
            </div>
          </div>

          <div className="flex flex-wrap gap-2">
            {categories.map(cat => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`nav-pill ${activeCategory === cat ? 'active' : ''}`}
              >
                {cat.toUpperCase()}
              </button>
            ))}
          </div>
        </div>

        {/* ── Featured hero card ── */}
        {hero && (
          <div
            className="group relative rounded-2xl overflow-hidden mb-10 cursor-pointer animate-fade-up delay-200"
            style={{
              border: '1px solid var(--border)',
              minHeight: '320px',
              background: 'var(--bg-card)',
            }}
            onClick={() => openModal(hero)}
          >
            {/* Background image */}
            <div className="absolute inset-0 z-0">
              <Image
                src={hero.image}
                alt={hero.title}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-105"
                sizes="(max-width: 768px) 100vw, 1200px"
                priority
              />
              {/* Dark gradient overlay — always visible so text is readable */}
              <div
                className="absolute inset-0"
                style={{
                  background:
                    'linear-gradient(90deg, rgba(0,0,0,0.85) 0%, rgba(0,0,0,0.65) 55%, rgba(0,0,0,0.2) 100%)',
                }}
              />
            </div>

            {/* Content */}
            <div className="relative z-10 flex flex-col md:flex-row h-full" style={{ minHeight: '320px' }}>
              <div className="flex-1 p-8 md:p-12 flex flex-col justify-between">
                <div>
                  <span className="font-mono text-xs tracking-widest uppercase" style={{ color: 'rgba(255,255,255,.5)' }}>
                    {hero.category} · 
                  </span>
                  <h3
                    className="font-display text-[clamp(2rem,4vw,3.8rem)] mt-3 leading-tight"
                    style={{ color: 'rgba(255,255,255,.95)' }}
                  >
                    {hero.title}
                  </h3>
                  <p className="font-sans text-sm mt-4 max-w-md leading-relaxed" style={{ color: 'rgba(220,220,220,.75)' }}>
                    {hero.description}
                  </p>
                  {/* Tech badges */}
                  <div className="flex flex-wrap gap-2 mt-5">
                    {hero.tech.map(t => (
                      <span
                        key={t}
                        className="font-mono text-xs px-2 py-1 rounded"
                        style={{
                          background: 'rgba(255,255,255,0.12)',
                          color: 'rgba(255,255,255,0.75)',
                          border: '1px solid rgba(255,255,255,0.15)',
                        }}
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="flex items-center gap-4 mt-8">
                  {hero.liveUrl !== '#' && (
                    <a
                      href={hero.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="font-mono text-xs tracking-widest uppercase px-5 py-2.5 rounded-full transition-all duration-200 hover:opacity-80"
                      style={{ background: 'rgba(255,255,255,0.9)', color: '#000', textDecoration: 'none' }}
                    >
                      Live ↗
                    </a>
                  )}
                  {hero.githubUrl !== '#' && (
                    <a
                      href={hero.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="font-mono text-xs tracking-widest uppercase px-5 py-2.5 rounded-full transition-all duration-200 hover:opacity-80"
                      style={{
                        background: 'rgba(255,255,255,0.1)',
                        color: 'rgba(255,255,255,0.8)',
                        border: '1px solid rgba(255,255,255,0.2)',
                        textDecoration: 'none',
                      }}
                    >
                      GitHub →
                    </a>
                  )}
                </div>
              </div>
            </div>
          </div>
        )}

        {/* ── Project grid ── */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {rest.map((project, i) => (
            <div
              key={project.title}
              className="group project-card relative rounded-xl overflow-hidden cursor-pointer"
              style={{
                border: '1px solid var(--border)',
                minHeight: '260px',
                animationDelay: `${(i + 3) * 0.1}s`,
                background: 'var(--bg-card)',
              }}
              onClick={() => openModal(project)}
            >
              {/* Background image */}
              <div className="absolute inset-0 z-0">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                />
                {/* Base overlay — always dark enough for text */}
                <div
                  className="absolute inset-0 transition-opacity duration-300"
                  style={{ background: 'linear-gradient(180deg, rgba(0,0,0,0.3) 0%, rgba(0,0,0,0.75) 100%)' }}
                />
                {/* Hover overlay — darker + shows buttons */}
                <div
                  className="project-overlay absolute inset-0 flex items-center justify-center gap-3"
                  style={{ background: 'rgba(0,0,0,0.65)' }}
                >
                  {project.liveUrl !== '#' && (
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="font-mono text-xs px-4 py-2 rounded-full transition-all duration-200 hover:opacity-80"
                      style={{ background: 'rgba(255,255,255,0.9)', color: '#000', textDecoration: 'none' }}
                      onClick={e => e.stopPropagation()}
                    >
                      Live ↗
                    </a>
                  )}
                  {project.githubUrl !== '#' && (
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="font-mono text-xs px-4 py-2 rounded-full transition-all duration-200 hover:opacity-80"
                      style={{
                        background: 'rgba(255,255,255,0.12)',
                        color: 'rgba(255,255,255,0.85)',
                        border: '1px solid rgba(255,255,255,0.25)',
                        textDecoration: 'none',
                      }}
                      onClick={e => e.stopPropagation()}
                    >
                      GitHub
                    </a>
                  )}
                </div>
              </div>

              {/* Content — pinned to bottom */}
              <div className="relative z-10 flex flex-col justify-end h-full p-5" style={{ minHeight: '260px' }}>
                {/* Category + tech top row */}
                <div className="flex items-center gap-2 mb-3 flex-wrap">
                  <span
                    className="font-mono text-xs tracking-widest uppercase px-2 py-0.5 rounded"
                    style={{ background: 'rgba(255,255,255,0.12)', color: 'rgba(255,255,255,0.6)' }}
                  >
                    {project.category}
                  </span>
                  {project.tech.slice(0, 2).map(t => (
                    <span
                      key={t}
                      className="font-mono text-xs px-2 py-0.5 rounded"
                      style={{ background: 'rgba(255,255,255,0.07)', color: 'rgba(255,255,255,0.45)' }}
                    >
                      {t}
                    </span>
                  ))}
                  {project.tech.length > 2 && (
                    <span className="font-mono text-xs" style={{ color: 'rgba(255,255,255,0.3)' }}>
                      +{project.tech.length - 2}
                    </span>
                  )}
                </div>

                <h3 className="font-sans text-base font-bold leading-snug" style={{ color: 'rgba(255,255,255,0.95)' }}>
                  {project.title}
                </h3>
                <p className="font-sans text-xs mt-1 leading-relaxed line-clamp-2" style={{ color: 'rgba(200,200,200,0.55)' }}>
                  {project.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Footer */}
        <div className="flex items-center gap-6 mt-10 pt-8" style={{ borderTop: '1px solid var(--border)' }}>
          <span className="font-mono text-xs" style={{ color: 'var(--text-dim)' }}>
            {filtered.length} projects
          </span>
          <div className="section-line flex-1" />
          <a
            href="https://github.com/Pongpitchit"
            target="_blank"
            rel="noopener noreferrer"
            className="font-mono text-xs tracking-widest uppercase px-5 py-2 rounded-full transition-all duration-200 hover:opacity-80"
            style={{ background: 'var(--accent)', color: 'var(--bg)', textDecoration: 'none' }}
          >
            GITHUB →
          </a>
        </div>

        {/* Project Modal */}
        <ProjectModal
          project={selectedProject}
          isOpen={isModalOpen}
          onClose={closeModal}
        />
      </div>
    </section>
  )
}
