import React from 'react';
import ListGroup from 'react-bootstrap/ListGroup';
import Card from 'react-bootstrap/Card';

function ContactList(props){
    let contacts = props.contacts.filter((item)=>strMatch(item,props.searchstr));
    let contactItem= contacts.map((item)=>
    <ListGroup.Item key={item.FirstName+" "+item.LastName}>
        <Card className="bg-light border rounded">
            <span key={item.FirstName+" "+item.LastName}
                className="text-right"
                onClick={props.close.bind(null,item.FirstName,item.LastName,item.Birthday,item.Telephone)}>X</span>
            <Card.Body className="text-left">
            <h5>{item.FirstName} {item.LastName}</h5>
            <h6>Birthday:{item.Birthday}</h6>
            <h6>Telephone:{item.Telephone}</h6>
            </Card.Body>
        </Card>
    </ListGroup.Item>
    )
    return contactItem;
}
function strMatch(item,expression){ // Compares Search String to Any of the Contact Info. 
    let expr=expression.toUpperCase();
    if(item.FirstName.toUpperCase().includes(expr)||item.LastName.toUpperCase().includes(expr)||item.Birthday.toUpperCase().includes(expr)||item.Telephone.toUpperCase().includes(expr)){
       
        return true;
    }else{
        
        return false;
    }
}
export default ContactList;