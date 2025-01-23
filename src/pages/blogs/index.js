import React from 'react'
import { Link, graphql } from 'gatsby'
import Layout from '../../components/Layout'
import * as styles from '../../styles/blogs.module.css';  
import Img from 'gatsby-image'
const Blogs = ({data}) => {
  console.log(data);
  const blogs=data.allMarkdownRemark.nodes


  return (
    <Layout>
      <div className={styles.blog}>
        <h2>My Blog </h2>
        <h3>Articles, Tutorials, and Insights I've Written</h3>
        <p>Explore my blog posts on various topics related to design, development, and technology.</p>
         <div className={styles.blogs}>
         {blogs.map(blog=>(
           <Link to={"/blogs/" + blog.frontmatter.slug} key={blog.id}>
            
           <div>
              
                {blog.frontmatter.thumb && blog.frontmatter.thumb.childImageSharp && blog.frontmatter.thumb.childImageSharp.fluid ? (
                  <Img fluid={blog.frontmatter.thumb.childImageSharp.fluid} />
                ) : (
                  <div className={styles.noThumb}>No Image Available</div> 
                )}
             <h3>{ blog.frontmatter.title }</h3>
             <p>{blog.frontmatter.contact}</p>
           </div>
         </Link>
         ))}
         </div>
     </div>
    </Layout>
  );
}

export default Blogs;

export const query = graphql`
query BlogsPage {
  allMarkdownRemark(filter: {}) {
    nodes {
      frontmatter {
        slug
        title
        thumb {
          childImageSharp {
            fluid {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
      id
    }
  }
}
`