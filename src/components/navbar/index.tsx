import type { ReactElement } from 'react';
import { Nav, NavLink, NavMenu, NavBtn, NavBtnLink } from './NavbarElements';

import '../../css/styles.css';

import LinkedIn from '../../images/LI-In-Bug.png';
import GitHub from '../../images/GitHub-Mark-Light-64px.png';

function Navbar(): ReactElement {
  const handleNavClick = (): void => {
    window.scrollTo({ top: 0, behavior: 'auto' });
  };

  return (
    <Nav>
      <NavMenu>
        <NavLink to="/about" onClick={handleNavClick}>
          About
        </NavLink>
        <NavLink to="/resume" onClick={handleNavClick}>
          Resume
        </NavLink>
        <NavLink to="/projects" onClick={handleNavClick}>
          Projects
        </NavLink>
      </NavMenu>
      <NavBtn>
        <NavBtn>
          <a href="https://github.com/avasdowney" target="_blank" rel="noreferrer">
            <img src={GitHub} alt="GitHub" className="navImage" />
          </a>
        </NavBtn>
        <NavBtn>
          <a href="https://www.linkedin.com/in/ava-downey-9b59931aa/" target="_blank" rel="noreferrer">
            <img src={LinkedIn} alt="LinkedIn" className="navImage" />
          </a>
        </NavBtn>
        <NavBtnLink to="/contact" onClick={handleNavClick}>
          Contact Me
        </NavBtnLink>
      </NavBtn>
    </Nav>
  );
}

export default Navbar;
