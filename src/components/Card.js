import React, { useContext } from "react"
import ThemeContext from "../utils/ThemeContext";

// We access the value stored in context using Consumer
function Card(props) {
  const theme = useContext(ThemeContext);
  return (
    <div
        className="card"
        style={{
          backgroundColor: theme === "green" ? "#5cb85c" : "white",
          textAlign: "center"
        }}
      >
        <div
          style={{
            color: theme === "green" ? "white" : "black",
            textAlign: "center"
          }}
        >
          The theme is: {theme}
        </div>
      </div>
  );
}

export default Card