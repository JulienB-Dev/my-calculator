import styled from "@xstyled/styled-components";

export const Root = styled.div`
	background-color: #247ba0;
	border-radius: 10px;
	cursor: pointer;
	display: flex;
	align-items: center;
	font-size: 0.9rem;
	padding: 0.5rem;
`;

export const Arrow = styled.img`
	transform: ${({ isOpen }) => (isOpen ? "rotate(180deg)" : "rotate(90deg)")};
`;

export const Table = styled.table`
	width: 100%;
	text-align: center;
	background-color: #006494;
	border-radius: 10px;
	margin-top: 0.5rem;

	.result {
		transition: all 0.5s ease-out;
		&:hover {
			background-color: #007db8;
			cursor: pointer;
		}
	}
`;
