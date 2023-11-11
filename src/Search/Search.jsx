import React from 'react';
import { useEffect, useState } from 'react';
import axios from 'axios';


import { Link } from 'react-router-dom'
const Search = () => {

    const [search, setSearch] = useState([]);
  

    let getMovies = async (mediaType, destination) => {
        let { data } = await axios.get(`https://api.themoviedb.org/3/trending/${mediaType}/day?api_key=26357cbc916cdded8bdec4976f49936a`);
        destination(data.results);

    };

    const searchMovie = async (e) => {
        if (e.target.value) {

            let { data } = await axios.get(`https://api.themoviedb.org/3/search/multi?api_key=26357cbc916cdded8bdec4976f49936a&language=en-US&query=${e.target.value}&page=1&include_adult=false`);
            // console.log(data);
            setSearch(data.results);
 
        } else {
            getMovies("movie", setSearch);
        }
    };

    useEffect(() => {
        getMovies("movie", setSearch);
    }, []);
    return (
        <div className="container py-5">
            <div className="row">
                <input  type="text" onChange={searchMovie} className='mb-3 mt-5 form-control bg-dark text-white' placeholder='Search...' />
             { search.map((movie,index)=>{
              return<>
              
              <div key={index} className='col-md-2   gy-5 overflow-hidden   ' >
<div className=' position-relative  overflow-hidden pp'>

  <Link to={`/Movisdetails/${movie.id}`}> <img src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} className='  w-100' alt="" /></Link>
  

  <div className=' position-absolute top-0   end-0 bg-danger '> {movie.vote_average}</div>



 <Link to={`/Movisdetails/${movie.id}`}> 
 <div className='  position-absolute layer  top-0 end-0 start-0 bottom-0 text-white overflow-hidden'>
    
    <p>{movie.overview}</p>
     </div>
     
     </Link>

</div>
<p> {movie.title?movie.title:"movie"}</p>


</div>
              
              
              </>  

             })}
                {console.log(search)}
            </div>
        </div>
    );
};

export default Search;