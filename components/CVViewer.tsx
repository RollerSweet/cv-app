const PDF_PATH = '/Tamir_Madar_CV.pdf';
const PDF_VIEW_PARAMS = '#toolbar=0&navpanes=0&scrollbar=0&view=FitH';

const CVViewer = () => {
  return (
    <section className="cv-card">
      <header className="cv-card__header">
        <div>
          <p className="eyebrow">Tamir Madar</p>
          <h1>CV Resume</h1>
          <p className="tagline">
            A concise, interactive overview of Tamir&apos;s experience.
          </p>
          <p className="contact">
            <a href="mailto:me@tamirmadar.com">me@tamirmadar.com</a> ·{' '}
            <a href="mailto:tamirmadar5@gmail.com">tamirmadar5@gmail.com</a>
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
        <object
          data={`${PDF_PATH}${PDF_VIEW_PARAMS}`}
          type="application/pdf"
          className="cv-card__embed"
        >
          <iframe
            title="Tamir Madar CV"
            src={`${PDF_PATH}${PDF_VIEW_PARAMS}`}
            className="cv-card__fallback"
          />
          <p className="cv-card__fallback-text">
            Your browser can&apos;t display embedded PDFs.{' '}
            <a href={PDF_PATH} target="_blank" rel="noreferrer">
              Open the file
            </a>{' '}
            instead.
          </p>
        </object>
      </div>
    </section>
  );
};

export default CVViewer;
