import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import ShowItem from "./showItem";


function Showall() {
const api_key = "your key";




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
    
      const [items, setItems] = useState([]);
    
      const fetchItems = async () => {
        const data = await fetch(
            `https://api.themoviedb.org/3/tv/popular?api_key=${api_key}&language=en-US&page=${pages}`

        );
    
        const items = await data.json();
        console.log(items.results);
        setItems(items.results);
      };


    return (
<div className="">

<div className="row movies mt-3">
          
          {items.map((item) => (
            <ShowItem 
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
 <Link to={`/TV-Show/${pages == 1 ? pages : pages-1 }`}><button class="page-link" onClick={prepage}>Previous</button></Link>
        </li>
        <li class="page-item ">
          <button class="page-link">{pages}</button>
        </li>
        <Link to={`/TV-Show/${pages+1}`}><li class="page-item">
         <button class="page-link" onClick={nextpage}>Next</button>
        </li></Link>
      </ul>

</div>
    );
  }
  
  export default Showall;
