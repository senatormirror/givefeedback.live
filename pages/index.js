import Head from 'next/head';
import styles from '../styles/Home.module.css';

export default function Home() {
  return (
    <div className={styles.body}>
      <Head>
        <title>Feedback Form</title>
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@100..900&display=swap" rel="stylesheet" />
      </Head>
      <div className={styles.content}>
        <div className={styles.container}>
          <div className={styles.form}>
            <h1 className={`${styles.title} ${styles.titleLeft}`}>Feedback</h1>
            <h1 className={`${styles.title} ${styles.titleRight}`} id="title">CSCU9P1</h1>
            <textarea className={styles.textarea} id="input" placeholder="Enter your feedback..." autoFocus></textarea>
          </div>
        </div>
        <div className={styles.container}>
          <button className={styles.button} id="submit">Submit</button>
        </div>
      </div>
    </div>
  );
}

