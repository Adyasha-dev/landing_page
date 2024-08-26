//event handling
// import React from "react";
// function Functionclick() {
//   function clickHandler() {
//     document.write("i am adyasha");
//   }
//   return (
//     <>
//       <button onClick={clickHandler}>click</button>
//     </>
//   );
// }

// export default Functionclick;
// import React, { useState } from "react";
// function Functionclick() {
//   const [color, setColor] = useState("red");
//   const [count, setCount] = useState(0);
//   function Increment() {
//     setCount(count + 1);
//   }
//   return (
//     <>
//       <h1> this is a {color}flower.</h1>
//       <button onClick={() => setColor("blue")}> click</button>
//       <br />

//       <button>{count}</button>
//       <br />

//       <button onClick={Increment}>click here</button>
//     </>
//   );
// }
// export default Functionclick;
// import React, { useState } from "react";

// function Functionclick() {
//   const [count, setCount] = useState(0);
//   return (
//     <>
//       count:{count}
//       <button onClick={() => setCount(0)}>reset</button>
//       <button onClick={() => setCount(count + 1)}>increment</button>
//       <button onClick={() => setCount(count - 1)}>decrement</button>
//     </>
//   );
// }

// export default Functionclick;

import React, { useState } from "react";

function Functionclick() {
  const [car, setCar] = useState({
    brand: "ford",
    model: "mustang",
    year: "1345",
    color: "red",
  });
  // const updatecolor = () => {
  //   setCar((previousState) => {
  //     return { ...previousState, color: "blue" };
  //   });
  // };
  function updateyear() {
    setCar((previousState) => {
      return { ...previousState, year: "1879" };
    });
  }

  return (
    <>
      <h1>my {car.color}</h1>
      <p>
        the car brand is{car.brand}and year is{car.year}
      </p>
      <button onClick={updateyear}></button>
    </>
  );
}

export default Functionclick;
