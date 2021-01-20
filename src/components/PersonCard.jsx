import React from 'react';
// import React, { Component } from 'react';
    
    
const PersonCard = props => {
        return (
            <div>
                <h2>{props.lastName} {props.firstName}</h2>
                <p>age: {props.age}</p>
                <p>hair color: {props.hairColor}</p>
            </div>
        );
}
    
export default PersonCard;