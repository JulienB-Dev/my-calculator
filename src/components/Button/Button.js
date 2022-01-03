import React, { useRef } from "react";

import useKeyUp from "../../hooks/useKeyUp";

import * as Styled from "./__styles__/Button.styles";

const Button = ({ label, value, type, bind, handlerButtonClick }) => {
	const button = useRef();
	useKeyUp(bind, () => handlerButtonClick(button));
	return (
		<Styled.Root
			ref={button}
			value={value}
			type={type}
			onClick={handlerButtonClick}
		>
			{label}
		</Styled.Root>
	);
};

export default Button;
