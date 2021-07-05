import styles from "./taskbarbutton.module.css";
import { icon } from "../../../Configs/Taskbar.config";
import { useStore } from "nanostores/preact";
import { OpenApps } from "../../../store/activeWindow";

interface Props {
  appId?: string;
}
export const TaskBarButton = (props: icon & Props) => {
  const OpenedApps = useStore(OpenApps);
  const onClickAction =
    props.action ||
    (() => {
      OpenApps.set({
        ...OpenedApps,
        [props.appId!]: !OpenedApps[props.appId!],
      });
    });
  return (
    <div class={styles.button} onClick={onClickAction}>
      <img src={props.url} alt={props.name} />
    </div>
  );
};
