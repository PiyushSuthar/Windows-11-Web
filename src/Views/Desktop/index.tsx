import styles from "./Desktop.module.css";
// import DarkBackground from "../../assets/Wallpapers/default_dark.jpg";
// import LightBackground from "../../assets/Wallpapers/default_light.jpg";
import { TaskBar } from "../../Components/Taskbar/";
// import { ContextMenu } from "../../Components/ContextMenu";
import { useEffect, useRef } from "preact/hooks";
// import { Startmenu } from "../../Components/StartMenu";
import StartUpSound from "../../assets/startup.mp3";
import { WindowArea } from "../../Components/WindowArea";
import { lazy, Suspense } from "preact/compat";
import { defaultContextMenuConfig } from "../../Configs/ContextMenus/default.config";
import { DesktopItems } from "../../Components/DesktopItems";
// import { Widgets } from "../../Components/Widgets";

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

interface Props {}

export const Desktop = (props: Props) => {
  const ContainerRef = useRef<HTMLDivElement>();

  // useEffect(() => {
  //   preloadImage(DarkBackground);
  //   preloadImage(LightBackground);
  // }, []);

  return (
    <div class={styles.container} ref={ContainerRef}>
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

// function preloadImage(path: string) {
//   const img = new Image();
//   img.src = path;
// }
