import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { exhibitIndex } from '../api/exhibit'
import Button from 'react-bootstrap/Button'
import Card from 'react-bootstrap/Card'
import CreateExhibitModal from './ExhibitCreate'


const ExhibitIndex = ({ user, msgAlert }) => {

    const [allExhibits, setAllExhibits] = useState([])
    const [updated, setUpdated] = useState(false)


    useEffect(() => {
        console.log("useEffect is running")
        exhibitIndex(user)
            .then(res => {
                console.log(res.data)
                setAllExhibits(res.data.exhibits)
            })
            .catch((error) => {
                msgAlert({
                    heading: 'Failure',
                    message: 'Index Exhibits Failure' + error,
                    variant: 'danger'
                })
            })
    }, [])

    const allExhibitsJSX = allExhibits.map(exhibit => {
        return (
            <Card className="exhibit-index text-center mb-3 d-flex flex-column">
                <Card.Header>Featured</Card.Header>
                <Card.Body>
                    <Card.Title>{exhibit.name}</Card.Title>
                    <Card.Text>
                        {exhibit.artist}
                    </Card.Text>
                    {/* <Button variant="primary">Go somewhere</Button> */}
                    <Link to={`/exhibits/${exhibit._id}`} state={exhibit} className="exhibit-button">Exhibit</Link>
                </Card.Body>
                <Card.Footer className="text-muted">2 days ago</Card.Footer>
            </Card>

        )
    })

    return (
        <>
            <div className="exhibit-card-container">
                {allExhibits.length > 0 ? allExhibitsJSX : "Loading..."}
            </div>
            <Card className="create-exhibit text-center mb-3 d-flex flex-column">
                <Card.Body>
                    <Card.Title>The only true wisdom is in knowing you know nothing - Socrates</Card.Title>
                    {user ? 
                            <div className="exhibit-create">
                                <section>
                                    Feel free to add your own Exhibit here!
                                    <br/>
                                    Create it!
                                </section>
                            <CreateExhibitModal user={user} msgAlert={msgAlert} triggerRefresh={() => setUpdated(prev => !prev)}/>
                            </div>
                        : null }
                    {/* <Button eventKey="1" as={Link} to={CreateExhibitModal} className="nav-item">Go somewhere</Button> */}
                    {/* <Link to={``} state={} className="exhibit-button">Exhibit</Link> */}
                </Card.Body>
                <Card.Footer className="text-muted"></Card.Footer>
            </Card>
        </>
    )
}

export default ExhibitIndex