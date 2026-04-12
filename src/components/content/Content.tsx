import type { ReactElement } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';

import About from './About';
import Resume from './Resume';
import Contact from './Contact';

function Content(): ReactElement {
  return (
    <Router>
      <About />
      <Resume />
      <Contact />
    </Router>
  );
}

export default Content;
