import React, {Component} from 'react';

class D20Button extends Component {
	constructor() {
		super();
		this.state = {D20:0};
	}

	handleClick(event){
		event.preventDefault();
		fetch('http://localhost:8080/api/d20')
		.then(result => {
			return result.json();
		}).then(data => {
			this.setState({D20: data.roll});
		})
	}

	render() {
		return (
			<div>
			  <button onClick= { this.handleClick.bind(this) }>D20</button>
			  <h1>Roll: {this.state.D20}</h1>
			</div>
		)
	}
}

export default D20Button;

