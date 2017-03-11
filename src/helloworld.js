var helloWorld = React.createClass({
	render: function(){
		return(
			<div>
			<h1>Hello World</h1>
			<p>This is text helloworld</p>
			</div>
		);
	}
});

React.render(<helloWorld/>, document.body);