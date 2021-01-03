import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import MovieItem from "./movieItem";


function Movies({ match }) {
const api_key = "bea51ba2a107d386b306209a1885b42d";

console.log(match);

const [items, setItems] = useState([]);
    
const fetchItems = async () => {
  const data = await fetch(
     ` https://api.themoviedb.org/3/movie/popular?api_key=${api_key}&language=en-US&page=${pages}`

  );

  const items = await data.json();
  console.log(items.results);
  setItems(items.results);
};


  const [pages, setpages] = useState(1);
  const nextpage = () => {
  
      setpages(pages + 1)   
  }
  
  const prepage = () => {
  if (pages >1) {
      setpages(pages - 1)    
  }
      
  }

    useEffect(() => {
      
        fetchItems();
     
      }, [pages]);
    


    return (
<div className="">
<div className="row movies mt-3">

{items.map((item) => (
  <MovieItem 
  id={item.id}
  page={pages}
  name={item.original_name ? item.original_name : item.original_title} 
  image={item.poster_path} 
  date={item.release_date ? item.release_date : item.first_air_date }
  rate={item.vote_average} />
))}




</div>
<ul class="pagination justify-content-center">
 <li class="page-item ">
 <Link to={`/${pages == 1 ? pages : pages-1 }`}><button class="page-link" onClick={prepage}>Previous</button></Link>
        </li>
        <li class="page-item ">
          <button class="page-link">{pages}</button>
        </li>
        <Link to={`/${pages+1}`}><li class="page-item">
         <button class="page-link" onClick={nextpage}>Next</button>
        </li></Link>
      </ul>

</div>
    );
  }
  
  export default Movies;