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
    ],
    "fFirstName":'',
    "fLastName":'',
    "fBirthday":'',
    "fTelephone":'',
  }
  addToBookHandler=(event)=>{

  }
  deleteFromBookHandler=(event)=>{
    
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

            <Form.Group controlId="formGridBirthday">
              <Form.Label>Birthday</Form.Label>
              <Form.Control type="date" placeholder="MM-DD-YYYY"/>
            </Form.Group>

            <Form.Group controlId="formGridTelephone">
              <Form.Label>Telephone</Form.Label>
              <Form.Control type="tel" placeholder="###-###-####" />
            </Form.Group>

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
