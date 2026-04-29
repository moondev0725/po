import { Fragment } from 'react';
import { NextDebutEnhancement } from './NextDebutEnhancement';
import { ProjectSlider } from './ProjectSlider';
import { Reveal } from './Reveal';

function RichParagraph({ segments }) {
  return (
    <p>
      {segments.map((seg, i) => {
        if (seg.code) {
          return <code key={`c-${i}`}>{seg.code}</code>;
        }
        if (!seg.text) return null;
        const lines = seg.text.split('\n');
        return lines.map((line, j) => (
          <Fragment key={`${i}-${j}`}>
            {j > 0 && <br />}
            {line}
          </Fragment>
        ));
      })}
    </p>
  );
}

export function ProjectCard({ project }) {
  const { rightSections } = project;

  return (
    <Reveal as="article" className="project-card reveal-item">
      <div className="project-top">
        <div>
          <p className="project-index">{project.indexLabel}</p>
          <h3 className="project-title">{project.title}</h3>
          <p className="project-subtitle">{project.subtitle}</p>
          <div className="project-facts">
            {project.facts.map((fact) => (
              <span key={fact}>{fact}</span>
            ))}
          </div>
        </div>
        <div className="project-links">
          <a href={project.links.github} target="_blank" rel="noopener noreferrer">
            GitHub
          </a>
          <a href={project.links.demo} target="_blank" rel="noopener noreferrer">
            Demo
          </a>
        </div>
      </div>

      <div className="project-content">
        <div className="project-visual-column">
          <ProjectSlider slides={project.slides} toolbarTitle={project.previewToolbarTitle} />

          <div className="project-preview-details">
            <div className="info-block">
              <h4>주요 구현 기능</h4>
              <ul>
                {project.implementationItems.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>

            <div className="info-block">
              <h4>기술 스택</h4>
              <div className="tags">
                {project.techStackTags.map((tag) => (
                  <span key={tag}>{tag}</span>
                ))}
              </div>
            </div>

            {project.enhancementDemo ? <NextDebutEnhancement /> : null}
          </div>
        </div>

        <div className="project-info">
          {rightSections.map((section) => {
            const blockClass =
              section.highlight === true ? 'info-block info-block--highlight' : 'info-block';

            return (
              <div key={section.title} className={blockClass}>
                <h4>{section.title}</h4>
                {section.paragraphs?.map((block, idx) => (
                  <RichParagraph key={`${section.title}-p-${idx}`} segments={block.segments} />
                ))}
                {section.list ? (
                  <ul>
                    {section.list.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                ) : null}
              </div>
            );
          })}
        </div>
      </div>
    </Reveal>
  );
}
