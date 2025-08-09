import { FiltersWrapper } from './FiltersWrapper.tsx'
import { FiltersField } from './FiltersField.tsx'
import { FiltersInput } from './FiltersInput.tsx'
import type { ApiFilters } from '../../common/types.ts'

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
