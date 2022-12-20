import React from 'react';
import SnakeGame from '../components/snake_game';
import '../assets/game_modal.css';
import { useState } from 'react';
function GameModal({ gameName, setGameName }) {
	const [count, setCount] = useState(0);
	const resetGamehandler = () => {
		setCount(count + 1);
	};
	const contentMap = {
		Snake: <SnakeGame key={count}></SnakeGame>,
	};
	const exitGameHandler = () => {
		setGameName('');
	};
	return (
		<div
			className='modal fade'
			id='exampleModal'
			data-bs-backdrop='static'
			data-bs-keyboard='true'
			tabIndex='-1'
			aria-labelledby='exampleModalLabel'
			aria-hidden='true'>
			<div className='modal-dialog modal-dialog-centered'>
				<div className='modal-content bg-transparent'>
					<div className='modal-body p-0'>{contentMap[gameName]}</div>
					<div
						className='d-flex justify-content-around'
						style={{ width: '400px' }}>
						<div className='pushableButton'>
							<span className='shadow'></span>
							<span className='edge'></span>
							<span onClick={resetGamehandler} className='front'>
								Reset
							</span>
						</div>
						<div className='pushableButton' data-bs-dismiss='modal'>
							<span className='shadow'></span>
							<span className='edge'></span>
							<span onClick={exitGameHandler} className='front'>
								Close
							</span>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

export default GameModal;
