'use client';
import React, {useState} from 'react';

function CarsTemplate({children}) {
	const [input, setInput] = useState('Hello');

	return (
		<div>
			<h1>{input}</h1>
			<label htmlFor="input-id">Your Input:</label>
			<input
				id="input-id"
				value={input}
				onChange={(e) => {
					setInput(e.target.value);
				}}
			/>
			{children}
		</div>
	);
}

export default CarsTemplate;