import styled from 'styled-components'

export const UserListItemWrapper = styled.div`
	display: flex;
	flex-direction: row;
	gap: 16px;
	padding: 16px;
	background: white;
	border-radius: 10px;
	box-shadow: 0 2px 4px rgba(0, 0, 0, 0.04);
	transition: all 0.2s ease;
	border: 1px solid #e2e8f0;
	
	&:hover {
		transform: translateY(-1px);
		box-shadow: 0 4px 12px rgba(0, 0, 0, 0.08);
		border-color: #cbd5e1;
	}
`
