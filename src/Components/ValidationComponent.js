import React from 'react';

const ValidationComponent = (props) => {

  let validationMessage = 'Text is long enough';

  if (props.inputLength < 5) {
    return (validationMessage='Text is too short!') 
  }


  return (
    <div>
      <p>{validationMessage}</p>
    </div>
  );


  // return(
  // <div>{props.inputLength < 5 ?
  //   <p>Text is too short!</p> :
  //   <p>Text is too long!</p>
  // } 
    
  // </div>
  // )
}

export default ValidationComponent;