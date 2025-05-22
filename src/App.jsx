import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar.jsx";
import Home from "./components/Home.jsx";
import Watchlist from "./components/Watchlist.jsx";
import { useState } from "react";
import { SearchMovies } from "./components/SearchMovies.jsx";
import UpButton from "./components/UpButton.jsx";
const App = () => {
    const [user, setUser] = useState("sameer");
    return (
        <Router>
            <Navbar user = { user} setUser={setUser} />
            <UpButton/>
            <Routes>
                {/* <Route path="/" element={<Home />} /> */}
                <Route path="/watchlist" element={<Watchlist currUser={user} user = {user} setUser={setUser} />} />
                <Route path="/" element={<Home/>} />
                <Route path="/search-movies" element={<SearchMovies/>} />
            </Routes>
        </Router>
    );
};

export default App;