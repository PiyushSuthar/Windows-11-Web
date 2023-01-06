import styles from "../Widgets.module.css";
import { WeatherWidget } from "./Weather";

export const WidgetsContaner = () => {
  return (
    <>
      <div className={styles.widgets_conatiner}>
        <WeatherWidget />
      </div>
    </>
  );
};
