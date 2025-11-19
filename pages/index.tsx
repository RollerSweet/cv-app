import Head from 'next/head';
import CVViewer from '../components/CVViewer';

const Home = () => {
  return (
    <>
      <Head>
        <title>Tamir Madar · CV</title>
      </Head>
      <main className="page">
        <div className="glow glow--one" aria-hidden="true" />
        <div className="glow glow--two" aria-hidden="true" />
        <CVViewer />
        <footer className="page__footer">
          Updated automatically whenever Tamir refreshes his PDF.
        </footer>
      </main>
    </>
  );
};

export default Home;

