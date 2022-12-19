import React from 'react';
import SnakeGame from '../components/snake_game';
function CenterModal({ centerModalContent }) {
	const contentMap = {
		SnakeGame: <SnakeGame></SnakeGame>,
	};

	return (
		<div
			className='modal fade'
			id='exampleModal'
			tabIndex='-1'
			aria-labelledby='exampleModalLabel'
			aria-hidden='true'>
			<div className='modal-dialog modal-dialog-centered bg-transparent modal-fullscreen-sm-down'>
				<div className='modal-contentbg-transparent'>
					{/* <div className='modal-header'>
						<h1 className='modal-title fs-5' id='exampleModalLabel'>
							Modal title
						</h1>
					</div> */}
					<div className='modal-body p-0'>
						{contentMap[centerModalContent]}
					</div>
					{/* <div className='modal-footer'>
						<button
							type='button'
							id='centerModalCloseButton'
							className='btn btn-secondary'
							data-bs-dismiss='modal'>
							Close
						</button>
					</div> */}
				</div>
			</div>
		</div>
	);
}

export default CenterModal;
