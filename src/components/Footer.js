import React from 'react';
import Resume from '../pdf/Resume-Lorenzo-Street.pdf';

function Footer () {
    return (
        <footer class="center">
                <div class="row">
                    <a href="https://www.linkedin.com/in/lorenzo-street-simmons-65098a82/">LinkedIn</a> | {" "}
                    <a href="https://github.com/Lorenzoxst">GitHub</a> | {" "}
                    <a href={Resume} download="Lorenzo Street Resume">Resume</a>
                </div>
        </footer>
    )
}

export default Footer;