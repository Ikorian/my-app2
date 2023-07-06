import React from 'react';
import Massiv from './Massix';

const App=()=>{
  const massiv=new Massiv();
  return(
    <div>
      {massiv.renderItems()}
    </div>
  );
};

export default App;
