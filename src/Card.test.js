import React from 'react';
import ReactDOM from 'react-dom';
import renderer from 'react-test-renderer';

import Card from './Card';

describe('<Card />', () =>{
  it('Renders a card', () => {
    const div = document.createElement('div');
    ReactDOM.render(<Card title='TITLE' content='HELLO' />, div);
    
    ReactDOM.unmountComponentAtNode(div);
  })

  it('Renders card UI as expected', () => {
    const tree = renderer.create(<Card title='TITLE' content='HELLO'/>).toJSON();
    expect(tree).toMatchSnapshot();
  });

//   it('renders this UI as expected', () => {
//     // Render the component, as JSON
//     const tree = renderer.create(<Card />).toJSON();
//     // Check whether it matches the previous snapshot
//     // Stored in __snapshots__/App.test.js.snap
//     expect(tree).toMatchSnapshot(); 
// });

})
