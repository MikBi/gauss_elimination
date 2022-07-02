import React from 'react';
import ReactDOM from 'react-dom/client';
import Gauss from "./js/views/Gauss";

const Index = () => {
    return (
        <Gauss/>
    );
};

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(<Index/>);

export default Index;
