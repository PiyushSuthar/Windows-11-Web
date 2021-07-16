import styles from "./DesktopItem.module.css";
import { Item } from "../../../Configs/DesktopItems.config";
import { useRef, useState } from "preact/hooks";
import useClickOutside from "../../../hooks/useClickOutside";
// import { FileContextMenu } from "../../../Configs/ContextMenus/file.config";
// import { ContextMenu } from "../../ContextMenu";

export const DesktopItem = (props: Item) => {
  const [isActive, setIsActive] = useState(false);
  const ItemRef = useRef<HTMLDivElement>();

  useClickOutside(ItemRef, () => setIsActive(false));

  return (
    <>
      {/* <ContextMenu items={FileContextMenu} containerRef={ItemRef} /> */}
      <div
        ref={ItemRef}
        onClick={() => setIsActive(true)}
        class={[styles.desktop_item, isActive && styles.active].join(" ")}
      >
        <div className={styles.desktop_item_icon}>
          <img src={props.icon} alt={props.name} />
        </div>
        <div class={styles.desktop_item_name}>{props.name}</div>
      </div>
    </>
  );
};
