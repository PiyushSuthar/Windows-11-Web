import {
  PinnedApp,
  PinnedApps as PinnedAppsArray,
} from "../../../Configs/startMenu.config";
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

const App = ({ name, icon, action, isLink, url }: PinnedApp) => {
  const RequiresWrapper = () => (
    <div onClick={action && action} class={styles.app}>
      <img src={icon} alt={name} />
      <p>{name}</p>
    </div>
  );
  return isLink ? (
    <a class={styles.link} href={url} target="_blank" rel="noopener noreferrer">
      <RequiresWrapper />
    </a>
  ) : (
    <RequiresWrapper />
  );
};

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
export const PinnedApps = () => {
  return (
    <div class={styles.container}>
      <TitleArea title="Pinned" button="All Apps" />
      <div class={styles.apps}>
        {PinnedAppsArray.map((pinnedapp, index) => (
          <App {...pinnedapp} key={pinnedapp.name} />
        ))}
      </div>
    </div>
  );
};
