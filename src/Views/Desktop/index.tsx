import styles from "./Desktop.module.css";
import default_dark_bg from "../../assets/Wallpapers/default_dark.jpg";
import default_light_bg from "../../assets/Wallpapers/default_light.jpg";
import { TaskBar } from "../../Components/Taskbar/";
import { ContextMenu } from "../../Components/ContextMenu";
import { useRef } from "preact/hooks";
import { Startmenu } from "../../Components/StartMenu";
import { useStore } from "nanostores/preact";
import { darkMode } from "../../store/darkMode";
import StartUpSound from "../../assets/startup.mp3";

interface Props {}

export const Desktop = (props: Props) => {
  const ContainerRef = useRef<HTMLDivElement>();

  const isDarkMode = useStore(darkMode);

  return (
    <div
      class={styles.container}
      ref={ContainerRef}
      style={{
        "--bg-image": `url(${isDarkMode ? default_dark_bg : default_light_bg})`,
      }}
    >
      <ContextMenu containerRef={ContainerRef} />
      <Startmenu />
      <TaskBar />
      <audio hidden autoPlay={import.meta.env.PROD} src={StartUpSound}></audio>
    </div>
  );
};
