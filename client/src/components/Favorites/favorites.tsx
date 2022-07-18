import FavoriteIcon from "../../assets/favorite_unfilled.svg";
import FilledFavoriteIcon from "../../assets/favorite_filled.svg";
import { useState } from "react";
import "./favorites.css";

const SERVER_URL = process.env.REACT_APP_SERVER_URL;

interface FavoriteProps {
	user: string;
	r_id: number;
	b_id: number;
}

const Favorites = (props: FavoriteProps) => {
	const [isFavorite, setFavorite] = useState(false);

	async function addFavorite() {
		await fetch(`${SERVER_URL}/users/${props.user}/favorites`, {
			headers: {
				'Content-Type': 'application/json',
				'Accept': 'application/json'
			  },
			  method: "POST",
			  body: JSON.stringify({
				r_id: props.r_id,
				b_id: props.b_id
			  })
		})
	}

	async function removeFavorite() {
		console.log("removed")
	}

	return (
		<button
			className="FavoriteButton"
			onClick={() => {
				setFavorite(!isFavorite);
				isFavorite ? removeFavorite() : addFavorite();
			}}>
			<img src={isFavorite ? FilledFavoriteIcon : FavoriteIcon} />
		</button>
	)
}

export default Favorites;

