import styled from 'styled-components'

export const LoadingSpinner = styled.div`
	text-align: center;
	padding: 40px 20px;
	color: #64748b;
	font-size: 16px;
	font-weight: 500;
	
	&::before {
		content: '';
		display: inline-block;
		width: 20px;
		height: 20px;
		border: 2px solid #e2e8f0;
		border-radius: 50%;
		border-top-color: #3b82f6;
		animation: spin 1s ease-in-out infinite;
		margin-right: 12px;
		vertical-align: middle;
	}
	
	@keyframes spin {
		to { transform: rotate(360deg); }
	}
`
