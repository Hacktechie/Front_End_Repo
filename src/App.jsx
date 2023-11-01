import { useEffect, lazy, Suspense } from "react"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import { useDispatch } from "react-redux"
import { login } from "./redux/slices/authSlice"
import Header from "./components/Header"
import Home from "./pages/Home"
import Footer from "./components/Footer"
import ScrollToTop from './components/ScrollToTop'
import supabase from "./helpers/supabase"
import fetchData from "./helpers/fetchData"
import MobileNav from "./components/MobileNav"
import NotFound from "./pages/NotFound"
import CustomSpinner from './components/CustomSpinner'

// Lazy loaded comps
const Profile = lazy(() => import("./pages/Profile"))
const TermsandConditions = lazy(() => import("./pages/TermsandConditions"))
const Faq = lazy(() => import("./pages/Faq"))
const ContactUs = lazy(() => import("./pages/ContactUs"))
const Feedback = lazy(() => import("./pages/Feedback"))
const Orders = lazy(() => import("./pages/Orders"))
const SearchBarPage = lazy(() => import('./pages/SearchBarPage'))
const MoviePage = lazy(() => import("./pages/MoviePage"))

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
        <Suspense fallback={<CustomSpinner variant='info' size={100} />}>
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
            <Route path='*' element={<NotFound />} />
          </Routes>
        </Suspense>
        <Footer />
        <MobileNav />
      </Router>
    </div>
  )
}

export default App
