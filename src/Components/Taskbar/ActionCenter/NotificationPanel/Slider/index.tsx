import { FunctionalComponent } from "preact";
import { useEffect, useRef } from "preact/hooks";
import { ChevronIcon } from "../../../../StartMenu/PinnedApps";
import { SunIcon } from "../../icons/moon";
import { SpeakerIcon } from "../../icons/speaker";
import styles from "./Slider.module.css";

interface ISlider {
  icon: (props: { size: string }) => any;
  show_chevron?: boolean;
  name: string;
}

export const Sliders = () => (
  <div class={styles.sliders}>
    <Slider icon={SpeakerIcon} show_chevron={true} name="Audio" />
    <Slider icon={SunIcon} name="Audio" />
  </div>
);

export const Slider: FunctionalComponent<ISlider> = ({
  show_chevron,
  icon: Icon,
  name,
}) => {
  const SliderRef = useRef<HTMLInputElement>();

  useEffect(() => {
    const listener = (event: Event) => {
      let target = event.target as HTMLInputElement;
      var value =
        ((parseInt(target.value) - parseInt(target.min)) /
          (parseInt(target.max) - parseInt(target.min))) *
        100;
      target.style.background =
        "linear-gradient(to right, var(--slider-color) 0%, var(--slider-color) " +
        value +
        "%, #fff " +
        value +
        "%, white 100%)";
    };
    SliderRef.current.addEventListener("input", listener);
    () => SliderRef.current.removeEventListener("input", listener);
  }, []);

  return (
    <div class={styles.container}>
      <Icon size="18" />
      <input
        type="range"
        min="0"
        max="60"
        value="30"
        name={name}
        ref={SliderRef}
      />
      {show_chevron && <ChevronIcon size="18" />}
    </div>
  );
};
