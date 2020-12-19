import * as React from "react";
import Layout from "./components/Layout";
import Card from "./components/Card";
import "./App.css"; // Set the theme of the page to default to "light"
import ThemeContext from "./utils/ThemeContext";

console.log(ThemeContext);

function App() {
  // App component that provides initial context values
  // Here we are overwritting the context to be "dark" using the Provider
  return (
      <Layout>
        <ThemeContext.Provider value={"green"}>
          <Card />
        </ThemeContext.Provider>
      </Layout>
  );
}

export default App;
