export interface ApiData {
	status: string,
	code: number,
	locale: string,
	seed: null,
	total: number,
	data: {
		uuid: string,
		first_name: string,
		last_name: string,
		email: string,
		avatar: {
			title: string,
			description: string,
			url: string
		}
	}[]
}

export interface User {
	uuid: string
	firstName: string
	lastName: string
	email: string
	avatar: string
}

export interface ApiFilters {
	name?: string
	email?: string
}
