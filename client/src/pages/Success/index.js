import React from 'react'

function Success() {
    setTimeout(() => {
        window.location.replace('/about');
    }, 4000);
    return (
        <div className='flex-column align-items-center'>
            <h2 className='flex-title'>Success!</h2>
            <p className='p-60'>Your message has been successfully submitted.  You will be redirected shortly.</p>
        </div>
    )
}

export default Success