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
	r_id: string;
	date: Date;
	time_start: Time;
	time_end: Time;
}

export type Date = {
	month: number;
	day: number;
	year: number;
}

/* military timing system so we dont have to AM/PM */
export type Time = {
	hour: number;
	minute: number;
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
	rooms: RoomIDType[];
}
