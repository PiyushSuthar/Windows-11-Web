import { useEffect, useState } from "preact/hooks";
import styles from "./WidgetsClock.module.css";

export const WidgetClock = () => {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const interval = setInterval(() => {
      setTime(new Date());
    }, 1 * 1000);
    return () => clearInterval(interval);
  });
  return (
    <div className={styles.container}>
      <div className={styles.time}>
        {time.toLocaleTimeString("en-us", {
          timeStyle: "short",
        })}
      </div>
    </div>
  );
};
