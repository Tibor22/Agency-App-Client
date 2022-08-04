import './howItWorks.css';
import { useState, useEffect } from 'react';
import signUp from '../../assets/signUp.png';
import uploadSM from '../../assets/uploadSM.png';
import acceptedB from '../../assets/acceptedB.png';
import apply from '../../assets/apply.png';
import applicationSM from '../../assets/applicationSM.png';

export default function HowItWorksEmployee() {
	const [size, setSize] = useState({
		x: window.innerWidth,
		y: window.innerHeight,
	});
	const updateSize = () =>
		setSize({
			x: window.innerWidth,
			y: window.innerHeight,
		});
	useEffect(() => (window.onresize = updateSize), []);

	let fullHeight = size.y * 1.5;
	const circles = [];
	const circlesLast = [];

	for (let i = 0; i < fullHeight / 200; i++) {
		circles.push(<div className='small-circle'></div>);
	}
	for (let i = 0; i < fullHeight / 150; i++) {
		circlesLast.push(<div className='small-circle'></div>);
	}

	return (
		<div className='how-it-works-outer-container'>
			<div className='how-it-works_container'>
				<div className='first-step three-column-grid'>
					<div className='first-step_left'>
						<img src={signUp} alt='' />
					</div>
					<div className='first-step_middle'>
						<div className='first-step_middle--header'>
							STEP <span className='step-num'>01</span>
						</div>
						{circles}
						<div className='small-circle'></div>
					</div>
					<div className='first-step_right'>
						<div className='first-step_right--text'>
							<div className='cloud'>
								Lorem ipsum dolor, sit amet consectetur adipisicing elit.
								Nostrum unde labore doloribus quo magnam sit ex consequuntur
								porro quidem corporis, facere possimus atque, distinctio,
								cupiditate error rerum voluptatum natus in odio repellat omnis
								eum. In distinctio, dolorum ducimus culpa eius eaque rerum
								excepturi similique magnam earum temporibus fugiat, dolores qui!
							</div>
						</div>
					</div>
				</div>
				<div className='second-step three-column-grid'>
					<div className='second-step_left'>
						<div className='speech-bubble'>Upload Documents</div>
						{/* <img src={uploadDOC} alt='' /> */}
						<div className='cloud'>
							Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nostrum
							unde labore doloribus quo magnam sit ex consequuntur porro quidem
							corporis, facere possimus atque, distinctio, cupiditate error
							rerum voluptatum natus in odio repellat omnis eum. In distinctio,
							dolorum ducimus culpa eius eaque rerum excepturi similique magnam
							earum temporibus fugiat, dolores qui!
						</div>
					</div>
					<div className='second-step_middle'>
						<div className='second-step_middle--header'>
							STEP <span className='step-num'>02</span>
						</div>
						{circles}
						<div className='small-circle'></div>
					</div>
					<div className='second-step_right'>
						<img src={uploadSM} alt='' />
					</div>
				</div>
				<div className='third-step three-column-grid'>
					<div className='third-step_left'>
						<img src={applicationSM} alt='' />
					</div>
					<div className='third-step_middle'>
						<div className='third-step_middle--header'>
							STEP <span className='step-num'>03</span>
						</div>
						{circlesLast}
						<div className='small-circle'></div>
					</div>
					<div className='third-step_right'>
						<img src={apply} alt='' />

						<div className='cloud'>
							<h2>Apply And Get Accepted INSTANTLY</h2>
							Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nostrum
							unde labore doloribus quo magnam sit ex consequuntur porro quidem
							corporis, facere possimus atque, distinctio, cupiditate error
							rerum voluptatum natus in odio repellat omnis eum. In distinctio,
						</div>
					</div>
				</div>
				<div className='accepted'>
					<img src={acceptedB} alt='' />
				</div>
			</div>
		</div>
	);
}
