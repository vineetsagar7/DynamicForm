import React from 'react';
import ReactDOM from 'react-dom';
import './player.css';
import Sortable from 'sortablejs';

import '../../../public/muicss.css'
//import { Appbar, Button, Container } from 'muicss/react';
import Dropdown from 'muicss/lib/react/dropdown';
import DropdownItem from 'muicss/lib/react/dropdown-item';
//import Visible from "./ImageForm/visible.js";
import Image from "./ImageForm";
import Video from "./VideoForm";
import Title from "./TitleBar";
import CommandBar from "./Command";
import SlideShowForm from "./SlideShow";
import { VideoEntity } from "./entities/videoEntity"
//import Command from "./Command/command_buttons.js"
//import Right from "./rightLayer"

//var content = [];
var componentList = [];
//var rightLayerLsit = [];
var componentMap = new Map();
var counter = 0;

class PlayerEditor extends React.Component {
    constructor(props) {
        super(props);
        //this.modal = this.modal.bind(this);
        this.close = this.close.bind(this);
        this.titleBar = this.titleBar.bind(this);
        //this.closeModal = this.closeModal.bind(this);
        this.mainContent = this.mainContent.bind(this);
        this.leftMenu = this.leftMenu.bind(this);
        this.loadContent = this.loadContent.bind(this);
        this.hideAll = this.hideAll.bind(this);
        this.check = this.check.bind(this);
    }


    // modal() {
    //     content.push("find a way to push the content to array");
    //     var modal = document.getElementById('myModal');
    //     modal.style.display = "block";
    // }

    close() {
        //this.closeModal();
    }


    titleBar(titleText, component) {

        this.mainContent();
        //left menue
        this.leftMenu(titleText);

        this.loadContent(component);

        var x = componentList[counter];
        componentMap.set(counter, x);
        console.log(x)


        this.hideAll();

        counter++;
        // this.closeModal();
    }

    hideAll() {
        if (counter !== 0) {
            for (var i = 0; i < counter; i++) {
                var showId1 = 'Content' + i;
                var child_div_hide = document.getElementById(showId1);
                child_div_hide.className = "hide";
            }
        }
    }

    mainContent() {
        var child_div = document.createElement("div");
        child_div.id = 'Content' + counter;
        child_div.className = "show";
        var parent = document.getElementById("content");
        parent.appendChild(child_div);
    }

    leftMenu(titleText) {


        var child_div1 = document.createElement("div");
        child_div1.id = 'left_Menu' + counter;
        child_div1.className = "btn-left";
        child_div1.innerText = titleText;
        var left = document.getElementById("leftContent");
        left.appendChild(child_div1);
        var showId = 'Content' + counter;

        child_div1.onclick = function () {

            var child_div_Showid = document.getElementsByClassName("show");
            var x = child_div_Showid[0].id;
            var currentId = document.getElementById(x);

            var child_show = document.getElementById(showId);

            if (child_show !== currentId) {
                currentId.classList.remove("show");
                //currentId.style.transform = "translateX(0 px)";

                currentId.className = "Transition-right";

                //var windowWidth = window.innerWidth;
                //currentId.style.transform = "translateX(" + windowWidth + "px)";

                var hideIntervalId = setInterval(function () {
                    currentId.className = "hide";
                }, 600);

                var showIntervalId = setInterval(function () {
                    child_show.className = "show";
                    //child_show.style.width = "0 px";
                }, 600);

                setInterval(function () {
                    clearInterval(hideIntervalId);
                    clearInterval(showIntervalId);
                }, 600);
            }


        }
    }

    loadContent(component) {
        if (component === "Video") {
            debugger
            componentList.push(ReactDOM.render(<Video />, document.getElementById("content").lastChild));
            //rightLayerLsit.push(ReactDOM.render(<Right />, document.getElementById("rightlayer").lastChild));

        }
        if (component === 'Image') {
            componentList.push(ReactDOM.render(<Image />, document.getElementById("content").lastChild));
            //rightLayerLsit.push(ReactDOM.render(<Right />, document.getElementById("rightlayer")));
        }
        if (component === 'Title') {
            componentList.push(ReactDOM.render(<Title />, document.getElementById("content").lastChild));
            //rightLayerLsit.push(ReactDOM.render(<Right />, document.getElementById("rightlayer")));
        }
        if (component === 'CommandBar') {
            componentList.push(ReactDOM.render(<CommandBar />, document.getElementById("content").lastChild));
            //rightLayerLsit.push(ReactDOM.render(<Right />, document.getElementById("rightlayer")));
        }
        if (component === 'SlideShowForm') {
            componentList.push(ReactDOM.render(<SlideShowForm />, document.getElementById("content").lastChild));
            //rightLayerLsit.push(ReactDOM.render(<Right />, document.getElementById("rightlayer")));
        }
    }

    // closeModal() {
    //     var modal = document.getElementById('myModal');
    //     modal.style.display = "none";
    // }

    sortableGroupDecorator = (componentBackingInstance) => {
        // check if backing instance not null
        if (componentBackingInstance) {
            let options = {
                draggable: "div", // Specifies which items inside the element should be sortable
                group: "name",
                //sort: true,
                disabled: false
            };
            Sortable.create(componentBackingInstance, options);
        }
    };


    check() {
        debugger;

        //VideoEntity.sendVideo();

        var x = fetch('https://jsonplaceholder.typicode.com/comments');

        /*
                fetch('https://mywebsite.com/endpoint/', {
                    method: 'POST',
                    headers: {
                        'Accept': 'application/json',
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify({
                        firstParam: 'yourValue',
                        secondParam: 'yourOtherValue',
                    })
                })
                */
    }

    render() {

        this.check();

        componentList = []; // Change this to get the list from props or state
        return (
            <div>

                <div className="heading"> </div>
                <div className="left-sidebar" id="leftContent" ref={this.sortableGroupDecorator}>
                    <Dropdown color="primary" label="New Layer" className="left-sidebar-top hand">
                        <DropdownItem onClick={() => this.titleBar("Video", "Video")}>Video</DropdownItem>
                        <DropdownItem onClick={() => this.titleBar("Image", "Image")}>Image</DropdownItem>
                        <DropdownItem onClick={() => this.titleBar("Title Bar", "Title")}>Title Bar</DropdownItem>
                        <DropdownItem onClick={() => this.titleBar("Slide Show", "SlideShowForm")}>SlideShow</DropdownItem>
                        <DropdownItem onClick={() => this.titleBar("Command", "CommandBar")}>CommandBar</DropdownItem>
                    </Dropdown>
                </div>

                <div className="content content-container" id="content">
                </div>
                {/*
                <div className="right-layer" id="rightlayer">
                </div>*/}
            </div>
        );
    }
};

export default PlayerEditor;