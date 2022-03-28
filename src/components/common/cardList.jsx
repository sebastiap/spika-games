import React from "react";
import Card from "./card/card";

function CardList(props) {
  return (
    <div className="blog-list">
    {props.games.map((game) => {
      return (
        <Card
          key={game.id}
          name={game.name}
          pic={game.images.small}
          tel={game.description}
        />
  );
})}
</div>)
}

export default CardList;