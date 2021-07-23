import {
  PinnedApp,
  PinnedApps as PinnedAppsArray,
} from "../../../Configs/startMenu.config";
import { openApp } from "../../../store/activeWindow";
import { toggleStartMenu } from "../../../store/startMenu";
import styles from "./PinnedApps.module.css";

export const ChevronIcon = ({ size = "24" }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    stroke-width="2"
    stroke-linecap="round"
    stroke-linejoin="round"
    class="feather feather-chevron-right"
  >
    <polyline points="9 18 15 12 9 6"></polyline>
  </svg>
);

export const Button = ({ children }: { children: string }) => (
  <button class={styles.button}>
    {children} <ChevronIcon size="14" />
  </button>
);

interface TitleProps {
  title: string;
  button: string;
}
export const TitleArea = ({ title, button }: TitleProps) => (
  <div class={styles.title_area}>
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
        class={styles.app}
      >
        <img src={icon} alt={title} />
        <p>{title}</p>
      </div>
    );
    return isLink ? (
      <a
        class={styles.link}
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
    <div class={styles.container}>
      <TitleArea title="Pinned" button="All Apps" />
      <div class={styles.apps}>
        {PinnedAppsArray.map((pinnedapp, index) => (
          <App {...pinnedapp} key={pinnedapp.title} />
        ))}
      </div>
    </div>
  );
};
