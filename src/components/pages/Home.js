import React from 'react';
import devPic from '../../img/lstreet.jpg';

export default function ReactPortfolio() {
    return (
        <>
            <section className="hero row justify-space-around center" data-display="flex" id="hero">
                <figure>
                    <img src={devPic} alt="the magnanimous Lorenzo Street-S" />
                </figure>
                <div class="center hero-title">
                    <h2>I am a web developer <br />
                    <span>of sorts</span></h2>
                    <p>Lorenzo Street, a soon to be bootcamp graduate and code ninja.</p>
                </div>
            </section>
            {/* hero row justify-space-around center  */}
        </>
    );
}