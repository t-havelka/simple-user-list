import styled from 'styled-components'

export const Button = styled.button`
	width: 120px;
	height: 40px;
	align-self: center;
	background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
	color: white;
	border: none;
	border-radius: 8px;
	font-size: 14px;
	font-weight: 600;
	cursor: pointer;
	transition: all 0.2s ease;
	box-shadow: 0 4px 15px rgba(102, 126, 234, 0.3);
	
	&:hover {
		transform: translateY(-2px);
		box-shadow: 0 6px 20px rgba(102, 126, 234, 0.4);
	}
	
	&:active {
		transform: translateY(0);
		box-shadow: 0 2px 10px rgba(102, 126, 234, 0.3);
	}
	
	&:focus {
		outline: none;
		box-shadow: 0 0 0 3px rgba(102, 126, 234, 0.3);
	}
`
