import { useEffect } from "react"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import { useDispatch } from "react-redux"
import { login } from "./redux/slices/authSlice"
import Header from "./components/Header"
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
import supabase from "./helpers/supabase"
import fetchData from "./helpers/fetchData"
import MoviePage from "./pages/MoviePage"
import NotFound from "./pages/NotFound"

function App() {

  const dispatch = useDispatch()

  useEffect(() => {
    // Retrieving user if they haven't logged out
    // User will be logged in even if page is refreshed
    if (localStorage.getItem('sb-htqlsiblnpondpscaepr-auth-token')) {
      (async function () {
        const { data, error } = await supabase.auth.getUser()

        if (error) {
          console.log(error.message)
        } else {
          dispatch(login(data))
        }
      })();
    }

    fetchData(dispatch)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

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
          <Route path="/search" element={<SearchBarPage />} />

          {/* Dynamic Movies Route */}
          <Route path="/movies/:id" element={<MoviePage />} />

          {/* Fallback for invalid routes */}
          <Route path='*' element={<NotFound/>} />
        </Routes>
        <Footer />
      </Router>
    </div>
  )
}

export default App
