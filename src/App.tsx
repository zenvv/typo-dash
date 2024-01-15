import MainTypo from "./components/typos/MainTypo";
import Navbar from "./components/Navbar";
import ToggleTheme from "./components/ToggleTheme";
import ChangeFont from "./components/ChangeFont";

function App() {
  return (
    <body className="flex flex-col items-center justify-center w-full h-screen">
      <div className="flex flex-col items-center justify-center w-full h-full max-w-4xl">
        <Navbar />
        <main className="flex-1 w-full h-full my-8">
          <MainTypo />
        </main>
        <footer className="flex items-center justify-between w-full p-4 text-gray-500">
          <p className="text-xs">
            created by:{" "}
            <a
              className="transition-all hover:underline hover:font-semibold hover:text-gray-950 dark:hover:text-gray-50"
              target="_blank"
              href="https://github.com/zenvv"
            >
              zenvv
            </a>
          </p>
          <span className="flex items-center gap-2">
            <ChangeFont />
            <ToggleTheme />
          </span>
        </footer>
      </div>
    </body>
  );
}

export default App;
