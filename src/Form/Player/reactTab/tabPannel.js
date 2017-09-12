import React from 'react';
import './tab.css';

var tabPannelID = 0;

class TabPannel extends React.Component {
    constructor(props) {
        super(props)
        this.currentTabPannel = null;
    }

    render() {
        this.currentTabPannel = tabPannelID++;
        return (
            <div className="tab-width tabpannel-hiden tab-padding" id={ "tab-Pannel-" + this.currentTabPannel}>
                {this.props.children}
            </div>
        );
    }
};

export default TabPannel;