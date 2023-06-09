import PortfolioCardLarge from '../components/cards/portfolio-card-large'
import styles from './work.module.css'

const portfolioItems = require('../portfolio-items.json')

export default function Work() {
  return (
    <div className="page work">
      <div className={styles.header}>
        <h1 className="big-text-xl">Projects</h1>
      </div>
      <div className={styles.subheading}>
        <span className="title-small">NOTABLE WORK</span>
      </div>
      <div className={styles.projects}>
          {portfolioItems.map((item) => 
            <PortfolioCardLarge {...item} />
          )}
      </div>
      <div className={styles.cta}>
        <p>More case studies coming soon...</p>
      </div>
    </div>
  )
}
