import React from "react";
import From from "./From";
import To from "./To";
import { useState } from "react";

const Main = () => {
	const [currencyRate1, setCurrencyRate1] = useState(0);
	const [currencyRate2, setCurrencyRate2] = useState(0);
	const [amount1, setAmount1] = useState(0);
	const [amount2, setAmount2] = useState(0);

	const handleDownBtnClick = () => {
		console.log(currencyRate1);
		if (currencyRate1 && currencyRate2) {
			if (isNaN(amount1)) {
				window.alert(`this is not a number`);
			} else {
				const result = Number((amount1 * currencyRate1) / currencyRate2);
				setAmount2(result.toFixed(2));
			}
		} else {
			window.alert(`Please choose both curencies`);
		}
	};
	const handleUpBtnClick = () => {
		if (currencyRate1 && currencyRate2) {
			if (isNaN(amount2)) {
				window.alert(`this is not a number`);
			} else {
				const result = Number((amount2 * currencyRate2) / currencyRate1);
				setAmount1(result.toFixed(2));
			}
		} else {
			window.alert(`Please choose both curencies`);
		}
	};

	return (
		<main>
			<From
				setCurrencyRate1={setCurrencyRate1}
				setAmount1={setAmount1}
				amount1={amount1}
			/>
			<div className="btn-container">
				<button onClick={handleDownBtnClick}>⬇</button>
				<button onClick={handleUpBtnClick}>⬆</button>
			</div>
			<To
				setCurrencyRate2={setCurrencyRate2}
				setAmount2={setAmount2}
				amount2={amount2}
			/>
		</main>
	);
};

export default Main;
