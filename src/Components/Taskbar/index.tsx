import { useStore } from "nanostores/preact";
import { ICONS } from "../../Configs/Taskbar.config";
import { ThemeStore } from "../../store/darkMode";
import styles from "./taskbar.module.css";
import { TaskBarButton } from "./TaskbarButton";
interface Props {}

export const TaskBar = (props: Props) => {
  const theme = useStore(ThemeStore);

  return (
    <div
      style={{
        "--task-bg": `var(${
          theme === "dark" ? "--background_dark" : "--background_light"
        })`,
      }}
      class={styles.container}
    >
      {ICONS.map((icon, index) => (
        <TaskBarButton {...icon} key={index} />
      ))}
    </div>
  );
};
