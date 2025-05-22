import { useState } from "react";
import MovieCard from "./MovieCard";
export const SearchMovies = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const handleInputChange = (value) => {
    setSearchTerm(value);
  };
  const handleFormSubmit = (e) => {
    e.preventDefault();
  };
  const [movies, setMovies] = useState([]);

  async function fetchData() {
    if (!searchTerm) {
      setMovies([]);
      setSearchTerm("");
      return;
    }
    const url = `https://www.omdbapi.com/?i=tt3896198&apikey=4fb4bf47&s=${searchTerm}`;
    try {
      const response = await fetch(url);
      if (!response.ok) {
        throw new Error(`Response status: ${response.status}`);
      }
      const json = await response.json();
      setSearchTerm("");
      setMovies(json.Search);
      console.log(json);
    } catch (error) {
      setMovies([]);
      setSearchTerm("");
      console.error(error);
    }
  }

  return (
    <>
      <nav
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          padding: "1rem",
          backgroundColor: "#333",
          color: "#fff",
        }}
      >
        <h1 style={{ margin: "0 0 1rem 0", textAlign: "center" }}>
          Search Your Favorite Movies
        </h1>
        <div className="search-movies" style={{ width: "100%" }}>
          <form
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              gap: "0.5rem",
              backgroundColor: "#444",
              padding: "0.5rem",
              borderRadius: "5px",
            }}
            action=""
            onSubmit={(event) => handleFormSubmit(event)}
          >
            <input
              style={{
                width: "90%",
                maxWidth: "20rem",
                height: "2.5rem",
                borderRadius: "5px",
                padding: "0 1rem",
                border: "1px solid #ccc",
                outline: "none",
              }}
              onChange={(e) => handleInputChange(e.target.value)}
              type="text"
              placeholder="Search for a movie..."
              value={searchTerm}
            />
            <button
              style={{
                width: "90%",
                maxWidth: "20rem",
                height: "2.5rem",
                padding: "0 1rem",
                borderRadius: "5px",
                border: "none",
                backgroundColor: "#007bff",
                color: "#fff",
                cursor: "pointer",
              }}
              onClick={() => fetchData(searchTerm)}
            >
              Search
            </button>
          </form>
        </div>
      </nav>
      <div
        style={{
          marginTop: "10px",
          padding: "0 1rem",
        }}
        className="card-container container"
      >
        <ul
          className="row card-container"
          style={{
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "center",
            gap: "1rem",
            padding: 0,
          }}
        >
          {console.log(movies)}
          {Array.isArray(movies) && movies.length > 0 ? (
            movies.map((movie) => (
              console.log(movie),
              <MovieCard key={movie.Title} name={movie.Title}  img_url={movie.Poster} year ={movie.Year}/>
            ))
          ) : (
            <p>No movies found</p>
          )}
        </ul>
      </div>
    </>
  );
};
