import { Movies } from "./components/Movies";
import { Banner } from "./components/Banner";
import { Navbar } from "./components/Navbar";
import { Watchlist } from "./components/Watchlist";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import "./App.css";
import { useState, useEffect } from "react";

function App() {
  let [watchlist, setWatchList] = useState([]);

  let handleAddtoWatchlist = (movieObj) => {
    let newWatchList = [...watchlist, movieObj];
    localStorage.setItem('moviesApp', JSON.stringify(newWatchList));
    setWatchList(newWatchList);
    console.log(newWatchList);
  }

  let handleRemoveFromWatchlist = (movieObj) => {
    let newWatchList = watchlist.filter((movie) => movie.id != movieObj.id);
    localStorage.setItem('moviesApp', JSON.stringify(newWatchList));
    setWatchList(newWatchList);
    console.log(newWatchList);
  }

  useEffect(() => {
    let data = localStorage.getItem('moviesApp');
    if(!data){
      return;
    }
    setWatchList(JSON.parse(data));
    console.log(JSON.parse(data));
  },[]);

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
                <Movies handleAddtoWatchlist={handleAddtoWatchlist} handleRemoveFromWatchlist={handleRemoveFromWatchlist} watchlist={watchlist}/>
              </>
            }
          />
          <Route path="/watchlist" element={<Watchlist watchlist={watchlist} setWatchList={setWatchList} handleRemoveFromWatchlist={handleRemoveFromWatchlist}/>} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
// https://api.themoviedb.org/3/movie/popular?api_key=2d9add74bc0757a5650f8f753c038e4a&language=en-US&page=1