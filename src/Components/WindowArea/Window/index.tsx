import { Rnd } from "react-rnd";
import styles from "./Window.module.css";
import {
  MaximizeIcon,
  RestoreIcon,
  BackIcon,
  CloseIcon,
  MinimizeIcon,
} from "./Icons";
import { useStore } from "nanostores/preact";
import { ThemeStore } from "../../../store/darkMode";
import { FunctionComponent } from "preact";
import { OpenApps } from "../../../store/activeWindow";

interface Props {
  window_name: string;
  window_icon: string;
  show_back?: boolean;
  appid: string;
}

export const WindowHolder: FunctionComponent<Props> = ({
  children,
  window_icon,
  window_name = "Hello World",
  show_back = false,
  appid,
}) => {
  const theme = useStore(ThemeStore);
  const OpenedApps = useStore(OpenApps);

  const ICON_COLOR_LIGHT = "#000000";
  const ICON_COLOR_DARK = "#ffffff";

  const ICON_COLOR = theme === "dark" ? ICON_COLOR_DARK : ICON_COLOR_LIGHT;
  return (
    <Rnd
      default={{
        x: 50,
        y: 50,
        width: 320,
        height: 300,
      }}
      minWidth="300"
      minHeight="300"
      bounds="parent"
      dragHandleClassName="app-drag-handler"
    >
      <div class={styles.container}>
        <div className={[styles.titlebar, "app-drag-handler"].join(" ")}>
          <div className={styles.title_stuff}>
            {show_back ? (
              <BackIcon />
            ) : (
              <img src={window_icon} class={styles.title_icon} />
            )}
            <p>{window_name}</p>
          </div>
          <div className={styles.window_actions}>
            <div className={styles.icon}>
              <MinimizeIcon height="14" width="14" color={ICON_COLOR} />
            </div>
            <div className={styles.icon}>
              <MaximizeIcon color={ICON_COLOR} height="14" width="14" />
            </div>
            <div
              onClick={() => {
                OpenApps.set({
                  ...OpenedApps,
                  [appid]: false,
                });
              }}
              className={styles.icon}
            >
              <CloseIcon color={ICON_COLOR} height="14" width="14" />
            </div>
          </div>
        </div>
        {children ? (
          children
        ) : (
          <div className={styles.content}>
            <img
              class={styles.content_image}
              src={window_icon}
              alt={window_name}
            />
            <h4>Coming Soon!</h4>
          </div>
        )}
      </div>
    </Rnd>
  );
};
