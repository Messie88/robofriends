import React from 'react';

//https://robohash.org/ for random images
const Card = (props) => {
    const {name, email, id} = props;
    return (
        <div className='bg-light-green tc br3 dib pa3 ma2 bw2 shadow-5 grow'>
            <div>
                <img src={`https://robohash.org/${id}?size=150x150`} alt="robot" />
                <h2>{name}</h2>
                <p>{email}</p>
            </div>   
        </div>
    );
}

export default Card;