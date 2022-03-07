import React, { useState } from 'react';
import { useMutation } from '@apollo/client';
import { SEND_MESSAGE } from '../../utils/mutations';

function Contact() {
    //Function provides form validation information - it will create a message if the onBlur event is triggered on any of the fields and the proper format is not satisfied
    //The error message will display until that error is fixed or a new error is made
    const [formState,setFormState] = useState({ sender_name: '', sender_email: '', message_text: ''})
    function validateInfo(event) {
        if(event.target.getAttribute('name') === 'sender_email') {
            if(!/^([a-z0-9_.-]+)@([\da-z.-]+)\.([a-z.]{2,6})$/.test(event.target.value.trim())) {
                document.querySelector('#errorMessage').textContent = 'Invalid email address - please try again.';
                setTimeout(() => {
                    document.querySelector('#errorMessage').textContent = '';
                }, 4000);
            } else {
                document.querySelector('#errorMessage').textContent = '';
            }
        } else if(event.target.getAttribute('name') === 'sender_name' || event.target.getAttribute('name') === 'message_text') {
            if(!event.target.value.trim()) {
                document.querySelector('#errorMessage').textContent = 'Neither the name nor the message can be empty.';
                setTimeout(() => {
                    document.querySelector('#errorMessage').textContent = '';
                }, 4000);
            } else {
                document.querySelector('#errorMessage').textContent = '';
            }
        } else {
            document.querySelector('#errorMessage').textContent = '';
        }
    }
    const [sendMessage] = useMutation(SEND_MESSAGE);

    const handleFormChange = event => {
        event.preventDefault();
        const { name, value } = event.target;

        setFormState({
            ...formState,
            [name]: value
        });
    }

    const handleFormSubmit = async event => {
        event.preventDefault();
        if(!formState.sender_email.match(/^([a-z0-9_.-]+)@([\da-z.-]+)\.([a-z.]{2,6})$/) || !formState.sender_name || !formState.message_text) {
            return;
        }
        const mutationResponse = await sendMessage({
            variables: { ...formState }
        });
        // console.log(mutationResponse);
        window.location.replace('/success');
    }

    return (
        <div className="flex-row row-to-column" id="contact" onSubmit={handleFormSubmit}>
            <h2 className="flex-title">Contact</h2>
            <form className="flex-column align-items-start margin-bottom-tiny margin-top-tiny bgColor8 raised-panel" id="flex-contact">
                <div className="flex-column align-items-start margin-bottom-tiny">
                    <label htmlFor="sender_name">Name: </label>
                    <input type="text" name="sender_name" id='sender_name' placeholder="Your Name" className="width300" required onChange={handleFormChange} onBlur={validateInfo}/>
                </div>
                <div className="flex-column align-items-start margin-bottom-tiny">
                    <label htmlFor="sender_email">Email: </label>
                    <input type="email" name="sender_email" id='sender_email' placeholder="Your Email" className="width300" required onChange={handleFormChange} onBlur={validateInfo}/>
                </div>
                <div className="flex-column align-items-start margin-bottom-tiny">
                    <label htmlFor="message_text">Message: </label>
                    <textarea name="message_text" id='message_text' placeholder="There is no spoon..." className="width300" required onChange={handleFormChange} onBlur={validateInfo}></textarea>
                </div>
                <div id="errorMessage" className="red-pill-font margin-bottom-tiny"></div>
                <button type="submit" className='site-btn-1'>Submit</button>
            </form>
        </div>
    )
}

export default Contact