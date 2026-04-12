import type { ReactElement } from 'react';

function Contact(): ReactElement {
  return (
    <header>
      <div className="content">
        <h2 className="rotateColor">Contact Me</h2>
        <p>
          Ava Downey
          <br />
          avasdowney@gmail.com
          <br />
          Bloomfield, CT 06002
          <br />
        </p>
      </div>
    </header>
  );
}

export default Contact;
