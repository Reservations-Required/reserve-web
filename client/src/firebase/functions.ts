import { User } from "firebase/auth";
import { query, collection, getDocs, where } from "firebase/firestore";
import { db } from "../firebase";

const SERVER_URL = process.env.REACT_APP_SERVER_URL;

export const fetchUserName = async (user: User, setName: React.Dispatch<React.SetStateAction<string>>) => {
	/*
		Error: the first time a user logs in using google, it can't get the user's name.
		Only in subsequent logins can it retreive and display the name.
	*/
	try {
		const q = query(collection(db, "users"), where("u_id", "==", user?.uid));
		const doc = await getDocs(q);
		const data = doc.docs[0].data();
		setName(data.name);
	} catch (err) {
		console.error(err);
		alert("An error occured while fetching user data");
	}
}

export const checkFavorite = async (user: string, r_id: number, b_id: number) => {
	const res = await fetch(`${SERVER_URL}/users/${user}`);
	const userFavorites = (await res.json())["my_favorites"];

	for (const favorite of userFavorites) {
		if (favorite["r_id"] === r_id && favorite["b_id"] == b_id) return true;
	}

	return false;
}