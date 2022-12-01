// import React, { useState } from 'react'
// import Modal from 'react-bootstrap/Modal'
// import { exhibitCreate } from '../api/exhibit'
// import ExhibitCreate from './ExhibitCreate'

// function CreateExhibitModal(props) {
//   const [show, setShow] = useState(false)

//   const handleClose = () => setShow(false)
//   const handleShow = () => setShow(true)

//   const { user, msgAlert, triggerRefresh } = props

//   const defaultExhibit = {
//     name: '',
//     logo: '',
//     domain: '',
//     description: ''
//   }

//   const [exhibit, setExhibit] = useState(defaultExhibit)

//   const handleChange = (event) => {
//     setExhibit({...exhibit, [event.target.name]: event.target.value})
//   }

//   const handleCreateExhibit = (e) => {
//     e.preventDefault()
//     exhibitCreate(exhibit, user)
//     .then(() => {
//       triggerRefresh()
//       handleClose()
//     })
//     .catch((error) => {
//         msgAlert({
//           heading: 'Failure',
//           message: 'Create Exhibit Failure' + error,
//           variant: 'danger'
//         })
//     })
//   }


//   return (
//     <>
//       <button className="search-btn mt-3" onClick={handleShow}>
//         Add your own Exhibit!
//       </button>

//       <Modal show={show} onHide={handleClose}>
//         <Modal.Header closeButton>
//           <Modal.Title></Modal.Title>
//         </Modal.Header>
//         <Modal.Body>
//           <ExhibitCreate
//             exhibit={ exhibit }
//             handleChange={ handleChange }
//             heading="Add a new Exhibit!"
//             handleSubmit={ handleCreateExhibit}
//           />
//         </Modal.Body>
//         <Modal.Footer>
//         </Modal.Footer>
//       </Modal>
//     </>
//   );
// }

// export default CreateExhibitModal