import { RefObject } from "preact";
import { useEffect, useRef } from "preact/hooks";
import { useContextMenu } from "../../hooks/useContextMenu";
import { useFocusOutside } from "../../hooks/useFocusOutside";
import { ChevronIcon } from "../StartMenu/PinnedApps";
import styles from "./Contextmenu.module.css";

// Context Menus
import { getContextMenu } from "../../Configs/ContextMenus";

interface Props {
  containerRef: RefObject<HTMLDivElement>;
  items: ContextItem[];
}

export interface ContextItem {
  icon?: string;
  text: string;
  onClick?: preact.JSX.MouseEventHandler<HTMLDivElement> | undefined;
  subitems?: ContextItem[];
  divideNext?: boolean;
  isDisabled?: boolean;
}

export const ContextMenu = ({ containerRef, items }: Props) => {
  const contextmenuRef = useRef<HTMLDivElement>();
  const {
    isMenuVisible,
    setIsMenuVisible,
    xPos,
    yPos,
    transformOrigin,
    targetEleId,
  } = useContextMenu(containerRef, contextmenuRef);

  useEffect(() => {
    isMenuVisible && contextmenuRef.current.focus();
  }, [isMenuVisible]);

  useFocusOutside(
    contextmenuRef,
    () => isMenuVisible && setIsMenuVisible(false)
  );

  let MENU = getContextMenu(targetEleId);
  // TODO: Add Icons
  const Contextitem = ({
    text,
    subitems,
    onClick,
    divideNext,
    icon,
    isDisabled,
  }: ContextItem) => (
    <>
      <div
        onClick={onClick}
        class={[styles.context_item, isDisabled && styles.disabled].join(" ")}
      >
        <p>{text}</p>
        {subitems && (
          <>
            <div className="chevron_icon">
              <ChevronIcon size="16" />
            </div>
            <div
              style={{
                [transformOrigin.y]: "101%",
                transformOrigin: `top ${transformOrigin.y}`,
              }}
              class={styles.submenu_items}
            >
              {subitems.map((item) => (
                <Contextitem text={item.text} />
              ))}
            </div>
          </>
        )}
      </div>
      {divideNext && <ContextDivider />}
    </>
  );

  const ContextDivider = () => <div class={styles.context_divider}></div>;

  return isMenuVisible ? (
    <div
      ref={contextmenuRef}
      style={{
        top: yPos,
        left: xPos,
        transformOrigin: `${transformOrigin.x} ${transformOrigin.y}`,
      }}
      class={styles.context_menu}
    >
      {MENU.map((item, index) => (
        <Contextitem key={index} {...item} />
      ))}
    </div>
  ) : null;
};
