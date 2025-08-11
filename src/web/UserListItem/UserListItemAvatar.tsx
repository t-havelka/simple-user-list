import styled from 'styled-components'

export const UserListItemAvatar = styled.img`
	width: 56px;
	height: 56px;
	border-radius: 50%;
	object-fit: cover;
	border: 3px solid #e2e8f0;
	box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
	transition: all 0.2s ease;
	
	&:hover {
		border-color: #cbd5e1;
		transform: scale(1.05);
	}
`
