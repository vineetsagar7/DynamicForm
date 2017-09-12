import React from 'react';
import Form from "react-jsonschema-form";

const formData = {
    SignUP: { emailId: "PreloadData: vineet.sagar7@gmail.com" },

};

const schema = {
    type: "object",
    properties: {

        Advertisements: {
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
                ImagePlaceholder: {
                    type: "string",
                    title: "Image Placeholder"
                }
            }
        }
    }
}

const uiSchema = {
    "ui:rootFieldId": "myform",
    Advertismen: {
        StreamHLSPath: {
            "ui:widget": "text",
            "ui:autofocus": true,
            "ui:placeholder": ".m3u8",
        },
        StreamDASHPath: {
            "ui:placeholder": ".mpd"
        },
        ImagePlaceholder: {
            "ui:widget": "text",
            "ui:placeholder": ".jpg, .jpeg, .gif, .png"

        }
    }
}



function validate(formData, errors) {
    //debugger;

    var streamHLSStr = formData.General.StreamHLSPath
    var StrmDASHPathStr = formData.General.StreamDASHPath
    var ImgPhStr = formData.General.ImagePlaceholder



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


    return errors;
}









const log = (type) => console.log.bind(console, type);

class Advertisements extends React.Component {
    render() {
        return (
            <div>
                <Form schema={schema}
                    uiSchema={uiSchema}
                    onSubmit={log("submitted")}
                    validate={validate}
                    formData={formData}
                    />
            </div>
        );
    }
};

export default Advertisements;