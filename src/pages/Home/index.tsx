import { useNavigate } from 'react-router-dom'
import { ReactSVG } from 'react-svg';
import subtractImage from '../../assets/subtract.svg'
import subtractImage2 from '../../assets/subtract2.svg'
import styles from './home.module.css'
import Button from '../../Components/Button';

export default function Home() {
  const navigate = useNavigate();
  return (
    <>
      <div className={styles.home}>
        <div>
          <h2>Frontend developer</h2>
          <h1>Denis Goncharenko</h1>
          <p>2018 - 2023 Data Security specialist</p>
          <p>2022 - 2023 Rolling Scopes School Trainee</p>
          <p>from 2023 Freelance Frontend (React) Developer</p>
        </div>
        <div className={styles.photoContainer}>
          <img src='/photo.jpg' alt='me' />
        </div>
        <ReactSVG src={subtractImage} className={styles.subtract1} />
        <ReactSVG src={subtractImage2} className={styles.subtract2} />
        <ReactSVG src={subtractImage} className={styles.subtract3} />
        <div className={styles.lightBackground} />
      </div>
      <Button
        text='View Porfolio'
        isPrimary={false}
        callback={() => {navigate('/projects')}}
      />
    </>
  )
}