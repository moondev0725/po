import { useMemo, useState } from 'react';
import { projectFilterOptions, projects } from '../data/projects';
import { ProjectCard } from './ProjectCard';
import { Reveal } from './Reveal';

export function Projects() {
  const [filter, setFilter] = useState('all');

  const filtered = useMemo(() => {
    if (filter === 'all') return projects;
    return projects.filter((p) => p.filters.includes(filter));
  }, [filter]);

  return (
    <section id="projects" className="section border-top">
      <div className="container">
        <Reveal as="p" className="section-label reveal-item">
          PROJECTS
        </Reveal>
        <Reveal as="h2" className="section-title reveal-item">
          팀 프로젝트 기반 서비스 구현 경험
        </Reveal>

        <Reveal className="project-filters reveal-item" role="toolbar" aria-label="프로젝트 분류 필터">
          {projectFilterOptions.map((opt) => (
            <button
              key={opt.id}
              type="button"
              className={`project-filter-btn ${filter === opt.id ? 'is-active' : ''}`}
              onClick={() => setFilter(opt.id)}
              aria-pressed={filter === opt.id}
            >
              {opt.label}
            </button>
          ))}
        </Reveal>

        {filtered.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </section>
  );
}
