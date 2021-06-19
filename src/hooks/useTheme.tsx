import { makeVar } from "@apollo/client";

const DARK_MODE = "DARK_MODE";

export const darkModeVar = makeVar(
  Boolean(localStorage.getItem(DARK_MODE) === "enabled")
);

export const enableDarkMode = () => {
  localStorage.setItem(DARK_MODE, "enabled");
  darkModeVar(true);
};

export const disableDarkMode = () => {
  localStorage.setItem(DARK_MODE, "");
  darkModeVar(false);
};
