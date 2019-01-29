import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./Profile.css";
import axios from "axios";
import OfferCard from "../components/OfferCard";

class Profile extends Component {
	state = {
		offers: [],
		id: this.props.company._id,
		companyDetails: []
	};
	// getCompany = () => {
	// 	axios
	// 		.get("http://localhost:3000/get_company", {
	// 			params: { id: this.state.id }
	// 		})
	// 		.then(response => {
	// 			// console.log("company", response.data);
	// 			this.setState({ company: response.data.company });
	// 		});
	// };

	getOffers = () => {
		// console.log(this.state.id);
		axios
			.get("http://localhost:3000/get_offer_company", {
				params: { id: this.state.id }
			})
			.then(response => {
				// console.log("tat", response.data);
				this.setState({
					offers: response.data.offers,
					companyDetails: response.data.company
				});
				// console.log("tat", this.state);
				// this.getCompany();
			});
	};

	renderOffers = () => {
		const offerCardElements = this.state.offers.map(offer => (
			<OfferCard key={offer._id} offer={offer} />
		));
		return offerCardElements;
	};

	render() {
		// console.log("tot", this.state.companyDetails.companyLogo);
		return (
			<div className="container">
				<h2>Mon profil</h2>
				<div className="main-block">
					<div className="entête">
						<img src={this.state.companyDetails.companyLogo} />
					</div>

					<div className="my-offers">
						<div className="my-offers-left">
							<h3>Mes offres publiées :</h3>
							<h3>{this.state.offers.length}</h3>
						</div>
						<div className="my-offers-right">
							<h3>Créer une nouvelle offre</h3>
							<Link
								className="button-left"
								to={{
									pathname: "/publish_offer",
									companyDetails: this.state.companyDetails
								}}
							>
								<button>+</button>
							</Link>
						</div>
					</div>
					<div>{this.renderOffers()}</div>
				</div>
			</div>
		);
	}

	componentDidMount() {
		this.getOffers();
		// console.log(this.state);
	}
}

export default Profile;
