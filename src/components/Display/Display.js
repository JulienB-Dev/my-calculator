import { useEffect, useRef } from "react";
import ReactTooltip from "react-tooltip";

import * as Styled from "./__styles__/Display.styles";

const Display = ({ currentNumber, prevNumber }) => {
	const display = useRef();

	useEffect(() => {
		display?.current?.addEventListener("click", () =>
			navigator.clipboard.writeText(display?.current?.innerHTML)
		);
	}, [display]);

	return (
		<>
			<Styled.Root>
				{prevNumber && (
					<Styled.PreviousNumber>{prevNumber}</Styled.PreviousNumber>
				)}
				<Styled.CurrentNumber data-tip data-for="display" ref={display}>
					{currentNumber}
				</Styled.CurrentNumber>
			</Styled.Root>

			<ReactTooltip
				id="display"
				delayHide={2000}
				place="right"
				type="success"
				effect="solid"
				event="click"
				globalEventOff="mouseover"
			>
				<span>Copié !</span>
			</ReactTooltip>
		</>
	);
};

export default Display;
