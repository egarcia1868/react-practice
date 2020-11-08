import React, { Component } from "react";
import Container from "./Container";
import Row from "./Row";
import Col from "./Col";
import Card from "./Card";
import SearchForm from "./SearchForm";
import MovieDetail from "./MovieDetail";
import API from "../utils/API";

class OmdbContainer extends Component {
  state = {
    result: {},
    search: ""
  };

  searchMovies = query => {
    API.search(query)
      .then(res => this.setState({ result: res.data }))
      .catch(err => console.log(err));
  };

  componentDidMount() {
    this.searchMovies("Dumb and Dumber")
  } 

  handleInputChange = event => {

    const value = event.target.value

    this.setState({
      search: value
    })
  }

  handleFormSubmit = event => {
    event.preventDefault();

    this.searchMovies(this.state.search)
  }

  render() {

    const foundResult = this.state.result;
    let showDetails;
    if (foundResult.Response === "False") {
      showDetails = <h3>No matching movie was found.  Try something else!</h3>
    } else {
      showDetails =             <MovieDetail
      title={foundResult.Title}
      src={foundResult.Poster}
      director={foundResult.Director}
      genre={foundResult.Genre}
      released={foundResult.Released}
    />
    }
  

    return (
      <Container>
        <Row>
          <Col size="md-8">
            <Card
              heading={this.state.result.Title || "Search for a Movie to Begin"}
            >
            {showDetails}
            </Card>
          </Col>
          <Col size="md-4">
            <Card heading="Search">
              <SearchForm
                value={this.state.search}
                handleInputChange={this.handleInputChange}
                handleFormSubmit={this.handleFormSubmit}
              />
            </Card>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default OmdbContainer;
