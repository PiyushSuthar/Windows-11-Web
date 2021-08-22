import { useStore } from "nanostores/preact";
import { useRef } from "preact/hooks";
import useClickOutside from "../../../../hooks/useClickOutside";
import {
  closeActionCenter,
  showActionCenter,
} from "../../../../store/actionCenter";
import { openApp } from "../../../../store/activeWindow";
import { BatteryIcon } from "../icons/battery";
import { PencilIcon, SettingsIcon } from "../icons/settings";
import { Actions } from "./Actions";
import styles from "./NotificationPanel.module.css";
import { Sliders } from "./Slider";

export const NotificationPanel = () => {
  const isActionCenterVisible = useStore(showActionCenter);

  const ActionCenterRef = useRef<HTMLDivElement>();

  const hideActionCenter = () => {
    ActionCenterRef.current.classList.add(styles.active);
    setTimeout(() => {
      closeActionCenter();
      ActionCenterRef.current.classList.remove(styles.active);
    }, 140);
  };
  useClickOutside(ActionCenterRef, hideActionCenter);

  return isActionCenterVisible ? (
    <div ref={ActionCenterRef} class={styles.container}>
      <div class={styles.inner_container}>
        <Actions />
        <Sliders />
      </div>
      <div class={styles.sub_container}>
        <div class={styles.battery_indicator}>
          <BatteryIcon />
          <p>69%</p>
        </div>
        <div class={styles.other_icons}>
          <PencilIcon size="16" />
          <div
            onClick={() => {
              openApp("settings");
            }}
          >
            <SettingsIcon size="16" />
          </div>
        </div>
      </div>
    </div>
  ) : null;
};
