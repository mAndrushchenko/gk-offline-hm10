import React from 'react';
import Images from "./components/Images";


const  App:React.FC = () => {

  return (
      <div>
        <select>
          <option value="black" selected>black</option>
          <option value="gray">gray</option>
          <option value="blue">blue</option>
        </select>
          <div>abcd</div>
        <Images />
    </div>
  )
}

export default App;
