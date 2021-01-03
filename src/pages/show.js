import React, { useEffect, useState } from "react";



function Show({match}) {
  const api_key = "bea51ba2a107d386b306209a1885b42d";
  console.log(match.params);
  useEffect(() => {
    fetchItems();
  }, []);

  const [items, setItems] = useState([]);
  const [item, setItem] = useState({});

  const fetchItems = async () => {
    const data = await fetch(
      `https://api.themoviedb.org/3/tv/${match.params.id}?api_key=${api_key}&language=en-US`,

    );
    const data2 = await fetch(
      `https://api.themoviedb.org/3/tv/${match.params.id}/videos?api_key=${api_key}&language=en-US`
    )

    const items = await data.json();
    const item = await data2.json();
    console.log(items);
    console.log(item.results);
    setItems(items);
    setItem(item.results[0]);
  };

  return (
    <div className="mt-5 row">

      <div className="col-md-3 " >

        <div>


          <h6 className="moviecard" style={{ backgroundImage: `linear-gradient(rgba(0, 0, 0,0),rgba(0, 0, 0,0.5)),url(https://image.tmdb.org/t/p/original${items.poster_path})`, height: "400px" }}>

            {items.vote_average}/10</h6>


          <h4>{items.original_title} <p>{items.release_date}</p></h4>

        </div></div>

      <div className="col-md-6 mt-5 pt-5">
        <p>{items.overview}</p>
      </div>


      {item.key &&
      <div className="col-md-10 container mt-5">
        <iframe className=" mt-5" width="100%" height="500px" src={`https://www.youtube.com/embed/${item.key}`} type="video" />
      </div>}



    </div>
  );
}
  
  export default Show;