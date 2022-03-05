import React from 'react'
import { useDispatch, useSelector } from 'react-redux';

function Home() {
    const state = useSelector(state => {
        return { user: state.user, isLoggedIn: state.isLoggedIn };
    });

    console.log(state);
    return (
        <div>This is a placeholder.</div>
    )
}

export default Home