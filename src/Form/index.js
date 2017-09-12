import React from 'react';
import './Form.css';
//import Player from "./Player";
import PlayerEditor from "./Player/player.js";

class Form extends React.Component {

    render() {
        debugger;
        return (
            <div>
                <PlayerEditor />
                {/*<Player />*/}
            </div>
        );
    }
};

export default Form;

/*  Apraoch to save the data for multiple Tab
    1. Use react lifecycle and save the data when the form detach from the dom.
    2. Using prop save the form data to parent file.
    3. when form attach pass the data as prop to the respective child element.
*/
