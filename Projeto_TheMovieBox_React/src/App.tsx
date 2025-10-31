import { MovieContent } from "./cases/movies/components/movie-content"
import { Footer } from "./components/layout/footer"
import { Header } from "./components/layout/layout/header"
import { Navbar } from "./components/layout/layout/navbar"

function App() {
  return (
    <>
      <Header />
      <main> 
        <Navbar />
        <MovieContent/>
      </main>
      <Footer />
    </>
  )
}

export default App