import styles from '@/components/Button/index.module.scss'

interface ButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
}

export default function Button(props: ButtonProps) {
  const {
    children,
    onClick,
  } = props;

  return (
    <div className={styles.container}>
      <button className={styles.container_button} onClick={onClick}>{children}</button>
    </div>
  );
}