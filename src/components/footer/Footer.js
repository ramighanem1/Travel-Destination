import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from 'react';
import './Footer.css';
import {
    faGoogle,
    faGithub,
    faFacebook,
    faTwitter,
    faInstagram,
    faLinkedin
} from "@fortawesome/free-brands-svg-icons";

import {
    MDBFooter,
    MDBContainer,
    MDBBtn
} from 'mdb-react-ui-kit';



function Footer() {
    return (
        <>
     
            <MDBFooter className='bg-light text-center text-white fixed-bottom' >
                <MDBContainer className='p-4 pb-0'>
                    <section className='mb-4'>
                        <MDBBtn
                            floating
                            className='m-1'
                            style={{ backgroundColor: '#3b5998' }}
                            href='#!'
                            role='button'
                        >
                            <FontAwesomeIcon icon={faFacebook} size="2x" />
                        </MDBBtn>
                        <MDBBtn
                            floating
                            className='m-1'
                            style={{ backgroundColor: '#55acee' }}
                            href='#!'
                            role='button'
                        >
                            <FontAwesomeIcon icon={faTwitter} size="2x" />
                        </MDBBtn>
                        <MDBBtn
                            floating
                            className='m-1'
                            style={{ backgroundColor: '#dd4b39' }}
                            href='#!'
                            role='button'
                        >
                            <FontAwesomeIcon icon={faGoogle} size="2x" />
                        </MDBBtn>
                        <MDBBtn
                            floating
                            className='m-1'
                            style={{ backgroundColor: '#ac2bac' }}
                            href='#!'
                            role='button'
                        >
                            <FontAwesomeIcon icon={faInstagram} size="2x" />
                        </MDBBtn>
                        <MDBBtn
                            floating
                            className='m-1'
                            style={{ backgroundColor: '#0082ca' }}
                            href='#!'
                            role='button'
                        >
                            <FontAwesomeIcon icon={faLinkedin} size="2x" />
                        </MDBBtn>
                        <MDBBtn
                            floating
                            className='m-1'
                            style={{ backgroundColor: '#333333' }}
                            href='#!'
                            role='button'
                        >
                            <FontAwesomeIcon icon={faGithub} size="2x" />
                        </MDBBtn>
                    </section>
                </MDBContainer>

                <div className='text-center p-3' style={{ backgroundColor: 'rgba(0, 0, 0, 0.2)' }}>
                    &copy; Created by Rami Ghanem 2023
                </div>
            </MDBFooter>
        </>

    );
}

export default Footer;