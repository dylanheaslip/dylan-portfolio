import styles from './about.module.css'

export default function About() {

  return (
    <div className="page about">
      <div className={styles.header}>
        <h1 className="big-text">Hi, I'm Dylan 👋</h1>
      </div>
      <div className={styles.subheading}>
        <span className="title-small">ABOUT ME</span>
      </div>
      <div className={styles.intro}>
        <h3>I am an IT and Transdisciplinary Innovation student skilled in UI/UX design, web development and digital marketing.</h3>
        <p>Currently helping grow an industry-leading software company as a Digital Marketing Specialist, some of my duties include strategic marketing planning, campaign management, digital design, web development, marketing analytics and media buying.</p>
      </div>
      <div className={styles.services}>
        <div className={styles.service}>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1" stroke-linecap="round" stroke-linejoin="round" class="feather feather-book"><path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"></path><path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"></path></svg>
          <span>Strategy</span>
        </div>
        <div className={styles.service}>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1" stroke-linecap="round" stroke-linejoin="round" class="feather feather-pen-tool"><path d="M12 19l7-7 3 3-7 7-3-3z"></path><path d="M18 13l-1.5-7.5L2 2l3.5 14.5L13 18l5-5z"></path><path d="M2 2l7.586 7.586"></path><circle cx="11" cy="11" r="2"></circle></svg>
          <span>Digital Design</span>
        </div>
        <div className={styles.service}>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1" stroke-linecap="round" stroke-linejoin="round" class="feather feather-code"><polyline points="16 18 22 12 16 6"></polyline><polyline points="8 6 2 12 8 18"></polyline></svg>
          <span>Development</span>
        </div>
      </div>
      <div className={styles.gallery}>
        <img src='/placeholder/planet-volumes-_WVDYqsB9ig-unsplash.jpg'/>
        <img src='/placeholder/planet-volumes-6tI9Fk5p4bo-unsplash.jpg'/>
        <img src='/placeholder/planet-volumes-ydvaP3HZjXk-unsplash.jpg'/>
        <img src='/placeholder/planet-volumes-ZNSUJ-JQP-c-unsplash.jpg'/>
      </div>
      <div className={styles.certs}>
        <h4>Certifications</h4>
        <ul>
          <li>Jira Fundamentals Badge<br/><small>Atlassian</small></li>
          <li>Confluence Fundamentals Badge<br/><small>Atlassian</small></li>
          <li>Google Analytics Individual Qualification<br/><small>Google</small></li>
          <li>Google Ads Display Certification<br/><small>Google</small></li>
        </ul>
      </div>
    </div>
  )
}
