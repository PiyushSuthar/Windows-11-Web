import { useStore } from "nanostores/preact";
import { ICONS } from "../../Configs/Taskbar.config";
import { ThemeStore, toggleTheme } from "../../store/darkMode";
import styles from "./taskbar.module.css";
import { TaskBarButton } from "./TaskbarButton";
import dark_mode_icon from "../../assets/icons/taskbar/dark_mode.png";
import light_mode_icon from "../../assets/icons/taskbar/light_mode.png";
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
      <TaskBarButton
        url={theme === "dark" ? light_mode_icon : dark_mode_icon}
        name="Dark mode Toggle"
        action={toggleTheme}
      />
    </div>
  );
};
