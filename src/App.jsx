import { Movies } from "./components/Movies";
import { Banner } from "./components/Banner";
import { Navbar } from "./components/Navbar";
import { Watchlist } from "./components/Watchlist";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import "./App.css";

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Banner />
                <Movies />
              </>
            }
          />
          <Route path="/watchlist" element={<Watchlist />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
// https://api.themoviedb.org/3/movie/popular?api_key=2d9add74bc0757a5650f8f753c038e4a&language=en-US&page=1