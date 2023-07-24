import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'

import Button from './components/buttons/button'
import PortfolioCardLarge from './components/cards/portfolio-card-large'
import styles from './page.module.css'

export default function Home() {
  const projectsDir = "projects"
  const files = fs.readdirSync(path.join(projectsDir))
  const projects = files.map(filename => {
  const fileContent = fs.readFileSync(path.join(projectsDir, filename), 'utf-8')
  const { data: frontMatter } = matter(fileContent)
    return {
      meta: frontMatter,
      slug: filename.replace('.mdx', '')
    }
  })

  return (
    <div className="page home">
      <div className={styles.hero}>
        <img src="/home-bigtext.svg" alt='Crafting digital experiences banner'/>
      </div>
      <div className={styles.wrapper}>
        <div className={styles.banner}></div>
      </div>
      <div className={styles.about}>
        <h1 className="title-small title-small--accent">ABOUT</h1>
        <h2>I am a <u>digital designer</u> and <u>developer</u> from Sydney, studying IT and Transdisciplinary Innovation.</h2>
        {/* <h2><b>I design and build websites and apps.</b></h2> */}
      </div>
      <div className={styles.work}>
        <h1 className="title-small title-small--accent">WORK</h1>
        <div className={styles.projectgrid}>
          {projects.map((item, index) => 
            <PortfolioCardLarge key={index} title={item.meta.title} image={item.meta.cover} description={item.meta.excerpt} skills={item.meta.skills} slug={item.slug} />
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
