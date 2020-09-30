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
    // out of JSX
    <div className='Potato'>
      {/* start of JSX */}
      <h1
        sth='afdsds' // comments in a tag
      >
        comments in JSX
      </h1>
      <h2>I love {name}</h2>
      {/* end of JSX */}
    </div>
  );
}

export default Potato;
