import Link from 'next/link'
import styles from './portfolio-card.module.css'

function PortfolioCardLarge({ title, image, description, skills, slug }) {
  return (
    <Link href={`/work/${slug}`}>
      <div className={styles.card}>
        <div className={styles.image} style={{ backgroundImage: `url("${image}")` }}>
        </div>
        <div className={styles.details}>
          <h3>{title}</h3>
          <p>{description}</p>
          <span className={`${styles.skills} title-small title-small--grey`}>{skills}</span>
        </div>
      </div>
    </Link>
  )
}

export default PortfolioCardLarge