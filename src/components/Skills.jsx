import { skillGroups } from '../data/skills';
import { Reveal } from './Reveal';

export function Skills() {
  return (
    <section id="skills" className="section border-top">
      <div className="container">
        <Reveal as="p" className="section-label reveal-item">
          SKILLS
        </Reveal>
        <Reveal as="h2" className="section-title reveal-item">
          주로 사용한 기술들
        </Reveal>

        <div className="skills-wrap">
          {skillGroups.map((group) => (
            <Reveal key={group.id} className="skill-group reveal-item">
              <h3>{group.title}</h3>
              <div className="tags">
                {group.tags.map((tag) => (
                  <span key={tag}>{tag}</span>
                ))}
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
