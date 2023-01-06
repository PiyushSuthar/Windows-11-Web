import { useStore } from "nanostores/preact";
import { lazy, Suspense } from "react";
import { OpenApps } from "../../store/activeWindow";
const Window = lazy(() =>
  import("./Window").then(({ WindowHolder }) => ({ default: WindowHolder }))
);

export const WindowArea = () => {
  const OpenedApps = useStore(OpenApps);
  return (
    <Suspense fallback={<span></span>}>
      {Object.keys(OpenedApps).map((appid, index) => {
        const app = OpenedApps[appid];
        return (
          app.isActive && (
            <Window
              window_icon={app.icon}
              window_name={app.title}
              key={index}
              appid={appid}
              height={app.height}
              width={app.width}
              // Component={}
            >
              {app.Component?.()}
            </Window>
          )
        );
      })}
    </Suspense>
  );
};
