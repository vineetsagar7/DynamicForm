import React from 'react';
import Form from "react-jsonschema-form";

const formData = {
    SignUP: { emailId: "PreloadData: vineet.sagar7@gmail.com" },

};

const schema = {
    type: "object",
    properties: {
        General: {
            "title": "",
            type: "object",
            properties: {
                StreamHLSPath: {
                    type: "string",
                    title: "Stream HLS Path",
                    format: "data-url"
                },
                StreamDASHPath: {
                    type: "string",
                    title: "Stream DASH Path",
                    format: "data-url"
                },
                StreamType: {
                    type: "string",
                    enum: ["live", "on-demand", " local", "as-live"],
                    title: "Stream Type"
                },
                ImagePlaceholder: {
                    type: "string",
                    title: "Image Placeholder",
                    format: "data-url"
                },
                InputType: {
                    type: "string",
                    enum: ["Audio Video", "Audio "],
                    title: "Input Type"
                },
                AudioSource: {
                    type: "string",
                    enum: ["Yes", "No"],
                    title: "Audio Source"
                },
                LengthofVideo: {
                    type: "string",
                    title: "Length of Video"
                }
            }
        }
    }
}

const uiSchema = {
    "ui:rootFieldId": "myform",
    General: {
        StreamHLSPath: {
            "ui:widget": "text",
            //"ui:autofocus": true,
            "ui:placeholder": ".m3u8",
            "minLength": 3,
            "maxLength": 40,
            "x-hints": {
                "form": {
                    "classes": "important-field"
                }
            }
            // "pattern": "^[A-Z][a-z]*(\\s[A-Z][a-z]*)*$"
        },
        StreamDASHPath: {
            "ui:widget": "text",
            "ui:placeholder": ".mpd"
        },
        StreamType: {
            "ui:widget": "radio"
        },
        ImagePlaceholder: {
            "ui:widget": "text",
            "ui:placeholder": ".jpg, .jpeg, .gif, .png"
        },
        InputType: {
            "ui:widget": "radio",
        },
        AudioSource: {
            "ui:widget": "radio",
        },
        LengthofVideo: {
            "ui:widget": "text",
            "format": "time",
            "ui:placeholder": "hh:mm:ss",
            "ui:help": "hh:mm:ss"
        }
    }
}

function validate(formData, errors) {
    //debugger;

    var streamHLSStr = formData.General.StreamHLSPath
    var StrmDASHPathStr = formData.General.StreamDASHPath
    var ImgPhStr = formData.General.ImagePlaceholder
    var LenOfVideo = formData.General.LengthofVideo

    if (streamHLSStr !== undefined) {
        if (streamHLSStr.substr(streamHLSStr.length - 5) !== '.m3u8') {
            errors.addError("Stream HLS Path should end with .m3u8 ");
        }
    }

    if (StrmDASHPathStr !== undefined) {
        if (StrmDASHPathStr.substr(StrmDASHPathStr.length - 4) !== '.mpd') {
            errors.addError("Stream DASH Path should end with .mpd ");
        }
    }

    if (ImgPhStr !== undefined) {

        var x = (ImgPhStr.substr(ImgPhStr.length - 4));
        var y = (ImgPhStr.substr(ImgPhStr.length - 5));
        if (!((x === '.jpg') || (y === '.jpeg') || (x === '.gif') || (x === '.png'))) {
            errors.addError("Image Placeholder should end with .jpg, .jpeg, .gif, .png");
        }
    }

    debugger;
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
        if (LenOfVideo.length === 8) {
            var hr = parseInt(LenOfVideo.substr(0, 2), 10);
            var min = parseInt(LenOfVideo.substr(3, 2), 10);
            var sec = parseInt(LenOfVideo.substr(6, 7), 10);
            if (!((hr <= 24) && (hr >= 0))) {
                errors.addError("hh should be greater then 0 <= 24");
            }
            if (!((min <= 60) && (min >= 0))) {
                errors.addError("mm should be greater then 0 <= 60");
            }
            if (!((sec <= 60) && (sec >= 0))) {
                errors.addError("SS should be greater then 0 <= 60");
            }
            if ((isNaN(hr) === true) || (isNaN(min) === true) || (isNaN(sec) === true)) {
                errors.addError("hh:mm:ss Enter Valid Time");
            }
        }
        if (LenOfVideo.length === 2) {
            var se = parseInt(LenOfVideo.substr(0, 2), 10);
            if (!((se <= 60) && (se >= 0))) {
                errors.addError("hh should be greater then 24 and less then 0");
            }
            if ((isNaN(se) === true)) {
                errors.addError("ss Enter Valid Time");
            }
        }

        if (LenOfVideo.length > 8 ||
            LenOfVideo.length === 1 ||
            LenOfVideo.length === 3 ||
            LenOfVideo.length === 4 ||
            LenOfVideo.length === 6 ||
            LenOfVideo.length === 7
        ) {
            errors.addError("Enter Valid time");
        }



    }

    return errors;
}


const log = (type) => console.log.bind(console, type);

class General extends React.Component {


    constructor(props) {
        super(props);
        this.state = { ...props.formData };
    }


    render() {
        return (
            <div className="overflow">
                <Form schema={schema}

                    uiSchema={uiSchema}
                    onSubmit={log("submitted")}
                    formData={formData}
                    validate={validate}
                    showErrorList={false}
                />
            </div>
        );
    }
};

export default General;