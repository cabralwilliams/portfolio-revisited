import React, { useState } from 'react';
import { useMutation } from '@apollo/client';
import { CREATE_USER, LOGIN_USER } from '../../utils/mutations';
import auth from '../../utils/auth';
import { useDispatch, useSelector } from 'react-redux';
import { SET_USER } from '../../utils/actions';

function Login() {
    const [signUp,setSignUp] = useState({ first_name: '', last_name: '', signUpUsername: '', signUpEmail: '', signUpPassword: ''});
    const [signIn,setSignIn] = useState({ signInUsername: '', signInPassword: ''});
    const state = useSelector(state => {
        return { isLoggedIn: state.isLoggedIn, user: state.user };
    });

    // console.log(state);
    const dispatch = useDispatch();

    const [createUser] = useMutation(CREATE_USER);
    const [login] = useMutation(LOGIN_USER);

    const handleSignUpChange = event => {
        const { name, value } = event.target;
        setSignUp({
            ...signUp,
            [name]: value
        });
    }

    const handleSignInChange = event => {
        const { name, value } = event.target;
        setSignIn({
            ...signIn,
            [name]: value
        });
    }

    const handleUserCreate = async event => {
        event.preventDefault();
        try {
            const newOb = { username: signUp.signUpUsername, email: signUp.signUpEmail, password: signUp.signUpPassword, first_name: signUp.first_name, last_name: signUp.last_name };
            // const mutationResponse = await createUser({
            //     variables: { username: signUp.signUpUsername, email: signUp.signUpEmail, password: signUp.signUpPassword, first_name: signUp.first_name, last_name:signUp.last_name }
            // });
            const mutationResponse = await createUser({
                variables: { ...newOb }
            });
            // console.log("Line 44");
            // console.log(mutationResponse);
            dispatch({
                type: SET_USER,
                user: mutationResponse.data.createUser.user,
                isLoggedIn: true
            });
            const token = mutationResponse.data.createUser.token;
            auth.login(token);
        } catch(err) {
            console.log(err);
        }
    }

    const handleUserLogin = async event => {
        event.preventDefault();
        try {
            const mutationResponse = await login({
                variables: { username: signIn.signInUsername, password: signIn.signInPassword }
            });
            // console.log(mutationResponse);
            dispatch({
                type: SET_USER,
                user: mutationResponse.data.login.user,
                isLoggedIn: true
            });
            const token = mutationResponse.data.login.token;
            auth.login(token);
        } catch(err) {
            console.log(err);
        }
    }

    return (
        <div>
            <form id='signUpForm' onSubmit={handleUserCreate} className='flex-column align-items-center'>
                <h3>Sign Up</h3>
                <div className='flex-column align-items-start'>
                    <label htmlFor='first_name'>First Name:</label>
                    <input type='text' id='first_name' name='first_name' onChange={handleSignUpChange} />
                </div>
                <div className='flex-column align-items-start'>
                    <label htmlFor='last_name'>Last Name:</label>
                    <input type='text' id='last_name' name='last_name' onChange={handleSignUpChange} />
                </div>
                <div className='flex-column align-items-start'>
                    <label htmlFor='signUpUsername'>Username:</label>
                    <input type='text' id='signUpUsername' name='signUpUsername' onChange={handleSignUpChange} />
                </div>
                <div className='flex-column align-items-start'>
                    <label htmlFor='signUpEmail'>Email:</label>
                    <input type='text' id='signUpEmail' name='signUpEmail' onChange={handleSignUpChange} />
                </div>
                <div className='flex-column align-items-start'>
                    <label htmlFor='signUpPassword'>Password:</label>
                    <input type='password' id='signUpPassword' name='signUpPassword' onChange={handleSignUpChange} />
                </div>
                <button type='submit'>Submit</button>
            </form>

            <form id='signInForm' onSubmit={handleUserLogin} className='flex-column align-items-center'>
                <h3>Sign In</h3>
                <div className='flex-column align-items-start'>
                    <label htmlFor='signInUsername'>Username or Email:</label>
                    <input type='text' id='signInUsername' name='signInUsername' onChange={handleSignInChange} />
                </div>
                <div className='flex-column align-items-start'>
                    <label htmlFor='signInPassword'>Password:</label>
                    <input type='password' id='signInPassword' name='signInPassword' onChange={handleSignInChange} />
                </div>
                <button type='submit'>Submit</button>
            </form>
        </div>
    )
}

export default Login;