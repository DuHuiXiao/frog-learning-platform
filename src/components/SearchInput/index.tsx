import styles from '@/components/SearchInput/index.module.scss'
import { SearchOutlined } from '@ant-design/icons';

interface SearchInputProps {
  placeholder: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export default function SearchInput(props: SearchInputProps) {
  const { placeholder, value, onChange } = props;
  return (
    <div className={styles.searchInput} >
      <input className={styles.searchInput_input} type="text" placeholder={placeholder} value={value} spellCheck="false" onChange={onChange} />
      <button className={styles.searchInput_button}>
        <SearchOutlined className={styles.searchInput_button_icon} />
      </button>
    </div>
  );
}