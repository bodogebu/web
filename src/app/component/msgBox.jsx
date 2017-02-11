const React = require('react');
const msgJson = require('../../json/msg.json');
const _ = require('lodash');

const MsgBox = React.createClass({
	getInitialState: function() {
		return {type: this.props.type};
	},

	createContent: function() {
		console.error('i am here');
		var type = this.state.type;
		var contentDom;
		switch (type) {
			case 'wait':
				contentDom = (<img className = 'placeholder_img' src = {'../image/msgBox/wait.png'} />);
				break;
			default:
				contentDom = this.createTextDom(type);
				break;
		}
		return contentDom;
	},

	createTextDom: function(key) {
		function createText(item) {
			var dom;
			var cls = 'msg_' + item.type;
			var txt = item.text;
			switch (item.type) {
				case 'header':
					dom = (
						<h1 className = {cls}>{txt}</h1>
					);
					break;
				case 'sub':
					dom = (
						<h2 className = {cls}>{txt}</h2>
					);
					break;
				case 'text':
					dom = (
						<p className = {cls}>{txt}</p>
					);
					break;
				case 'link':
					if (item.link) {
						dom = (<a className = {cls} href = {item.link}>{txt}</a>)
					} else {
						dom = (<a className = {cls} href = {txt}>{txt}</a>)
					}
					break;
				default:
					dom = (
						<div className = {'msg_' + item.type}></div>
					);
					break;
			}
			return dom;
		}

		var msgList = _.get(msgJson, 'msgList.' + key) || [];
		console.error(msgList);
		var domList = [];

		msgList.forEach(function(msg) {
			domList.push(createText(msg));
		});

		console.error(domList);
		return domList;
	},

	render: function() {
		return (
			<div className = 'msg_box'>
				{this.createContent()}
			</div>
		);
	}
});

module.exports = MsgBox;