import styles from "./Desktop.module.css";
import DarkBackground from "../../assets/Wallpapers/default_dark.jpg";
import LightBackground from "../../assets/Wallpapers/default_light.jpg";
import { TaskBar } from "../../Components/Taskbar/";
import { ContextMenu } from "../../Components/ContextMenu";
import { useEffect, useRef } from "preact/hooks";
import { Startmenu } from "../../Components/StartMenu";
import StartUpSound from "../../assets/startup.mp3";
// import { WindowHolder } from "../../Components/Window";

interface Props {}

export const Desktop = (props: Props) => {
  const ContainerRef = useRef<HTMLDivElement>();

  useEffect(() => {
    preloadImage(DarkBackground);
    preloadImage(LightBackground);
  }, []);

  return (
    <div class={styles.container} ref={ContainerRef}>
      {/* <WindowHolder /> */}
      <ContextMenu containerRef={ContainerRef} />
      <Startmenu />
      <TaskBar />
      <audio hidden autoPlay={import.meta.env.PROD} src={StartUpSound}></audio>
    </div>
  );
};

function preloadImage(path: string) {
  const img = new Image();
  img.src = path;
}
