import React from 'react';
import SlideShow from "./slide_show.js";

class SlideShowForm extends React.Component {

    render() {
        return (
            <div>
                <div className="row">
                    <div className="col-md-3"></div>
                    <div className="col-md-6">
                        <div className="legendStyle"> SlideShow </div>
                        <SlideShow />
                    </div>
                    <div className="col-md-3"></div>
                </div>
            </div>
        );
    }
};

export default SlideShowForm;