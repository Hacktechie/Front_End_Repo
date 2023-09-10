import Header from "./components/Header"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Home from "./pages/Home"
import Profile from "./pages/Profile"
import TermsandConditions from "./pages/TermsandConditions"
import Faq from "./pages/Faq"
import ContactUs from "./pages/ContactUs"
import Feedback from "./pages/Feedback"
import Orders from "./pages/Orders"
import Footer from "./components/Footer"
import SearchBarPage from './pages/SearchBarPage'
import ScrollToTop from './components/ScrollToTop'

function App() {
  return (
    <div>
      <Router>
        <ScrollToTop /> {/* Scrolls to top whenever route changes */}
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/termsandconditions" element={<TermsandConditions />} />
          <Route path="/faq" element={<Faq />} />
          <Route path="/contactus" element={<ContactUs />} />
          <Route path="/feedback" element={<Feedback />} />
          <Route path="/myorders" element={<Orders />} />

          {/* kailash */}
          <Route path="/search" element={<SearchBarPage />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  )
}

export default App
