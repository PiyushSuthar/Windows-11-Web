import { useStore } from "nanostores/preact";
import { useRef } from "preact/hooks";
import useClickOutside from "../../hooks/useClickOutside";
import { ShowWidgetStore, toggleWidgets } from "../../store/widgets";
import { WidgetClock } from "./Clock";
import styles from "./Widgets.module.css";

export const Widgets = () => {
  const showWidgets = useStore(ShowWidgetStore);
  const WidgetsRef = useRef<HTMLDivElement>();

  useClickOutside(WidgetsRef, () => {
    WidgetsRef.current.classList.add(styles.hide);
    setTimeout(() => {
      WidgetsRef.current.classList.remove(styles.hide);
      toggleWidgets();
    }, 150);
  });
  return showWidgets ? (
    <div ref={WidgetsRef} class={styles.container}>
      <WidgetClock />
    </div>
  ) : null;
};
