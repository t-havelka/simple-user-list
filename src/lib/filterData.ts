import type { FilterFields, User } from './types'

export const filterData = (data: User[], filters: FilterFields) => {
	const {
		name: filterName,
		email: filterEmail,
	} = filters

	return data.filter(({ firstName, lastName, email }) => {
		const fullName = `${firstName} ${lastName}`
		if (filterName && !fullName.toLowerCase().includes(filterName.toLowerCase())) {
			return false
		}

		return !(filterEmail && !email.toLowerCase().includes(filterEmail.toLowerCase()))
	})
}
