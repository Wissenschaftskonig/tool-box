import { LoaderProps } from "@/types";
import { Icon } from "@iconify/react/dist/iconify.js";
import React from "react";

const Loader: React.FC<LoaderProps> = ({
  width = 100,
  height = 100,
  bodyStyle,
  loaderSize = "loading-md",
  loaderKind,
}) => {
  return (
    <main className={`flex w-full items-center justify-center ${bodyStyle}`}>
      {loaderKind === "iconLoader" && (
        <span>
          <Icon width={width} height={height} icon="eos-icons:bubble-loading" />
        </span>
      )}

      {loaderKind === "daisyLoader" && (
        <span className={`loading loading-ring ${loaderSize}`}></span>
      )}
    </main>
  );
};

export default Loader;

// Sample use

/* <Loader
  loaderKind="iconLoader"
  bodyStyle="text-red-600"
  width={20}
  height={20}
/>; */

//or

/* <Loader
  loaderKind="daisyLoader"
  loaderSize="loading-sm"
  bodyStyle="text-black"
/>; */
