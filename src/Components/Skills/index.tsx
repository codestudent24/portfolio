import styles from './skills.module.css'

export default function Skills() {
  return (
    <div className={styles.skills}>
      <h2>Skills</h2>
      <ul>
        <li>React + TypeScript</li>
        <li>Redux (RTK, RTK Query)</li>
        <li>Next.js (Server Side Rendering)</li>
        <li>React-Hook-Forms with yup</li>
        <li>React-leaflet (maps)</li>
        <li>SPA with vanilla JS</li>
        <li>Webpack</li>
        <li>Git</li>
        <li>Node.js (express)</li>
        <li>MongoDB</li>
        <li>Figma (PixelPerfect)</li>
      </ul>
    </div>
  )
}