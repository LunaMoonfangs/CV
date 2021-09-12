import Head from 'next/head'
import Link from 'next/link'
import styles from '../styles/Education.module.css'

export default function Education() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Education - Nicolae SIGHENCEA</title>
        <meta name="description" content="Education - Nicolae SIGHENCEA" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Education - Nicolae SIGHENCEA
        </h1>

        <div className={styles.educationItem}>
            2010 - 2012 Master Degree in CAD,CAM,CAE for Plastic Deformation
            <div>
              <a href="https://inginerie.ulbsibiu.ro/scccdp/" target="_blank">CAM,CAM,CAE - Lucian Blaga University of Sibiu</a>
            </div>
        </div>
        <div className={styles.educationItem}>
            2006 - 2010 Machine Tools and Production Systems
            <div>
              <a href="https://inginerie.ulbsibiu.ro/wp-content/uploads/2018/06/Plan-de-Invatamant-MUSP-21_05_2018.pdf" target="_blank"> MUSP - Lucian Blaga University of Sibiu</a>
            </div>
        </div>
        <div className={styles.educationItem}>
            2002 - 2006 Mathematics and Informatics Energetic Highschool Sibiu
            <div>
              <a href="http://energeticsibiu.ro/" target="_blank">Energetic Highschool Sibiu</a>
            </div>
        </div>    
      </main>
    </div>
  )
}
