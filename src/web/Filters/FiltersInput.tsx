import styled from 'styled-components'

export const FiltersInput = styled.input`
	padding: 12px 16px;
	border: 2px solid #e5e7eb;
	border-radius: 8px;
	min-width: 240px;
	font-size: 14px;
	background: #f9fafb;
	transition: all 0.2s ease;
	color: #374151;
	
	&::placeholder {
		color: #9ca3af;
	}
	
	&:focus {
		outline: none;
		border-color: #3b82f6;
		background: white;
		box-shadow: 0 0 0 3px rgba(59, 130, 246, 0.1);
	}
	
	&:hover {
		border-color: #d1d5db;
		background: white;
	}
`
