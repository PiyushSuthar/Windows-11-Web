import { useState } from "preact/hooks";
import { WeatherIcon } from "../../../../assets/icons/startmenu";
import { WidgetWrapper } from "../WidgetWrapper";
import { CloudIcon, HomeIcon } from "./icons";
import styles from "./Weather.module.css";

const celciusToFahrenheit = (celcius: number) => (celcius * 9) / 5 + 32;
const fareheitToCelcius = (fahrenheit: number) => ((fahrenheit - 32) * 5) / 9;

export const WeatherWidget = () => {
  const [tempUnit, setTempUnit] = useState<"C" | "F">("C");
  const [temp, setTemp] = useState<number | string>(33);

  return (
    <WidgetWrapper title="Weather" className={styles.wrapper} SVG={CloudIcon}>
      <div className={styles.container}>
        <div className={styles.location}>
          <HomeIcon />
          <span>Margao, Goa, India</span>
        </div>
        <div class={styles.weather_info}>
          <div className={styles.weather_data}>
            <div className={styles.weather_icon}>
              <img src={WeatherIcon} alt="Weather" />
            </div>
            <div className={styles.weather_degrees}>
              <span className={styles.weather_temp}>{temp}</span>
              <div className={styles.temp_units}>
                <span
                  className={[
                    styles.weather_unit,
                    tempUnit === "C" && styles.active,
                  ].join(" ")}
                >
                  °C
                </span>
                <span
                  className={[
                    styles.weather_unit,
                    tempUnit === "F" && styles.active,
                  ].join(" ")}
                >
                  °F
                </span>
              </div>
            </div>
          </div>
          <div className={styles.humidity_info}>
            <span>Haze</span>
            <span>20%</span>
          </div>
        </div>
        <div className={styles.full_forecast}>
          <button className={styles.full_forecast_button}>
            See Full Forecast
          </button>
        </div>
      </div>
    </WidgetWrapper>
  );
};
