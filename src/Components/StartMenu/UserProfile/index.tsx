// import { ShutDownIcon } from "../../../assets/icons/startmenu";
import styles from "./UserProfile.module.css";

export const UserProfile = () => {
  return (
    <div className={styles.container}>
      <div className={styles.user}>
        <img
          src="https://avatars.githubusercontent.com/u/32237558?v=4&s=50"
          alt="Piyush Suthar"
        />
        <p>Piyush Suthar</p>
      </div>
      <ShutDownIcon />
    </div>
  );
};

export const ShutDownIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="20"
    height="20"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className="feather feather-power"
  >
    <path d="M18.36 6.64a9 9 0 1 1-12.73 0"></path>
    <line x1="12" y1="2" x2="12" y2="12"></line>
  </svg>
);
