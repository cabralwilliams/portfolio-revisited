import React, { useState } from "react";
// import avatar from "../../assets/images/avatar.svg";
// import avatar2 from "../../assets/images/avatar2.svg";

function About(props) {
    // const avatarNum = Math.floor(Math.random()*100)%2 === 0 ? avatar : avatar2;
    return(
        <div className="flex-row row-to-column" id="about">
            <h2 className="flex-title">About Me</h2>
            <div className="flex-column align-items-center">
                <img src={require("../../assets/images/BatCap2.jpg")} className="avatar-dim main-image centered-item" alt='Avatar' />
                <p className="p-60">Greetings!  My name is Cabral Williams, and I am a developer who shied away from taking the introductory computer science course freshman year in college about a quarter of a century ago because <i>what is this strange thing, this internet?  It'll never catch on!</i>  I do wish that I had had the foresight to know how much I would enjoy coding and how much I was wrong back then!  I have dabbled in a number of coding languages on my own in the past (VBA, Python, Java, C#), but I am happy that I finally made the decision to take a more structured course in the form of a web development bootcamp.  I love the feeling getting an application to do exactly what I want it to do, in whatever language in which the application is written.</p>
                <p className="p-60">Beyond the above, I'm a sometimes avid runner (when my achilles tendon is cooperating), having completed several half marathons in the past, and I am still semi-obsessed with the program Jeopardy.  (I can't get enough of trying to answer trivia questions!)</p>
            </div>
        </div>
    );
}

export default About;