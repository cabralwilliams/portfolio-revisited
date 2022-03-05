import React from 'react'

function TechnologyList({ techList }) {
    return (
        <ul className='displayOnHover'>
            {techList.map((tech, i) => <li key={i}>{tech}</li>)}
        </ul>
    )
}

export default TechnologyList;