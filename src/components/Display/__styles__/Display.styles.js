import styled from "@xstyled/styled-components";

export const Root = styled.div`
	position: relative;
	height: 100px;
	width: 100%;
	margin-bottom: 1rem;
	padding: 0 10px;
	background-color: #247ba0;
	border-radius: 10px;
	display: flex;
	align-items: center;
	justify-content: flex-end;
	box-sizing: border-box;
`;

export const PreviousNumber = styled.div`
	position: absolute;
	top: 5;
	right: 10;
	font-size: 0.8rem;
`;

export const CurrentNumber = styled.div`
	font-size: 3.5rem;
	font-weight: bold;
	margin-top: 0.5rem;
`;
