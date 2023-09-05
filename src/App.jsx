import Header from "./components/Header"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Home from "./pages/Home"
import Profile from "./pages/Profile"
import TermsandConditions from "./pages/TermsandConditions"
import Faq from "./pages/Faq"
import ContactUs from "./pages/ContactUs"
import Feedback from "./pages/Feedback"
import Orders from "./pages/Orders"


// kailash
import SearchBarPage from './pages/SearchBarPage'


// kailash
function App() {
  return (
    <div>
      <Router>
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
      </Router>
    </div>
  )
}

export default App
