import React, { useState } from 'react'

function MessageDisplay({ sender_name, created_at, sender_email, message_text, has_been_read, _id }) {
    //The message will by default be collapsed and must be opened with a button click
    const [areViewing, setAreViewing] = useState(false);

    const toggleView = event => {
        event.preventDefault();
        const { target } = event;
        if(target.matches('button')) {
            if(target.classList.contains('toggleView')) {
                setAreViewing(!areViewing);
            }
        }
    }

    if(areViewing) {
        return(
            <div className='flex-column'>
                <div className='flex-row'>
                    <div>From: {sender_name} ({sender_email})</div>
                    <div>Date: {created_at}</div>
                    <div>Status: {has_been_read ? "Read" : "Unread"}</div>
                    <button className='toggleView' onClick={toggleView}>Close Message</button>
                    <button>Mark Unread</button>
                </div>
                <p>{message_text}</p>
            </div>
        )
    } else {
        return(
            <div className='flex-row'>
                <div>From: {sender_name} ({sender_email})</div>
                <div>Date: {created_at}</div>
                <div>Status: {has_been_read ? "Read" : "Unread"}</div>
                <button className='toggleView' onClick={toggleView}>Open Message</button>
            </div>
        )
    }
}

export default MessageDisplay