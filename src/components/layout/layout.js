import React from 'react';

const layout = ( props ) => (
    <>
        <div>Navbar</div>
        <main> {props.children} </main> 
    </>
);

export default layout;