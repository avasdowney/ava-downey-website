import React, { useRef, useState, useEffect, type ReactElement } from 'react';

import '../../css/styles.css';

import pic from '../../images/ava_bitmoji.png';
import GitHub from '../../images/GitHub-Mark-Light-64px.png';
import LinkedIn from '../../images/LI-In-Bug.png';
import Email from '../../images/mail.png';
import DownArrow from '../../images/circle-arrow-down.png';

// Style constants with proper typing
const aboutContainer: React.CSSProperties = {
  minHeight: 'calc(100vh - 10vh)',
  height: 'calc(100vh - 10vh)',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  textAlign: 'center',
  paddingTop: '0',
  paddingBottom: '2rem',
};

const nameStyle: React.CSSProperties = {
  fontSize: '4rem',
  fontWeight: 700,
  color: '#fff',
  marginBottom: '.5rem',
  marginTop: '0',
  letterSpacing: '2px',
};

const subtitleStyle: React.CSSProperties = {
  fontSize: '1.5rem',
  color: '#e0e0e0',
  marginBottom: '2rem',
  marginTop: '0',
  fontWeight: 400,
};

const iconRow: React.CSSProperties = {
  display: 'flex',
  gap: '2rem',
  justifyContent: 'center',
  marginBottom: '5rem',
};

const iconStyle: React.CSSProperties = {
  height: '2.5rem',
};

const scrollBtnStyle: React.CSSProperties = {
  position: 'fixed',
  bottom: '2rem',
  left: '50%',
  transform: 'translateX(-50%)',
  background: '#202020b3',
  border: 'none',
  borderRadius: '50%',
  width: '3.5rem',
  height: '3.5rem',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  cursor: 'pointer',
  boxShadow: '0 2px 8px #00000026',
  transition: 'background 0.2s',
  zIndex: 1000,
};

const arrowStyle: React.CSSProperties = {
  color: '#fff',
};

const bioSectionStyle: React.CSSProperties = {
  minHeight: 'calc(100vh - 10vh)',
  height: 'calc(100vh - 10vh)',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'flex-start',
  textAlign: 'center',
  margin: 0,
  borderRadius: 0,
  boxShadow: 'none',
  width: '100vw',
  maxWidth: '100vw',
  paddingTop: '3rem',
  position: 'relative',
  top: 0,
  left: 0,
  zIndex: 2,
};

const profileImageStyle: React.CSSProperties = {
  height: '25vh',
  maxHeight: '200px',
  borderRadius: '50%',
  objectFit: 'cover',
  marginBottom: '2rem',
  boxShadow: '0 2px 16px rgba(0,0,0,0.18)',
};

const bioContainerStyle: React.CSSProperties = {
  maxWidth: '600px',
  margin: '0 auto',
  color: '#e0e0e0',
  fontSize: '1.2rem',
  lineHeight: 1.7,
  padding: '2rem',
};

function About(): ReactElement {
  const bioRef = useRef<HTMLElement>(null);
  const aboutContainerRef = useRef<HTMLDivElement>(null);
  const [showArrow, setShowArrow] = useState<boolean>(true);
  const [pointingUp, setPointingUp] = useState<boolean>(false);

  useEffect(() => {
    const handleScroll = (): void => {
      if (aboutContainerRef.current && bioRef.current) {
        const aboutRect = aboutContainerRef.current.getBoundingClientRect();
        const bioRect = bioRef.current.getBoundingClientRect();

        // Show arrow if we're on either section
        setShowArrow(aboutRect.bottom > 0 || bioRect.top < window.innerHeight);

        // Point up if bio section is in view, down if about section is in view
        setPointingUp(bioRect.top < window.innerHeight * 0.5);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleArrowClick = (): void => {
    if (pointingUp) {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else if (!pointingUp && bioRef.current) {
      bioRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      <div ref={aboutContainerRef} style={aboutContainer}>
        <img src={pic} alt="Ava Bitmoji" style={profileImageStyle} />
        <h1 className="rotateColor" style={{ ...nameStyle, marginTop: '0.2rem' }}>
          Ava Downey
        </h1>
        <div style={subtitleStyle}>Data Engineer&nbsp;|&nbsp;Generative AI</div>
        <div style={iconRow}>
          <a href="https://github.com/avasdowney" target="_blank" rel="noreferrer">
            <img src={GitHub} alt="GitHub" style={iconStyle} />
          </a>
          <a href="https://www.linkedin.com/in/ava-downey-9b59931aa/" target="_blank" rel="noreferrer">
            <img src={LinkedIn} alt="LinkedIn" style={iconStyle} />
          </a>
          <a href="mailto:avasdowney@gmail.com">
            <img src={Email} alt="Email" style={iconStyle} />
          </a>
        </div>
      </div>
      {showArrow && (
        <button style={scrollBtnStyle} onClick={handleArrowClick} aria-label="Scroll for more">
          <img
            src={DownArrow}
            alt={pointingUp ? '▲' : '▼'}
            style={{ ...arrowStyle, transform: pointingUp ? 'rotate(180deg)' : 'rotate(0deg)' }}
          />
        </button>
      )}
      <section ref={bioRef} style={bioSectionStyle}>
        <div style={bioContainerStyle}>
          <p>
            As a Data Engineer at Travelers Insurance, I have built several innovative Generative AI solutions from end
            to end, including Travelers' first and only external Gen AI application. My dedication to innovation
            recently earned me first place in a company-wide competition for an agentic reasoning model where I was
            able to work with cross-functional teams to improve our business processes. I've also been a champion for
            internal Gen AI adoption, leading workshops to introduce tools such as GitHub Copilot to my line of
            business while minimizing tech debt. My professional passion is Generative AI, while my downtime is
            dedicated to hitting the hiking trails, diving into a video game with friends, or drawing.
          </p>
        </div>
      </section>
    </>
  );
}

export default About;
