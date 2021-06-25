import styles from "./taskbarbutton.module.css";
import { icon } from "../../../Configs/Taskbar.config";

export const TaskBarButton = (props: icon) => {
  return (
    <div class={styles.button}>
      <img src={props.url} alt={props.name} />
    </div>
  );
};
