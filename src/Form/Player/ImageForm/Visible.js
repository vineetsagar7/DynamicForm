import React from 'react';
import Form from "react-jsonschema-form";

const formData = {
    SignUP: { emailId: "PreloadData: vineet.sagar7@gmail.com" },

};
//comment
const schema = {
    type: "object",
    properties: {
        Visible: {
            "title": "",
            type: "object",
            properties: {
                Start: {
                    type: "string",
                    title: "Start"
                },
                End: {
                    type: "string",
                    title: "End"
                }
            }
        }
    }
}

const uiSchema = {
    "ui:rootFieldId": "myform",
    Visible: {
        Start: {
            "ui:widget": "text",
            "ui:autofocus": true,
            "ui:placeholder": "hh:mm:ss"
        },
        End: {
            "ui:widget": "text",
            "ui:placeholder": "hh:mm:ss"
        }
    }
}

function validate(formData, errors) {
    debugger;

    var streamHLSStr = formData.General.StreamHLSPath
    var StrmDASHPathStr = formData.General.StreamDASHPath
    var ImgPhStr = formData.General.ImagePlaceholder

    console.log(streamHLSStr.substr(streamHLSStr.length - 5));
    if (streamHLSStr.substr(streamHLSStr.length - 5) !== '.m3u8') {
        errors.StreamHLSPath.addError("should end with '.m3u8' ");
    }

    if (StrmDASHPathStr.substr(StrmDASHPathStr.length - 4) !== '.mpd') {
        errors.StreamDASHPath.addError("should end with '.mpd' ");
    }

    if ((ImgPhStr.substr(ImgPhStr.length - 4) !== '.jpg') ||
        (ImgPhStr.substr(ImgPhStr.length - 5) !== '.jpeg') ||
        (ImgPhStr.substr(ImgPhStr.length - 4) !== '.gif') ||
        (ImgPhStr.substr(ImgPhStr.length - 4) !== '.png')
    ) {
        errors.ImagePlaceholder.addError("should end with '.mpd' ");
    }


    return errors;
}




const log = (type) => console.log.bind(console, type);

class Visible extends React.Component {
    render() {
        return (
            <div>
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

export default Visible;