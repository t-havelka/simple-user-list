import { memo, useCallback, type Dispatch, type SetStateAction, type ChangeEvent } from 'react'
import { FiltersWrapper } from './FiltersWrapper'
import { FiltersField } from './FiltersField'
import { FiltersInput } from './FiltersInput'
import type { FilterFields } from '../lib/types'

interface FiltersProps {
	filters: FilterFields,
	setFilters: Dispatch<SetStateAction<FilterFields>>
}

export const Filters = memo(({ filters, setFilters }: FiltersProps) => {
	const { name, email } = filters

	const handleChange = useCallback((key: keyof FilterFields) => (event: ChangeEvent<HTMLInputElement>) => {
		const value = event.target.value
		setFilters(prev => ({ ...prev, [key]: value || null }))
	}, [setFilters])

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
})
