import { useState } from 'react';
import { projectData } from '../../share/projectData';
import ProjectItem from '../../Components/ProjectItem';
import styles from './projects.module.css';


export default function Projects() {
  const [currentProject, setCurrentProject] = useState(0)

  return (
    <ul className={styles.projectList}>
      {projectData.map((item, index) => {
        return index === currentProject ? (
          <li key={item.name} className={styles.projectInfo}>
            <ProjectItem project={item} />
          </li>
        ) : (
          <li key={item.name} className={styles.projectName}>
            <button onClick={() => { setCurrentProject(index) }}>
              <h2>{item.name}</h2>
            </button>
          </li>
        )
      })}
    </ul>
  )
}