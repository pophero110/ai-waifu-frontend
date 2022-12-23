import React from 'react';
import '../assets/game_card.css';
const GameCard = ({ gameName, setGameName, metaData }) => {
	const setGameNameHandler = () => {
		setGameName(gameName);
	};
	return (
		<div
			type='button'
			id='centerModalOpenButton'
			data-bs-toggle='modal'
			data-bs-target='#exampleModal'
			onClick={setGameNameHandler}
			className='card me-3'>
			<div className='card-body'>
				<h5 className='card-title'>{gameName}</h5>
				<p className='card-text'>{metaData}</p>
			</div>
		</div>
	);
};

export default GameCard;
