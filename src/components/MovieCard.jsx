import "./moviecard.css"

const MovieCard = ({name, id, genre, description, img_url,rating,year})=>{

    // Helper to count lines in description
 


    return (
        <div className="movie-card">
            <img
                src={img_url}
                alt="Movie Poster"
                className="movie-card__poster"
            />
            <div className="movie-card__details">
                <section className="movie-card__details_heading">

                {name && <h1 className="movie-card__title gradient">{name}</h1>}
                </section>
                {genre && <p className="movie-genre">{genre && Array.isArray(genre) ? genre.join('-') : genre}</p>}
                {description && <p className="movie-description">{description}</p>}
               
                {rating && <p className="movie-rating">Rating : {rating}</p>}
                {year && <p className="movie-rating">Release {year}</p>}
            </div>
        </div>
    )
}
export default MovieCard;