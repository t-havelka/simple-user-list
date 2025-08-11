import type { ApiFilters, User } from './types'

export const filterData = (data: User[], filters: ApiFilters) => {
	const {
		name: filterName,
		email: filterEmail,
	} = filters

	return data.filter(({ firstName, lastName, email }) => {
		const fullName = `${firstName} ${lastName}`
		if (filterName && !fullName.includes(filterName)) {
			return false
		}

		return !(filterEmail && !email.includes(filterEmail))
	})
}
