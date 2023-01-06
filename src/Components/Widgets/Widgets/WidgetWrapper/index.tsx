import { FunctionComponent } from "preact";
import styles from "./wrapper.module.css";

interface props {
  title: string;
  icon?: string;
  SVG?: any;
  className?: string;
}
export const WidgetWrapper: FunctionComponent<props> = ({
  children,
  title,
  icon,
  SVG,
  className,
}) => (
  <div className={[className, styles.wrapper].join(" ")}>
    <div className={styles.info_bar}>
      <div className={styles.title}>
        <div className={styles.icon}>
          {SVG ? <SVG size="15" /> : icon && <img src={icon} alt={title} />}
        </div>
        <span>{title}</span>
      </div>
      <div className={styles.menu}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="feather feather-more-horizontal"
        >
          <circle cx="12" cy="12" r="1"></circle>
          <circle cx="19" cy="12" r="1"></circle>
          <circle cx="5" cy="12" r="1"></circle>
        </svg>
      </div>
    </div>
    {children}
  </div>
);
