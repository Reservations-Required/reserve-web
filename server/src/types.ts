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
	start: string;
	end: string;
}

export type RoomType = {
	r_id: number;
	b_id: number;
	room_number: string;
	description: string;
	image: string;
	amenities: string[];
	reservations: ReservationType[];
	accessible: string;
	capacity: number;
	food: boolean;
	locked: boolean;
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
	image: string;
	short: string;
	rooms: string[];
}
