import { auth } from './firebase';

export const authMiddleware = (req, res, next) => {
	const header = req.header.authorization;
	if (!header) {
		return res.send({ message: 'No token' }).status(401);
	}

	if (header && header.split(' ')[0] !== 'Bearer') {
		res.send({ message: 'Invalid token' }).status(402);
	}

	const token = header.split(' ')[1];
	auth
		.verifyIdToken(token)
		.then(() => next())
		.catch(() => { res.send({ message: 'Could not authorize' }).status(403) });
};