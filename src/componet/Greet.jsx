// import React from "react";

// function Greet(props) {
//   const name = props.name;
//   const heroname = props.heroname;
//   return (
//     <div>
//       <h1>
//         hello {name}and {heroname}
//       </h1>
//     </div>
//   );
// }

// export default Greet;
import React from "react";
function Greet(props) {
  const name = props.name;
  const heroname = props.heroname;
  return (
    <>
      <h1>
        {" "}
        hello {name} a.k.a {heroname}
      </h1>
      {props.children}
    </>
  );
}
export default Greet;
