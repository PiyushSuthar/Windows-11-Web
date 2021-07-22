import styles from "../Widgets.module.css";
import { WeatherWidget } from "./Weather";

export const WidgetsContaner = (props: any) => {
  return (
    <>
      <div class={styles.widgets_conatiner}>
        <WeatherWidget />
      </div>
    </>
  );
};
