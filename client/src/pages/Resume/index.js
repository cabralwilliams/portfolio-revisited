import React from "react";

function Resume(props) {

    return(
        <div className="flex-row row-to-column" id="resume">
            <h2 className="flex-title">Resume</h2>
            <div className="flex-content margin-top-tiny margin-bottom-tiny">
                <div className="flex-column-start-left">
                    <div className="margin-bottom-tiny"><a href={require(`../../assets/documents/Resume - Cabral Williams  3_07_2022.pdf`)} className="red-pill-font noDecoration font-size-105 fontColor7">Full Resume</a></div>
                    <div className="proficiencies raised-panel bgColor8 margin-bottom-tiny">
                        <h3>Front-End Proficiencies</h3>
                        <ul className="proficiency-li noType">
                            <li className="font-size-105 text-shadow7575120">HTML</li>
                            <li className="font-size-105 text-shadow7575120">JavaScript</li>
                            <li className="font-size-105 text-shadow7575120">CSS</li>
                            <li className="font-size-105 text-shadow7575120">Handlebars</li>
                            <li className="font-size-105 text-shadow7575120">React</li>
                            <li className="font-size-105 text-shadow7575120">Foundation</li>
                            <li className="font-size-105 text-shadow7575120">Bootstrap</li>
                            <li className="font-size-105 text-shadow7575120">Thymeleaf</li>
                        </ul>
                    </div>
                    <div className="proficiencies raised-panel bgColor8">
                        <h3>Back-End Proficiencies</h3>
                        <ul className="proficiency-li noType">
                            <li className="font-size-105 text-shadow7575120">Node.js</li>
                            <li className="font-size-105 text-shadow7575120">Express</li>
                            <li className="font-size-105 text-shadow7575120">MySQL</li>
                            <li className="font-size-105 text-shadow7575120">MongoDB</li>
                            <li className="font-size-105 text-shadow7575120">GraphQL</li>
                            <li className="font-size-105 text-shadow7575120">Python</li>
                            <li className="font-size-105 text-shadow7575120">Flask</li>
                            <li className="font-size-105 text-shadow7575120">Spring Framework</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Resume;