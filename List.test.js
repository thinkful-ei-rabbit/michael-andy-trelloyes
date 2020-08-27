import React from 'react';
import ReactDOM from 'react-dom';
import List from './List';
import renderer from 'react-test-renderer';
import STORE from './STORE';

describe ('Lists Component tests', () => {

it('renders the UI as expected', () => {
    const tree = renderer
      .create(<List cards={[STORE.lists]}/>)
      .toJSON();
    expect(tree).toMatchSnapshot();  
    });


it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<List cards={[]} />, div);
    ReactDOM.unmountComponentAtNode(div);
  });
});