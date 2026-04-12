import type { ReactElement } from 'react';

function Resume(): ReactElement {
  return (
    <header>
      <style>
        {`
          .resume-link {
            color: #00caff;
            text-decoration: none;
            font-weight: 600;
            transition: color 0.2s;
          }
          .resume-link:hover {
            color: #fff;
          }
        `}
      </style>
      <div className="content">
        <h2 className="rotateColor">Work Experience</h2>
        <div className="group">
          <h3>Travelers</h3>
          <div className="role">
            <div className="title">Data Engineer — BI&amp;A LDP</div>
            <div className="role-dates">Oct. 2024 - Present</div>
            <div className="desc">
              I am working on several Gen AI RAG applications for insurance agents and underwriters within Bond and
              Specialty Insurance. I am also a part of the BI&amp;A LDP at Travelers, allowing me to strengthen my
              leadership skills through opportunities such as my role as a co-lead of Emerging Talent Program
              Networking Committee.
            </div>
          </div>
          <div className="role">
            <div className="title">Data Engineer, Consultant — BI&amp;A LDP</div>
            <div className="role-dates">Jun. 2023 - Oct. 2024</div>
            <div className="desc">
              I worked on automating manual workflows using Python, AWS (Lambda, EventBridge, ECR, API Gateway, SNS),
              Terraform, Docker, and Snowflake. I was also a part of the Business Insights and Analytics Leadership
              Development Program at Travelers, allowing me to grow both my technical and leadership expertise under
              mentors of the program.
            </div>
          </div>
          <div className="role">
            <div className="title">Technology Intern — TLDP</div>
            <div className="role-dates">Jun. 2022 - Aug. 2022</div>
            <div className="desc">
              I worked with Python to compare Microsoft SQL Server and Snowflake databases to assist with cloud
              migration, as well as assisted with report testing in the end stages of application development.
            </div>
          </div>
        </div>
        <div className="group">
          <h3>Chevron</h3>
          <div className="role">
            <div className="title">Software Engineering Intern</div>
            <div className="role-dates">Jun. 2021 - Aug. 2021</div>
            <div className="desc">
              I worked on several projects such as debugging and adding features to CI/CD pipelines using Azure DevOps,
              as well as creating a Power BI dashboard for my Scrum team.
            </div>
          </div>
        </div>
      </div>

      <div className="content">
        <h2 className="rotateColor">Education</h2>
        <p>
          <div className="group">
            <h3>University of Hartford</h3>
            B.S. Computer Science, Minor in Data Science, Honors - 3.89/4.0 GPA
            <br />
            Class of 2023
            <br />
            <br />
            <div className="title">Extracurriculars:</div>
            <br />
            <div className="desc">
              - oSTEM (President)
              <br />
              - Society of Women Engineers
              <br />
              - Coding Club
              <br />
              - Cybersecurity Club
              <br />
              - A&amp;S Student Ambassador
              <br />
              - Honors Ambassador
              <br />
              <br />
            </div>
            <div className="title">Awards:</div>
            <br />
            <div className="desc">
              - National Honors Full Tuition Scholarship (2019)
              <br />
              - Computer Science Freshmen Achievement Award (2020)
              <br />
              - Computer Science Sophomore Achievement Award (2021)
              <br />
              - Computer Science Junior Achievement Award (2022)
              <br />
              - Computer Science Senior Achievement Award (2023)
              <br />
            </div>
          </div>
        </p>
      </div>

      <div className="content">
        <h2 className="rotateColor">Publications</h2>
        <p>
          <h3>Evaluating Fairness in Predictive Policing Using Domain Knowledge</h3>
          As an increasing number of Artificial Intelligence (AI) systems are ingrained in our day-to-day lives, it is
          crucial that they are fair and trustworthy. Unfortunately, this is often not the case for predictive policing
          systems, where there is evidence of bias towards age as well as race and sex leading to many people being
          mistakenly labeled as likely to be involved in a crime. In a system that already is under criticism for its
          unjust treatment of minority groups, it is crucial to find ways to mitigate this negative trend. In this
          work, we explored and evaluated the infusion of domain knowledge in the predictive policing system to
          minimize the prevailing fairness issues. The experimental results demonstrate an increase in fairness across
          all of the metrics for all of the protected classes bringing more trust into the predictive policing system
          by reducing the unfair policing of people.
          <br />
          <br />
          Check out the full paper{' '}
          <a
            className="resume-link"
            href="https://journals.flvc.org/FLAIRS/article/view/133088"
            target="_blank"
            rel="noreferrer"
          >
            here
          </a>
          .
          <h3>Predictive Policing: A Fairness-aware Approach</h3>
          As Artificial Intelligence (AI) systems become increasingly embedded in our daily lives, it is of utmost
          importance to ensure that they are both fair and reliable. Regrettably, this is not always the case for
          predictive policing systems, as evidence shows biases based on age, race, and sex, leading to wrongful
          identifications of individuals as potential criminals. Given the existing criticism of the system's unjust
          treatment of minority groups, it becomes essential to address and mitigate this concerning trend. This study
          delved into the infusion of domain knowledge in the predictive policing system, aiming to minimize prevailing
          fairness issues. The experimental results indicate a considerable increase in fairness across all metrics for
          all protected classes, thus fostering greater trust in the predictive policing system by reducing the unfair
          treatment of individuals.
          <br />
          <br />
          Check out the full paper{' '}
          <a
            className="resume-link"
            href="https://www.worldscientific.com/doi/abs/10.1142/S0218213024600054"
            target="_blank"
            rel="noreferrer"
          >
            here
          </a>
          .
        </p>
      </div>

      <div className="content">
        <h2 className="rotateColor">Other Experience</h2>
        <p>
          <h3>Make48 Competitor</h3>
          October 2021
          <br />
          Competed in the PBS{' '}
          <a
            className="resume-link"
            href="https://www.make48.com/post/meet-your-hartford-teams"
            target="_blank"
            rel="noreferrer"
          >
            Make48
          </a>{' '}
          Competition in Hartford, CT to represent the University of Hartford Honors program. I worked with my team
          over 48 hours to create a prototype, marketing plan, and sales sheet for our invention following the prompt
          "outdoor lifestyle." This show was aired in January, 2022 on PBS, Amazon Prime Video, and Tubi. It can also
          be watched{' '}
          <a
            className="resume-link"
            href="https://www.youtube.com/watch?v=5VP9kk-IpAw"
            target="_blank"
            rel="noreferrer"
          >
            here
          </a>
          .
          <h3>President, oSTEM</h3>
          May 2021 - May 2023
          <br />
          Out in STEM (oSTEM) works on creating an inclusive space on campus for LGBT people and their allies in STEM.
          As president, I took the lead on all club meetings and events, as well as was in charge of the University of
          Hartford chapters standing with national oSTEM.
          <h3>Secretary, oSTEM</h3>
          Sep. 2020 - May 2021
          <br />
          As secretary of oSTEM, I helped with recruitment and paperwork involved in running the club. I also helped
          with the clubs founding as it was only brought to my campus in September of 2020, and was able to help
          recruit over 30 new members to the club.
          <h3>Student Ambassador, University of Hartford</h3>
          Jan. 2021 - May 2023
          <br />I am a student ambassador for the University of Hartford College of Arts and Sciences. I attend events
          where prospective and new students will be able to ask me questions about my experience. I have taken over
          the official University of Hartford Instagram story to answer questions from both current and prospective
          students about student life, clubs, and the University of Hartford computer science program to an audience of
          over 11,000 people. I also was a panelist for an event put on by the University of Hartford Computing Science
          Department. I answered questions from prospective students about what it's like to be a Computer Science
          student at the University of Hartford.
          <h3>Underclassman Shadow, Society of Women Engineers</h3>
          Sep. 2019 - May 2021
          <br />
          The Society of Women Engineers (SWE) helps to enable women to have a place in engineering. I joined SWE in
          September of 2019, then was elected as underclassman shadow in May 2020. As Underclassman Shadow, I attended
          all executive board meetings and got a feel of how an eBoard works. I also helped the rest of the eBoard with
          any gaps that needed to be filled and ran several successful online and in-person events, such as a NASA
          Webinar and a 'Life After College' Q&amp;A session.
        </p>
      </div>
    </header>
  );
}

export default Resume;
