import { NavLink } from 'react-router-dom'
import { ReactSVG } from 'react-svg'
import reactIcon from '../../assets/react.svg'
import styles from './header.module.css'

const selectLinkClass = (arg: boolean) => arg ? styles.activeLink : styles.link;

export default function Navigation() {
  return (
      <div className={styles.header}>
        <div>
          <ReactSVG src={reactIcon} className={styles.itemSVG} />
          <span>Frontend developer</span>
        </div>
        <nav>
          <NavLink to='/' className={({ isActive }) => selectLinkClass(isActive)}>Home</NavLink>
          <NavLink to='/about' className={({ isActive }) => selectLinkClass(isActive)}>About me</NavLink>
          <NavLink to='/projects' className={({ isActive }) => selectLinkClass(isActive)}>Projects</NavLink>
        </nav>
      </div>
  )
}