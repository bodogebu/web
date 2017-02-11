const React = require('react');
const Tile = require('../component/tile.jsx');

const Board = React.createClass({
	render: function() {
		var tileList = this.props.tileList || [];
		var domList = [];

		tileList.forEach(function(tile) {
			domList.push(
				<div className = {'pos_' + tile.position + ' dir_' + tile.direction} >
					<Tile item={tile} />
				</div>
			);
		});

		return (
			<div className = "board">
				<div className = "board_container">
					{domList}
				</div>
			</div>
		);
	}
});

module.exports = Board;