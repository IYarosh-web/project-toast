import React from "react";

export function useEscapeKey(callback) {
  React.useEffect(
    () => {
      const keyboardHandler = (e) => {
        if (!callback) return;

        if (e.key === "Escape") {
          callback();
        }
      }

      window.addEventListener("keydown", keyboardHandler);

      return () => window.removeEventListener("keydown", keyboardHandler);
    },
    [callback],
  );
}