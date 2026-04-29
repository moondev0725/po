import { useEffect, useState } from 'react';

const AUTO_MS = 3000;

export function ProjectSlider({ slides, toolbarTitle }) {
  const [index, setIndex] = useState(0);
  const count = slides.length;
  const safeIndex = count ? index % count : 0;
  const current = slides[safeIndex] ?? slides[0];

  useEffect(() => {
    if (count <= 1) return undefined;
    const id = window.setInterval(() => {
      setIndex((i) => (i + 1) % count);
    }, AUTO_MS);
    return () => window.clearInterval(id);
  }, [count]);

  if (!count) return null;

  return (
    <div className="project-preview">
      <div className="project-preview-media">
        <div className="project-preview-toolbar">
          <div className="project-preview-lights" aria-hidden="true">
            <span />
            <span />
            <span />
          </div>
          <p className="project-preview-toolbar-title">{toolbarTitle}</p>
        </div>
        <a
          className="project-slider"
          href={current.image}
          target="_blank"
          rel="noopener noreferrer"
        >
          <div
            className="project-slider-track"
            style={{
              transform: `translateX(-${safeIndex * 100}%)`,
            }}
          >
            {slides.map((slide) => (
              <div key={slide.image + slide.title} className="project-slide">
                <img src={slide.image} alt={slide.alt} />
              </div>
            ))}
          </div>
          <span className="project-slider-badge">View original</span>
        </a>
        <div className="project-preview-thumbs">
          {slides.map((slide, i) => (
            <button
              key={slide.image + slide.title}
              type="button"
              className={i === safeIndex ? 'project-thumb is-active' : 'project-thumb'}
              data-slide-go={i}
              onClick={() => setIndex(i)}
            >
              <img src={slide.image} alt="" />
              <span>{slide.thumbLabel ?? `${i + 1}`}</span>
            </button>
          ))}
        </div>
      </div>
      <div className="project-preview-meta">
        <div className="project-preview-head">
          <p className="project-preview-label">SCREEN PREVIEW</p>
          <p className="project-preview-count">
            <span>{String(safeIndex + 1).padStart(2, '0')}</span> / {count}
          </p>
        </div>
        <p className="project-preview-title">{current.title}</p>
        <p className="project-preview-desc">{current.desc}</p>
        <div className="project-preview-tags">
          {current.tags.map((tag) => (
            <span key={tag}>{tag}</span>
          ))}
        </div>
      </div>
    </div>
  );
}
