import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import renderer from 'react-test-renderer';
import { shallow } from 'enzyme';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
});

test('On change of input box - updateState', () => {
  const onAnchorClick = jest.fn();
  onAnchorClick('2000');

  const component = renderer.create(
    <App onChange={onAnchorClick} />
  );

  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();

  //testing updateChangeState
  tree.props.updateChangeState;
  expect(tree).toMatchSnapshot();
  expect(onAnchorClick).toBeCalled();

  //testing updateState
  tree.props.updateState;
  expect(tree).toMatchSnapshot();
  expect(onAnchorClick).toBeCalled();

  tree = component.toJSON();
  expect(tree).toMatchSnapshot();

});