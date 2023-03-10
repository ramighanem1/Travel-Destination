import Header from "../header/Header";
import Footer from "../footer/Footer";
import "./TourDetails.css"

import { useParams } from 'react-router-dom';
import React, { useState } from "react";
import { Button, Card } from 'react-bootstrap';





function getTourById(tours, id) {
    return tours.find(tour => tour.id === id);
}

function TourDetails(props) {

    const { id } = useParams();
    let data = props.tours;
    let tour = getTourById(data, id)

    const [showFullDescription, setShowFullDescription] = useState(false);
    const { name, info } = tour;

    return (
        <>
            <Header />
            <Card>
                <Card.Img variant="top" src={tour.image} style={{
                    width: '300px', height: '300px'}} />
                <Card.Body>
                    <Card.Title>{name}</Card.Title>
                    {showFullDescription ? (
                        <Card.Text>{info}</Card.Text>
                    ) : (
                        <div>
                            <Card.Text>{info.substring(0, 100)}...</Card.Text>
                            <Button onClick={() => setShowFullDescription(true)}>See more</Button>
                        </div>
                    )}
                    {showFullDescription && (
                        <Button onClick={() => setShowFullDescription(false)}>See less</Button>
                    )}
                </Card.Body>
            </Card>

            <Footer />
        </>
    );
}

export default TourDetails;