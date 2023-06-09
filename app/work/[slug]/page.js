import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import remarkGfm from 'remark-gfm'
import rehypeHighlight from 'rehype-highlight';

import { MDXRemote } from 'next-mdx-remote/rsc'

import styles from './project.module.css'
import "../../highlight-js/github.css"

export default function Project({params}) {

  const props = getProject(params);

  return (
    <div className="post single-project">
      <div className={styles.header}>
        <p className={styles.tagline}>{props.frontMatter.tagline}</p>
        <h1 className="big-text">{props.frontMatter.title}</h1>
        <div className={styles.info}>
          <p className={styles.skills}>{props.frontMatter.skills}</p>
          <p className={styles.year}>{props.frontMatter.year}</p>
        </div>
      </div>
      <div className={styles.cover} style={{backgroundImage: `url("${props.frontMatter.cover}")`}}></div>
      <div className={`post-content ${styles.content}`}>
        <MDXRemote source={props.content} options={options}/>
      </div>
    </div>
  )
}

export async function generateStaticParams() {
  const files = fs.readdirSync(path.join('projects'))

  const paths = files.map(filename => ({
      slug: filename.replace('.mdx', '')
  }))

  return paths
}

export async function generateMetadata({ params }) {
  const project = getProject(params);

  return{
      title: `${project.frontMatter.title} - Dylan`,
      description: project.frontMatter.excerpt,
  }
}

function getProject({slug}){
  const markdownFile = fs.readFileSync(path.join('projects',slug + '.mdx'), 'utf-8')

  const { data: frontMatter, content } = matter(markdownFile)

  return {
      frontMatter,
      slug,
      content
  }
}

const options = {
  mdxOptions: {
      remarkPlugins: [remarkGfm],
      rehypePlugins: [rehypeHighlight],
  }
}