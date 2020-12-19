import React, { useState, useEffect } from "react";
import API from "../../utils/API";
import Container from "../../components/Container";
import SearchForm from "../../components/SearchForm";
import SearchResults from "../../components/SearchResults";
import Alert from "../../components/Alert";

const Search = () => {
  const [getSearch, setSearch] = useState("Wikipedia");
  const [getTitle, setTitle] = useState("");
  const [getUrl, setUrl] = useState("");
  const [getError, setError] = useState("");

  // When the component mounts, update the title to be Wikipedia Searcher
  // componentDidMount() {
  useEffect (() => {
    if (!getSearch) {
      return;
    }
    // This is saying that if a change is made to "getSearch", we're going to run the api search using getSearch's value as the query, then change the title and url to the title and url from the result.  This will only run when getSearch's value is changed.
    API.searchTerms(getSearch)
      .then(res => {
        if (res.data.length === 0) {
          throw new Error("No results found.");
        }
        if (res.data.status === "error") {
          throw new Error(res.data.message);
        }
          setTitle(res.data[1][0]);
          setUrl(res.data[3][0]);
      })
      .catch(err => setError(err))
  }, [getSearch]);


  const handleInputChange = event => {
    setSearch( event.target.value );
  };

  return (
    <div>
      <Container style={{ minHeight: "100vh" }}>
        <h1 className="text-center">Search For Anything on Wikipedia</h1>
        <Alert type="danger" style={{ opacity: getError ? 1 : 0, marginBottom: 10 }}>
          {getError}
        </Alert>
        <SearchForm
          handleInputChange={handleInputChange}
          results={getSearch}
        />
        <SearchResults
          title={getTitle}
          url={getUrl}
        />
      </Container>
    </div>
  );
}

export default Search;
