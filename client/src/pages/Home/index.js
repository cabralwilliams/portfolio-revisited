import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import CitySceneSplash from '../../components/CitySceneSplash';

function Home() {
    const state = useSelector(state => {
        return { user: state.user, isLoggedIn: state.isLoggedIn };
    });

    console.log(state);
    return (
        <CitySceneSplash />
    )
}

export default Home