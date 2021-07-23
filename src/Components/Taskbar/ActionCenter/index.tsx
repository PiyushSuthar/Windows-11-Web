import styles from "./ActionCenter.module.css";
import { Clock } from "./Clock";
import { BatteryIcon } from "./NotificationPanel/icons/battery";
import { ChevronUP } from "./NotificationPanel/icons/chevron-up";
import { SpeakerIcon } from "./NotificationPanel/icons/speaker";
import { WifiIcon } from "./NotificationPanel/icons/wifi";

export const ActionCenter = () => {
  return (
    <div class={styles.container}>
      <div className={styles.system_tray}>
        <ChevronUP />
      </div>
      <div className={styles.action_buttons}>
        <div className={styles.action_button}>
          <BatteryIcon />
        </div>
        <div className={styles.action_button}>
          <WifiIcon />
        </div>
        <div className={styles.action_button}>
          <SpeakerIcon />
        </div>
      </div>
      <Clock />
    </div>
  );
};
