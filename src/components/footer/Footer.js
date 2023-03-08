import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faYoutube,
    faFacebook,
    faTwitter,
    faInstagram
} from "@fortawesome/free-brands-svg-icons";

import './Footer.css';

function Footer() {
    let facebookUrl = "";
    let twitterUrl = "";
    let instagramUrl = "";
    let youtubeUrl = "";
    return (
        <>
            <footer>
                <div className="icons">
                    <a href={facebookUrl}> <FontAwesomeIcon icon={faFacebook} size="2x" /></a>
                    <a href={twitterUrl}> <FontAwesomeIcon icon={faTwitter} size="2x" /></a>
                    <a href={instagramUrl}> <FontAwesomeIcon icon={faInstagram} size="2x" /></a>
                    <a href={youtubeUrl}><FontAwesomeIcon icon={faYoutube} size="2x" /></a>
                </div>

                <p> &copy; Created by Rami Ghanem 2023 </p>
            </footer>

        </>
    );
}

export default Footer;