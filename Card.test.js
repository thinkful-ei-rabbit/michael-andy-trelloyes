import React from 'react';
import ReactDOM from 'react-dom';
import Card from './Card';
import renderer from 'react-test-renderer';

describe ('Lists Component tests', () => {

it('renders the UI as expected', () => {
    const tree = renderer
      .create(<Card title={'test'} content={'lorem ipsum'}/>)
      .toJSON();
    expect(tree).toMatchSnapshot();  
    });

it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<Card />, div);
    ReactDOM.unmountComponentAtNode(div);
  });

});