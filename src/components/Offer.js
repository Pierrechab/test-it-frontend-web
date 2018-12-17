import React, { Component } from "react";
import axios from "axios";

class Offer extends Component {
	state = {
		offer: {}
	};

	getOffer = () => {
		// console.log(this.state.id);
		axios
			.get(
				`http://localhost:3000/get_offer_listTesters/${
					this.props.match.params.id
				}` // string template
			)
			.then(response => {
				// console.log("tat", response.data);
				this.setState({
					offer: response.data
				});
				console.log("tat", this.state);
				// this.getCompany();
			});
	};

	render() {
		// console.log("pi", this.props.match.params.id);

		return <div>Hello</div>;
	}

	componentDidMount() {
		this.getOffer();
	}
}

export default Offer;
