var helloWorld = React.createClass({
	displayName: "helloWorld",

	render: function () {
		return React.createElement(
			"div",
			null,
			React.createElement(
				"h1",
				null,
				"Hello World"
			),
			React.createElement(
				"p",
				null,
				"This is text helloworld"
			)
		);
	}
});

React.render(React.createElement("helloWorld", null), document.body);
//# sourceMappingURL=react-sripts.js.map
