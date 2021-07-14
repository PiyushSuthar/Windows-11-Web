import styles from "./ActionCenter.module.css";
import { Clock } from "./Clock";

export const ActionCenter = () => {
  return (
    <div class={styles.container}>
      <Clock />
    </div>
  );
};
