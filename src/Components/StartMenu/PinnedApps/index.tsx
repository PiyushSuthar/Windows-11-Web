import {
  PinnedApp,
  PinnedApps as PinnedAppsArray,
} from "../../../Configs/startMenu.config";
import { openApp } from "../../../store/activeWindow";
import styles from "./PinnedApps.module.css";

export const ChevronIcon = ({ size = "24" }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className="feather feather-chevron-right"
  >
    <polyline points="9 18 15 12 9 6"></polyline>
  </svg>
);

export const Button = ({ children }: { children: string }) => (
  <button className={styles.button}>
    {children} <ChevronIcon size="14" />
  </button>
);

interface TitleProps {
  title: string;
  button: string;
}
export const TitleArea = ({ title, button }: TitleProps) => (
  <div className={styles.title_area}>
    <div className="title">
      <p>{title}</p>
    </div>
    <div className="title_button">
      <Button>{button}</Button>
    </div>
  </div>
);

interface props {
  hideStartMenu: () => any;
}
export const PinnedApps = ({ hideStartMenu }: props) => {
  const App = ({ title, appId, icon, action, isLink, url }: PinnedApp) => {
    const RequiresWrapper = () => (
      <div
        onClick={
          isLink
            ? undefined
            : (action && action) ||
              (() => {
                openApp(appId || title);
                hideStartMenu();
              })
        }
        className={styles.app}
      >
        <img src={icon} alt={title} />
        <p>{title}</p>
      </div>
    );
    return isLink ? (
      <a
        className={styles.link}
        href={url}
        target="_blank"
        rel="noopener noreferrer"
      >
        <RequiresWrapper />
      </a>
    ) : (
      <RequiresWrapper />
    );
  };

  return (
    <div className={styles.container}>
      <TitleArea title="Pinned" button="All Apps" />
      <div className={styles.apps}>
        {PinnedAppsArray.map((pinnedapp) => (
          <App {...pinnedapp} key={pinnedapp.title} />
        ))}
      </div>
    </div>
  );
};
