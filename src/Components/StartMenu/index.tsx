import { useStore } from 'nanostores/preact';
import { useEffect, useRef } from 'preact/hooks';
import useClickOutside from '../../hooks/useClickOutside';
import { useFocusOutside } from '../../hooks/useFocusOutside';
import { ThemeStore } from '../../store/darkMode';
import {
  showStartMenu as isStartMenuVisible,
  toggleStartMenu,
} from '../../store/startMenu';
import { SearchBar } from './SearchBar';
import styles from './StartMenu.module.css';

export const Startmenu = () => {
  const showStartMenu = useStore(isStartMenuVisible);
  const theme = useStore(ThemeStore);

  const StartMenuRef = useRef<HTMLDivElement>();

  // useEffect(() => {
  //   showStartMenu && StartMenuRef.current.focus();
  // }, [showStartMenu]);

  // useFocusOutside(StartMenuRef, () => {
  //   console.log("out");
  //   showStartMenu && isStartMenuVisible.set(false);
  // });

  useClickOutside(StartMenuRef, () => toggleStartMenu());

  return showStartMenu ? (
    <div
      ref={StartMenuRef}
      style={{
        '--start-bg': `var(${
          theme === 'dark' ? '--background_dark' : '--background_light'
        })`,
      }}
      class={styles.container}
    >
      <div class={styles.inner_container}>
        <SearchBar />
      </div>
    </div>
  ) : null;
};
