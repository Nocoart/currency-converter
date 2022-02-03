import React from "react";
import Option from "./Option";
import { rates } from "../data/data.js";
import { useState } from "react";

const To = ({ setCurrencyRate2, setAmount2, amount2 }) => {
	const options = Object.keys(rates);

	const [stateCurrency, setStateCurrency] = useState("");

	const handleChange = (event) => {
		const value = event.target.value;
		setStateCurrency(value);
		setCurrencyRate2(rates[value]);
	};

	const handleAmountChange = (event) => {
		const value = event.target.value;
		setAmount2(value);
	};

	return (
		<div>
			<input type="text" onChange={handleAmountChange} value={amount2} />
			<select name="currency" id="currency-select" onChange={handleChange}>
				{options.map((key, index) => {
					return <Option key={index} name={key} />;
				})}
			</select>
		</div>
	);
};

export default To;
