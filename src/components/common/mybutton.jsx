import React from "react";

const myButton = (props) =>  {

     return (
       <div>
      <button onClick={props.whenClicked}>
          Im a Button
      </button>
      </div>
  );
}

export default myButton;