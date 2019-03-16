import React from 'react';
import ListGroup from 'react-bootstrap/ListGroup';
import Card from 'react-bootstrap/Card';

function AddressList(props){
    let addresses = props.addresses.filter((item)=>strMatch(item,props.searchstr));
    let addressItem= addresses.map((item)=>
    <ListGroup.Item key={item.FirstName+" "+item.LastName}>
        <Card className="bg-light border rounded">
            <span key={item.FirstName+" "+item.LastName}
                className="text-right"
                onClick={props.close.bind(null,item.FirstName,item.LastName,item.Birthday,item.Telephone)}>X</span>
            <Card.Body className="text-left">
            <h5>{item.LastName}</h5>
            </Card.Body>
        </Card>
    </ListGroup.Item>
    )
    return addressItem;
}
function strMatch(item,expression){
    
    if(item.FirstName.includes(expression)||item.LastName.includes(expression)||item.Birthday.includes(expression)||item.Telephone.includes(expression)){
       
        return true;
    }else{
        
        return false;
    }
}
export default AddressList;