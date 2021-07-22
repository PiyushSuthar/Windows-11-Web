import styles from "./SearchBar.module.css";
import { SearchIcon } from "./searchIcon";

interface Props {
  placeholder?: string;
  onSearch?: (query: string) => void;
  className?: string;
}
export const SearchBar = ({
  placeholder = "Type here to search",
  onSearch,
  className,
}: Props) => {
  return (
    <div class={[styles.search_container, className].join(" ")}>
      <div class={styles.icon}>
        <SearchIcon />
      </div>
      <input
        class={styles.search_input}
        type="text"
        placeholder={placeholder}
        onKeyPress={(e: KeyboardEvent) => {
          if (e.key === "Enter") {
            const query = (e.target as HTMLInputElement).value;
            query && onSearch && onSearch(query);
          }
        }}
      />
    </div>
  );
};
