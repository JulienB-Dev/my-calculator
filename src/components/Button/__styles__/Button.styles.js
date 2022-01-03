import styled from "@xstyled/styled-components";

const customStyle = {
	action: `
    background-color: #198bcc;

    &:after {
      background-color: #1b99E0;
    }
  `,
	number: `
    background-color: #d5e5e7;
    color: #000;

    &:after {
      background-color: #e8f1f2;
    }

		&:hover {
			filter: brightness(0.9);
		}
  `,
	operator: `
    background-color: #006494;

    &:after {
      background-color: #007db8;
    }
  `,
	validate: `
    grid-column: 3 / 5;
    background-color: #13293d;

    &:after {
      background-color: #1e4162;
    }

		&:hover {
			filter: brightness(1.2);
		}
  `,
};

export const Root = styled.button`
	background-color: #1899d6;
	border: solid transparent;
	border-radius: 16px;
	border-width: 0 0 4px;
	box-sizing: border-box;
	color: #ffffff;
	cursor: pointer;
	font-size: 1.5rem;
	height: 4.5rem;
	padding: 13px 16px;
	text-align: center;
	text-transform: uppercase;
	transform: translateZ(0);
	transition: filter 0.2s;
	vertical-align: middle;
	white-space: nowrap;
	transition: all 0.3s ease-out;

	&:after {
		background-clip: padding-box;
		background-color: #1cb0f6;
		border: solid transparent;
		border-radius: 16px;
		border-width: 0 0 4px;
		bottom: -2px;
		content: "";
		left: 0;
		position: absolute;
		right: 0;
		top: 0;
		z-index: -1;
	}

	&:hover {
		filter: brightness(1.1);
	}

	${({ type }) => customStyle[type]}
`;
