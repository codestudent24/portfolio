import { ReactSVG } from 'react-svg'
import telegramIcon from '../../assets/telegram.svg'
import whatsAppIcon from '../../assets/whatsapp.svg'
import githubIcon from '../../assets/github.svg'
import phoneIcon from '../../assets/phone.svg'
import emailIcon from '../../assets/email.svg'
import locationIcon from '../../assets/location.svg'
import ContactButton from '../ContactButton'
import styles from './header.module.css'

export default function Contacts() {
  return (
    <div className={styles.contacts}>
      <div className={styles.socials}>
        <ContactButton link='https://telegram.im/@codestudent24' imagePath={telegramIcon} />
        <ContactButton link='https://api.whatsapp.com/send?phone=79990893651' imagePath={whatsAppIcon} />
        <ContactButton link='https://github.com/codestudent24' imagePath={githubIcon} />
      </div>
      <div className={styles.common}>
        <div>
          <ReactSVG src={phoneIcon} className={styles.itemSVG}/>
          <span>+7-999-089-36-51</span>
        </div>
        <div>
          <ReactSVG src={emailIcon} className={styles.itemSVG}/>
          <span>belgorod2407@yandex.ru</span>
        </div>
        <div>
          <ReactSVG src={locationIcon} className={styles.itemSVG}/>
          <span>Khabarovsk, Russia</span>
        </div>
      </div>
    </div>
  )
}