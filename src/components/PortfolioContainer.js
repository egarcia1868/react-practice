import React, { Component } from "react";
import NavTabs from "./NavTabs";
import Home from "./pages/Home";
import About from "./pages/About";
import Blog from "./pages/Blog";
import Contact from "./pages/Contact";

class PortfolioContainer extends Component {
  state = {
    currentPage: "Home"
  };

  handlePageChange = page => {
    this.setState({ currentPage: page });
  };

  render() {

    function pageDecider(changePage) {
      // depending on which link is clicked, the correct react component will be rendered
      switch(changePage) {
        case "Home":
          return <Home />;
        case "About":
          return <About />;
        case "Blog":
          return <Blog />;
        case "Contact":
          return <Contact />;
        default:
          return <Home />;
      }
    }

    return (
      <div>
        <NavTabs
          currentPage={this.state.currentPage}
          handlePageChange={this.handlePageChange}
        />
        {pageDecider(this.state.currentPage)}
        Based on `this.state.currentPage`, render the appropriate component
        here.
      </div>
    );
  }
}

export default PortfolioContainer;
