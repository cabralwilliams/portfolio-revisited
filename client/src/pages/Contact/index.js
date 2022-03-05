import React from 'react'

function Contact() {
    //Function provides form validation information - it will create a message if the onBlur event is triggered on any of the fields and the proper format is not satisfied
    //The error message will display until that error is fixed or a new error is made
    function validateInfo(event) {
        if(event.target.getAttribute('name') === 'email') {
            if(!/^([a-z0-9_.-]+)@([\da-z.-]+)\.([a-z.]{2,6})$/.test(event.target.value.trim())) {
                document.querySelector('#errorMessage').textContent = 'Invalid email address - please try again.';
            } else {
                document.querySelector('#errorMessage').textContent = '';
            }
        } else if(event.target.getAttribute('name') === 'contact-name' || event.target.getAttribute('name') === 'message') {
            if(!event.target.value.trim()) {
                document.querySelector('#errorMessage').textContent = 'Neither the name nor the message can be empty.';
            } else {
                document.querySelector('#errorMessage').textContent = '';
            }
        } else {
            document.querySelector('#errorMessage').textContent = '';
        }
    }
    return (
        <div className="flex-row row-to-column" id="contact">
            <h2 className="flex-title">Contact</h2>
            <form className="flex-column-start-left" id="flex-contact">
                <div>
                    <label htmlFor="contact-name">Name: </label>
                    <input type="text" name="contact-name" placeholder="Your Name" className="width300" onBlur={validateInfo} required/>
                </div>
                <div>
                    <label htmlFor="email">Email: </label>
                    <input type="email" name="email" placeholder="Your Email" className="width300" onBlur={validateInfo} required/>
                </div>
                <div>
                    <label htmlFor="message">Message: </label>
                    <textarea name="message" placeholder="There is no spoon..." className="width300" onBlur={validateInfo} required></textarea>
                </div>
                <div id="errorMessage" className="red-pill-font"></div>
                <div>
                    <button type="submit">Submit</button>
                </div>
            </form>
        </div>
    )
}

export default Contact