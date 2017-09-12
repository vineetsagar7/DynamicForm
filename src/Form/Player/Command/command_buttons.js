import * as React from "react";
import Sortable from 'sortablejs';
//comment
class Command extends React.Component {
    constructor(props) {
        super(props);
        this.getValue = this.getValue.bind(this);
        this.CommandsButton = new Map();
    };

    sortableContainersDecorator = (componentBackingInstance) => {
        // check if backing instance not null
        if (componentBackingInstance) {
            let options = {
                handle: ".group-title" // Restricts sort start click/touch to the specified element
            };
            Sortable.create(componentBackingInstance, options);
        }
    };

    getValue() {

        var x = document.getElementsByClassName("group-list");
        if (this.CommandsButton.size > 0) {
            this.CommandsButton.clear();
        }
        var entries = 0;
        console.log(x[0]);
        console.log(x[0].childNodes[entries]);
        console.log(x[0].childNodes[0].childNodes[1]);
        //console.log(x[0].childNodes[entries].childNodes[1].value);
        while (entries !== 7) {

            if (x[0].childNodes[entries].childNodes[1] !== undefined) {
                var key = x[0].childNodes[entries].childNodes[1].name;
                var value = x[0].childNodes[entries].childNodes[1].value;
                this.CommandsButton.set(key, value);
            } else {

                // console.log(x[0].childNodes[entries].childNodes[0].childNodes[0].name);
                // console.log(x[0].childNodes[entries].childNodes[0].childNodes[0].value);

                if (x[0].childNodes[entries].childNodes[0].childNodes[0].type === 'checkbox') {
                    var Chkkey = x[0].childNodes[entries].childNodes[0].childNodes[0].name;
                    var valuechecked = x[0].childNodes[entries].childNodes[0].childNodes[0].checked;
                    this.CommandsButton.set(Chkkey, valuechecked);
                } else {

                }
            }
            entries++;
        }
        console.log(this.CommandsButton);
    }

    sortableGroupDecorator = (componentBackingInstance) => {
        // check if backing instance not null
        if (componentBackingInstance) {
            let options = {
                draggable: "div", // Specifies which items inside the element should be sortable
                group: "shared"
            };
            Sortable.create(componentBackingInstance, options);
        }
    };

    render() {
        return (
            <div ref={this.sortableContainersDecorator}>
                <div className="group">
                    {/*<h2 className="group-title legendStyle">Commands</h2>*/}
                    <div className="group-list" ref={this.sortableGroupDecorator}>
                        <div className="margin-bottom">
                            <label className="move form-text">Ask a Question</label>
                            <input type="text" className="move input-box" name="Ask a Question" /></div>
                        <div className="margin-bottom">
                            <label className="move form-text">Notes</label>
                            <input type="text" className="move input-box" name="Notes" /></div>
                        <div className="margin-bottom">
                            <label className="move form-text">Chat</label>
                            <input type="text" className="move input-box" name="Chat" /></div>
                        <div className="margin-bottom">
                            <label className="move form-text">Help</label>
                            <input type="text" className="move input-box" name="Help" /></div>
                        <div className="margin-bottom checkbox">
                            <label className="move form-text move">
                                <input type="checkbox" className="move checkbox-box" name="Enlarge Player" />
                                <p className="move form-text">Enlarge Player</p>
                            </label>
                        </div>
                        <div className="margin-bottom checkbox">
                            <label>
                                <input type="checkbox" className="move checkbox-box" name="Enable Swap" />
                                <p className="move form-text">Enable Swap</p>
                            </label>
                        </div>
                        <div className="margin-bottom checkbox">
                            <label>
                                <input type="checkbox" className="move checkbox-box" name="Navigation Buttons" />
                                <p className="move form-text">Navigation Buttons</p>
                            </label>
                        </div>
                    </div>
                    <input className="btn btn-info" type="button" value="Save" onClick={() => this.getValue()} />
                </div>
                {/*
                <div className="group">
                    <h2 className="group-title">Group 2</h2>
                    <div className="group-list" ref={this.sortableGroupDecorator}>
                        <div>Swap them around</div>
                        <div>Swap us around</div>
                        <div>Swap things around</div>
                        <div>Swap everything around</div>
                    </div>
                </div>
                */}
            </div>
        );
    }
}

export default Command;