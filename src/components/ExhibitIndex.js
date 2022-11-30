import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { exhibitIndex } from '../api/exhibit'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

const ExhibitIndex = ({ user, msgAlert }) => {

    const [allExhibits, setAllExhibits] = useState([])

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
                    <Link to={`/exhibits/${exhibit._id}`} state={exhibit} className="company-button">Exhibit</Link>
                  </Card.Body>
                  <Card.Footer className="text-muted">2 days ago</Card.Footer>
                </Card>
            // <Link to={exhibit._id} key={exhibit._id}>
            //     <li>Name: {exhibit.name} Date: {exhibit.date} Artist: {exhibit.artist} Museum: {exhibit.museum}</li>
            // </Link>
        )
    })

    return (
        <>
             <div className="company-card-container">
                    {allExhibits.length > 0 ? allExhibitsJSX : "Loading..."}
                </div>
        </>
    )
}

export default ExhibitIndex