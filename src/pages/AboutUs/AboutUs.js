import './aboutUs.css';
import aboutUs from '../../assets/aboutUs.png';
import weAreMD from '../../assets/weAreMD.png';
import connect from '../../assets/connect.png';
import speed from '../../assets/speed.png';
import care from '../../assets/care.png';

export default function AboutUs() {
	return (
		<div className='aboutUs-outer-container'>
			<div className='aboutUs-container'>
				<div className='aboutUs'>
					<div className='aboutUs_desc'>
						<div className='aboutUs_desc--header'>About Us</div>
						<div className='aboutUs_desc--text'>
							Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat
							harum nulla error cum fugiat porro quae consequuntur vitae
							molestias reiciendis. Aspernatur perferendis impedit nulla rem.
							Iusto similique assumenda deserunt ab.
							<br />
							<br />
							Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat
							harum nulla error cum fugiat porro quae consequuntur vitae
							molestias reiciendis. Aspernatur perferendis impedit nulla rem.
							Iusto similique assumenda deserunt ab.
						</div>
					</div>
					<div className='aboutUs_image--container'>
						<img src={aboutUs} alt='' />
					</div>
				</div>
				<div className='who-we-are'>
					<div className='who-we-are_image--container'>
						<img src={weAreMD} alt='' />
					</div>
					<div className='who-we-are_desc'>
						<div className='who-we-are_desc--header'>Who we are</div>
						<div className='who-we-are_desc--text'>
							Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat
							harum nulla error cum fugiat porro quae consequuntur vitae
							molestias reiciendis. Aspernatur perferendis impedit nulla rem.
							Iusto similique assumenda deserunt ab.
							<br />
							<br />
							Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat
							harum nulla error cum fugiat porro quae consequuntur vitae
							molestias reiciendis. Aspernatur perferendis impedit nulla rem.
							Iusto similique assumenda deserunt ab.
						</div>
					</div>
				</div>
				<div className='what-we-do'>
					<h2 className='what-we-do_header'>What we do</h2>
					<div className='cards'>
						<div className='what-we-do_card'>
							<img src={connect} alt='' />
							<div className='what-we-do_card--header'>CONNECT</div>
							<div className='what-we-do_card--text'>
								We connect employers and employees with our unique system. You
								are the one decide who to work with.
							</div>
						</div>
						<div className='what-we-do_card'>
							<img src={speed} alt='' />
							<div className='what-we-do_card--header'>SPEED</div>
							<div className='what-we-do_card--text'>
								We system allow you to get job instantly with a click of a
								button. No unnecessary stages ,no interview, nothing.
							</div>
						</div>
						<div className='what-we-do_card'>
							<img src={care} alt='' />
							<div className='what-we-do_card--header'>CARE</div>
							<div className='what-we-do_card--text'>
								Our Team make sure there is always someone to support you,
								whatever problem you may face. We speak you language!
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
