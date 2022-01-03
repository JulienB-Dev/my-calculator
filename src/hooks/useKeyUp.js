import { useEffect } from "react";

const useKeyUp = (givenKey, action) => {
	useEffect(() => {
		const onKeyUp = (event) => {
			if (event.key === givenKey) action();
		};

		window.addEventListener("keyup", onKeyUp);

		return () => window.removeEventListener("keyup", onKeyUp);
	}, [givenKey, action]);
};

export default useKeyUp;
