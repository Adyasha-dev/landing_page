// import React from "react";
// function Welcom(props) {
//   console.log(props);
//   return (
//     <>
//       {this.props.name}aka {this.props.heroname};
//     </>
//   );
// }

// export default Welcom;
//destructuring props

import React from "react";

function Welcom({ name, heroname }) {
  return (
    <>
      <h1>
        hello gys {name}alks {heroname}
      </h1>
    </>
  );
}

export default Welcom;
