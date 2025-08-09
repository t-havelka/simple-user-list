import { API_URL } from './constants.ts'
import type { ApiFilters } from '../../common/types.ts'

export const buildApiUrl = (filters: ApiFilters) => {
	const queryString = Object.entries(filters)
		.filter(([, value]) => value)
		.map(([key, value]) => `${key}=${value}`)
		.join('&')

	return `${API_URL}${queryString ? `?${queryString}` : ''}`
}
