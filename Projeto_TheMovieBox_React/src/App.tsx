// src/App.tsx
import { MovieContextProvider } from "./cases/movies/context/movie-context";

import { Header } from "./components/layout/header";
import { Highlight } from "./components/layout/highlight";
import { MovieContent } from "./cases/movies/components/movie-content";
import { Footer } from "./components/layout/footer";

function App() {
  return (
    <MovieContextProvider>
      <div className="bg-[#111] min-h-screen text-white">
        <Header />
        <Highlight />
        <MovieContent />
        <Footer />
      </div>
    </MovieContextProvider>
  );
}

export default App;
