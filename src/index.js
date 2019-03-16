import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';

class App extends Component {
  state = {
    "addresses": [
      {
        FirstName: "Cathy",
        LastName: "Pierce",
        Birthday: "9/14/1996",
        Telephone: "200-910-8132"
      },
      {
        FirstName: "Alfonso",
        LastName: "Cooley",
        Birthday: "8/10/1973",
        Telephone: "200-657-9362"
      },
      {
        FirstName: "Victor",
        LastName: "Gordon",
        Birthday: "8/3/1970",
        Telephone: "200-661-9407"
      },
      {
        FirstName: "Colleen",
        LastName: "Wright",
        Birthday: "10/28/1967",
        Telephone: "200-250-7949"
      },
      {
        FirstName: "James",
        LastName: "Johnston",
        Birthday: "5/11/1972",
        Telephone: "200-645-3176"
      },
      {
        FirstName: "Anna",
        LastName: "Reyes",
        Birthday: "9/10/1975",
        Telephone: "200-707-8670"
      }
    ]
  }

  render() {
    return (
      <div className="App">
        <Container>
          <header classname="App-header text-left"><h1>React Address Book</h1></header>
          <Form>
            <Form.Row>
              <Form.Group as={Col} controlId="formGridFirst">
                <Form.Label>First Name</Form.Label>
                <Form.Control type="text" placeholder="first name" />
              </Form.Group>

              <Form.Group as={Col} controlId="formGridLast">
                <Form.Label>Last Name</Form.Label>
                <Form.Control type="text" placeholder="last name" />
              </Form.Group>
            </Form.Row>

            <Form.Group controlId="formGridAddress1">
              <Form.Label>Address</Form.Label>
              <Form.Control placeholder="1234 Main St" />
            </Form.Group>

            <Form.Group controlId="formGridAddress2">
              <Form.Label>Address 2</Form.Label>
              <Form.Control placeholder="Apartment, studio, or floor" />
            </Form.Group>

            <Form.Row>
              <Form.Group as={Col} controlId="formGridCity">
                <Form.Label>City</Form.Label>
                <Form.Control />
              </Form.Group>

              <Form.Group as={Col} controlId="formGridState">
                <Form.Label>State</Form.Label>
                <Form.Control as="select">
                  <option>Choose...</option>
                  <option>...</option>
                </Form.Control>
              </Form.Group>

              <Form.Group as={Col} controlId="formGridZip">
                <Form.Label>Zip</Form.Label>
                <Form.Control />
              </Form.Group>
            </Form.Row>

            <Button variant="primary" type="submit">
              Add to Address Book
            </Button>
          </Form>

        </Container>
      </div>
    );
  }
}


// ========================================




ReactDOM.render(
  <App />,
  document.getElementById('root')
);
