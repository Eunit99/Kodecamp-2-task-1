import { allGiftCards } from '../data';

function Card() {
	const data = allGiftCards;

	// console.log(data);
	return (
		<>
			{
				data.map((singleCardData, index) => {
					return (
						<div className="card col col-12 col-md-4" style={{ "width": "18rem", "margin": "12px" }} key={index}>
							<div className="card-body">
								<h5 className="card-title title p-3">{singleCardData.title} </h5>
								<p className="card-text text-bold">Currencies</p>
								<p className="center">{singleCardData.currencies.map((currency, index) => {
									return (
										<span className="currency" key={index} style={{"display": "inline"}}>{currency}</span>
									)
								})} </p>
							</div>
						</div>
					)
				})
			}
		</>
	);
}

export default Card;