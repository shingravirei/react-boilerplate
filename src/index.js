import React from 'react';
import reactDOM from 'react-dom';

const App = () => {
    return (
        <div>
            <h1>Hello React!</h1>
        </div>
    );
};

reactDOM.render(<App />, document.getElementById('root'));
