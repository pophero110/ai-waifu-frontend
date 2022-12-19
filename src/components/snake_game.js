import React from 'react';
import { useEffect } from 'react';
import { CommentText } from 'semantic-ui-react';
import '../assets/snake_game.css';
const SnakeGame = () => {
	const pauseHanlder = () => {
		if (game === null) {
			clearInterval(game);
			game = null;
		} else {
		}
	};
	let game = null;

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
		const canvas = document.getElementById('snakeGame');
		const draw = canvas.getContext('2d');

		const clearScreen = () => {
			draw.fillStyle = 'black'; // make screen black
			draw.fillRect(0, 0, canvas.width, canvas.height); // black color start from 0px left, right to canvas width and canvas height
		};

		const keydown = (event) => {
			console.log(event.keyCode);
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
			console.log(`${foodX} ${foodY}`);
			if (foodX === headX && foodY === headY) {
				foodX = Math.floor(Math.random() * tileCount);
				foodY = Math.floor(Math.random() * tileCount);
				tailLength++;
			}
		};
		document.body.addEventListener('keydown', keydown);
		const drawGame = () => {
			clearScreen();

			drawSnake();
			changeSnakePosition();

			drawFood();
			checkFoodCollision();
		};
		game = setInterval(drawGame, 1000 / speed);
		// remove eventlistener and clearInterval after game is over
	}, []);

	return (
		<div>
			<canvas
				id='snakeGame'
				height={400}
				width={400}
				className='p-0'></canvas>
			<button onClick={pauseHanlder}>Pause</button>
		</div>
	);
};
export default SnakeGame;
