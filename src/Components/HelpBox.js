
import { useState, useEffect } from 'react';

const HelpBox = (props) => {

	const [isOpen, setIsOpen] = useState(false);
	const [display, setDisplay] = useState(false);

	useEffect(() => {
		if (isOpen === false) {
			setInterval(() => {
				setDisplay(false);
				
			}, 1000/100)
		}
	}, [isOpen])

	const closeModal = () => {
		setIsOpen(false)
	}

	return (
		display && (
			<div className="helpbox" style={{ animation: isOpen ? 'slideIn 1s ease 1 normal' : 'slideOut 1s ease 1 normal' }}>
				<div className="wrapper">
					<div className="helpbox-message">
						<span><a target="_blank" rel="noopener noreferrer" href="https://vk.com/cacs_timetable">Подпишись</a> на нашего бота и получай ссылки на zoom перед парами.</span>
					</div>
					<button className="close-button"
									  onClick={ () => closeModal() }>
					    <span className="close-icon"></span>
				    </button>
				</div>
			</div>
		)
	)
}

export default HelpBox;