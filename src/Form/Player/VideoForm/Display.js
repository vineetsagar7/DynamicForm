import React from 'react';
import Form from "react-jsonschema-form";

const formData = {
    SignUP: { emailId: "PreloadData: vineet.sagar7@gmail.com" },

};

const schema = {
    type: "object",
    required: ["Width", "Height"],
    properties: {
        Display: {
            "title": "",
            type: "object",
            properties: {
                Width: {
                    type: "string",
                    title: "Width"
                },
                Height: {
                    type: "string",
                    title: "Height"
                },
                LeftOffset: {
                    type: "string",
                    title: "Left Offset"
                },
                TopOffset: {
                    type: "string",
                    title: "Top Offset "
                }
            }
        },
        Border: {
            "title": "Border",
            type: "object",
            properties: {
                Color: {
                    type: "string",
                    title: "Color"
                },
                Thickness: {
                    type: "string",
                    title: "Thickness"
                },
                Radius: {
                    type: "string",
                    title: "Radius"
                },
                Transparency: {
                    type: "string",
                    title: "Transparency"
                }
            }
        }
    }
}

const uiSchema = {
    "ui:rootFieldId": "myform",
    Display: {
        Width: {
            "ui:widget": "text",
            "ui:autofocus": true,
            "ui:placeholder": "px"
        },
        Height: {
            //"ui:autofocus": true,
            "ui:placeholder": "px"
        },
        LeftOffset: {
            "ui:placeholder": "px"
        },
        TopOffset: {
            "ui:widget": "text",
            "ui:placeholder": "px"
            //"ui:autofocus": true,
        }
    },
    Border: {
        Color: {
            "ui:widget": "text",
            //"ui:autofocus": true,
        },
        Thickness: {
            "ui:widget": "text",
            //"ui:autofocus": true,
        },
        Radius: {
            "ui:widget": "text",
            //"ui:autofocus": true,
        },
        Transparency: {
            "ui:widget": "text",
            //"ui:autofocus": true,
        }
    }
}


const log = (type) => console.log.bind(console, type);

class Display extends React.Component {
    render() {
        return (
            <div>
                <Form schema={schema}
                    uiSchema={uiSchema}
                    onSubmit={log("submitted")}
                    formData={formData}
                    onError={log("errors")}
                    showErrorList={false}
                    />
            </div>
        );
    }
};

export default Display;