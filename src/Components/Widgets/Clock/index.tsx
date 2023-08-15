import { useEffect, useState } from "preact/hooks";
import styles from "./WidgetsClock.module.css";

export const WidgetClock = () => {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    let interval = setInterval(() => {
      setTime(new Date());
    }, 1 * 1000);
    return () => clearInterval(interval);
  });
  return (
    <div className={styles.container}>
      <div className={styles.time}>
        {time.toLocaleTimeString("en-us", {
          //@ts-ignore
          timeStyle: "short",
        })}
      </div>
    </div>
  );
};
