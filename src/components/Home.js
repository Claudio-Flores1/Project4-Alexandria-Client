import { Link } from 'react-router-dom'

const Home = () => {

	return (
		<>
			<section className="welcome-section">
				<div className="welcome-title">Alexandria</div>
				<p className="welcome-message"> Welcome to Alexandria, where knowledge is at the tip of your fingers and only one click away! Like the ancient legendary "Library of Alexandria", we seek to nurture the love of knowledge and promote endless curiosity.Curate our selection of museum exhibits, all from the comfort of your personal device anywhere, anytime.</p>
				<img className='home-image' src='https://www.theoi.com/image/K7.8Hephaistos.jpg' />
				<Link to='/exhibits' className="ms-4 exhibits">
					<button>View Exhibits</button>
				</Link>
			</section>
		</>
	)
}

export default Home
