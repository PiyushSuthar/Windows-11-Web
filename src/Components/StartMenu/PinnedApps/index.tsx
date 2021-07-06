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
export const PinnedApps = () => {
  const Button = ({ children }: { children: string }) => (
    <button class={styles.button}>
      {children} <ChevronIcon size="14" />
    </button>
  );

  return (
    <div class={styles.container}>
      <div class={styles.title_area}>
        <div className="title">
          <p>Pinned</p>
        </div>
        <div className="title_button">
          <Button>All Apps</Button>
        </div>
      </div>
    </div>
  );
};
