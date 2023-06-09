import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'

import PortfolioCardLarge from '../components/cards/portfolio-card-large'
import styles from './work.module.css'

export default function Work() {

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
    <div className="page work">
      <div className={styles.header}>
        <h1 className="big-text-xl">Projects</h1>
      </div>
      <div className={styles.subheading}>
        <span className="title-small">NOTABLE WORK</span>
      </div>
      <div className={styles.projects}>
          {projects.map((item) => 
            <PortfolioCardLarge title={item.meta.title} image={item.meta.cover} description={item.meta.excerpt} skills={item.meta.skills} slug={item.slug} />
          )}
      </div>
      <div className={styles.cta}>
        <p>More case studies coming soon...</p>
      </div>
    </div>
  )
}
