import React from 'react';

import Visible from "./Visible.js";
import Source from "./Source.js";
import DisplayImage from "./Display.js";

import Tab from '../reactTab/tab';
import TabPannel from '../reactTab/tabPannel';
import TabList from '../reactTab/tabList';

class Image extends React.Component {
    handleSelect(index, last) {
        console.log('Selected tab: ' + index + ', Last tab: ' + last);
    }

    render() {
        return (
            <div>
                <div className="row">
                    <div className="col-md-3"></div>
                    <div className="col-md-6">
                        <div className="legendStyle"> Image</div>

                        <TabList>
                            <Tab> Source </Tab>
                            <Tab> Display </Tab>
                            <Tab> Visible </Tab>
                            <TabPannel> <Source /></TabPannel>
                            <TabPannel><DisplayImage /></TabPannel>
                            <TabPannel><Visible /></TabPannel>
                        </TabList>

                    </div>
                </div>
                <div className="col-md-3"></div>

            </div>
        );
    }
};

export default Image;