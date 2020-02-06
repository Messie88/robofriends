import React from 'react';
import Card from './Card';

// we use {robots} to destructure props.robots
/* Carlist  is called 'pure component' cause it's a pure function.
It receives an input and then, it always returns the same output.
THERE ARE NO CHANGE OF THE STATE */
const CardList = ({robots}) => {

    return (
        <div>
            {
            robots.map ((user, i) => {
               return (
                  <Card 
                    key={i}
                    id={user.id}
                    name={user.name}
                    email={user.email}
                   />
               )
            })
    }
        </div>
    );
}

export default CardList;