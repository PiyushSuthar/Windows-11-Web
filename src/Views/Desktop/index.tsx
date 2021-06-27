import styles from "./Desktop.module.css";
import default_dark_bg from "../../assets/Wallpapers/default_dark.jpg";
import default_light_bg from "../../assets/Wallpapers/default_light.jpg";
import { TaskBar } from "../../Components/Taskbar/";
import { ContextMenu } from "../../Components/ContextMenu";
import { useRef } from "preact/hooks";
import { Startmenu } from "../../Components/StartMenu";
import StartUpSound from "../../assets/startup.mp3";
// import { WindowHolder } from "../../Components/Window";

interface Props {}

export const Desktop = (props: Props) => {
  const ContainerRef = useRef<HTMLDivElement>();
  return (
    <div
      class={styles.container}
      ref={ContainerRef}
    >
      {/* <WindowHolder /> */}
      <ContextMenu containerRef={ContainerRef} />
      <Startmenu />
      <TaskBar />
      <audio hidden autoPlay={import.meta.env.PROD} src={StartUpSound}></audio>
    </div>
  );
};
