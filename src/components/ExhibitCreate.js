import React, { useState } from 'react'
import { exhibitCreate } from '../api/exhibit'
import Modal from 'react-bootstrap/Modal'


function CreateExhibitModal(props) {
    const [show, setShow] = useState(false)

    const handleClose = () => setShow(false)
    const handleShow = () => setShow(true)

    const { user, msgAlert, triggerRefresh } = props

    const defaultExhibit = {
        name: '',
        logo: '',
        domain: '',
        description: ''
    }

    const [exhibit, setExhibit] = useState(defaultExhibit)

    const handleChange = (event) => {
        setExhibit({ ...exhibit, [event.target.name]: event.target.value })
    }

    const handleCreateExhibit = (e) => {
        e.preventDefault()
        exhibitCreate(exhibit, user)
            .then(() => {
                triggerRefresh()
                handleClose()
            })
            .catch((error) => {
                msgAlert({
                    heading: 'Failure',
                    message: 'Create Exhibit Failure' + error,
                    variant: 'danger'
                })
            })
    }


    return (
        <>
            <button className="exhibit-button" onClick={handleShow}>
                Create Exhibit
            </button>

            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Insert your own exhibit here!</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <input
                        type='text'
                        value={exhibit.name}
                        placeholder="Name"
                        name='name'
                        onChange={handleChange}
                    />
                    <input
                        type='text'
                        value={exhibit.date}
                        placeholder="Date"
                        name='date'
                        onChange={handleChange}
                    />
                    <input
                        type='text'
                        value={exhibit.picture}
                        placeholder="Link to Picture"
                        name='picture'
                        onChange={handleChange}
                    />
                    <input
                        type='text'
                        value={exhibit.artist}
                        placeholder="Artist"
                        name='artist'
                        onChange={handleChange}
                    />
                    <input
                        type='text'
                        value={exhibit.museum}
                        placeholder="Museum"
                        name='museum'
                        onChange={handleChange}
                    />
                    <button onClick={handleCreateExhibit}>Create Exhibit</button>
                </Modal.Body>
                <Modal.Footer>
                </Modal.Footer>
            </Modal>
        </>

    )
}

export default CreateExhibitModal