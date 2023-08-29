import Header from "./components/Header"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Home from "./components/Home"
import MovieDetail from "./components/MovieDetail"

function App() {
  return (
    <div>
      <Header />
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/movie-detail" element={<MovieDetail />} />
        </Routes>
      </Router>
    </div>
  )
}

export default App