/*import React from 'react';
import ReactDOM from 'react-dom';

//import App from './App';

// import YearList from '.index';
import ToggleButton from './ToggleButton';
import ToggleButtonGroup from './ToggleButtonGroup';

import renderer from 'react-test-renderer';
import { shallow } from 'enzyme';

/**
 * ToggleButton

it('Testing index', () => {
    const div = document.createElement('div');
    ReactDOM.render(<ToggleButton />, div);
});

test('Testing ToggleButton - updateStatus', () => {

    const onAnchorClick = jest.fn();
    onAnchorClick('3000');

    const component = renderer.create(
        <ToggleButton onChange={onAnchorClick} />
    );

    /**
     * updateStatusTree
     
    let updateStatusTree = component.toJSON();
    expect(updateStatusTree).toMatchSnapshot();
    updateStatusTree.props.updateStatus;
    expect(updateStatusTree).toMatchSnapshot();
    expect(onAnchorClick).toBeCalled();

    /**
     * ButtonGrp
     
    let ButtonGrpTree = component.toJSON();
    expect(ButtonGrpTree).toMatchSnapshot();
    ButtonGrpTree.props.ButtonGrp;
    expect(ButtonGrpTree).toMatchSnapshot();
    expect(onAnchorClick).toBeCalled();
});

/**
 * ToggleButtonGroup

it('ToggleButtonGroup', () => {
    const div = document.createElement('div');
    ReactDOM.render(<ToggleButtonGroup />, div);
});

test('Testing ToggleButtonGroup', () => {

    const onAnchorClick = jest.fn();
    onAnchorClick('3000');

    const component = renderer.create(
        <ToggleButton onChange={onAnchorClick} />
    );

    /**
     * updateStatusTree
     
    let ButtonGrpTree = component.toJSON();
    expect(ButtonGrpTree).toMatchSnapshot();

    ButtonGrpTree.props.ButtonGrp;
    expect(ButtonGrpTree).toMatchSnapshot();
    expect(onAnchorClick).toBeCalled();

    /**
     * ButtonGrp
     
    let storeYearTree = component.toJSON();
    expect(storeYearTree).toMatchSnapshot();

    storeYearTree.props.storeYear;
    expect(storeYearTree).toMatchSnapshot();
    expect(onAnchorClick).toBeCalled();
});

*/