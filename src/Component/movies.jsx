import star from "./icons/star.png"
import calendar from "./icons/calendar.png"
import genre from "./icons/type.png"
import imageError from "./icons/imageError.jpg"
export default function Films({film}){
    return (
        <div className="col-md-3">
        <div className="card">
            <img src={film.Poster !== "N/A" ? film.Poster : imageError} className="card-img-top" alt={film.Title}/>
            <div className="card-body">
                <h5 className="card-title">{film.Title.slice(0,14)}...</h5>
                <h6 className="card-subtitle mb-2">
                    <img src={genre} alt="Genre Icon" className="icon"/> {film.Type}
                </h6>
                <h6 className="card-subtitle mb-2">
                    <img src={calendar} alt="Release Date Icon" className="icon"/> Release Date: {film.Year}
                </h6>
                <p className="card-subtitle mb-2 rating">
                    <img src={star} alt="Rating Icon" className="icon"/> 4.5/5
                </p>
                <p className="card-text">This is a brief description of the movie. It gives a quick overview of the plot and key details.</p>
                <a href="/" className="btn btn-primary">Watch</a>
            </div>
        </div>
    </div>
    )
}