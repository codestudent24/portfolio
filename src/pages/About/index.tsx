import Experience from '../../Components/Experience'
import Skills from '../../Components/Skills'
import styles from './about.module.css'

export default function About() {
  return (
    <>
    <section className={styles.about}>
      <Skills />
    </section>
    <section className={styles.about}>
      <Experience />
    </section>
    </>
  )
}