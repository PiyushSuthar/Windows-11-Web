import {Rnd} from "react-rnd";

export const WindowHolder = () => {
  return (
    <Rnd
      default={{
        x: 0,
        y: 0,
        width: 320,
        height: 200,
      }}
    >
      Rnd
    </Rnd>
  );
};
