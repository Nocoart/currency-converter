import React from "react";
import Option from "./Option";
import { rates } from "../data/data.js";
import { useState } from "react";

const From = ({ setCurrencyRate1, setAmount1, amount1 }) => {
	const options = Object.keys(rates);

	const [stateCurrency, setStateCurrency] = useState("");

	const handleCurrencyChange = (event) => {
		const value = event.target.value;

		setCurrencyRate1(rates[value]);
	};

	const handleAmountChange = (event) => {
		const value = event.target.value;
		setAmount1(value);
	};

	return (
		<div>
			<input type="text" value={amount1} onChange={handleAmountChange} />
			<select
				name="currency"
				id="currency-select"
				onChange={handleCurrencyChange}
			>
				{options.map((key, index) => {
					return <Option key={index} name={key} />;
				})}
			</select>
		</div>
	);
};

export default From;
