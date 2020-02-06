import React from 'react';
 // after pros ans state let buil a children
const Scroll = (props)=> {

    // children is a prop that React has
    return (
        <div style={{
            overflowY: 'scroll',
            borderTop: '1px solid #0ccac4',
            height:'600px',
            marginTop: '50px',
            paddingTop: '50px'
         }}>
         <div style={{
             width: '75%',
             margin: '0 auto'
             }}>
            {props.children}
         </div>
        </div>
    );
}

export default Scroll;