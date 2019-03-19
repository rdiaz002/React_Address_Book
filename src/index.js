import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import AddressList from './AddressList.js';

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
    "fFirstName": '',
    "fLastName": '',
    "fBirthday": '',
    "fTelephone": '',
    "SearchString": ''
  }
  addToBookHandler = (event) => {
    event.preventDefault();
    if(this.state.fFirstName=='' && this.state.fLastName==''){
      window.alert("First Name or Last Name is Required");
      return;
    }
    let newAddr = {
      FirstName: this.state.fFirstName,
      LastName: this.state.fLastName,
      Birthday: this.state.fBirthday,
      Telephone: this.state.fTelephone
    };
    this.setState({ addresses: [...this.state.addresses, newAddr] });
    this.setState({ fFirstName: '' });
    this.setState({ fLastName: '' });
    this.setState({ fBirthday: '' });
    this.setState({ fTelephone: '' });
    document.getElementById("Massive-form").reset();
  }
  deleteFromBookHandler = (FirstName, LastName, Birthday, Telephone, event) => {
    let addresses = [...this.state.addresses];
    let deleteIndex = addresses.findIndex((item) => item.Birthday == Birthday && item.FirstName == FirstName && item.Telephone == Telephone && item.LastName == LastName);
    if(window.confirm("Are you sure you want to delete this contact?")){
    addresses.splice(deleteIndex, 1);
    this.setState({ "addresses": addresses });
    }
  }
  updatesearch=(str)=>{
    this.setState({"SearchString":str});
  }

  render() {
    return (
      <div className="App">
        <Container>
          <header className="App-header text-left">
            <nav><input id="Searchbar" onChange={(str)=>this.updatesearch(str.target.value)} type="text" className="float-right" placeholder="Search for someone"></input>
            </nav>
            <h1>React Address Book</h1>
            
          </header>
          <AddressList addresses={this.state.addresses}
            close={this.deleteFromBookHandler}
            searchstr={this.state.SearchString}
            >
          </AddressList>
          <Form id="Massive-form" className="text-left" onSubmit={this.addToBookHandler}>
            <Form.Row>
              <Form.Group as={Col} controlId="formGridFirst">
                <Form.Label>First Name</Form.Label>
                <Form.Control type="text" placeholder="first name"
                  onChange={(e) => this.setState({ fFirstName: e.target.value })} />
              </Form.Group>

              <Form.Group as={Col} controlId="formGridLast">
                <Form.Label>Last Name</Form.Label>
                <Form.Control type="text" placeholder="last name"
                  onChange={(e) => this.setState({ fLastName: e.target.value })} />
              </Form.Group>
            </Form.Row>

            <Form.Group controlId="formGridBirthday">
              <Form.Label>Birthday</Form.Label>
              <Form.Control type="date" placeholder="MM-DD-YYYY"
                onChange={(e) => this.setState({ fBirthday: e.target.value })} />
            </Form.Group>

            <Form.Group controlId="formGridTelephone">
              <Form.Label>Telephone</Form.Label>
              <Form.Control type="tel" placeholder="###-###-####"
                onChange={(e) => this.setState({ fTelephone: e.target.value })} />
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
