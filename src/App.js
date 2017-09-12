import './index.css';
import React from 'react';
import '../node_modules/bootstrap/dist/css/bootstrap.css';
//test

import Form from './Form'

class App extends React.Component {
    render() {
        return (
            <div className="mainPanel" >

                <Form />
            </div>
        );
    }
}

export default App;