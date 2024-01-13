import Typing from "./components/Typing";
import Navbar from "./components/Navbar";

function App() {
  return (
    <body className="flex flex-col items-center justify-center w-full h-screen">
      <div className="flex flex-col items-center justify-center w-full h-full max-w-4xl">
        <Navbar />
        <main className="flex-1 w-full h-full my-8">
          <Typing />
        </main>
        <footer className="flex items-center justify-center w-full p-4 text-gray-500">
          <p className="text-xs">
            created by:{" "}
            <a
              className="hover:underline hover:font-semibold hover:text-gray-950"
              target="_blank"
              href="https://github.com/zenvv"
            >
              zenvv
            </a>
          </p>
        </footer>
      </div>
    </body>
  );
}

export default App;
