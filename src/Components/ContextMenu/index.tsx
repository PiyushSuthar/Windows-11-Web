import { RefObject } from "preact";
import { useEffect, useRef } from "preact/hooks";
import { useContextMenu } from "../../hooks/useContextMenu";
import { useFocusOutside } from "../../hooks/useFocusOutside";
import { ChevronIcon } from "../StartMenu/PinnedApps";
import styles from "./Contextmenu.module.css";

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
  const { isMenuVisible, setIsMenuVisible, xPos, yPos, transformOrigin } =
    useContextMenu(containerRef);

  const contextmenuRef = useRef<HTMLDivElement>();

  useEffect(() => {
    isMenuVisible && contextmenuRef.current.focus();
  }, [isMenuVisible]);

  useFocusOutside(
    contextmenuRef,
    () => isMenuVisible && setIsMenuVisible(false)
  );

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
          <div className="chevron_icon">
            <ChevronIcon size="16" />
          </div>
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
      {items.map((item, index) => (
        <Contextitem key={index} {...item} />
      ))}
    </div>
  ) : null;
};
