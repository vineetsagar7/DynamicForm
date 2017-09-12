import React from 'react';
var Dropzone = require('react-dropzone');

var addTextCounter = 0;
var storeImage = new Map();

//comment

class Source extends React.Component {

    onDrop = (files) => {

        /**
         * remove dropText and glyphicon
         */
        if (storeImage.size === 0) {
            var dropZoneTxt = document.getElementById("dropZoneTxt");
            var dropglyphicon = document.getElementById("dropglyphicon");
            dropZoneTxt.parentNode.removeChild(dropZoneTxt);
            dropglyphicon.parentNode.removeChild(dropglyphicon)
        }

        /**
         * Div child to hold image and remove
         */
        debugger;

        if (storeImage.size === 0) {

            /**
             * adding div
             */
            var child_div = document.createElement("div");
            child_div.id = "child_div";
            var Parent = document.getElementById("dropZone");
            Parent.appendChild(child_div);
            storeImage.set(child_div.id, files);
            console.log(storeImage);
            child_div.className = "img-block";

            /**
            * adding image
            */
            var child_img = document.createElement("img");
            child_img.id = "child_img";
            var y = document.getElementById(child_div.id);
            y.appendChild(child_img);
            child_img.className = "img";
            var y1 = document.getElementById(child_img.id);
            y1.src = require('./file2.png');

            /**
            * adding remove
            */
            var remove_img = document.createElement("div");
            remove_img.id = "remove_img";
            var z = document.getElementById(child_img.id);
            z.parentNode.appendChild(remove_img);
            remove_img.className = "glyphicon glyphicon-remove img-delete";

            /**
            * adding filename
            */
            debugger;
            /*
            var imageText = document.getElementById(child_img.id);
            var tar = document.createElement("div");
            tar.id = "imageText";
            tar.innerHTML = files[0].name;
            imageText.parentNode.appendChild(tar.firstChild);
             */
        }
        else {
            debugger;

            storeImage.clear();
            /*
            document.getElementById("child_img").innerHTML = "";
            
            var imageText = document.getElementById("child_img");
            var tar = document.createElement("div");
            tar.id = "imageText";
            tar.innerHTML = files[0].name;
            imageText.parentNode.appendChild(tar);
            */
            storeImage.set("child_div", files);
            console.log(storeImage);
        }


        /**
         * Div image child
         */
        var child_img1 = document.getElementById("child_div");

        child_img1.onclick = function (e) {
            event.stopPropagation();
        }


        var remove_img1 = document.getElementById("remove_img");

        remove_img1.onclick = function (e) {


          
            var x = e.currentTarget.parentElement.id;
            var xDelete = e.currentTarget.parentElement.id;
            storeImage.set(xDelete, null);
            storeImage.clear();
            var element = document.getElementById(x);
            element.parentNode.removeChild(element);
            console.log(storeImage);



            if (addTextCounter === 0) {
                /**
                 * Adding drop text
                 */
                var createChildText = document.createElement("div");
                createChildText.id = "dropZoneTxt";
                createChildText.className = "dz-message";
                var node = document.createTextNode("Drop files here or click to upload.");
                createChildText.appendChild(node)
                var ParentID = document.getElementById("dropZone");
                ParentID.appendChild(createChildText);

                /**
                * Adding drop glyphicon
                 */
                var createChildTextG = document.createElement("div");
                createChildTextG.id = "dropglyphicon";
                createChildTextG.className = "glyphiconSize glyphicon glyphicon-save";
                var ParentIDG = document.getElementById("dropZone");
                ParentIDG.appendChild(createChildTextG);
                storeImage.clear();

            }
            event.stopPropagation();
        };
    }

    render() {
        return (
                <div>
                    <Dropzone id="dropZone" className="dropZone container" onDrop={this.onDrop}>
                        <div id="dropZoneTxt" className="dz-message">Drop files here or click to upload.</div>
                        <div id="dropglyphicon" className="glyphiconSize glyphicon glyphicon-save"></div>
                    </Dropzone>
                </div>
        );
    }
};

export default Source;