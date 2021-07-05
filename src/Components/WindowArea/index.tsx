import { useStore } from "nanostores/preact";
import { lazy, Suspense } from "react";
import { OpenApps } from "../../store/activeWindow";
const Window = lazy(() =>
  import("./Window").then(({ WindowHolder }) => ({ default: WindowHolder }))
);
import { ICONS } from "../../Configs/Taskbar.config";
import { AppsConfig } from "../../Configs/apps.config";

export const WindowArea = () => {
  const OpenedApps = useStore(OpenApps);
  return (
    <Suspense fallback={<span></span>}>
      {Object.keys(AppsConfig).map(
        (appid, index) =>
          AppsConfig[appid] &&
          OpenedApps[appid] && (
            <Window
              window_icon={AppsConfig[appid].icon}
              window_name={AppsConfig[appid].title}
              key={index}
              appid={appid}
            />
          )
      )}
    </Suspense>
  );
};
