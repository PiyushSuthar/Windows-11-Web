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
import { useMemo, useRef, useState } from "preact/hooks";

interface Props {
  window_name: string;
  window_icon: string;
  show_back?: boolean;
  appid: string;
  Component?: any;
  height?: number;
  width?: number;
}

// Taken from puruVJ's macos web code :[]
export function randint(lower: number, upper: number) {
  if (lower > upper) [lower, upper] = [upper, lower];

  return lower + Math.floor((upper - lower) * Math.random());
}

export const WindowHolder: FunctionComponent<Props> = ({
  children,
  window_icon,
  window_name = "Hello World",
  show_back = false,
  appid,
  height,
  width,
}) => {
  const theme = useStore(ThemeStore);
  const OpenedApps = useStore(OpenApps);

  const ICON_COLOR_LIGHT = "#000000";
  const ICON_COLOR_DARK = "#ffffff";

  const ICON_COLOR = theme === "dark" ? ICON_COLOR_DARK : ICON_COLOR_LIGHT;

  const WindowRef = useRef<HTMLDivElement>();

  const randX = useMemo(() => randint(-600, 100), []);
  const randY = useMemo(() => randint(-100, 100), []);

  const [isMaximized, setIsMaximized] = useState(false);

  return (
    <Rnd
      default={{
        x: (document.body.clientWidth + randX) / 2,
        y: (100 + randY) / 2,
        width: width || 320,
        height: height || 300,
      }}
      minWidth="300"
      minHeight="300"
      bounds="parent"
      style={
        {
          // transition: "height 0.2s ease, width 0.2s ease",
          // transition: "all 0.3s ease",
        }
      }
      size={
        isMaximized && {
          width: isMaximized ? document.body.clientWidth : 320,
          height: isMaximized ? document.body.clientHeight - 50 : 300,
        }
      }
      {...{
        position: isMaximized && {
          x: isMaximized ? 0 : undefined,
          y: isMaximized ? 0 : undefined,
        },
      }}
      dragHandleClassName="app-drag-handler"
    >
      <div ref={WindowRef} class={styles.container}>
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
            <div
              onClick={() => {
                setIsMaximized((prev) => !prev);
              }}
              className={styles.icon}
            >
              <MaximizeIcon color={ICON_COLOR} height="14" width="14" />
            </div>
            <div
              onClick={() => {
                WindowRef.current.classList.add(styles.close);
                setTimeout(() => {
                  OpenApps.set({
                    ...OpenedApps,
                    [appid]: {
                      ...OpenedApps[appid],
                      isActive: false,
                    },
                  });
                  WindowRef.current.classList.remove(styles.close);
                }, 100);
              }}
              className={[styles.icon, styles.close].join(" ")}
            >
              <CloseIcon color={ICON_COLOR} height="14" width="14" />
            </div>
          </div>
        </div>
        {/* {children ? (
        ) : ( */}
        <div className={styles.content}>
          {children ? (
            children
          ) : (
            <>
              {" "}
              <img
                class={styles.content_image}
                src={window_icon}
                alt={window_name}
              />
              <h4>Coming Soon!</h4>
            </>
          )}
        </div>
        {/* )} */}
      </div>
    </Rnd>
  );
};
