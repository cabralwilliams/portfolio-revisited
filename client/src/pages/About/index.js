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
                <p className="p-60">Greetings!  My name is Cabral Williams, and I am a developer who shied away from taking the introductory computer science course freshman year in college about a quarter of a century ago because <i>what is this strange thing, this internet?  It'll never catch on!</i>  I do wish that I had had the foresight to know how much I would enjoy coding and how much I was wrong back then!</p>
                <p className="p-60">I can freely admit that I am probably <i>obsessed</i> with learning more about programming.  While others may anxiously await for the latest release of something in fashion or an electronic gadget (nothing at all wrong with that!), I have found myself eager to dive into new languages to see whether I could duplicate a certain application or create something novel of my own.  My bootcamp experience was centered
                 on the MERN stack (Node.js, Express, React, and MongoDB), but I have spent much time since the completion of bootcamp digesting information about web development using Java, Python, and C#.  Please take some time to look over the applications that I have created!</p>
                <p className="p-60">Beyond the above, I'm a sometimes avid runner (when my achilles tendon is cooperating), having completed several half marathons in the past, and I am still semi-obsessed with the program Jeopardy.  (I can't get enough of trying to answer trivia questions!)</p>
            </div>
        </div>
    );
}

export default About;