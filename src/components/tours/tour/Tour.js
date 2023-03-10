import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Link } from "react-router-dom";
import './Tour.css'

function Tour(props) {
    let data = props.tour;
    return (
        <>
            <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src={data.image} />
                <Card.Body>
                    <Card.Title>{data.name}</Card.Title>
                    <Link to={`/city/${data.id}`}>
                        <Button variant="primary" >More Details !</Button>
                    </Link>
                </Card.Body>
            </Card>
        </>

    );

}

export default Tour;