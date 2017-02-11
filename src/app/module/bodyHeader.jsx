const React = require('react');

const Header = React.createClass({
	render: function() {
		return (
			<div className = 'body_header'>
				<div className = 'title_container'>
					<img className = 'title_img' src = {'../image/bodyHeader/title.png'} />
				</div>
			</div>
		);
	}
});

module.exports = Header;