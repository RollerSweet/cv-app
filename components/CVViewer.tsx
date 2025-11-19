import { useState } from 'react';

const PDF_PATH = '/Tamir_Madar_CV.pdf';
const PDF_VIEW_PARAMS = '#toolbar=0&navpanes=0&scrollbar=0&view=Fit';

const CVViewer = () => {
  const [isLoaded, setIsLoaded] = useState(false);

  return (
    <section className="cv-card">
      <header className="cv-card__header">
        <div>
          <p className="eyebrow">Tamir Madar</p>
          <h1>Curriculum Vitae</h1>
          <p className="tagline">
            A concise, interactive overview of Tamir&apos;s experience.
          </p>
        </div>

        <div className="cv-card__actions">
          <a className="button button--primary" href={PDF_PATH} download>
            Download PDF
          </a>
          <a
            className="button button--ghost"
            href={PDF_PATH}
            target="_blank"
            rel="noreferrer"
          >
            Open in New Tab
          </a>
        </div>
      </header>

      <div className="cv-card__viewer" aria-live="polite">
        {!isLoaded && (
          <div className="cv-card__loading">
            <span className="spinner" aria-hidden="true" />
            <p>Preparing preview...</p>
          </div>
        )}
        <iframe
          title="Tamir Madar CV"
          src={`${PDF_PATH}${PDF_VIEW_PARAMS}`}
          className={`cv-card__iframe ${isLoaded ? 'is-visible' : ''}`}
          onLoad={() => setIsLoaded(true)}
          loading="lazy"
        />
      </div>
    </section>
  );
};

export default CVViewer;
