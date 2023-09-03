import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import SearchBar from './Components/searchBar/searchBar';
import SearchBarPage from './Components/searchBarPage/searchBarPage'

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<SearchBar />} />
        <Route path="/search" element={<SearchBarPage />} />
      </Routes>
    </Router>
  );
}

export default App;
