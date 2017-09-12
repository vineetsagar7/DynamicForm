import React from 'react';
import Form from "react-jsonschema-form";
//var http = require("http");
import 'whatwg-fetch';
//comment
const formData = {
    SignUP: { emailId: "PreloadData: vineet.sagar7@gmail.com" },

};

const schema = {
    type: "object",
    properties: {
        Title: {
            "title": "Title Bar",
            type: "object",
            properties: {
                Title: {
                    type: "string",
                    title: "Title",
                    "maxLength": 250
                }
            }
        },
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
        }
    }
}


function onSubmit(formData) {
    alert("hi");
    console.log(formData.formData);

    debugger;

    fetch('https://jsonplaceholder.typicode.com/posts/1')
        .then(function (response) {
            return response.json()
        }).then(function (json) {
            console.log('parsed json', json)
        }).catch(function (ex) {
            console.log('parsing failed', ex)
        })

    var form = document.querySelector('form')

    fetch('https://jsonplaceholder.typicode.com/posts', {
        method: 'POST',
        body: new FormData(form)
    })
}

class TitleForm extends React.Component {
    render() {
        return (
            <div>
                <Form schema={schema}
                    uiSchema={uiSchema}
                    onSubmit={onSubmit}
                    formData={formData}
                    //onError={log("errors")}
                    showErrorList={false}
                    />
            </div>
        );
    }
};

export default TitleForm;