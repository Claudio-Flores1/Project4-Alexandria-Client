import React, { useEffect, useState } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import { exhibitDelete, exhibitShow, exhibitUpdate } from '../api/exhibit'
import ExhibitUpdate from './ExhibitUpdate'
import Card from 'react-bootstrap/Card'
import ListGroup from 'react-bootstrap/ListGroup'

const ExhibitShow = ({ user, msgAlert }) => {

    const [exhibit, setExhibit] = useState({})
    const [isUpdateShown, setIsUpdateShown] = useState(false)
    const [deleted, setDeleted] = useState(false)

    const { id } = useParams()
    const navigate = useNavigate()

    useEffect(() => {
        exhibitShow(user, id)
            .then((res) => {
                setExhibit(res.data.exhibit)
            })
            .catch((error) => {
                msgAlert({
                    heading: 'Failure',
                    message: 'Show exhibit Failure' + error,
                    variant: 'danger'
                })
            })
    }, [])

    const toggleShowUpdate = () => {
        setIsUpdateShown(prevUpdateShown => !prevUpdateShown)
    }

    const handleChange = (event) => {
        setExhibit({ ...exhibit, [event.target.name]: event.target.value })
    }

    const handleUpdateExhibit = () => {
        exhibitUpdate(exhibit, user, id)
            .then(() => {
                msgAlert({
                    heading: 'Success',
                    message: 'Updating Exhibit',
                    variant: 'success'
                })
            })
            .catch((error) => {
                msgAlert({
                    heading: 'Failure',
                    message: 'Update Exhibit Failure' + error,
                    variant: 'danger'
                })
            })
    }

    const handleDeleteExhibit = () => {
        exhibitDelete(user, id)
            .then(() => {
                setDeleted(true)
                msgAlert({
                    heading: 'Success',
                    message: 'Deleting a Exhibit',
                    variant: 'success'
                })

            })
            .catch((error) => {
                msgAlert({
                    heading: 'Failure',
                    message: 'Deleting a Exhibit Failure' + error,
                    variant: 'danger'
                })
            })
    }

    // logical &&
    // both sides of this check NEED to be truthy values = true
    // logical ||
    // only one side of this check needs to be truthy = true

    // oneliner
    if (deleted) navigate('/exhibits')
    // if (deleted) {
    //     navigate('/pets')
    // }

    return (
        <div className='exhibit-card'>
            <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src={exhibit.picture} />
                <Card.Body>
                    <Card.Title>{exhibit.name}</Card.Title>
                    <Card.Text>
                        Some quick example text to build on the card title and make up the
                        bulk of the card's content.
                    </Card.Text>
                </Card.Body>
                <ListGroup className="list-group-flush">
                    <ListGroup.Item>{exhibit.date}</ListGroup.Item>
                    <ListGroup.Item>{exhibit.artist}</ListGroup.Item>
                    <ListGroup.Item>{exhibit.museum}</ListGroup.Item>
                </ListGroup>
                <Card.Body>
                    <Card.Link href="#">Card Link</Card.Link>
                    <Card.Link href="#">Another Link</Card.Link>
                </Card.Body>
            </Card>
        </div>
        // <>
        // 	<p>Name: {exhibit.name}</p>
        // 	<p>date: {exhibit.date}</p>
        // 	<p>artist: {exhibit.artist}</p>
        // 	<p>museum: {exhibit.museum}</p>
        // 	<button onClick={toggleShowUpdate}>Toggle Update</button>
        // 	{isUpdateShown && (
        // 		<ExhibitUpdate
        // 			exhibit={exhibit}
        // 			handleChange={handleChange}
        // 			handleUpdateExhibit={handleUpdateExhibit}
        // 		/>
        // 	)}
        //     <button onClick={handleDeleteExhibit} >Delete</button>
        // </>
    )
}

export default ExhibitShow