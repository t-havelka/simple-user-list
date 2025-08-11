import { FiltersWrapper } from './FiltersWrapper'
import { FiltersField } from './FiltersField'
import { FiltersInput } from './FiltersInput'
import type { ApiFilters } from '../lib/types'

interface FiltersProps {
	filters: ApiFilters,
	setFilters: (filters: ApiFilters) => void
}

export const Filters = ({ filters, setFilters }: FiltersProps) => {
	const { name, email } = filters

	const handleChange = (key: keyof ApiFilters) => (event: React.ChangeEvent<HTMLInputElement>) => {
		const value = event.target.value
		setFilters({ ...filters, [key]: value || null })
	}

	return (
		<FiltersWrapper>
			<FiltersField>
				<span>Name</span>
				<FiltersInput
					placeholder='Filter by name'
					value={name ?? ''}
					onChange={handleChange('name')}
				/>
			</FiltersField>
			<FiltersField>
				<span>Email</span>
				<FiltersInput
					placeholder='Filter by email'
					value={email ?? ''}
					onChange={handleChange('email')}
				/>
			</FiltersField>
		</FiltersWrapper>
	)
}
