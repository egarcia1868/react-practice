import React, { useState }  from "react";
import Container from "../../components/Container";
import Col from "../../components/Col";
import Row from "../../components/Row";

const Signup = () => {
  const handleSubmit = e => {
    e.preventDefault();
    console.log(person)
  };

  const [person, setPerson] = useState({
    username: "",
    password: ""
  })

  const handleInputChange = event => {
    const value = event.target.value;
    setPerson({ ...person, [event.target.name]: value})
  }

  return (
    <div>
      <div className="mt-4">
        <h2>Sign Up</h2>
      </div>
      <form onSubmit={handleSubmit}>
        <Container className="mt-3 px-5">
          <Row className="form-group">
            <Col size="12">
              <input className="form-control" type="text" placeholder="Username" name="username" onChange={handleInputChange}/>
            </Col>
          </Row>
          <Row className="form-group">
            <Col size="12">
              <input
                className="form-control"
                type="password"
                placeholder="Password"
                name="password"
                onChange={handleInputChange}
                // value={}
              />
            </Col>
          </Row>
          <button className="btn btn-success" type="submit">
            Submit
          </button>
        </Container>
        <Container className="mt-4">
          <h3>Hello {person.username}</h3>
          <p>I probably shouldn't tell you this, but your password is {person.password}</p>
        </Container>
      </form>
    </div>
  );
};

export default Signup;
