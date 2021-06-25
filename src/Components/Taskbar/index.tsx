import { ICONS } from "../../Configs/Taskbar.config";
import styles from "./taskbar.module.css";
import { TaskBarButton } from "./TaskbarButton";
interface Props {}

export const TaskBar = (props: Props) => {
  return (
    <div class={styles.container}>
      {ICONS.map((icon, index) => (
        <TaskBarButton {...icon} key={index} />
      ))}
    </div>
  );
};
