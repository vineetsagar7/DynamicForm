import React from 'react';
//import ReactDOM from 'react-dom';
//import { Component } from "react";
//import { render } from "react-dom";
import Form from "react-jsonschema-form";



const formData = {
    SignUP: { emailId: "PreloadData: vineet.sagar7@gmail.com" },
    // Module: {
    //     items: {
    //         description: "name",
    //         radio: "true"
    //     }
    // }

};



const schema = {
    // type: "number",
    // enum: [1, 2, 3],
    // enumNames: ["one", "two", "three"],
    type: "object",
    properties: {
        SignUP: {
            type: "object",
            properties: {
                emailId: { type: "string" },
                password: { type: "string" },
                sendMail: { type: "boolean" },
                comments: { type: "string" }
            }
        }
        ,
        Module: {
            type: "array",
            items: {
                type: "object",
                properties: {
                    description: {
                        "type": "string"
                    },
                    radio: {
                        "type": "boolean"
                    }
                }
            }
        }
    }
}

const uiSchema = {
    "ui:rootFieldId": "myform",
    // "ui:options": {
    //     orderable: false
    // },
    // "ui:options": {
    //     removable: false
    // },
    // "ui:order": ["Data", "Form"],
    SignUP: {
        emailId: {
            "ui:widget": "text",
            "ui:help": "Username!",
            "ui:autofocus": true,
            "ui:placeholder": "http://"
        },
        password: {
            "ui:widget": "password",
            "ui:help": "Enter Your Password!",
            "ui:autofocus": true
        },
        sendMail: { "ui:widget": "radio" },
        comments: {
            "ui:widget": "textarea",
            "ui:help": "Hint: Make it strong!"
        },

        Module: {
            // note the "items" for an array
            items: {
                description: {
                    "ui:widget": "range",
                },
                radio: {
                    "ui:widget": "radio",
                }
            }
        }
    }
}


const log = (type) => console.log.bind(console, type);

class FormGroup extends React.Component {
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
                    />
            </div>
        );
    }
};

export default FormGroup;