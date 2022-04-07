import React from "react";
import CardList from "../components/common/card/cardList";
import useFetch from "../components/common/useFetch";
import { Ball } from "react-loading-io";

function TopGames() {
  const { error, isPending, data: data } = useFetch('https://api.boardgameatlas.com/api/search?limit=20&client_id=JLBr5npPhV')
  // console.log(data.games)
  return (

    <div>
      { error && <div>{ error }</div> }
      { isPending && <div className="notfound"><Ball size={72} color="#81ecec"/> ...Trayendo Juegos...<Ball size={72} color="#81ecec"/></div> }
      { data && <CardList games={data.games} /> }
    </div>
     );
    }
export default TopGames;
