import { useStore } from "nanostores/preact";
import { ICONS } from "../../Configs/Taskbar.config";
import { ThemeStore, toggleTheme } from "../../store/darkMode";
import styles from "./taskbar.module.css";
import { TaskBarButton } from "./TaskbarButton";
import dark_mode_icon from "../../assets/icons/taskbar/dark_mode.png";
import light_mode_icon from "../../assets/icons/taskbar/light_mode.png";
import { AppsConfig } from "../../Configs/apps.config";
import { ActionCenter } from "./ActionCenter";
interface Props {}

export const TaskBar = (props: Props) => {
  const theme = useStore(ThemeStore);

  return (
    <div class={styles.container}>
      <div className={styles.icons}>
        {ICONS.map((icon, index) => (
          <TaskBarButton {...icon} key={index} />
        ))}
        {Object.keys(AppsConfig).map(
          (appid) =>
            AppsConfig[appid] && (
              <TaskBarButton
                name={AppsConfig[appid].title}
                url={AppsConfig[appid].icon}
                appId={appid}
              />
            )
        )}
        <TaskBarButton
          url={theme === "dark" ? light_mode_icon : dark_mode_icon}
          name="Dark mode Toggle"
          action={toggleTheme}
        />
      </div>
      <ActionCenter />
    </div>
  );
};
