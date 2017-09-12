import React from 'react';
import './DragDrop.css';
var Dropzone = require('react-dropzone');

class DragDrop extends React.Component {

    constructor(props) {
        super(props);
        this.state = { file: '', imagePreviewUrl: '' };
    }


    onDrop(files) {
        console.log('Received files: ', files);
    }

    allowDrop(ev) {
        debugger;
        ev.preventDefault();
    }

    drag(ev) {

        ev.dataTransfer.setData("text", ev.target.id);
    }

    drop(ev) {

        ev.preventDefault();
        var data = ev.dataTransfer.getData("text");
        ev.target.appendChild(document.getElementById(data));
    }
    dragStart(ev) {


    }

    render() {
        return (
            <div>

                <hr />
                {/*  <div id="div1" onDrop={this.drop} onDragOver={this.allowDrop}></div>
                <div id="div2" onDrop={this.drop} onDragOver={this.allowDrop}>
                    <img id="drag1" role="presentation" src={require('./file2.png')} draggable="true" onDragStart={this.drag} width="40" height="40" />
                    <img id="drag2" role="presentation" src={require('./file.gif')} draggable="true" onDragStart={this.drag} width="40" height="40" />
                    <img id="drag3" role="presentation" src={require('./file2.png')} draggable="true" onDragStart={this.drag} width="40" height="40" />
                    <img id="drag4" role="presentation" src={require('./file.gif')} draggable="true" onDragStart={this.drag} width="40" height="40" />
                    <img id="drag5" role="presentation" src={require('./file2.png')} draggable="true" onDragStart={this.drag} width="40" height="40" />
                    <img id="drag6" role="presentation" src={require('./file.gif')} draggable="true" onDragStart={this.drag} width="40" height="40" />
                    <img id="drag7" role="presentation" src={require('./file2.png')} draggable="true" onDragStart={this.drag} width="40" height="40" />
                    <img id="drag8" role="presentation" src={require('./file.gif')} draggable="true" onDragStart={this.drag} width="40" height="40" />
                </div>
*/}
                <Dropzone onDrop={this.onDrop}>
                    <div>Try dropping some files here, or click to select files to upload.</div>
                </Dropzone>


            </div>
        );
    }
};

export default DragDrop;