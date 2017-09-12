import React from 'react';
import General from "./VideoForm/General.js";
import Advertisements from "./VideoForm/advertisement.js";
import SlideShow from "./VideoForm/slide_show.js";
import Display from "./VideoForm/Display.js";

import Visible from "./ImageForm/Visible.js";
import Source from "./ImageForm/Source.js";
import DisplayImage from "./ImageForm/Display.js";

import TitleBar from "./TitleBar/title_bar.js";
import DisplayTitle from "./TitleBar/display_title.js";
import Command from "./TitleBar/command_buttons.js"

import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';

class Player extends React.Component {

    handleSelect(index, last) {
        console.log('Selected tab: ' + index + ', Last tab: ' + last);
    }


    render() {


        return (
            <div>
                <div className="row">

                    <div className="col-md-4">
                        <div className="legendStyle"> Image</div>

                        <Tabs
                            onSelect={this.handleSelect}
                            selectedIndex={0}
                        >
                            <TabList>
                                <Tab>Source </Tab>
                                <Tab>Display </Tab>
                                <Tab>Visible </Tab>
                            </TabList>
                            <TabPanel>
                                <br /><br /><br /><br />
                                <Source />
                            </TabPanel>
                            <TabPanel>
                                <DisplayImage />
                            </TabPanel>
                            <TabPanel>
                                <Visible />
                            </TabPanel>
                        </Tabs>
                    </div>


                    <div className="col-md-4">
                        {/*<TitleForm />*/}
                        {/*<CommandButtonsForm />*/}
                        <TitleBar />
                    </div>
                    <div className="col-md-4">
                        <div className="legendStyle"> Commands</div>
                        <Tabs
                            onSelect={this.handleSelect}
                            selectedIndex={0}
                        >
                            <TabList>
                                <Tab>Commands</Tab>
                                <Tab>Display</Tab>
                            </TabList>
                            <TabPanel>
                                <Command />
                            </TabPanel>
                            <TabPanel>
                                <DisplayTitle />
                            </TabPanel>
                        </Tabs>
                    </div>
                </div>

                <div className="row">
                    <br />
                    <div className="col-md-4">
                        <div className="legendStyle"> Video </div>
                        <Tabs
                            onSelect={this.handleSelect}
                            selectedIndex={0}
                        >
                            <TabList>
                                <Tab>General</Tab>
                                <Tab>Advertisements</Tab>
                                <Tab>SlideShow</Tab>
                                <Tab>Display</Tab>
                            </TabList>
                            <TabPanel>
                                <General />
                            </TabPanel>
                            <TabPanel>
                                <Advertisements />
                            </TabPanel>
                            <TabPanel>
                                <SlideShow />
                            </TabPanel>
                            <TabPanel>
                                <Display />
                            </TabPanel>
                        </Tabs>
                    </div>




                </div>
            </div>
        );
    }
};

export default Player;