import React from "react"
import {graphql, Link } from 'gatsby'
import Layout from "../components/Layout"
import * as styles from '../styles/home.module.css';
import Img from 'gatsby-image'

export default function Home({data}) {
   console.log(data)
 
  return (
    <Layout>
      <section className={styles.header}>
        <div className={styles.mainPart}>
          <h2>Welcome to My Blog</h2>
          <h3>Sharing Insights on Design, Development, and More</h3>
          <p>Explore articles, tutorials, and stories from a UX designer & web developer.</p>
          <Link className={styles.btn} to="/blogs">Explore Blog Posts</Link>
        </div>
        {/* <img src="/Banner-for-blog.jpg" alt="site banner" style={{ maxWidth: '100%' ,height:'42vh'}} /> */}
        <Img fluid={data.file.childImageSharp.fluid} />
      </section>
   
    </Layout>
  )
}



export const query=graphql`
query Banner {
  file(relativePath: {eq: "banner-blog.jpg"}) {
    id
    childImageSharp {
      fluid {
         ...GatsbyImageSharpFluid
      }
    }
  }
}`