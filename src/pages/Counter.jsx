import { useState } from "react";

function Counter(){

  const [count, setCount] = useState(0)
  return(
    <>
    <div className="bg-yellow-50 m-20 py-20">
       <h3 className="text-bold text-yellow-900 text-2xl pb-5">Counter: {count}</h3>

       <div className="flex item-center justify-center gap-4">

        <button onClick={() => setCount((preCount) => preCount +1) }
         className="bg-yellow-900 py-2 px-4 rounded text-yellow-50">Increment</button>

        <button onClick={() => setCount((preCount) => preCount -1)}
         className="bg-yellow-900 py-2 px-4 rounded text-yellow-50">Decrement</button>
       </div>
    </div>

    </>
  );
}


export default Counter;