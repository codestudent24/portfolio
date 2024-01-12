import { ReactSVG } from "react-svg"
import styles from './contact.module.css';

type Props = {
  link: string,
  imagePath: string,
}

export default function ContactButton({link, imagePath}: Props) {
  return <button className={styles.btn}>
    <a href={link} target="_blank" rel="noreferrer">
      <ReactSVG src={imagePath} />
    </a>
  </button>
}