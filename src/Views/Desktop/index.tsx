import styles from "./Desktop.module.css";
// import default_dark_bg from "../../assets/wallpapers/default_dark.jpg";
// import default_light_bg from "../../assets/wallpapers/default_light.jpg";
import { TaskBar } from "../../Components/Taskbar/";
import { ContextMenu } from "../../Components/ContextMenu";
import { useRef } from "preact/hooks";

interface Props {}

export const Desktop = (props: Props) => {
  const ContainerRef = useRef<HTMLDivElement>();
  return (
    <div
      class={styles.container}
      ref={ContainerRef}
      // style={{
      //   "--bg-image": `url(${default_light_bg})`,
      // }}
    >
      <ContextMenu containerRef={ContainerRef} />
      <TaskBar />
    </div>
  );
};
