import { useStore } from "nanostores/preact";
import { useRef } from "preact/hooks";
import useClickOutside from "../../../../hooks/useClickOutside";
import {
  closeActionCenter,
  showActionCenter,
} from "../../../../store/actionCenter";
import { Actions } from "./Actions";
import styles from "./NotificationPanel.module.css";

export const NotificationPanel = () => {
  const isActionCenterVisible = useStore(showActionCenter);

  const ActionCenterRef = useRef<HTMLDivElement>();

  const hideActionCenter = () => {
    ActionCenterRef.current.classList.add(styles.active);
    setTimeout(() => {
      closeActionCenter();
      ActionCenterRef.current.classList.remove(styles.active);
    }, 150);
  };
  useClickOutside(ActionCenterRef, hideActionCenter);

  return isActionCenterVisible ? (
    <div ref={ActionCenterRef} class={styles.container}>
      <div class={styles.inner_container}>
        <Actions />
        Coming Soon!
      </div>
      <div class={styles.sub_container}></div>
    </div>
  ) : null;
};
