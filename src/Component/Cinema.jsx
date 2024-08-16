import { useState,useEffect } from "react"
import Films from "./movies"
import './movies.css'


export default function Cinema(){
    const API_URL = "http://www.omdbapi.com?apikey=e25ca838"
     const [moviesLists ,setMoviesLists] = useState([])
     const [searchInput,setSearchInput] = useState("batman")
    
     const handleSearch = ()=>{
        const searchValue= document.querySelector(".searchInput")
         setSearchInput(()=>{
            return searchValue.value
         })
         }

    const getResp = (title)=>{
        fetch(`${API_URL}&s=${title}`)
        .then(response =>response.json())
        .then(response => {
            if (response.Search) {
                setMoviesLists(response.Search);
            } else {
                console.error("No movies found");
            }
        }).catch(error => {
            console.error("Error fetching movies:", error);
        });
    }


        const getMovies = ()=>{
            if(moviesLists.length > 0){
            return moviesLists.map((film,key)=>{
                return <Films film={film} key={key}/>
            })
            }        
        }
    

    useEffect(() => {
         getResp(searchInput)
    },[searchInput])


    const handleSubmit = ()=>{
        handleSearch()
    }

  
    return <body>
        
            <div class="container mt-5">
                <div className="row mb-5">
                    <div className="col-12 d-flex justify-content-center">
                        <div className="col-md-4 col-sm-10 d-flex">
                        <input  type="text" className="form-control searchInput" placeholder="Search here..."/>
                        <button  onClick={handleSubmit} className="btn btn-info ms-2 search-button" >Search</button>
                        </div>
                    </div>
                </div>
            <div class="row">
        {getMovies()}
        </div>
        </div>
        </body>

}