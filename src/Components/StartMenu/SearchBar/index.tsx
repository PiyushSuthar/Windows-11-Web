import styles from "./SearchBar.module.css";
import { SearchIcon } from "./searchIcon";

export const SearchBar = () => {
  return (
    <div class={styles.search_container}>
      <div class={styles.icon}>
        <SearchIcon />
      </div>
      <input
        class={styles.search_input}
        type="text"
        placeholder="Type here to search"
      />
    </div>
  );
};
