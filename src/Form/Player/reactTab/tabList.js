import React from 'react';
import './tab.css';

class TabList extends React.Component {

    // constructor(props) {
    //     super(props);
    //     this.tab = [];
    //     this.tabPannel = [];
    //     this.chkTab = this.chkTab.bind(this);
    //     this.chkPannel = this.chkPannel.bind(this);
    //     this.mapping = this.mapping.bind(this);
    //     this.filtertabs = this.filtertabs.bind(this);
    //     this.mapedYear = new Map();
    //     this.onTab = this.onTab.bind(this);
    // }

    chkTab() {

    }

    chkPannel() {

    }

    // filtertabs(startIndex, endIndex, tabs) {
    //     for (; startIndex < endIndex; startIndex++) {
    //         tabs.push(this.props.children[startIndex]);
    //     }
    // }

    // mapping() {
    //     for (var i = 0; i < this.props.children.length / 2; i++) {
    //         this.mapedYear.set(this.tab[i], this.tabPannel[i]);
    //     }
    //     //debugger
    //     this.mapedYear;
    // }

    // onTab(id) {


    // }

    render() {
        //this.props.children
        // if (this.props.children.length % 2 !== 0) {
        //     console.log("Tab dont have matching pannel");
        // }
        // this.filtertabs(0, this.props.children.length / 2, this.tab);
        // this.filtertabs(this.props.children.length / 2, this.props.children.length, this.tabPannel);
        // this.mapping();

        // this.chkTab(this.tab);

        // this.chkTab(this.tabPannel);

        // debugger;
        // this.props.children;

        return (
            <div className="tab-width tabList-width" id={this.props.children} >
                {this.props.children}
            </div>
        );
    }
};

export default TabList;