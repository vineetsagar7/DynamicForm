import React from 'react';

import DisplayTitle from "./display_title.js";
import Command from "./command_buttons.js"

import Tab from '../reactTab/tab';
import TabPannel from '../reactTab/tabPannel';
import TabList from '../reactTab/tabList';

class CommandBar extends React.Component {

    render() {
        return (
            <div>
                <div className="row">
                    <div className="col-md-3"></div>
                    <div className="col-md-6">
                        <div className="legendStyle"> Commands</div>
                        <TabList>
                            <Tab> Commands </Tab>
                            <Tab> Display </Tab>
                            <TabPannel> <Command /></TabPannel>
                            <TabPannel><DisplayTitle /></TabPannel>
                        </TabList>
                    </div>
                    <div className="col-md-3"></div>
                </div>

            </div>
        );
    }
};

export default CommandBar;