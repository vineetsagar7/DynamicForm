import React from 'react';
import TitleBar from "./title_bar.js";



class Title extends React.Component {


    render() {
        return (
            <div>
                <div className="row">
                    <div className="col-md-3"></div>

                    <div className="col-md-6">
                        {/*<TitleForm />*/}
                        {/*<CommandButtonsForm />*/}
                        <TitleBar />
                    </div>

                    <div className="col-md-3"></div>
                </div>
            </div>
        );
    }
};

export default Title;