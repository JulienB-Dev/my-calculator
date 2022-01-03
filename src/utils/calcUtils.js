export const percentCalc = (value) => {
	return (value /= Math.pow(100, 1));
};

export const equalsCalc = (value1, value2, sign) => {
	if (sign && value1 && value2) {
		const a = parseFloat(String(value1));
		const b = parseFloat(String(value2));
		const math = () =>
			sign === "+"
				? Math.round((a + b) * 100) / 100
				: sign === "-"
				? Math.round((a - b) * 100) / 100
				: sign === "x"
				? Math.round(a * b * 100) / 100
				: Math.round((a / b) * 100) / 100;

		return math();
	}
};
