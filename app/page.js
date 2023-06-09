import Button from './components/buttons/button'
import PortfolioCardLarge from './components/cards/portfolio-card-large'
import styles from './page.module.css'

const portfolioItems = require('./portfolio-items.json')

export default function Home() {
  return (
    <div className="page home">
      <div className={styles.hero}>
        <img src="/home-bigtext.svg" />
      </div>
      <div className={styles.wrapper}>
        <div className={styles.banner}></div>
      </div>
      <div className={styles.about}>
        <h1 className="title-small title-small--accent">ABOUT</h1>
        <h2>I am a <u>digital designer</u> and <u>developer</u> from Sydney, studying Transdisciplinary Innovation.</h2>
        <h2><b>I design and build websites and apps.</b></h2>
      </div>
      <div className={styles.work}>
        <h1 className="title-small title-small--accent">WORK</h1>
        <div className={styles.projectgrid}>
          {portfolioItems.map((item) => 
            <PortfolioCardLarge {...item} />
          )}
        </div>
        <div className={styles.more}>
          <p>Want to see more?</p>
          <Button text="See Projects" href="/work" />
        </div>
      </div>
    </div>
  )
}
