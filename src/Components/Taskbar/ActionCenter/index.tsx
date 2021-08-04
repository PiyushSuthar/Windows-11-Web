import { toggleActionCenter } from "../../../store/actionCenter";
import styles from "./ActionCenter.module.css";
import { Clock } from "./Clock";
import { NotificationPanel } from "./NotificationPanel";
import { BatteryIcon } from "./icons/battery";
import { ChevronUP } from "./icons/chevron-up";
import { SpeakerIcon } from "./icons/speaker";
import { WifiIcon } from "./icons/wifi";

export const ActionCenter = () => {
  return (
    <>
      <div class={styles.container}>
        <div className={styles.system_tray}>
          <ChevronUP />
        </div>
        <div onClick={toggleActionCenter} className={styles.action_buttons}>
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
    </>
  );
};
