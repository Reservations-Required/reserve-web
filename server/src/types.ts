export type UserType = {
	u_id: string;
	name: string;
	authProvider: string;
	email: string;
	my_reservations: ReservationType[];
	my_favorites: RoomIDType[];
	// options for status: student, admin, restricted
	status: string;
}

export type ReservationType = {
	u_id: string;
	r_id: number;
	start: Time;
	end: Time;
}

export type RoomType = {
	b_id: number;
	room_number: string;
	description: string;
	image: string;
	amenities: string[];
	accessible: string;
	capacity: number;
	food: boolean;
	locked: boolean;
	open: Time | null;
	closed: Time | null;
}

export type RoomIDType = {
	r_id: number;
	b_id: number;
}

export type BuildingType = {
	description: string;
	location: string;
	name: string;
	image: string;
	short: string;
	rooms: RoomIDType[];
}

export type Time = {
	year: number;
	month: number;
	day: number;
	hour: number;
	minute: number;
}