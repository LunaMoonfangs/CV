import Head from 'next/head'
import Link from 'next/link'
import styles from '../styles/Work.module.css'

export default function Work() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Work Experience - Nicolae SIGHENCEA</title>
        <meta name="description" content="Work Experience - Nicolae SIGHENCEA" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Work Experience - Nicolae SIGHENCEA
        </h1>

        <div className={styles.workItem}>
            2010 - 2021 Machine Tools Engineer - Head of Maintenance
            <div>
              <a href="https://compa.ro/?lang=en" target="_blank" rel="noreferrer">Compa Sibiu</a>
            </div>
        </div>

        <div className={styles.workItem}>
            2011 - 2020 Trainer 
            <div>
              <ul> 
                <li>
                  Elaborare si prezentare cursuri despre diagnosticarea starii tehnice de functionare a masinilor unelte.
                </li>
                <li>
                  Sustinerea orelor de practica si evaluarea cursantilor.               
                </li>
              </ul> 
              <a href="https://compa.ro/?lang=en" target="_blank" rel="noreferrer">Compa Sibiu</a>
            </div>
        </div>
      </main>
    </div>
  )
}
