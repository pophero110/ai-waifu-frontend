import React from 'react';
import { useEffect } from 'react';
const TicTacToeGame = () => {
	useEffect(() => {
		const canvas = document.getElementById('ticTacToe');
		const draw = canvas.getContext('2d');
		let isCicle = true;
		let isGameOver = false;
		let gameOverMessage = 'Player 1 won!';
		let boardData = {};

		// 1 4 7
		// 2 5 8
		// 3 6 9
		const winningCombination = [
			[1, 2, 3],
			[4, 5, 6],
			[7, 8, 9],
			[1, 4, 7],
			[2, 5, 8],
			[3, 6, 9],
			[1, 5, 9],
			[3, 5, 7],
		];

		const checkGameOver = () => {
			// all blocks are checked
			if (Object.keys(boardData).length === 9) {
				gameOverMessage = 'Tied Game';
				isGameOver = true;
				return;
			}
			if (Object.keys(boardData).length >= 5) {
				for (const c of winningCombination) {
					isGameOver = c.every((block) => {
						return boardData[block] === 1;
					});

					if (isGameOver) break;
					isGameOver = c.every((block) => {
						return boardData[block] === 2;
					});
					if (isGameOver) {
						gameOverMessage = 'Player 2 won!';
						break;
					}
				}
			}
		};
		const printGameOverMessage = () => {
			draw.fillStyle = 'red';
			draw.fillRect(0, 150, 400, 100);
			draw.fillStyle = 'white';
			draw.font = 'bold 50px serif';
			draw.textAlign = 'center';
			draw.textBaseline = 'middle';
			draw.fillText(gameOverMessage, canvas.width / 2, canvas.height / 2);
		};

		const checkClickedBlock = (e) => {
			// 1 as first player, 2 as second player
			if (isGameOver) return;
			const player = isCicle ? 1 : 2;
			if (e.offsetX < 130) {
				if (e.offsetY < 130) {
					if (boardData[1]) return;
					drawCircleOrCross(130 / 2, 130 / 2);
					boardData[1] = player;
				} else if (e.offsetY > 130 && e.offsetY < 260) {
					if (boardData[2]) return;
					drawCircleOrCross(130 / 2, canvas.height / 2);
					boardData[2] = player;
				} else {
					if (boardData[3]) return;
					drawCircleOrCross(130 / 2, 330);
					boardData[3] = player;
				}
			} else if (e.offsetX < 260) {
				if (e.offsetY < 130) {
					if (boardData[4]) return;
					drawCircleOrCross(canvas.width / 2, 130 / 2);
					boardData[4] = player;
				} else if (e.offsetY > 130 && e.offsetY < 260) {
					if (boardData[5]) return;
					drawCircleOrCross(canvas.width / 2, canvas.height / 2);
					boardData[5] = player;
				} else {
					if (boardData[6]) return;
					drawCircleOrCross(canvas.width / 2, 330);
					boardData[6] = player;
				}
			} else {
				if (e.offsetY < 130) {
					if (boardData[7]) return;
					drawCircleOrCross(330, 130 / 2);
					boardData[7] = player;
				} else if (e.offsetY > 130 && e.offsetY < 260) {
					if (boardData[8]) return;
					drawCircleOrCross(330, canvas.height / 2);
					boardData[8] = player;
				} else {
					if (boardData[9]) return;
					drawCircleOrCross(330, 330);
					boardData[9] = player;
				}
			}

			checkGameOver();
			if (isGameOver) {
				printGameOverMessage();
			}
		};
		const drawCircleOrCross = (x, y) => {
			// acr(center x, center y, radius, 0, 2 * Math.PI)
			if (isCicle) {
				draw.beginPath();
				draw.arc(x, y, 50, 0, 2 * Math.PI);
				draw.stroke();
			} else {
				draw.beginPath();
				draw.fillStyle = 'white';
				draw.arc(x, y, 50, 0, 2 * Math.PI);
				draw.fill();
			}

			isCicle = !isCicle;
		};
		const drawLine = (x1, y1, x2, y2) => {
			draw.strokeStyle = 'white';
			draw.lineWidth = 5;
			draw.beginPath();
			draw.moveTo(x1, y1); // first dot
			draw.lineTo(x2, y2); // second dot
			draw.stroke(); // draw a line to connect two dot
		};
		const drawBoard = () => {
			draw.fillStyle = 'black';
			draw.fillRect(0, 0, canvas.width, canvas.height);
		};
		drawBoard();
		drawLine(canvas.width / 3, 0, canvas.width / 3, canvas.height);
		drawLine(canvas.width * 0.66, 0, canvas.width * 0.66, canvas.height);
		drawLine(0, canvas.height / 3, canvas.width, canvas.height / 3);
		drawLine(0, canvas.height * 0.66, canvas.width, canvas.height * 0.66);
		canvas.addEventListener('click', checkClickedBlock);

		return () => {
			canvas.removeEventListener('click', checkClickedBlock);
		};
	}, []);
	return (
		<canvas
			id='ticTacToe'
			width={400}
			height={400}
			className='rounded'></canvas>
	);
};

export default TicTacToeGame;
