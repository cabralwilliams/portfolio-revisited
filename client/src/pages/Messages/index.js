import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useQuery } from '@apollo/client';
import { QUERY_ME } from '../../utils/queries';
import auth from '../../utils/auth';
import MessageDisplay from '../../components/MessageDisplay';

function Messages() {
    const state = useSelector(state => {
        return { user: state.user, isLoggedIn: state.isLoggedIn }
    });
    // console.log(state);
    const dispatch = useDispatch();

    const token = auth.loggedIn() ? auth.getToken() : null;

    if(!token) {
        window.location.replace('/login');
    }

    const { loading, data } = useQuery(QUERY_ME);

    const user = data?.me || {};
    // console.log(data);

    if(loading) {
        return <div><h3>Messages are loading...</h3></div>
    }
    return (
        <div>
            <h3>See Your Messages Below</h3>
            <div className='flex-column'>
                {user.inbox.map((message, i) => {
                    return <MessageDisplay key={i} { ...message } />
                })}
            </div>
        </div>
    )
}

export default Messages