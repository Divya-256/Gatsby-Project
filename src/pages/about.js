import React from 'react'
import Layout from '../components/Layout'
import * as styles from "../styles/about.module.css"

const about = () => {
  return (
    <Layout>

      <section className={styles.about}>
    <h1>Welcome!</h1>
    <p>We’re here to share practical advice, real-life stories, and valuable insights on everyday topics. Our goal is to keep you informed, inspired, and connected in a world that’s constantly changing.</p>
  <div className={styles.aboutDetails}>
    <h2>What We Do</h2>
    <p>We cover a variety of real-world topics, including:</p>
    
    <ul>
      <li>Technology</li>
      <li>Personal Growth & Productivity</li>
      <li>Health & Wellness</li>
      <li>Lifestyle & Travel</li>
    </ul>
    </div>
    <p>Whether you're just starting out or already on your journey, you’ll find useful tips, relatable stories, and fresh perspectives on how to navigate life’s ups and downs.</p>
  </section>

    </Layout>
  )
}

export default about
