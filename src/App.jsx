import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar.jsx";
import Home from "./components/Home.jsx";
import Watchlist from "./components/Watchlist.jsx";
import { useState } from "react";
const App = () => {
    const [user, setUser] = useState("sameer");
    return (
        <Router>
            <Navbar user = { user} setUser={setUser} />
            
            <Routes>
                {/* <Route path="/" element={<Home />} /> */}
                <Route path="/watchlist" element={<Watchlist currUser={user} user = {user} setUser={setUser} />} />
                <Route path="/" element={<Home/>} />
            </Routes>
        </Router>
    );
};

export default App;