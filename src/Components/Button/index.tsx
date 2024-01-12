import styles from './button.module.css';

type Props = {
  text: string,
  isPrimary: boolean;
  callback: () => void;
}

export default function Button({ callback, isPrimary, text }: Props) {
  return (
    <button
      className={isPrimary ? styles.primary : styles.secondary}
      onClick={callback}
    >
      {text}
    </button>
  )
}