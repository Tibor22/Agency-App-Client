import './howItWorks.css';
import { useState, useEffect } from 'react';
import signUp from '../../assets/signUp.png';
import uploadR from '../../assets/uploadR.png';
import Post from '../../assets/Post.png';
import shoutMD from '../../assets/shoutMD.png';
import hake from '../../assets/hake.png';

export default function HowItWorksEmployer() {
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
								<h2>Sign Up</h2>
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
						<div className='cloud'>
							<h2 className='upload-header'>Upload Documents</h2>
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
						<img src={uploadR} alt='' />
					</div>
				</div>
				<div className='third-step three-column-grid'>
					<div className='third-step_left'>
						<img src={Post} alt='' />
					</div>
					<div className='third-step_middle'>
						<div className='third-step_middle--header'>
							STEP <span className='step-num'>03</span>
						</div>
						{circlesLast}
						<div className='small-circle'></div>
					</div>
					<div className='third-step_right'>
						<img className='shout' src={shoutMD} alt='' />

						<div className='cloud'>
							<h2>Post to find the right applicants</h2>
							Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nostrum
							unde labore doloribus quo magnam sit ex consequuntur porro quidem
							corporis, facere possimus atque, distinctio, cupiditate error
							rerum voluptatum natus in odio repellat omnis eum. In distinctio,
						</div>
					</div>
				</div>
				<div className='accepted'>
					<img src={hake} alt='' />
				</div>
			</div>
		</div>
	);
}
