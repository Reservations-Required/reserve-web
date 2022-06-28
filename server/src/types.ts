export type UserType = {
	u_id: string;
	name: string;
	authProvider: string;
	email: string;
	my_reservations: ReservationType[];
	my_favorites: [];
	// options for status: student, staff, admin, restricted
	status: string;
}

export type ReservationType = {
	u_id: string;
	date: string;
	time_start: string;
	time_end: string;
}

export type RoomType = {
	r_id: number;
	b_id: number;
	room_number: string;
	description: string;
	amenities: [];
	reservations: ReservationType[];
}

export type RoomIDType = {
	r_id: number;
	b_id: number;
}

export type BuildingType = {
	b_id: number;
	description: string;
	location: string;
	name: string;
	short: string;
	rooms: string[];
}
