import React, { useState } from "react";
import { MoonIcon } from "./icons/Moon";
import logo from "./logo.svg";
import { Button } from "./components/live/button/Button";

function App() {
  const [count, setCount] = useState(0);

  function toggleDarkMode() {
    if (
      localStorage.theme === "dark" ||
      (!("theme" in localStorage) &&
        window.matchMedia("(prefers-color-scheme: dark)").matches)
    ) {
      localStorage.setItem("theme", "light");
      document.documentElement.classList.remove("dark");
    } else {
      localStorage.setItem("theme", "dark");
      document.documentElement.classList.add("dark");
    }
  }

  return (
    <div className="flex flex-col min-h-screen text-center bg-white dark:bg-gray-700">
      <nav className="flex items-center justify-end h-16 px-4">
        <button
          className="flex p-2 text-black rounded hover:text-yellow-400 dark:text-white focus:outline-none hover:bg-gray-500 dark:hover:bg-gray-500 dark:hover:text-yellow-400"
          onClick={toggleDarkMode}
        >
          <MoonIcon></MoonIcon>
        </button>
      </nav>
      <header className="flex flex-col items-center justify-center flex-grow text-2xl text-gray-700 dark:text-white">
        <img src={logo} className="animate-spin-slow h-72" alt="logo" />
        <p>Hello Vite + React!</p>
        <p className="my-8">
          <Button frames={{
            title: {
              content: `Count is: ${count}`
            },
            button: {
              onClick: () => setCount((count) => count + 1)
            }
          }} />
        </p>
        <p>
          Edit <code>App.tsx</code> and save to test HMR updates.
        </p>
        <p>
          <a
            className="text-blue-400"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
          {" | "}
          <a
            className="text-blue-400"
            href="https://vitejs.dev/guide/features.html"
            target="_blank"
            rel="noopener noreferrer"
          >
            Vite Docs
          </a>
        </p>
      </header>
    </div>
  );
}

export default App;