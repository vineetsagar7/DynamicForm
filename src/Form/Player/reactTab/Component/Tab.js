import React from 'react';

class Tab extends React.Component {

    constructor(props) {
        super(props);
        this.buttonGrp = this.buttonGrp.bind(this);
        this.splitField = this.splitField.bind(this);
        this.selectFeild = this.selectFeild.bind(this);
        this.storeYear = new Map();        // map to store selected year
        this.mouseDrag = [];        // array to store selected year while onMouseMove
        this.lastSel = null;             // track last key pressed while selecting using shift key
        this.startSelectX = null;             // onMouseUp set this.startSelectX to the current value
        this.startSelectY = null;             // onMouseUp set this.startSelectY to the current value
        this.mouseDownValue = false;            // setting true/false on onMouseDown
        this.Submit = this.Submit.bind(this);
        this.submit = [];
    };


    /**
     * storing year status inside Map
     * Setting key,value pair to storeYear(instance of map)
     * year: selected year value
     */

     renderTabPannel(){

         debugger;
     }

    buttonGrp(year, value, e) {

        var elem = document.getElementById('tb_' + year);
        var checked = elem.classList.contains('selected');
        this.storeYear.set(year, !checked);

        if (checked) {
            elem.className = elem.className.replace('selected', '').trim();
        }
        else {
            elem.className += ' selected';
        }

        if (e.shiftKey && this.lastSel != null && year !== this.lastSel)
            this.shiftSelection(e, year);

        this.lastSel = year;

        return;
    }

    /** 
     * Selecting button while pressing shift key.
     */
    shiftSelection(e, year) {

        if (!this.storeYear.get(this.lastSel))
            return;

        if (this.storeYear.get(year)) {
            var start = year;
            if (year > this.lastSel) {
                start = this.lastSel
                this.lastSel = year;
            }
            for (let i = start; i <= this.lastSel; i++) {
                this.storeYear.set(i, true);
                var elem = document.getElementById('tb_' + i);
                if (!elem.classList.contains('selected'))
                    elem.className += ' selected';
            }
        }
    }

    //reactLifecycle
    componentDidMount() {
        this.splitField();
    }

    //split and save the feildname into array
    splitField() {
        var str = this.props.fieldName;
        var res = str.split(',');
        var i = 0;
        while (res[i] !== undefined) {
            this.selectFeild(Number(res[i]));
            i++;
        }
    }

    //select feildname
    selectFeild(yr) {
        var elem = document.getElementById('tb_' + yr);
        if (!elem.classList.contains('selected')) {
            elem.className += ' selected';
            this.storeYear.set(yr, true);
        }
    }

    clearSelection() {

        // Applying toggle-btn to all selected year removing selected
        for (let i = this.props.startYear; i <= this.props.endYear; i++) {
            var elem = document.getElementById('tb_' + i);
            elem.className = elem.className.replace('selected', '').trim();
        }

        this.lastSel = null;
        this.storeYear.clear();
        this.mouseDrag = [];
    }

    selectAll() {

        // Select all button which are store in storeYear Map()
        for (let i = this.props.startYear; i <= this.props.endYear; i++) {
            var elem = document.getElementById('tb_' + i);
            if (!elem.classList.contains('selected'))
                elem.className += ' selected';
            this.storeYear.set(i, true);
        }

        this.lastSel = null;
        this.mouseDrag = [];
    }

    Submit() {
        this.submit = [];
        for (var year of this.storeYear) {
            // checking for t. its a bug 
            if (year[1] === true && (year[0][0] !== 't')) {
                this.submit.push(year[0]);
            }
        }
        document.getElementById('txtYear').value = '';
        document.getElementById('txtYear').value = this.submit;
    }

    onMouseDown = (e) => {
        this.startSelectX = e.clientX;
        this.startSelectY = e.clientY;
        this.mouseDownValue = true;
        return true;
    };

    onMouseUp = (e) => {
        this.mouseDownValue = false;
        this.mouseDrag = [];
        return true;
    };

    onMouseMove = (e) => {
        /** mouse drag from Top-Left corner to Botton-right */
        if (this.mouseDownValue === true) {
            if (this.startSelectX <= e.clientX) {
                for (let x = this.startSelectX; x <= e.clientX;) {
                    for (let y = this.startSelectY; y <= e.clientY;) {
                        var elemID = document.elementFromPoint(x, y).id;
                        if (elemID && elemID !== "toggleGrp") {
                            this.mouseDrag.push(elemID);
                            this.storeYear.set(elemID, true);
                        }
                        y += 10;
                    }
                    x += 10;
                }
            }

            /** mouse drag Botton-right to Top-Left  */
            if (e.clientX <= this.startSelectX) {
                for (let x = e.clientX; x <= this.startSelectX;) {
                    for (let y = e.clientY; y <= this.startSelectY;) {
                        elemID = document.elementFromPoint(x, y).id;
                        if (elemID !== "toggleGrp") {
                            this.mouseDrag.push(elemID);
                            this.storeYear.set(elemID, true);
                        }
                        y += 10;
                    }
                    x += 10;
                }
            }


            for (let i of this.mouseDrag) {
                var elem = document.getElementById(i)
                if (!elem.classList.contains('selected')) {
                    elem.className += ' selected';
                }
            }
        }

    };

    render() {
        /**
         * initializing selectedList to store buttonGroup 
         */
        var selectedList = [];
        for (var i = this.props.startYear; i <= this.props.endYear; i++) {
            selectedList.push(<ToggleButton
                index={i}
                key={i}
                onChange={this.buttonGrp}
            />);
        }

        return (
            <div>
                <div
                    id="toggleGrp"
                    onMouseDown={this.onMouseDown}
                    onMouseUp={this.onMouseUp}
                    onMouseMove={this.onMouseMove}
                >
                    {selectedList}
                </div>
                <div>
                    <a href="#" onClick={() => this.selectAll()}>Select All Seasons</a>&nbsp;&nbsp;|&nbsp;&nbsp;
                    <a href="#" onClick={() => this.clearSelection()}>Clear Selection</a> &nbsp;&nbsp;|&nbsp;&nbsp;
                    <a href="#" onClick={() => this.Submit()}>Submit</a>
                </div>
            </div>
        );
    }
};

class ToggleButton extends React.Component {

    constructor(props) {
        super(props);

        this.updateStatus = this.updateStatus.bind(this);
        this.ButtonGrp = this.ButtonGrp.bind(this);
        this.state = { isToggleOn: this.props.storeYearValue, selectedYear: null, initialSate: 'toggle-btn' }
    };

    /**
     * updateStatus to change the toggle status and color
     */
    updateStatus(e) {

        this.ButtonGrp(e);
        this.setState(prevState => ({ isToggleOn: !prevState.isToggleOn }));
        return true
    }
    /**
     * Called from updateStatus()
     */
    ButtonGrp(e) {
        this.props.onChange(this.props.index, this.state.isToggleOn, e);
    }

    render() {

        return (
            <div>
                check
            </div>
        );
    }
};

export default Tab;