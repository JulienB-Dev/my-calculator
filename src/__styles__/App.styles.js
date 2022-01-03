import styled from "@xstyled/styled-components";

export const Root = styled.div`
	margin: 0 auto;
	max-width: 22rem;
	height: 520px;
	padding: 1rem;
	border-radius: 1rem;
`;

export const ButtonsContainer = styled.div`
	display: grid;
	grid-template-columns: repeat(4, 1fr);
	grid-template-rows: repeat(5, 1fr);
	grid-gap: 10px;
	background-color: #247ba0;
	padding: 1rem;
	border-radius: 1rem;
	margin-bottom: 1rem;
`;
