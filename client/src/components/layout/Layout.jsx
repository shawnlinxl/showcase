import React from 'react';
import Navbar from '../../containers/Navbar/Navbar';

const layout = ( props ) => (
    <>
        <Navbar />
        <main> {props.children} </main> 
    </>
);

export default layout;