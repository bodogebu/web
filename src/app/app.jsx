const React = require('react');
const ReactDom = require('react-dom')
const Header = require('./module/header.jsx');
const Board = require('./module/board.jsx');
const BodyHeader = require('./module/bodyHeader.jsx');
const tileJson = require('../json/tile.json');

const App = React.createClass({
	render: function() {
		return(
			<div>
				<Header />
				<div className = 'body'>
					<BodyHeader />
					<Board tileList = {tileJson.tileList} />
				</div>
			</div>
		);
	}
});

ReactDom.render(
	<App />,
	document.getElementById('content')
);