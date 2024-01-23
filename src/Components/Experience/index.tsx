import styles from './experience.module.css'

export default function Experience() {
  return (
    <div className={styles.experience}>
      <h2>Experience</h2>
      <div>
        <h3>Data security specialist</h3>
        <p className={styles.years}>2018 - 2024</p>
        <p className={styles.description}>
          System administrator, settings up privacy policies, control measures of using PC and local networks.
          Organisation and control of common measures of data security.
        </p>
      </div>
      <div>
        <h3>Rolling Scopes School Trainee</h3>
        <p className={styles.years}>2022 - 2023</p>
        <p className={styles.description}>
          SPA with HTML+CSS+JS, PixelPerfect Layouts, TypeScript + WebPack apps, React + TypeScript app, state managment with Redux, REST Api with RTK Query, SSR with Next.js, backend node.js
        </p>
      </div>
      <div>
        <h3>Frontend Developer Freelance</h3>
        <p className={styles.years}>2023 - now</p>
        <p className={styles.description}>
          Making Layouts with HTML+CSS+JS, React maps with react-leaflet (VTB hackathone)
        </p>
      </div>
    </div>
  )
}