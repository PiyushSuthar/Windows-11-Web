import { useStore } from "nanostores/preact";
import { RefObject } from "preact";
import { useEffect, useRef } from "preact/hooks";
import { useContextMenu } from "../../hooks/useContextMenu";
import { useFocusOutside } from "../../hooks/useFocusOutside";
import { darkMode } from "../../store/darkMode";
import styles from "./Contextmenu.module.css";

interface Props {
  containerRef: RefObject<HTMLDivElement>;
}

export const ContextMenu = ({ containerRef }: Props) => {
  const { isMenuVisible, setIsMenuVisible, xPos, yPos } =
    useContextMenu(containerRef);

  const isDarkMode = useStore(darkMode);
  const contextmenuRef = useRef<HTMLDivElement>();

  useEffect(() => {
    isMenuVisible && contextmenuRef.current.focus();
  }, [isMenuVisible]);

  useFocusOutside(
    contextmenuRef,
    () => isMenuVisible && setIsMenuVisible(false)
  );

  const Contextitem = ({ children }: any) => (
    <div class={styles.context_item}>{children}</div>
  );

  const ContextDivider = () => <div class={styles.context_divider}></div>;

  return isMenuVisible ? (
    <div
      ref={contextmenuRef}
      style={{
        top: yPos,
        left: xPos,
        "--bg-color": `var(${
          isDarkMode ? "--background_dark" : "--background_light"
        })`,
        "--text-color": `var(${isDarkMode ? "--text-dark" : "--text-light"})`,
      }}
      class={styles.context_menu}
    >
      <div class={styles.inner_container}>
        <Contextitem>View</Contextitem>
        <Contextitem>Sort by</Contextitem>
        <Contextitem>Refresh</Contextitem>
      </div>
      <ContextDivider />
      <div class={styles.inner_container}>
        <Contextitem>Paste</Contextitem>
        <Contextitem>Paste Shortcut</Contextitem>
      </div>
      <ContextDivider />
      <div class={styles.inner_container}>
        <Contextitem>New</Contextitem>
      </div>
      <ContextDivider />
      <div class={styles.inner_container}>
        <Contextitem>Display Settings</Contextitem>
        <Contextitem>Personalize</Contextitem>
      </div>
    </div>
  ) : null;
};
