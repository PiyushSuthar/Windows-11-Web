import { useStore } from "nanostores/preact";
import { useEffect, useRef } from "preact/hooks";
import useClickOutside from "../../hooks/useClickOutside";
import { useFocusOutside } from "../../hooks/useFocusOutside";
import {
  showStartMenu as isStartMenuVisible,
  toggleStartMenu,
} from "../../store/startMenu";
import { SearchBar } from "./SearchBar";
import { PinnedApps } from "./PinnedApps";
import styles from "./StartMenu.module.css";
import { UserProfile } from "./UserProfile";
import { RecommendedApps } from "./RecommendedApps";

export const Startmenu = () => {
  const showStartMenu = useStore(isStartMenuVisible);

  const StartMenuRef = useRef<HTMLDivElement>();

  useClickOutside(StartMenuRef, () => {
    StartMenuRef.current.classList.add(styles.active);
    setTimeout(() => {
      toggleStartMenu();
      StartMenuRef.current.classList.remove(styles.active);
    }, 150);
  });

  return showStartMenu ? (
    <div ref={StartMenuRef} class={styles.container}>
      <div class={styles.inner_container}>
        <SearchBar />
      </div>
      <div class={styles.inner_container}>
        <PinnedApps />
      </div>
      <div class={styles.inner_container}>
        <RecommendedApps />
      </div>
      <div class={styles.user_container}>
        <UserProfile />
      </div>
    </div>
  ) : null;
};
