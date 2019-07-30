import React from 'react';
import ReactDOM from 'react-dom';
import renderer from 'react-test-renderer';

import Card from './Card';

describe('<Card />', () =>{
  it('Renders a card', () => {
    const div = document.createElement('div');
    ReactDOM.render(<Card />, div);
    
    ReactDOM.unmountComponentAtNode(div);
  })

  it('Renders card UI as expected', () => {
    const tree = renderer.create(<Card />).toJSON();
    expect(tree).toMatchSnapShot();
  })

})
