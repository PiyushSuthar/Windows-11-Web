import preact, { FunctionalComponent } from "preact";
import styles from "./Action.module.css";

interface IAction {
  Icon: JSX.Element;
  name: string;
  show_angled: boolean;
}

export const Action: FunctionalComponent<IAction> = ({ name, Icon }) => {
  return (
    <div className="action_container">
      <div className="icon">
        {/* @ts-ignore */}
        <Icon />
      </div>
      {name}
    </div>
  );
};
