import preact, { FunctionalComponent } from "preact";
import { useState } from "preact/hooks";
import { ChevronIcon } from "../../../../StartMenu/PinnedApps";
import { AccessibilityIcon } from "../../icons/accessibilityIcon";
import { AirplaneIcon } from "../../icons/airplane";
import { BatterySaverIcon } from "../../icons/battery";
import { BluetoothIcon } from "../../icons/bluetooth";
import { MoonIcon } from "../../icons/moon";
import { WifiIcon } from "../../icons/wifi";
import styles from "./Action.module.css";

interface IAction {
  icon: (props: { size: string }) => any;
  name: string;
  show_chevron?: boolean;
  default_state?: boolean;
}

const ACTIONS: IAction[] = [
  {
    icon: WifiIcon,
    name: "Wifi",
    show_chevron: true,
    default_state: true,
  },
  {
    icon: BluetoothIcon,
    name: "Bluetooth",
    show_chevron: true,
  },
  {
    icon: AirplaneIcon,
    name: "Airplane Mode",
  },
  {
    icon: BatterySaverIcon,
    name: "Battery Saver",
  },
  {
    icon: MoonIcon,
    name: "Focus Assist",
  },
  {
    icon: AccessibilityIcon,
    name: "Accessibility",
    show_chevron: true,
  },
];

export const Actions = () => {
  return (
    <div class={styles.container}>
      {ACTIONS.map((action) => (
        <Action {...action} key={action.name} />
      ))}
    </div>
  );
};

export const Action: FunctionalComponent<IAction> = ({
  name,
  icon: Icon,
  default_state,
  show_chevron,
}) => {
  const [isActive, setIsActive] = useState(default_state || false);
  return (
    <div
      onClick={() => setIsActive((prev) => !prev)}
      class={styles.action_container}
    >
      <div class={[styles.icon, isActive && styles.active].join(" ")}>
        <Icon size="20" />
        {show_chevron && <ChevronIcon size="18" />}
      </div>
      {name}
    </div>
  );
};
