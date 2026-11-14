import React,{useEffect, useState} from "react";
import genres from "../utility/genres";

export const Watchlist = ({ watchlist, setWatchList, handleRemoveFromWatchlist }) => {

  const [search, setSearch] = useState('');
  const [genreList, setGenreList] = useState(['All Genres']);
  const [currGenre, setCurrGenre] = useState('All Genres');

  let handleSearch = (e) => {
    setSearch(e.target.value);
  };

  let handleFilter = (genre) => {
    setCurrGenre(genre);
  }

  let sortIncreasing = () => {
    let sortedIncreasing = watchlist.sort((movieObj1, movieObj2) => {
      return movieObj1.vote_average - movieObj2.vote_average;
    });
    setWatchList([...sortedIncreasing]);
  }

  let sortDecreasing = () => {
    let sortedDecreasing = watchlist.sort((movieObj1, movieObj2) => {
      return movieObj2.vote_average - movieObj1.vote_average;
    });
    setWatchList([...sortedDecreasing]);
  }

  useEffect(() => {
    let temp = watchlist.map((movieObj)=>{
      return genres[movieObj.genre_ids[0]]
    })
    temp = new Set(temp);
    setGenreList(['All Genres', ...temp]);
  },[watchlist]);

  return (
    <>
      <div className="flex justify-center flex-wrap m-4">
        {genreList.map((genre)=>{
          return <div onClick={() => handleFilter(genre)} className={currGenre == genre?"flex justify-center h-[3rem] w-[9rem] rounded-lg text-white font-bold items-center bg-blue-400 mx-4 cursor-pointer":
           "flex mx-4 justify-center h-[3rem] w-[9rem] rounded-lg text-white font-bold items-center bg-gray-400/50 cursor-pointer"
          }>
          {genre}
        </div>
        })}
        
      </div>
      <div className="flex justify-center my-4">
        <input
          type="text"
          value={search}
          onChange={handleSearch}
          placeholder="Search Movies"
          className="h-[3rem] w-[18rem] bg-gray-200 outline-none px-4"
        />
      </div>
      <div className="overflow-hidden rounded-md border border-gray-200 m-8 shadow-md">
        <table className="w-full text-gray-900 text-center">
          <thead className="border-b border-gray-200 bg-gray-50">
            <tr>
              <th className="py-1">Name</th>
              <th className="py-1 flex justify-center">
                <div onClick={sortIncreasing} className="px-2 cursor-pointer"><i class="fa-solid fa-arrow-up"></i></div>
                <div className="px-2">Ratings</div>
                <div onClick={sortDecreasing} className="px-2 cursor-pointer"><i class="fa-solid fa-arrow-down"></i></div>
                </th>
              <th className="py-1">Popularity</th>
              <th className="py-1">Genre</th>
            </tr>
          </thead>
          <tbody>
            {watchlist.filter((movieObj)=>{
              if(currGenre == 'All Genres'){
                return true;
              }else{
                return genres[movieObj.genre_ids[0]] == currGenre;
              }
            })
            .filter((movieObj)=>{
              return movieObj.original_title.toLowerCase().includes(search.toLocaleLowerCase());
            }).map((movieObj) => {
              return(
              <tr key={movieObj.id} className="border-b border-gray-200">
                <td className="flex items-center px-6 py-4">
                  <img
                    className="h-[6rem] w-[10rem]"
                    src={`https://image.tmdb.org/t/p/original/${movieObj.poster_path}`}
                  />
                  <div className="mx-10">{movieObj.original_title}</div>
                </td>
                <td>{movieObj.vote_average}</td>
                <td>{movieObj.popularity}</td>
                <td>{genres[movieObj.genre_ids[0]]}</td>
                <td onClick={()=>handleRemoveFromWatchlist(movieObj)} className="text-red-800 font-bold cursor-pointer">Delete</td>
              </tr>)
            })}
          </tbody>
        </table>
      </div>
    </>
  );
};
