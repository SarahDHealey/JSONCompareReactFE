'use strict';

console.log('app.js is running');

var app = {
	title: 'JSON Compare',
	subtitle: 'Get the Common Denominator of Multiple JSON Files'
};

var template = React.createElement(
	'div',
	null,
	React.createElement(
		'h1',
		null,
		app.title
	),
	app.subtitle && React.createElement(
		'p',
		null,
		app.subtitle
	)
);

var appRoot = document.getElementById("app");
ReactDOM.render(template, appRoot);
