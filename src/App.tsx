import React, { useState } from "react";

import Button from "./components/Button/Button";
import Display from "./components/Display/Display";
import History from "./components/History/History";

import keys from "./assets/keys.json";

import { equalsCalc, percentCalc } from "./utils/calcUtils";

import * as Styled from "./__styles__/App.styles";

const App = () => {
	const [prevNumber, setPrevNumber] = useState("");
	const [currentNumber, setCurrentNumber] = useState(0);
	const [sign, setSign] = useState(null);
	const [history, setHistory] = useState([]);

	const resolveHandler = (buttonValue: string | number) => {
		switch (buttonValue) {
			case ".":
				return commaHandler;

			case "=":
				return equalsClickHandler;

			case "+":
			case "-":
			case "*":
			case "/":
				return signClickHandler;

			case "%":
				return percentClickHandler;

			case "+-":
				return invertClickHandler;

			case "C":
				return resetClickHandler;

			default:
				return numberHandler;
		}
	};

	const resetClickHandler = () => {
		setPrevNumber("");
		setCurrentNumber(0);
		setSign(null);
	};

	const numberHandler = (e: any) => {
		const value = e?.target?.innerHTML || e?.current?.innerHTML;

		setCurrentNumber(
			currentNumber === 0 && value === "0"
				? "0"
				: currentNumber % 1 === 0
				? Number(currentNumber + value)
				: currentNumber + value
		);
	};

	const commaHandler = (e: any) => {
		const value = e?.target?.innerHTML || e?.current?.innerHTML;

		setCurrentNumber(
			!currentNumber.toString().includes(".")
				? currentNumber + value
				: currentNumber
		);
	};

	const signClickHandler = (e: any) => {
		const value = e?.target?.innerHTML || e?.current?.innerHTML;

		setSign(value);
		setPrevNumber(`${currentNumber} ${value}`);
		setCurrentNumber(0);
	};

	const invertClickHandler = () => {
		setCurrentNumber(currentNumber * -1);
	};

	const percentClickHandler = () => {
		setCurrentNumber(percentCalc(currentNumber));
	};

	const equalsClickHandler = () => {
		const result = equalsCalc(prevNumber, currentNumber, sign);
		if (result) {
			setCurrentNumber(result);
			setPrevNumber(`${prevNumber} ${currentNumber}`);
			setSign(null);
			setHistory([
				...history,
				{ operation: `${prevNumber} ${currentNumber}`, result },
			] as any);
		}
	};

	const historyResultHandler = (value: number) => {
		setCurrentNumber(value);
	};

	return (
		<Styled.Root>
			<Display currentNumber={currentNumber} prevNumber={prevNumber} />
			<Styled.ButtonsContainer>
				{keys.map((item, i) => (
					<Button
						key={i}
						handlerButtonClick={resolveHandler(item.value)}
						{...item}
					/>
				))}
			</Styled.ButtonsContainer>
			<History data={history} onResultClick={historyResultHandler} />
		</Styled.Root>
	);
};

export default App;
