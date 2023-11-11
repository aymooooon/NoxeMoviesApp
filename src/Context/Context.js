import axios from "axios";
import { createContext, useEffect } from "react";
import {useState } from "react";


export let MediaContext=createContext("")


  function MediaContextProvider(props){
  
    let [trendingmovis,settrendingmovis]=useState([])
    let [trendingtv,settrendingtv]=useState([])
    let [trendingpeople,settrendingpeople]=useState([])
     
    async function  trending(mediatype,setfun){
        let {data}= await axios.get(`https://api.themoviedb.org/3/trending/${mediatype}/day?api_key=748eec17c29a0816fdf24c58f2275736`)
        console.log(data.results)
        setfun(data.results)
        console.log(trendingmovis)
        
          
        }
        let [searchMovie,setSearchMovie]=useState([]);

       async function getSearch(testo){
        let {data}=await axios.get(`https://api.themoviedb.org/3/search/multi?api_key=26357cbc916cdded8bdec4976f49936a&language=en-US&query=${testo}&page=1&include_adult=false`);
        setSearchMovie(data.results)
        console.log(data.results);
      }
    

    



   
        useEffect(() => {
          
          trending("movie",settrendingmovis)
          trending("tv",settrendingtv)
          trending("person",settrendingpeople)
          
 
              },[])
            

    return <MediaContext.Provider value={{trendingmovis,trendingtv,trendingpeople,trending,getSearch,searchMovie,setSearchMovie}}>



{props.children}


</MediaContext.Provider>


} 
export default MediaContextProvider