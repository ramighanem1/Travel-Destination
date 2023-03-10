import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

import './Header.css';


function Header() {
    return (
        <>
            <Navbar className="bg-light" fixed="top">
                <Container>
                    <Nav className="me-auto">
                        <Nav.Link href="/">Home</Nav.Link>
                    </Nav>
                </Container>
            </Navbar>
        </>
    );
}

export default Header;