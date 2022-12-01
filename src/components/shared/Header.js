import React, { Fragment } from 'react'
import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar'
import { Link } from 'react-router-dom'
import CreateExhibitModal from '../CreateModal'

const linkStyle = {
	color: 'white',
	textDecoration: 'none',
	paddingRight: '5px',
    paddingLeft: '5px'
}

// class Navbar extends React.Component{
// 	state = {
// 	   modalOpen: false
// 	}
  
// 	handleModalOpen = () => {
// 	   this.setState((prevState) => {
// 		  return{
// 			 modalOpen: !prevState.modalOpen
// 		  }
// 	   })
// 	}

const authenticatedOptions = (
	<>
		<Nav.Item className="ms-4">
			<Link to='change-password' style={linkStyle}>
				Change Password
			</Link>
		</Nav.Item>
		<Nav.Item className="ms-4">
			<Link to='sign-out' style={linkStyle}>
				Sign Out
			</Link>
		</Nav.Item>
	</>
)

const unauthenticatedOptions = (
	<>
		<Nav.Item className="ms-4">
			<Link to='sign-up' style={linkStyle}>Sign Up</Link>
		</Nav.Item>
		<Nav.Item className="ms-4">
			<Link to='sign-in' style={linkStyle}>Sign In</Link>
		</Nav.Item>
	</>
)

// const alwaysOptions = (
// 	<>
// 		<Nav.Link className="ms-4">
// 			<Link to='/' style={linkStyle}>
// 				Home
// 			</Link>
// 		</Nav.Link>
// 	</>
// )

const Header = ({ user }) => (
	<Navbar collapseOnSelect={true} className='nav-bar p-0' variant='dark' expand='xl'>
		<Navbar.Brand>
			<Link to='/exhibits' className="ms-3 site-name">
				Alexandria
			</Link>
		</Navbar.Brand>
		{user &&
			<span className='welcome-nav item ms-1'>Welcome, {user.email}</span>
		}
		<Navbar.Toggle aria-controls='basic-navbar-nav' className='me-4' />
		<Navbar.Collapse id='basic-navbar-nav'>
			<Nav className='nav justify-content-end me-5 nav-link' style={{ width: "100%" }}>
				{/* <Nav.Item className="ms-4">
					<Nav.Link eventKey="1" as={Link} to='/exhibits/new' className="nav-item">
						Add an Exhibit
					</Nav.Link>
				</Nav.Item> */}
				<Nav.Item className="ms-4">
					<Nav.Link eventKey="1" as={Link} to='/' className="nav-item">
						Home
					</Nav.Link>
				</Nav.Item>
				{user ? authenticatedOptions : unauthenticatedOptions}
			</Nav>
		</Navbar.Collapse>
	</Navbar>
)

export default Header
