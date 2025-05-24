
import MovieCard from "./MovieCard"
import './watchlist.css'
import Data from  "../api/data.json"

import Counter from "./Counter.jsx"
import { useEffect,useState } from "react"
const Watchlist = ({currUser,user,setUser})=>{
  const [dataWithImages, setDataWithImages] = useState([]);
  
  const userData = Data.users[currUser].slice().reverse()
   

      const fetchData = async (searchTerm,searchYear) => { 
        const url = `https://www.omdbapi.com/?i=tt3896198&apikey=4fb4bf47&s=${searchTerm}&y${searchYear}`;
        const res = await fetch(url);
        const data = await res.json();
        return data.Search;
      }
      useEffect(() => {
        const fetchAllData = async () => {
          const movies = await Promise.all(
            userData.map(async (currMovie) => {
              const data = await fetchData(currMovie.name,currMovie.year && currMovie.year);
              if (data && data[0]) {
                if(data[0].Poster && data[0].Poster === "N/A"){
                  return { ...currMovie, img_url: currMovie.img_url, year: data[0].Year };
                }
               
                return { ...currMovie, img_url: data[0].Poster, year: data[0].Year };
              } else {
                return { ...currMovie, img_url: currMovie.img_url ? currMovie.img_url : "https://static.thenounproject.com/png/583402-200.png", year: '' };
              }
            })
          );
          setDataWithImages(movies);
        };
        fetchAllData();
      }, []);
     
     return (
      <>
      <Counter currUser ={currUser} user={user}  setUser={setUser}/>
      
        <div className="movie-card-container">
    {dataWithImages.map((currMovie)=>{
      const {name ,id, genre, img_url,year, rating,description} = currMovie

      return(
        <MovieCard key={id} name= {name} rating= { rating} id = {id} genre={genre} description={description} year={year} img_url={img_url}/>
        
        
      )
    })}
        </div>

    </>
    )

}
export default Watchlist;