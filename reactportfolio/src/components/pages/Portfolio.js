import React from 'react';

export default function Portfolio() {
    return (
        <>
            <section className="portfolio row justify-center center" data-display="flex" id="portfolio">
                <h3 class="section-title">portfolio</h3>
                
                <div class="port-card" id="featured">
                    <div class="port-card-title">
                        <h4><a href="https://larafoster.github.io/NYT-Bestsellers/">NYT-Bestsellers</a></h4>
                        <p><a href="https://github.com/larafoster/NYT-Bestsellers">Deployed App</a></p>
                    </div>
                    {/* <!--port-card-title --> */}
                    <figure>
                        
                    </figure>
                </div>
                {/* <!--port-card featured --> */}

                <div class="port-card" id="project-1">
                    <div class="port-card-title">
                        <h4><a href="https://github.com/Lorenzoxst/generateReadMe">Read Me Generator</a></h4>
                        <p>Uses Node, JS</p>
                        
                    </div>
                    {/* <!--port-card-title --> */}
                    <figure>

                    </figure>
                </div>
                {/* <!--port-card project-1 --> */}

                <div class="port-card" id="project-2">
                    <div class="port-card-title">
                        <h4><a href="https://lorenzoxst.github.io/passwordGenerator/">Password Generator</a></h4>
                        <p><a href="https://github.com/Lorenzoxst/passwordGenerator">Deployed App</a></p>
                    </div>
                    {/* <!--port-card-title --> */}
                    <figure>

                    </figure>
                </div>
                {/* <!--port-card project-2 --> */}

                <div class="port-card" id="project-3">
                    <div class="port-card-title">
                        <h4><a href="https://lorenzoxst.github.io/jsQuiz/">JS Quiz Game</a></h4>
                        <p><a href="https://github.com/Lorenzoxst/jsQuiz">Deployed App</a></p>
                    </div>
                    {/* <!--port-card-title --> */}
                    <figure>

                    </figure>
                </div>
                {/* <!--port-card project-3 --> */}
            </section> 
            {/* <!-- portfolio row justify-center center" port-start--> */}
        </>
    );
}