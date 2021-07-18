import styles from "./taskbarbutton.module.css";
import { icon } from "../../../Configs/Taskbar.config";
import { useStore } from "nanostores/preact";
import { OpenApps, openApp } from "../../../store/activeWindow";

interface Props {
  appId?: string;
}
export const TaskBarButton = (props: icon & Props) => {
  const OpenedApps = useStore(OpenApps);
  const onClickAction =
    props.action || (() => props.appId && openApp(props.appId!));

  let isAppOpen = props.appId && OpenedApps[props.appId].isActive;
  return (
    <div
      class={[styles.button, isAppOpen && styles.active].join(" ")}
      onClick={onClickAction}
    >
      <img src={props.url} alt={props.name} />
    </div>
  );
};
