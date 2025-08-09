import { API_URL } from './constants.ts'

export const fetchData = async () => {
	const data = await fetch(API_URL)
	return data.json()
}
