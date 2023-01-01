import styles from "./DesktopItem.module.css";
import { Item } from "../../../Configs/DesktopItems.config";
import { useRef, useState } from "preact/hooks";
import useClickOutside from "../../../hooks/useClickOutside";
import { openApp } from "../../../store/activeWindow";

export const DesktopItem = (props: Item) => {
  const [isActive, setIsActive] = useState(false);
  const ItemRef = useRef<HTMLDivElement>();

  useClickOutside(ItemRef, () => setIsActive(false));

  const onDBClickAction =
    props.action ||
    (() => {
      openApp(props.appId);
      setIsActive(false);
    });
  return (
    <>
      <div
        ref={ItemRef}
        id={props.context_menu_id}
        onClick={() => setIsActive(true)}
        // eslint-disable-next-line react/no-unknown-property
        onDblClick={onDBClickAction}
        draggable
        className={[styles.desktop_item, isActive && styles.active].join(" ")}
      >
        <div id={props.context_menu_id} className={styles.desktop_item_icon}>
          <img id={props.context_menu_id} src={props.icon} alt={props.name} />
        </div>
        <div id={props.context_menu_id} className={styles.desktop_item_name}>
          {props.name}
        </div>
      </div>
    </>
  );
};
