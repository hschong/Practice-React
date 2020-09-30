import React from 'react';
import './Potato.css';

function Potato() {
  const name = 'potato';
  //   const defaultSize = 16;
  //   const style = {
  //     backgroundColor: 'blue',
  //     padding: '16px',
  //     color: 'white',
  //     fontSize: defaultSize + 10 + 'px',
  //   };

  return (
    // <div style={style}>
    <div className='Potato'>
      <h2>I love {name}</h2>
    </div>
  );
}

export default Potato;
