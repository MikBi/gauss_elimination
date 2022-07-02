import React from 'react';
import "../../css/main.css"
import {HEAD} from "./Head";
import CORE from "./CORE";



const Gauss = () => {
    return (
        <>
            <HEAD text={"Welcome to Gauss Elimination calculator"}/>
            <CORE/>
        </>
    );
};

export default Gauss;
