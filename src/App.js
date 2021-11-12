import Header from "./Components/Home/header";
import Footer from "./Components/Home/footer";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Homepage from "./Components/Home/homepage2";
import Authenticate from "./Components/Authenticate/authenticate";
import Login from "./Components/Authenticate/login";
import Checkout from "./Components/Checkout/checkout";
import Bookings from "./Components/Bookings/bookings";
import Hotel from "./Components/Hotel/hotel";
import Saved from "./Components/Saved/saved";
import SearchResults from "./Components/SearchResults/searchResults";
import Confirmation from "./Components/Success/confirmation";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Routes>
          <Route exact path="/" element={<Homepage />} />
          <Route exact path="/register" element={<Authenticate />} />
          <Route exact path="/register" element={<Authenticate />} />
          <Route exact path="/login" element={<Login />} />
          <Route exact path="/bookings" element={<Bookings />} />
          <Route exact path="/checkout" element={<Checkout />} />
          <Route exact path="/searchResults/hotel" element={<Hotel />} />
          <Route exact path="/saved" element={<Saved />} />
          <Route exact path="/searchResults" element={<SearchResults />} />
          <Route exact path="/confirmation" element={<Confirmation />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
