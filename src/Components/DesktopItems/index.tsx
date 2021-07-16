import styles from "./desktop_items.module.css";
import { DesktopItems as Icons } from "../../Configs/DesktopItems.config";
import { DesktopItem } from "./Item";

export const DesktopItems = () => {
  return (
    <div className={styles.container}>
      {Icons.map((icon) => (
        <DesktopItem key={icon.name} {...icon} />
      ))}
    </div>
  );
};
