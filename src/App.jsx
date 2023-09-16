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
import { useDispatch } from "react-redux"
import { login } from "./redux/slices/authSlice"
import supabase from "./helpers/supabase"

function App() {

  const dispatch = useDispatch()
  
  // Retrrieving user if they haven't logged out
  // User will be logged in even if page is refreshed
  async function retrieveUser() {
    const { data, error } = await supabase.auth.getUser()

    if (error) {
      console.log(error.message)
    } else {
      dispatch(login(data))
    }
  }

  if (localStorage.getItem('sb-htqlsiblnpondpscaepr-auth-token')) {
    retrieveUser()
  }

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
