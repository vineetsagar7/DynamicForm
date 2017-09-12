import React from 'react';
import './tab.css';

var tabId = 0;

class Tab extends React.Component {
    constructor(props) {
        super(props)
        this.currentTab = null;
        this.onTab = this.onTab.bind(this);
        this.setClass = this.setClass.bind(this);
        this.deSelectAll = this.deSelectAll.bind(this);
    }

    setClass(id, classprop) {
        document.getElementById(id).className = classprop;
    }

    deSelectAll(tab, tabClass, pannel, pannelClass) {
        for (var id = 0; id < tabId; id++) {
            this.setClass(tab + id, tabClass);
            this.setClass(pannel + id, pannelClass);
        }
    }

    onTab(id) {
        debugger;
        this.deSelectAll("react-tab-", 'tab-width', "tab-Pannel-", 'tabpannel-hiden');
        this.setClass("tab-Pannel-" + id, 'tabpannel-show tab-padding');
        this.setClass("react-tab-" + id, 'tab-width react-tabs');
    }

    render() {
        debugger;
        this.currentTab = tabId;
        tabId++;
        return (
            <div className="tab-width" id={"react-tab-" + this.currentTab} onClick={() => this.onTab(this.currentTab)}>
                {this.props.children}
            </div>
        );

    }
};

export default Tab;