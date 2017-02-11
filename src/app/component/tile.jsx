const React = require('react');
const MsgBox = require('../component/msgBox.jsx');

const Tile = React.createClass({
	getInitialState: function() {
		return {
			hover: false,
			click: false
		};
	},

	mouseOver: function() {
		this.setState({hover: true});
	},

	mouseOut: function() {
		this.setState({hover: false});
	},

	showMsgBox: function() {
		this.setState({click: true});
	},

	hideMsgBox: function() {
		this.setState({click: false});
	},

	render: function() {
		var item = this.props.item || {};
		var msgBox = (
			<div className = 'msg_box_container'>
				<div className = 'msg_box_placeholder' onClick = {this.hideMsgBox} />
				<MsgBox type = {item.type}/>
			</div>
		);

		return (
			<div className = 'tile'>
				<div className = 'tile_container' onMouseOver = {this.mouseOver} onMouseOut = {this.mouseOut} onClick = {this.showMsgBox}>
					<img className = 'tile_img' src = {'../image/board/tile/' + item.image + '.png'} />
					<div className = 'tile_text_container'>
						<span className = 'tile_text'>{item.text}</span>
					</div>
				</div>
				{this.state.click ? msgBox : null}
			</div>
		);
	}
});

module.exports = Tile;