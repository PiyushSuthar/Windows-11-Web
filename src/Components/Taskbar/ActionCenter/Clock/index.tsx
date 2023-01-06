import { useEffect, useState } from "preact/hooks";
import styles from "./Clock.module.css";

export const Clock = () => {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const interval = setInterval(() => {
      setTime(new Date());
    }, 1 * 1000);
    return () => clearInterval(interval);
  });
  return (
    <div className={styles.container}>
      <div className="time">
        {time.toLocaleTimeString("en-us", {
          timeStyle: "short",
        })}
      </div>
      <div className="date">{time.toLocaleDateString()}</div>
    </div>
  );
};
