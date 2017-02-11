const React = require('react');
const {Parallax} = require('react-parallax');

const Header = React.createClass({
	render: function() {
		return (
			<div className = 'header'>
				<Parallax bgImage = '../image/header/header.jpg' strength={400}>
					<img className = 'placeholder_img' src = {'../image/header/placeholder.png'} />
				</Parallax>
			</div>
		);
	}
});

module.exports = Header;