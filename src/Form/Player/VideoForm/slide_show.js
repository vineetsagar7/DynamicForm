import React from 'react';
//import ReactDOM from 'react-dom';
//import { Component } from "react";
//import { render } from "react-dom";
import Form from "react-jsonschema-form";
const formData = {
    SignUP: { emailId: "PreloadData: vineet.sagar7@gmail.com" }
};

const schema = {
    type: "object",
    properties: {
        SlideShow: {
            "title": "",
            type: "array",
            items: {
                "title": "",
                type: "object",
                properties: {
                    Image: {
                        type: "string",
                        format: "data-url",
                        title: "Image"
                    },
                    StartTime: {
                        "type": "string",
                        "title": "Start Time"
                    },
                    EndTime: {
                        "type": "string",
                        "title": "End Time"
                    }
                }
            }
        }
    }
}

const uiSchema = {
    "ui:rootFieldId": "myform",

    SlideShow: {
        // note the "items" for an array
        items: {
            StartTime: {
                "type": "string",
                "title": "Start Time",
                "ui:placeholder": "mm:ss"
            },
            EndTime: {
                "type": "string",
                "title": "End Time",
                "ui:placeholder": "mm:ss"
            }
        }
    }

}


function validate(formData, errors) {
    debugger;

    var ImgPhStr = formData.SlideShow[0].Image;

    var x = formData.SlideShow[0].StartTime;
    if (x !== undefined) {
        var LenOfVideo = formData.SlideShow[0].StartTime;
    }
    if (formData.SlideShow[0].EndTime !== undefined) {
        LenOfVideo = formData.SlideShow[0].EndTime;
    }


    if (!((LenOfVideo === undefined) || (LenOfVideo === ''))) {
        if (LenOfVideo.length === 5) {
            var m = parseInt(LenOfVideo.substr(0, 2), 10);
            var s = parseInt(LenOfVideo.substr(3, 2), 10);
            if (!((m <= 60) && (m >= 0))) {
                errors.addError("mm should be greater then 0 and less then 60");
            }
            if (!((s <= 60) && (s >= 0))) {
                errors.addError("ss should be greater then 0 and less then 60");
            }

            if ((isNaN(m) === true) || (isNaN(s) === true)) {
                errors.addError("mm:ss Enter Valid Time");
            }
        }

        if (LenOfVideo.length === 2) {
            var c = parseInt(LenOfVideo.substr(0, 2), 10);
            if (!((c <= 60) && (c >= 0))) {
                errors.addError("hh should be greater then 24 and less then 0");
            }
            if ((isNaN(c) === true)) {
                errors.addError("ss Enter Valid Time");
            }
        }

        if (LenOfVideo.length > 5) {
            errors.addError("Enter Valid time");
        }
    }

    if (ImgPhStr !== undefined) {
        var a = (ImgPhStr.substr(ImgPhStr.length - 4));
        var b = (ImgPhStr.substr(ImgPhStr.length - 5));
        if (!((a === '.jpg') || (b === '.jpeg') || (a === '.gif') || (a === '.png'))) {
            errors.addError("Image Placeholder should end with .jpg, .jpeg, .gif, .png");
        }
    }


    return errors;
}

const log = (type) => console.log.bind(console, type);

class SlideShow extends React.Component {
    // constructor(props) {
    //     super(props);
    // };

    render() {
        return (
            <div>
                <Form schema={schema}
                    uiSchema={uiSchema}
                    onSubmit={log("submitted")}
                    formData={formData}
                    validate={validate}
                />
            </div>
        );
    }
};

export default SlideShow;