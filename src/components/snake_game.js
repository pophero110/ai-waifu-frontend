import React from 'react';
import '../assets/snake_game.css';
import { useEffect } from 'react';
const SnakeGame = ({ resetGamehandler }) => {
	useEffect(() => {
		class snakePart {
			constructor(x, y) {
				this.x = x;
				this.y = y;
			}
		}
		let [tileCount, tileSize] = [20, 18];
		let [speed, xvelocity, yvelocity] = [7, 0, 0];
		let [foodX, foodY] = [8, 8];
		let [headX, headY, tailLength, snakeParts] = [5, 5, 2, []];
		let gameOver = false;
		const canvas = document.getElementById('snakeGame');
		const draw = canvas.getContext('2d');

		const clearScreen = () => {
			draw.fillStyle = 'black'; // make screen black
			draw.fillRect(0, 0, canvas.width, canvas.height); // black color start from 0px left, right to canvas width and canvas height
		};

		const keydown = (event) => {
			if (event.keyCode === 82) {
				resetGamehandler();
			}
			if (event.keyCode === 38) {
				if (yvelocity === 1) return;
				yvelocity = -1; //move one tile up
				xvelocity = 0;
			}
			//down
			if (event.keyCode === 40) {
				if (yvelocity === -1) return;
				yvelocity = 1; //move one tile down
				xvelocity = 0;
			}

			//left
			if (event.keyCode === 37) {
				if (xvelocity === 1) return;
				yvelocity = 0;
				xvelocity = -1; //move one tile left
			}
			//right
			if (event.keyCode === 39) {
				if (xvelocity === -1) return;
				yvelocity = 0;
				xvelocity = 1; //move one tile right
			}
		};

		const isGameOver = () => {
			let gameOver = false;
			//check whether game has started
			if (yvelocity === 0 && xvelocity === 0) {
				return false;
			}
			if (headX < 0) {
				//if snake hits left wall
				gameOver = true;
			} else if (headX === tileCount) {
				//if snake hits right wall
				gameOver = true;
			} else if (headY < 0) {
				//if snake hits wall at the top
				gameOver = true;
			} else if (headY === tileCount) {
				//if snake hits wall at the bottom
				gameOver = true;
			}
			for (let i = 0; i < snakeParts.length; i++) {
				let part = snakeParts[i];
				if (part.x === headX && part.y === headY) {
					//check whether any part of snake is occupying the same space
					gameOver = true;
				}
				break; // to break out of for loop
			}
			return gameOver;
		};

		for (let i = 0; i < snakeParts.length; i++) {
			let part = snakeParts[i];
			if (part.x === headX && part.y === headY) {
				//check whether any part of snake is occupying the same space
				gameOver = true;
				break; // to break out of for loop
			}

			return gameOver;
		}
		const drawSnake = () => {
			draw.fillStyle = 'orange';
			for (let i = 0; i < snakeParts.length; i++) {
				let part = snakeParts[i];
				draw.fillRect(
					part.x * tileCount,
					part.y * tileCount,
					tileSize,
					tileSize
				);
			}
			snakeParts.push(new snakePart(headX, headY));
			if (snakeParts.length > tailLength) {
				snakeParts.shift(); //remove furthest item from  snake part if we have more than our tail size
			}
			draw.fillStyle = 'red';
			draw.fillRect(
				headX * tileCount,
				headY * tileCount,
				tileSize,
				tileSize
			);
		};
		const changeSnakePosition = () => {
			headX = headX + xvelocity;
			headY = headY + yvelocity;
		};
		const drawFood = () => {
			draw.fillStyle = 'green';
			draw.fillRect(
				foodX * tileCount,
				foodY * tileCount,
				tileSize,
				tileSize
			);
		};
		const checkFoodCollision = () => {
			if (foodX === headX && foodY === headY) {
				foodX = Math.floor(Math.random() * tileCount);
				foodY = Math.floor(Math.random() * tileCount);
				tailLength++;
			}
		};
		const drawGameOver = () => {
			draw.fillStyle = 'white';
			draw.font = '48px serif';
			draw.textAlign = 'center';
			draw.textBaseline = 'middle';
			draw.fillText('Game Over', canvas.width / 2, canvas.height / 2);
			draw.font = '20px serif';
			draw.textAlign = 'center';
			draw.fillText(
				"Press 'R' to start a new game",
				canvas.width / 2,
				canvas.height / 2 + 48
			);
		};

		const drawScorce = () => {
			draw.font = '12px Arial';
			draw.fillStyle = '#FF0000';
			draw.fillText(`Score: ${tailLength - 2}`, canvas.width - 50, 12);
		};
		document.body.addEventListener('keydown', keydown);
		const drawGame = () => {
			clearScreen();

			drawSnake();
			changeSnakePosition();

			drawFood();
			checkFoodCollision();
			drawScorce();

			if (isGameOver()) {
				drawGameOver();
				clearInterval(game);
				return;
			}
		};
		const game = setInterval(drawGame, 1000 / speed);

		return () => {
			clearInterval(game);
			document.body.removeEventListener('keydown', keydown);
		};
	}, []);
	return (
		<canvas
			key={1}
			id='snakeGame'
			height={400}
			width={400}
			className='p-0 position-relative rounded'></canvas>
	);
};
export default SnakeGame;
