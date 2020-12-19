import React from "react";

// This component sits in between our Content and App components
// Thanks to the Context API, we do not need to pass any props through this component
function Layout(props) {
  return (
    <div>
      <h1 style={{ textAlign: "center" }}>Consuming Context</h1>
      <div style={{ margin: "0 auto" }}>
        {props.children}
      </div>
    </div>
  );
}

export default Layout