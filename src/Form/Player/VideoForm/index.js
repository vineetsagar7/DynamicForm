import React from 'react';

import General from "./General.js";
import Advertisements from "./advertisement.js";
import SlideShow from "./slide_show.js";
import Display from "./Display.js";

import Tab from '../reactTab/tab';
import TabPannel from '../reactTab/tabPannel';
import TabList from '../reactTab/tabList';

class Video extends React.Component {

    render() {
        return (
            <div>
                <div className="row">
                    <div className="col-md-3">
                    </div>
                    <div className="col-md-6">
                        <div className="legendStyle tabList-width"> Video </div>
                        {/* tabs --> tablist --> tabPannel*/}
                        <TabList>
                            <Tab> General </Tab>
                            <Tab> Advertisements </Tab>
                            <Tab> SlideShow </Tab>
                            <Tab> Display </Tab>

                            <TabPannel><General /></TabPannel>
                            <TabPannel><Advertisements /></TabPannel>
                            <TabPannel><SlideShow /></TabPannel>
                            <TabPannel><Display /></TabPannel>
                        </TabList>
                    </div>
                    <div className="col-md-3">
                    </div>
                </div>
            </div>
        );
    }
};

export default Video;