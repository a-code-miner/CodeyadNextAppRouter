import React from 'react';

export const metadata = {
	title: "Cars list",
	description: "This is a very big and popular computer store.",
};

function CarsLayout({children}) {
	return (
		<div>
			<h1>Cars Layout</h1>
			{children}
		</div>
	);
}

export default CarsLayout;