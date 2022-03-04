import React from 'react';

export default function Button({ alt, form, disabled, onClick, children }) {
	return (
		<div className='ButtonBack' alt={alt} form={form} disabled={disabled}>
			{children}
			<button className='ButtonFront' alt={alt} onClick={onClick} disabled={disabled}>
				{children}
			</button>
		</div>
	);
}
