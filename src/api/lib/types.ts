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
