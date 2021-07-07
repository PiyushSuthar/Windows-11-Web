import styles from "./RecommendedApps.module.css";
import { Button, TitleArea } from "../PinnedApps";

export const RecommendedApps = () => {
  return (
    <div class={styles.container}>
      <TitleArea title="Recommended" button="More" />
      <br />
      <br />
    </div>
  );
};
