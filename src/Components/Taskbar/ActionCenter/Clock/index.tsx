import { useEffect, useState } from "preact/hooks";
import styles from "./Clock.module.css";

export const Clock = () => {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    let interval = setInterval(() => {
      setTime(new Date());
    }, 1 * 1000);
    return () => clearInterval(interval);
  });
  return (
    <div className={styles.container}>
      <div className="time">
        {time.toLocaleTimeString("en-us", {
          //@ts-ignore
          timeStyle: "short",
        })}
      </div>
      <div className="date">{time.toLocaleDateString()}</div>
    </div>
  );
};
