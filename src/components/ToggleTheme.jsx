import { useEffect, useState } from "react";

export default function ToggleTheme() {
  const [dark, setDark] = useState(() =>
    window.matchMedia("(prefers-color-scheme: dark)").matches
  );

  useEffect(() => {
    if (dark) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [dark]);

  return (
    <button
      onClick={() => setDark(!dark)}
      className="fixed bottom-6 left-6 z-50 bg-gray-200 dark:bg-gray-800 text-gray-800 dark:text-gray-200 p-2 rounded-full shadow-md hover:scale-105 transition"
      title="Cambiar modo claro/oscuro"
    >
      {dark ? "🌙" : "☀️"}
    </button>
  );
}
