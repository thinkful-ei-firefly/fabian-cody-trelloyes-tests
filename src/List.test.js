import React from 'react';
import ReactDOM from 'react-dom';
import renderer from 'react-test-renderer';

import List from './List';
import Card from './Card';

describe('<List />', () => {
	it('renders without crashing', () => {
		const cardAux = [{ id: 'a', title: 'First card', content: 'lorem ipsum' }];
		const div = document.createElement('div');
		ReactDOM.render(<List key='1'
              header='Hello'
              cards={cardAux}/>, div);
		ReactDOM.unmountComponentAtNode(div);
	});

	it('Renders card UI as expected', () => {
	    const tree = renderer.create(<List key='1'
              header='Hello'
              cards={[{ id: 'a', title: 'First card', content: 'lorem ipsum' }]}/>).toJSON();
	    expect(tree).toMatchSnapshot();
	  });
});