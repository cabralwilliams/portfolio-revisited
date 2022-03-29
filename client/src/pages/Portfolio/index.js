import React from 'react';
import Project from '../../components/Project';

function Portfolio() {
    const projects = [
        {
            imagealt: 'The Missing One landing page',
            projecttitle: 'The Missing One',
            githubrepo: 'https://github.com/cabralwilliams/the-missing-one',
            livelink: 'https://lit-scrubland-68499.herokuapp.com/',
            techList: ["React","Express","MongoDB","Node.js","GraphQL","Redux"],
            projectDescription: "A proposed social media application where members can quickly share information about a missing person in the critical first hours of the disappearance"
        },
        {
            imagealt: 'Tech Ticket System landing page',
            projecttitle: 'Tech Ticket System',
            githubrepo: 'https://github.com/rprice000/tech_ticket_system',
            livelink: 'https://secure-tundra-62908.herokuapp.com/',
            techList: ["Express","Node.js","MySQL","Handlebars"],
            projectDescription: "A hypothetical application in which a user can act as administrator (create, update, close, assign workers) for a tech issue - email updating for involved parties is enabled"
        },
        {
            imagealt: 'Fictionalized Julius Caesar message board discussion',
            projecttitle: 'What Is On Your Mind?!?',
            githubrepo: 'https://github.com/cabralwilliams/what-is-on-your-mind',
            livelink: 'https://quiet-woodland-72442.herokuapp.com/',
            techList: ["Express","Node.js","MySQL","Handlebars"],
            projectDescription: "A social media application where users can create and manage thoughts of their own and comment on the thoughts of others"
        },
        {
            imagealt: 'Progressive web application to track a budget',
            projecttitle: 'Over-Under',
            githubrepo: 'https://github.com/cabralwilliams/over-under',
            livelink: 'https://peaceful-reaches-93634.herokuapp.com/',
            techList: ["Express","Node.js","MongoDB"],
            projectDescription: "A progressive web application that allows the user to track his/her budget - transactions are enabled when user is offline"
        },
        {
            imagealt: 'Featured display of an important event in history that occurred today',
            projecttitle: 'Discover History',
            githubrepo: 'https://github.com/cabralwilliams/discover-history',
            livelink: 'https://cabralwilliams.github.io/discover-history/',
            techList: ["JavaScript","jQuery","Foundation","API"],
            projectDescription: "A history search API that allows users to explore print and visual media related to historically significant events and save searched items for later"
        },
        {
            imagealt: 'Is it really always sunny in Philadelphia?',
            projecttitle: 'Weather Dashboard',
            githubrepo: 'https://github.com/cabralwilliams/weather-dashboard',
            livelink: 'https://cabralwilliams.github.io/weather-dashboard/',
            techList: ["JavaScript","Bootstrap","API"],
            projectDescription: "A weather search application that allows users to search the weather by city and retain a record of searched cities"
        },
        {
            imagealt: 'Landing page view with links to learn some things math',
            projecttitle: 'Some Things Math',
            githubrepo: 'https://github.com/cabralwilliams/some-things-math',
            livelink: 'https://cabralwilliams.github.io/some-things-math/',
            techList: ["JavaScript","CSS","HTML"],
            projectDescription: "An application that explains certain mathematical properties to the user with images and provides practice problems with solutions"
        },
        {
            imagealt: 'Page to enter a comment on a post',
            projecttitle: 'Python Social',
            githubrepo: 'https://github.com/cabralwilliams/python-social',
            livelink: 'https://slithering-python-social-7.herokuapp.com/',
            techList: ["Python","Flask","MySQL","Jinja"],
            projectDescription: "A social media application where users can create and manage thoughts of their own and comment on the thoughts of others"
        },
        {
            imagealt: 'Linear Regression of Wayne Gretzky\'s NHL Goals',
            projecttitle: 'Java Data Tracker',
            githubrepo: 'https://github.com/cabralwilliams/java-data-tracker',
            livelink: 'http://java-data-tracker-1.herokuapp.com/',
            techList: ["Java", "Spring Boot", "Thymeleaf", "MySQL"],
            projectDescription: "A data storage/processing application that allows users to store certain types of datasets and have certain data analyses performed on those sets"
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