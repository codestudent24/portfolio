import styles from './button.module.css';

type Props = {
  children: string,
  isPrimary: boolean;
  callback: () => void;
}

export default function Button({ callback, isPrimary, children }: Props) {
  return (
    <button
      className={isPrimary ? styles.primary : styles.secondary}
      onClick={callback}
    >
      {children}
    </button>
  )
}