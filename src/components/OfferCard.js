import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./OfferCard.css";

class OfferCard extends Component {
	state = {
		bookedPlaces: this.props.offer.listTesters.length,
		totalPlaces:
			this.props.offer.availabilities + this.props.offer.listTesters.length,
		offer: this.props.offer,
		industries: ""
	};

	formattedDate(d = new Date(this.props.offer.deadlineTest)) {
		let month = String(d.getMonth() + 1);
		let day = String(d.getDate());
		const year = String(d.getFullYear());

		if (month.length < 2) month = "0" + month;
		if (day.length < 2) day = "0" + day;

		return `${day}/${month}/${year}`;
	}
	renderIndustries = () => {
		const criteres = [];
		if (this.state.offer.industry) {
			for (let i = 0; i < this.state.offer.industry.length; i++) {
				criteres.push(this.state.offer.industry[i].name);
			}
			const industries = criteres.join(" / ");
			// console.log(industries);
			return industries;
		}
	};
	renderPicture = () => {
		// if (this.props.offer.pictures.length > 0) {
		// 	return (
		// 		<img
		// 			src={this.props.offer.pictures[0].secure_url}
		// 			alt="preview"
		// 			className="offer-img"
		// 		/>
		// 	);
		// }
		return <div className="offer-img" />;
	};
	render() {
		// console.log("tot", this.props.offer.industry);
		// console.log("la", this.state.offer.industry);
		return (
			<Link
				className="offer-card"
				to={`/offer/${this.props.offer._id}`}
				params={{ offer: this.props.offer._id }}
			>
				{/* Partie gauche (image) */}
				{this.renderPicture()}
				{/* Partie droite (Titre et prix) */}
				<div className="offer-body">
					<div className="offer-body-left">
						<h4 className="offer-title">{this.props.offer.offerName}</h4>
						<p>Type de test : </p>
						{this.props.offer.typeOffer}
						<p>Catégories : </p>
						{this.renderIndustries()}
					</div>
					<div className="offer-body-right">
						<div className="offer-deadlineTest">
							<p>Date du test : </p>
							{this.formattedDate()}
						</div>
						<div className="offer-availabilities">
							<p>Nombre de participants : </p>
							{this.state.bookedPlaces} / {this.state.totalPlaces}
						</div>
					</div>
				</div>
			</Link>
		);
	}
}

export default OfferCard;
