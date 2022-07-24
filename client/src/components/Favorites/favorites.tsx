import FavoriteIcon from "../../assets/favorite_unfilled.svg";
import FilledFavoriteIcon from "../../assets/favorite_filled.svg";
import { useEffect, useState } from "react";
import "./favorites.css";
import { checkFavorite } from "../../firebase/functions";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "../../firebase";

const SERVER_URL = process.env.REACT_APP_SERVER_URL;

interface FavoriteProps {
	r_id: number;
	b_id: number;
}

const Favorites = (props: FavoriteProps) => {
	const [user, loading] = useAuthState(auth);

	const [isFavorite, setFavorite] = useState<boolean>();
	useEffect(() => { 
		checkFavorite(user!.uid, props.r_id, props.b_id).then((value) => setFavorite(value)); 
	}, [isFavorite])


	async function changeFavorite(action: string) {
		await fetch(`${SERVER_URL}/users/${user!.uid}/favorites`, {
			headers: {
				'Content-Type': 'application/json',
				'Accept': 'application/json'
			},
			method: `${action}`,
			body: JSON.stringify({
				r_id: props.r_id,
				b_id: props.b_id
			})
		})
	}

	return (
		<button
			className="FavoriteButton"
			onClick={() => {
				setFavorite(!isFavorite);
				isFavorite ? changeFavorite("DELETE") : changeFavorite("POST");
			}}>
			<img src={isFavorite ? FilledFavoriteIcon : FavoriteIcon} />
		</button>
	)
}

export default Favorites;

