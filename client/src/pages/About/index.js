import React, { useState } from "react";
// import avatar from "../../assets/images/avatar.svg";
// import avatar2 from "../../assets/images/avatar2.svg";

function About(props) {
    // const avatarNum = Math.floor(Math.random()*100)%2 === 0 ? avatar : avatar2;
    return(
        <div className="flex-row row-to-column" id="about">
            <h2 className="flex-title">About Me</h2>
            <div className="flex-content">
                <div className="">
                    <img src={require("../../assets/images/BatCap2.jpg")} className="avatar-dim main-image" alt='Avatar' />
                </div>
                <div className="flex-column">
                    <p>Greetings!  My name is Cabral Williams, and I am a developer (I guess that I can call myself that now) who shied away from taking the introductory computer science course freshman year in college about a quarter of a century ago because <i>what is this strange thing, this internet?  It'll never catch on!</i>  I do wish that I had had the foresight to know how much I would enjoy coding and how much I was wrong back then!  I have dabbled in a number of coding languages on my own in the past (VBA, Python, Java, C#), but I am happy that I finally made the decision to take a more structured course.  And, as an homage to a certain movie that came out during my college days and as a way to celebrate the resurrection of that movie franchise, I decide that this was the one appropriate theme for this new portfolio.</p>
                </div>
            </div>
        </div>
    );
}

export default About;