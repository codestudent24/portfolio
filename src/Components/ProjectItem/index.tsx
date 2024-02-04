import { ProjectInfo } from '../../share/types';

type Props = {
  project: ProjectInfo;
}

export default function ProjectItem({project}: Props) {
  return (
    <>
      <h2>{project.name}</h2>
      <img src={`/${project.image}`} alt='project' />
      <p>
        <span>Description:&nbsp;</span>
        {project.description}
      </p>
      <h3>Used features:</h3>
      <ul>
        {project.skills.map((skill) => {
          return <li key={skill}>{skill}</li>
        })}
      </ul>
      {project.github && (
      <p>
        <a href={project.github} target='_blank' rel='noreferrer'>Link: github repo</a>
      </p>
      )}
      {project.deploy && (
        <p>
          <a href={project.deploy} target='_blank' rel='noreferrer'>Link: deploy</a>
        </p>
      )}
    </>
  )
}