import React from 'react';

const GameCard = ({ setGameName }) => {
	const setGameNameHandler = () => {
		setGameName('Snake');
	};
	return (
		<div
			type='button'
			id='centerModalOpenButton'
			data-bs-toggle='modal'
			data-bs-target='#exampleModal'
			onClick={setGameNameHandler}
			className='card'>
			<div className='card-body'>
				<h5 className='card-title'>Snake</h5>
				<p className='card-text'>A classic snake game</p>
			</div>
		</div>
	);
};

export default GameCard;
