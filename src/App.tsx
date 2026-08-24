import { useEffect, type ReactElement } from 'react';
import Navbar from './components/navbar';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';

import About from './components/content/About';
import Resume from './components/content/Resume';
import Projects from './components/content/Projects';
import Contact from './components/content/Contact';

function ScrollToTop(): null {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

function App(): ReactElement {
  return (
    <Router basename={process.env.PUBLIC_URL}>
      <ScrollToTop />
      <Navbar />
      <Routes>
        <Route path="/" element={<About />} />
        <Route path="/about" element={<About />} />
        <Route path="/resume" element={<Resume />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </Router>
  );
}

export default App;
