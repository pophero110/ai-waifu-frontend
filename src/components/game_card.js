import React from 'react';
import { useEffect } from 'react';
import { Card } from 'semantic-ui-react';
const GameCard = ({ setCenterModalContent }) => {
	const openModal = () => {
		document.getElementById('centerModalOpenButton').click();
		setCenterModalContent('SnakeGame');
	};

	return (
		<Card href='#card-example-link-card' onClick={openModal}>
			<Card.Content>
				<Card.Header>Snake Game</Card.Header>
				<Card.Meta>
					<button
						type='button'
						className='d-none'
						id='centerModalOpenButton'
						data-bs-toggle='modal'
						data-bs-target='#exampleModal'></button>
					<span className='date'>Created in 2022</span>
				</Card.Meta>
				<Card.Description>A classic snake game.</Card.Description>
			</Card.Content>
		</Card>
	);
};

export default GameCard;
