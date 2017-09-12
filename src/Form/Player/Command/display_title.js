import React from 'react';
import Form from "react-jsonschema-form";



// const formData = {
//     SignUP: { emailId: "PreloadData: vineet.sagar7@gmail.com" },

// };
//comment
const schema = {
    type: "object",
    properties: {
        ButtonBackround: {
            "title": "Button Background",
            type: "object",
            properties: {
                Default: {
                    type: "string",
                    format: "data-url",
                    title: "Default"
                },
                Hover: {
                    type: "string",
                    format: "data-url",
                    title: "Hover"
                },
                Click: {
                    type: "string",
                    format: "data-url",
                    title: "Click"
                }
            }
        },
        Display: {
            "title": "Layout",
            type: "object",
            properties: {
                Width: {
                    type: "string",
                    title: "Width "
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
                    title: "Top Offset"
                }
            }
        }
    }
}

const uiSchema = {
    "ui:rootFieldId": "myform",
    Display: {
        Default: {
            "ui:widget": "uri"
        },
        Hover: {
            "ui:widget": "text",
            "ui:placeholder": "px"
        },
        Click: {
            "ui:widget": "text",
            "ui:placeholder": "px"
        },
        Help: {
            "ui:widget": "text",
            "ui:placeholder": "px"
        },


        Width: {
            "ui:widget": "text",
            "ui:placeholder": "px"
        },
        Height: {
            "ui:widget": "text",
            "ui:placeholder": "px"
        },
        LeftOffset: {
            "ui:widget": "text",
            "ui:placeholder": "px"
        },
        TopOffset: {
            "ui:widget": "text",
            "ui:placeholder": "px"
        }
    }

}


const log = (type) => console.log.bind(console, type);

class DisplayTitle extends React.Component {
    render() {
        return (
            <div>
                <Form schema={schema}
                    uiSchema={uiSchema}
                    onSubmit={log("submitted")}
                    //formData={formData}
                    onError={log("errors")}
                    showErrorList={false}
                    />
            </div>
        );
    }
};

export default DisplayTitle;