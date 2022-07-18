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