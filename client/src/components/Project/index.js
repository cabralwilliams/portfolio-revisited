import React from 'react';
import TechnologyList from '../TechnologyList';

function Project(props) {
    const displayTechs = event => {
        // console.dir(event.target);
        if(event.target.classList.contains('flex-project')) {
            console.dir(event.target.children);
            event.target.children[3].classList.add("showTechnologies");
            event.target.children[4].classList.remove("displayOnHover");
            setTimeout(() => {
                event.target.children[4].classList.add("displayOnHover");
            }, 12000);
        }
    }
    const hideTechs = event => {
        // console.dir(event.target);
        if(event.target.classList.contains('flex-project')) {
            // console.dir(event.target.children[3]);
            event.target.children[3].classList.remove("showTechnologies");
        }
    }
    return (
        <div className="flex-project" onMouseEnter={displayTechs} onMouseLeave={hideTechs}>
            <h3>{props.projecttitle}</h3>
            <div className="flex-image">
                <img src={props.imagepath} alt={props.imagealt}/>
            </div>
            <div className="flex-row-links">
                <a href={props.githubrepo}>GitHub Repository</a>
                <a href={props.livelink}>Live Application</a>
            </div>
            <TechnologyList techList={props.techList} />
            <div className='project-description displayOnHover'>{props.projectDescription}</div>
        </div>
    )
}

export default Project