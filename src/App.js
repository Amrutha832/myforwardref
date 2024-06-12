import React from 'react'

import { useRef } from 'react';

 function App() {
  const data=useRef(null);
  const onHandler=e=>{
    e.preventDefault();
console.log(data.current.value);
data.current.focus();
}

  return (
    <div>
      <form>
        <center>
          <input ref={data} type="text"/>
          <button onClick={onHandler}>submit</button>
        </center>
      </form>
    </div>
  )
}

export default App;