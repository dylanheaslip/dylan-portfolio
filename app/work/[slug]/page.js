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
      <div className={styles.content}>
        <MDXRemote source={props.content} options={options}/>


        {/* <h2>Heading 2</h2>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean sagittis enim justo. Fusce eget nisi convallis, euismod nulla non, tincidunt nulla. Nam congue erat nec massa luctus, quis pharetra mauris scelerisque. Nulla ut magna feugiat, tempus metus sed, maximus erat. Duis lectus tellus, dapibus eget scelerisque in, convallis et nisl. Mauris diam risus, laoreet nec nunc eu, pulvinar vestibulum nulla. In hac habitasse platea dictumst. Integer eget ante est. Sed vel tellus fermentum, pulvinar mi convallis, tincidunt orci. Nam euismod, lorem et vehicula dapibus, tortor risus interdum elit, eu consectetur elit lorem ac felis.</p> 
        <h3>Heading 3</h3>
        <p>Ut hendrerit justo libero, sodales bibendum ipsum elementum non. Quisque non varius lacus, ut tincidunt tortor. Sed a ligula feugiat, tincidunt eros vel, finibus leo. Praesent fermentum euismod volutpat. Suspendisse ex est, tempor non tincidunt eget, dapibus eget elit. Suspendisse rhoncus tempor lorem ut tincidunt. Sed non efficitur dolor. Fusce ut tincidunt lacus. Duis rhoncus nisl odio, nec egestas justo laoreet at. Curabitur quis laoreet est. Mauris quis sem et velit blandit condimentum. Vestibulum luctus tincidunt tellus, eu consectetur dolor vehicula vitae. Nulla facilisi.</p>
        <p>Pellentesque aliquam dolor et augue luctus, a porttitor erat porta. Donec sed velit et sem iaculis ultrices at ut nisl. Morbi vel tincidunt ligula. Maecenas venenatis, mi quis pretium lacinia, nibh nibh bibendum eros, non sagittis velit libero non justo. Nullam gravida eu enim nec vehicula. Nullam congue velit in lectus placerat feugiat. Integer sit amet auctor lacus. Duis purus justo, volutpat quis eleifend sit amet, vehicula eget ipsum. Phasellus et metus sit amet lectus placerat hendrerit. Praesent velit lorem, iaculis nec condimentum a, vestibulum eget massa. Nullam luctus nisl et ante interdum, sit amet sollicitudin mauris faucibus. Curabitur blandit vel nulla tincidunt malesuada. Vivamus luctus, quam sed venenatis tempus, urna mauris tempus enim, sed euismod neque augue quis est. Donec suscipit porttitor ipsum, ac dignissim enim cursus quis. Nunc vitae nunc sed lorem sollicitudin maximus. Cras iaculis hendrerit eros in eleifend.</p>
        <h4>Heading 4</h4>
        <p>Sed maximus vehicula ex, quis auctor neque. Sed mollis eros ut mauris ultricies feugiat. Suspendisse pulvinar bibendum condimentum. Sed non neque eget lorem egestas malesuada at non est. Suspendisse eu odio purus. Quisque ultricies ex at vehicula cursus. Phasellus tincidunt ex ut condimentum sagittis. Proin eu erat eu quam pharetra euismod. Aenean non arcu nulla. Sed eget ullamcorper arcu. Sed ut dolor a arcu vestibulum egestas at eget tortor. Proin elementum mauris sit amet tortor dictum, at aliquam neque egestas. Nunc semper viverra volutpat. Quisque mattis urna et urna egestas, non posuere dolor ullamcorper.</p>
        <h5>Heading 5</h5>
        <p>Phasellus congue maximus posuere. Proin aliquet libero eget neque hendrerit, vitae finibus diam condimentum. Aenean quis lorem non erat mattis viverra. Donec efficitur nunc fringilla, fermentum libero ut, laoreet diam. In sollicitudin vulputate massa vel lobortis. Cras ac mi bibendum, porttitor nisi vitae, dignissim lorem. Phasellus nec leo felis. Aenean hendrerit orci sit amet eros tincidunt, in bibendum ipsum rutrum. Vivamus varius sem sed turpis sodales dignissim. Sed a nunc vel dui suscipit sodales sollicitudin a libero. Vestibulum malesuada pellentesque purus, nec lacinia erat ullamcorper id. Morbi porta venenatis elit, sed ullamcorper arcu molestie iaculis. Sed convallis ultricies massa vehicula dictum.</p>
        <p>Sed sit amet pulvinar purus. Sed quam massa, rutrum pellentesque arcu id, pellentesque pretium purus. Nulla at massa pellentesque tellus tristique ornare nec id odio. Cras at malesuada magna, sed fermentum felis. Cras aliquam commodo sapien, in maximus eros aliquam eget. Mauris interdum semper nulla. Sed consectetur tellus id quam consectetur, eget cursus odio eleifend. Donec pellentesque, nulla lacinia aliquet molestie, tellus lectus interdum diam, vel pretium lacus augue rutrum mauris. Nam augue augue, tincidunt eu scelerisque ut, tempus a velit. Aenean ipsum urna, luctus fermentum tortor eget, egestas efficitur ligula. Aliquam sit amet risus scelerisque, viverra quam ac, tempor dolor. Suspendisse pretium sapien in diam finibus semper. Sed pharetra felis iaculis sapien hendrerit molestie. Aenean rhoncus tortor non urna porta, ut tristique ipsum accumsan.</p>
        <p>Etiam faucibus tortor in leo malesuada, ut efficitur mi interdum. Integer efficitur eros vel lectus convallis suscipit. Quisque sed justo ante. Sed tincidunt at urna id mattis. Vivamus rutrum ut felis nec feugiat. Nam laoreet odio ex, eget rhoncus justo volutpat non. Nunc eu tellus nec neque venenatis fringilla et vel est. Donec vitae efficitur risus. Sed a odio a velit sodales eleifend eu ac mauris. Vivamus lorem leo, lobortis euismod massa in, congue blandit est. </p>     
        <p>Nunc non placerat magna. Sed nulla dolor, pellentesque eu lectus a, rutrum interdum est. Maecenas aliquam pharetra ligula, vel lobortis ex feugiat nec. Duis eget sagittis turpis. Etiam consequat mattis turpis, at suscipit est hendrerit nec. Nunc lacus purus, aliquam eu efficitur ac, lacinia et justo. Phasellus sed tellus magna. Donec non faucibus magna, a fermentum quam.</p>
        <p>Morbi condimentum semper pharetra. Phasellus vitae blandit orci, sed venenatis mauris. Vivamus tempor mattis ex sed laoreet. Donec odio leo, fermentum non consequat non, feugiat quis turpis. Phasellus quis est cursus, pulvinar risus sit amet, porttitor orci. Aenean volutpat dictum leo, in pellentesque risus. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Maecenas dapibus, dolor interdum tempor accumsan, massa enim consectetur leo, quis lacinia velit felis nec sapien.</p>
        <p>Nam sapien tellus, rutrum sed nisi suscipit, lobortis fringilla diam. Vivamus sit amet orci sapien. Nulla porta arcu id mauris facilisis molestie. Suspendisse imperdiet nisl dolor, id luctus ex dapibus in. Proin eget mauris nec quam suscipit rhoncus eu in nulla. Pellentesque congue, eros nec lobortis scelerisque, ante sapien facilisis dui, et commodo lectus tortor non erat. Mauris sodales in velit sed scelerisque. Sed vel dolor tortor. Etiam vel massa quis elit euismod placerat eu vitae odio.</p> */}
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
      title: project.frontMatter.title,
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