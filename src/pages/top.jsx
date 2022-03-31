import React from "react";
import CardList from "../components/common/card/cardList";
import useFetch from "../components/common/useFetch";

function TopGames() {
  const { error, isPending, data: data } = useFetch('https://api.boardgameatlas.com/api/search?limit=20&client_id=JLBr5npPhV')
  // console.log(data.games)
  return (

    <div>
      { error && <div>{ error }</div> }
      { isPending && <div className="notfound">Trayendo Juegos...</div> }
      { data && <CardList games={data.games} /> }
      
    </div>
     );
    }
export default TopGames;
