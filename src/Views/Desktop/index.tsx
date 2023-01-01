import styles from "./Desktop.module.css";
import { TaskBar } from "../../Components/Taskbar/";
import { useRef } from "preact/hooks";
import StartUpSound from "../../assets/startup.mp3";
import { WindowArea } from "../../Components/WindowArea";
import { lazy, Suspense } from "preact/compat";
import { defaultContextMenuConfig } from "../../Configs/ContextMenus/default.config";
import { DesktopItems } from "../../Components/DesktopItems";

const ContextMenu = lazy(() =>
  import("../../Components/ContextMenu").then(({ ContextMenu }) => ({
    default: ContextMenu,
  }))
);

const Startmenu = lazy(() =>
  import("../../Components/StartMenu").then(({ Startmenu }) => ({
    default: Startmenu,
  }))
);
const Widgets = lazy(() =>
  import("../../Components/Widgets").then(({ Widgets }) => ({
    default: Widgets,
  }))
);
const NotificationPanel = lazy(() =>
  import("../../Components/Taskbar/ActionCenter/NotificationPanel").then(
    ({ NotificationPanel }) => ({
      default: NotificationPanel,
    })
  )
);

export const Desktop = () => {
  const ContainerRef = useRef<HTMLDivElement>();

  // useEffect(() => {
  //   preloadImage(DarkBackground);
  //   preloadImage(LightBackground);
  // }, []);

  return (
    <div className={styles.container} ref={ContainerRef}>
      <DesktopItems />
      <WindowArea />
      <Suspense fallback={<span></span>}>
        <ContextMenu
          items={defaultContextMenuConfig}
          containerRef={ContainerRef}
        />
        <Widgets />
        <Startmenu />
        <NotificationPanel />
      </Suspense>
      <TaskBar />
      <audio hidden autoPlay={import.meta.env.PROD} src={StartUpSound}></audio>
    </div>
  );
};
