import React from "react";
import CardList from "../common/cardList";
import useFetch2 from "../common/useFetch2";

function TopGames() {
  const { error, isPending, data: data } = useFetch2('https://api.boardgameatlas.com/api/search?limit=20&client_id=JLBr5npPhV')
  // console.log(data.games)
  return (

    <div>
      { error && <div>{ error }</div> }
      { isPending && <div>Trayendo Juegos...</div> }
      { data && <CardList games={data.games} /> }
      
    </div>
     );
    }
export default TopGames;
