import styles from "./RecommendedApps.module.css";
import { TitleArea } from "../PinnedApps";

export const RecommendedApps = () => {
  return (
    <div className={styles.container}>
      <TitleArea title="Recommended" button="More" />
      <br />
      <br />
    </div>
  );
};
