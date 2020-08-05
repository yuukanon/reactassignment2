import React from 'react';

const Char = (props) => {
  return(
    <div className="char" onClick={props.clicked}>
      {props.character}
    </div>
  )
}

export default Char;