import React from 'react';
import Project from '../../components/Project';

function Portfolio() {
    const projects = [
        {
            imagealt: 'The Missing One landing page',
            projecttitle: 'The Missing One',
            githubrepo: 'https://github.com/cabralwilliams/the-missing-one',
            livelink: 'https://lit-scrubland-68499.herokuapp.com/',
            techList: ["React","Express","MongoDB","Node.js","GraphQL","Redux"]
        },
        {
            imagealt: 'Tech Ticket System landing page',
            projecttitle: 'Tech Ticket System',
            githubrepo: 'https://github.com/rprice000/tech_ticket_system',
            livelink: 'https://secure-tundra-62908.herokuapp.com/',
            techList: ["Express","Node.js","MySQL","Handlebars"]
        },
        {
            imagealt: 'Fictionalized Julius Caesar message board discussion',
            projecttitle: 'What Is On Your Mind?!?',
            githubrepo: 'https://github.com/cabralwilliams/what-is-on-your-mind',
            livelink: 'https://quiet-woodland-72442.herokuapp.com/',
            techList: ["Express","Node.js","MySQL","Handlebars"]
        },
        {
            imagealt: 'Progressive web application to track a budget',
            projecttitle: 'Over-Under',
            githubrepo: 'https://github.com/cabralwilliams/over-under',
            livelink: 'https://peaceful-reaches-93634.herokuapp.com/',
            techList: ["Express","Node.js","MongoDB"]
        },
        {
            imagealt: 'Featured display of an important event in history that occurred today',
            projecttitle: 'Discover History',
            githubrepo: 'https://github.com/cabralwilliams/discover-history',
            livelink: 'https://cabralwilliams.github.io/discover-history/',
            techList: ["JavaScript","jQuery","Foundation","API"]
        },
        {
            imagealt: 'Is it really always sunny in Philadelphia?',
            projecttitle: 'Weather Dashboard',
            githubrepo: 'https://github.com/cabralwilliams/weather-dashboard',
            livelink: 'https://cabralwilliams.github.io/weather-dashboard/',
            techList: ["JavaScript","Bootstrap","API"]
        },
        {
            imagealt: 'Landing page view with links to learn some things math',
            projecttitle: 'Some Things Math',
            githubrepo: 'https://github.com/cabralwilliams/some-things-math',
            livelink: 'https://cabralwilliams.github.io/some-things-math/',
            techList: ["JavaScript","CSS","HTML"]
        },
        {
            imagealt: 'Page to enter a comment on a post',
            projecttitle: 'Python Social',
            githubrepo: 'https://github.com/cabralwilliams/python-social',
            livelink: 'https://slithering-python-social-7.herokuapp.com/',
            techList: ["Python","Flask","MySQL","Jinja"]
        }
    ];
    return (
        <div className="flex-row row-to-column" id="portfolio">
            <h2 className="flex-title">Portfolio</h2>
            <div className="flex-row flex-content space-evenly">
                {projects.map((project, i) => (
                    <Project key={i} imagepath={require(`../../assets/images/${i}.jpg`)} {...project} />
                ))}
            </div>
        </div>
    )
}

export default Portfolio;